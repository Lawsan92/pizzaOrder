import React, { useState } from 'react';
import NavBar from './NavBar';

const Login = ({ login, getUserCred, user, token }) => {

  return (
    <div id='login'>
      <NavBar user={user} token={token}/>
      <h2>LOGIN</h2>
      <form className='login-form'>
        <h3>username</h3>
        <input type='text' onChange={(e) => {getUserCred({...user, username: e.target.value})}}></input>
        <h3>password</h3>
        <input type='text' onChange={(e) => {getUserCred({...user, password: e.target.value})}}></input>
      </form>
      <button className='login-button' onClick={() => {login (true)}}>Login</button>
    </div>
  );
}

export default Login;