import React from 'react'
import "./rightbar.css";
import{users }from '../../dummyData'
import Online from '../online/Online';
import Home from '../../pages/home/Home';
import { useState,useEffect } from 'react';
import axios from "axios";



function Rightbar({page}) {
  const [user,setUser]=useState({});
 
  useEffect(()=>{
    const fetchUser=async()=>{
     const res = await axios.get("http://localhost:8500/users/63ffb05dd9fb615aab3cfef2");
     //console.log(res)
     setUser(res.data)
    }
    fetchUser();
    //console.log(user,"user")
  
  },[])
  

return(
  <div className='rightBar' >
    <div className="rightBarWrapper">
    
   {page!="home"?<ProfileRightBar user={user}  />:  < HomeRightBar user = {user} />}
    

    </div>
  </div>





)





 
}

function HomeRightBar({user}){
  
  return (
    <>
    <div className="birthDayContainer">
        <img src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/gift.png?raw=true" alt="" className="birthDayImg" />
        <span className="bithDayText"><b>priyanka </b> and <b>3 other friends </b> have birthday today</span>
      </div>
      <div>
        <img src="https://miro.medium.com/v2/resize:fit:1080/1*1lpknH8EtyPqDQtSshTM7Q.jpeg" alt="" className="rightBarAdd" />
        <h4 className='rightBarTitle'>Online Friends</h4>
        <ul className='rightBarFriendList' >

         {users.map(u=>{
          return <Online user={u} />
         })}

        </ul>
      </div>
      
    </>
  )
}


function  ProfileRightBar({user}){
 // console.log(user,"user")
  return(
 <>
 <h4 className='rightBarTitle' >User information </h4>

 <div className="rightBarInfo">
  <span className="rightBarInfoKey">city:</span>
  <span className="rightBarInfoValue">{user.city}  </span>
 </div>
 <div className="rightBarInfo">
  <span className="rightBarInfoKey">email: </span>
  <span className="rightBarInfoValue">{user.email} </span>
 </div>
 <div className="rightBarInfo">
  <span className="rightBarInfoKey">Relationship: </span>
  <span className="rightBarInfoValue">{user.relationship?user.relationship:"not set"} </span>
 </div>
 <h4 className="rightBarTitle">User Friends</h4>
 <div className="rightBarFollowings">

  <div className="rightBarFollowing">
    <img src="https://i.pinimg.com/originals/3e/fd/7b/3efd7b3dbe7dbc36b0cd692d21665202.jpg" alt="" className="rightBarFollowingImg" />
    <span className="rightBarFollowingName">John carter</span>
  </div>
  
 
 
 </div>
 </>


  )
}






export default Rightbar
