import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import google from '../assets/google.png';
import { firebaseConfig, auth } from '../firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);

      const user = firebase.auth().currentUser;
      sessionStorage.setItem('userEmail', email);
    } catch (error) {
      setError(error.message);
    }
  }

  console.log(error)

  return (
    <div className='login-container'>
      <div className='login'>
        {/* <img src={Logo} alt="logo" /> */}
        <center><h1>Login</h1></center>

        <div className='login-form'>
          <p>Email</p>
          <input type="email" placeholder='Enter your email' name='email' onChange={(e) => {setEmail(e.target.value)}}/>

          <p>Password</p>
          <div>
            <input type="password" placeholder='Enter your password' name='password' onChange={(e) => {setPassword(e.target.value)}}/>
          </div>

          <div className='login-links'>
            <a href=""><Link>Don't have an account?</Link></a>
            <a href=""><Link>Forgot password?</Link></a>
          </div>
        </div>

        <button className='login-button' onClick={handleLogin}>Login</button>

        <br />

        <button className='login-with-google'>Login with Google <img className='login-google' src={google} alt="google logo" /></button>
      </div>
    </div>
  )
}

export default Login