import {useRef} from 'react'
import './login.css';
import axios from "axios";
import swal from "sweetalert2";
 function Login() {
  const email = useRef();
  const password = useRef();


  async function handleClick(e){
    e.preventDefault();
    
    let res = await fetch('/users/login', {
              method: 'POST',
              body: JSON.stringify({
               email:email.current.value,
               password:password.current.value
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
              })
    let data = await res.json();
    if(res.ok){
    sessionStorage.setItem("authToken",data.authToken);
    sessionStorage.setItem("refreshToken",data.refreshToken);
    swal.fire({
      
      icon:"success",
      text:data.message,
      confirmButtonColor: '#1775ee',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
    }).then(()=>{
      window.location.href="/"
    })
    }else{
      // swal.fire(data.error)
      swal.fire({
        position:"top-start",
        icon:"error",
        text:data.error,
        confirmButtonColor: '#1775ee',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
      })
      
    }
  }



  return (
    <div  className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Mini FaceBook</h3>
            <span className="loginDesc">connect with friends and the world around you with mini facebook.</span>
        </div>
        <div className="loginRight">
            <form  className="loginBox">
            <input className='loginInput' ref={email} type='email' placeholder='E mail' />
            <input minLength={4} className='loginInput' ref={password} type='password' placeholder='Password' />
            <button  onClick={handleClick} type='submit' className='loginButton'>Login</button>
            <span className="loginForgot">Forgot password?</span>
            
            <button onClick={(e)=>{ e.preventDefault();window.location.href='/register'}} className="loginRegisterButton">sign up</button>
            </form>
          
        </div>
      </div>
    </div>
  )
}

export default Login;
