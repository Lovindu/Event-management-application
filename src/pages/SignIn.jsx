import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import google from '../assets/google.png';

const SignIn = () => {
  

  return (
    <div className='login-container'>
        <div className='login'>
        {/* <img src={Logo} alt="logo" /> */}
        <center><h1>Sign In</h1></center>

        <div className='login-form'>
          <p>Email</p>
          <input type="email" placeholder='Enter your email' name='email'/>

          <p>Password</p>
          <div>
            <input type="password" placeholder='Enter your password' name='password'/>
          </div>

          <p>Re-enter password</p>
          <input type="password" placeholder='Re-enter your password'/>

        </div>

        <div className='show-password'>
            <input type="checkbox" name='showpw' id='showpw'/>
            <label htmlFor="showpw">Show password</label>
        </div>

        <button className='login-button'>Sign In</button>

        <br />

        <button className='login-with-google'>Sign In with Google <img className='login-google' src={google} alt="google logo" /></button>
        </div>
    </div>
  )
}

export default SignIn