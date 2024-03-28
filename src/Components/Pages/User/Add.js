import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
  const {register, handleSubmit} = useForm();

  const navi = useNavigate();

  function saveData(data)
  {
    axios.post('http://localhost:8000/v1/posts/', data);
    navi('/user/show');
  }
  return (
    <>
        <center>
            <h1><u> Student Registration Form </u></h1>
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
                    <input type='submit' value='Add Student' className='btn btn-outline-success col-6 btn-lg'/>
                    <button type='reset' className='btn btn-outline-warning col-6 btn-lg'>RESET</button>
                </form>

            </div>
        </center>
    </>
  )
}

export default Add