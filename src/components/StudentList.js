import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

function StudentList() {
  const navigate = useNavigate();
  const headData=["Id","First Name","Last Name","Age","Gender","Email","Phone","Action"];
  const [user, setUser]=useState([])
  const getUser = () => {
    fetch(`https://63cf7c7f8a780ae6e677002e.mockapi.io/users`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setUser(result));
  };
  useEffect(() => getUser(), []);
 return (
    <div className='container'>
    <h1>Users</h1>
    <div className='tab'>
    <table>
    <thead>
      {headData.map((element, index)=>{
        return <th key={index}>{element}</th> 
      })}
    </thead>
    <tbody>
    {user.map((element,index)=>{
           return ( 
        <tr key={index}
        id={element.id} >
        <td>{element.id}</td>
        <td>{element.firstname}</td>
        <td>{element.lastname}</td>
        <td>{element.age}</td>
        <td>{element.gender}</td>
        <td>{element.email}</td>
        <td>{element.phone}</td>
        <td><Button
        onClick={() => {
          navigate(`/users/edit/${element.id}`);
        }}
        >
          <EditIcon/>
        </Button>
        <Button 
        onClick={() => {
          alert("Are you sure you want to delete");
          fetch(`https://63cf7c7f8a780ae6e677002e.mockapi.io/users/${element.id}`,{
            method: 'DELETE'
          }).then(()=>getUser());
        }}
        >
            <DeleteIcon color='error'/>
        </Button></td>
      </tr>
    
      );
    })}
    </tbody>
    </table>
    </div>
    </div>
  )
}
export default StudentList