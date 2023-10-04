import React, { useState } from 'react';
import './Login.css';
import {Link} from 'react-router-dom'
function Login() {
  const [email, setEmail] = useState('email');
  const [password, setPassword] = useState('password')

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'example@example.com' && password === 'password123') {
      alert('Logged in successfully');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
  
   <div className='container'>
   
    <form onSubmit={handleSubmit}>
      <div className='input'>
        <div className='underline'>
      <h1>Login to your Account</h1></div></div>
      <div className='input'>
      <label>
        Email-Id:
        <input type='text' placeholder='Enter Email_Id' onChange={(event) => setEmail(event.target.value)} />
      </label></div>
      <div><label>
       
        Password:
        <input type='password' placeholder='Enter your password' onChange={(event) => setPassword(event.target.value)} />
      </label></div>
     <button type='submit'>Login</button>
     <Link to='/signup'>Don't have an account</Link>
    </form>
   
    
   </div>
   
  );
}

export default Login;
