import React from 'react'
import './login.css'
function Register() {
  return (
    <div  className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Mini FaceBook</h3>
            <span className="loginDesc">connect with friends and the world around you with mini facebook.</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
            <input className='loginInput' type='email' placeholder='name' />
            <input className='loginInput' type='email' placeholder='E mail' />
            <input className='loginInput' type='password' placeholder='Password' />
            <input className='loginInput' type='password' placeholder='confirm password' />
            <button className='loginButton'>Sign UP</button>
            <span className="loginForgot">Already have an account?</span>
            
            <button className="loginRegisterButton">login</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
