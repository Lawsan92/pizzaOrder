import React, { useState } from 'react';
import NavBar from './NavBar';

const Login = ({ login, getUserCred, user, token }) => {

  const validPassword = () => {
    // const password = user.password;
    // const [lowerAlpha, upperAlpha, nums, chars ] =
    // ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', "01234567890", '!@#$%^&*()'];
    // let [check1, check2, check3, check4] = [0, 0, 0, 0];
    // for (let char of password) {
    //   if (lowerAlpha.indexOf(char) > - 1) {
    //     check1 ++;
    //   }
    //   if (upperAlpha.indexOf(char) > - 1) {
    //     check2 ++;
    //   }
    //   if (nums.indexOf(char) > - 1) {
    //     check3 ++;
    //   }
    //   if (chars.indexOf(char) > - 1) {
    //     check4 ++;
    //   }
    // }
    // if (check1 && check2 && check3 && check4) {
    //   login (true)
    // } else {
    //   alert ('Invalid Password...check console');
    //   console.log(` needs:
    //      a lower-cased letter
    //      an upper-cased letter
    //      an integer
    //      a special character: ${chars}
    //   `);
    // }
    login (true)
  }

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
      <button className='login-button' onClick={() => {validPassword ()}}>Login</button>
    </div>
  );
}

export default Login;