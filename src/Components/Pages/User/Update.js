import axios from 'axios';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function Update(){
    const {register, handleSubmit, setValue} = useForm();

    const {userId} = useParams();

    const navi = useNavigate();

    async function fetchUser()
    {
        const result = await axios.get(`http://localhost:5000/user/${userId}/`);
        setValue('roll', result.data.roll);
        setValue('fname', result.data.fname);
        setValue('lname', result.data.lname);
    }

    function saveData(data)
    {
        axios.put(`http://localhost:8000/v1/posts/${userId}/`,data)
        navi('/user/show');
    }

    useEffect(()=>{fetchUser()}, [])
    return(
        <>
        <center>
        <h1><u> Student Updation Form </u></h1>
            <div className='container mt-5'>
                <form onSubmit={handleSubmit(saveData)}>
                    <label htmlFor='r'><b>Enter Roll:</b></label>
                    <input type='number' id='r' className='form-control' 
                    {...register('roll')}/>
                    <br />
                    <br />
                    <label htmlFor='fn'><b>Enter First Name:</b></label>
                    <input type='text' id='fn' className='form-control' 
                    {...register('fname')}/>
                    <br />
                    <br />
                    <label htmlFor='ln'><b>Enter Last Name:</b></label>
                    <input type='text' id='ln' className='form-control' 
                    {...register('lname')}/>
                    <br />
                    <br />
                    <input type='submit' value='Update Student' className='btn btn-outline-success col-6 btn-lg'/>
                    <button type='reset' className='btn btn-outline-warning col-6 btn-lg'>RESET</button>
                </form>

            </div>
        </center>
        </>
    )

}

export default Update