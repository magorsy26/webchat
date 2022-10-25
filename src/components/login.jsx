import React, { Component } from 'react';
import './style/login.css';

export default function Login(){
    return(
        <div className='login'>
            <div className='form-group name'>
                <label>Name</label>
                <input className='form-control' type="text" id="login" />
            </div>
            <div>
                <button onClick={(e)=>login(e)} className='btn btn-primary btn-block'>Save</button>
            </div>
        </div>
    )
}

function login(e){
    e.preventDefault();
  let name=document.getElementById("login").value;
  if(name!==""){
    sessionStorage.setItem("name",name);
    window.location.href="http://127.0.0.1:3000";
  }
}