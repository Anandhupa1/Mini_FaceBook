import React from 'react'
import './login.css'
function Login() {
  return (
    <div  className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Mini FaceBook</h3>
            <span className="loginDesc">connect with friends and the world around you with mini facebook.</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
            <input className='loginInput' type='email' placeholder='E mail' />
            <input className='loginInput' type='password' placeholder='Password' />
            <button className='loginButton'>Login</button>
            <span className="loginForgot">Forgot password?</span>
            
            <button className="loginRegisterButton">create a new account</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
