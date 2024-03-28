import axios from "axios";
import React, {useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Show() {
        const [users, setUsers] = useState([])

        async function fetchData()
        {
            let result = await axios.get('http://localhost:8000/v1/posts/');
            setUsers(result.data);
        }

        useEffect(()=>{fetchData()}, [])

        return(
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ROLL</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((obj)=>{
                                return(
                                    <tr>
                                        <td>{obj.roll}</td>
                                        <td>{obj.fname}</td>
                                        <td>{obj.lname}</td>
                                        <td>
                                            <NavLink to={`/user/update/${obj.id}`}><button className="btn btn-warning btn-sm me-3">UPDATE</button></NavLink>
                                            <NavLink to={`/user/delete/${obj.id}`}><button className="btn btn-danger btn-sm ">DELETE</button></NavLink>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </>
        )
}

export default Show;