import {useRef} from 'react'
import './login.css'
import swal from "sweetalert2"
function Register() {
  let email = useRef();
  let userName = useRef();
  let password = useRef();
  let cPassword = useRef();
  
  async function handleClick(e){
    e.preventDefault();
    let res = await fetch('/users/register', {
      method: 'POST',
      body: JSON.stringify({
       email:email.current.value,
       password:password.current.value,
       cPassword:cPassword.current.value,
       userName:userName.current.value

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      })
      let data = await res.json();
            if(res.ok){
              swal.fire({
                
                icon:"success",
                title:`Welcome ${data.userName}`,
                text: `Your registration is successfull with email-id ${data.email}`,
                confirmButtonColor: '#1775ee',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                },
                }).then((result)=>{
                  window.location.href='/login'
                })
           
            }else{
            
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
            <div className="loginBox">
            <input className='loginInput' ref={userName} type='email' placeholder='name' />
            <input className='loginInput' ref={email}  type='email' placeholder='E mail' />
            <input className='loginInput' ref={password} type='password' placeholder='Password' />
            <input className='loginInput' ref={cPassword} type='password' placeholder='confirm password' />
            <button type='submit' onClick={handleClick} className='loginButton'>Sign UP</button>
            <span className="loginForgot">Already have an account?</span>
            
            <button className="loginRegisterButton">login</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
