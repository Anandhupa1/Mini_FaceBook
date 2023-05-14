import React, { useEffect } from 'react'

import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./home.css"
import Topbar from '../../components/topbar/Topbar'
const baseUrl = "http://localhost:8500"
function Home() {

  if(!sessionStorage.getItem("authToken")){window.location.href='/login'}
  
  useEffect(()=>{
    (async function fetchUser(){
     
      let res = await fetch(`${baseUrl}/users/owner/data`,{
        method:"GET",
        headers:{
        'Content-type': 'application/json; charset=UTF-8',
        'authToken' : sessionStorage.getItem("authToken"),
        }
      });
      let data = await res.json();
      if(res.ok){
          
          sessionStorage.setItem("user",JSON.stringify(data));
          sessionStorage.setItem("userId",data._id);
      }else{
        window.location.href='/login'
      }
     
    })()
  })









  return (
    <div>
        <Topbar/>
     <div className="homeContainer">
   
     <Sidebar/>
     <Feed/>
     <Rightbar page="home" /> 
     
     </div>
    </div>
  )
}

export default Home
