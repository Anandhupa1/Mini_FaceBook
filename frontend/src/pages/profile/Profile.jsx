import React, { useEffect,useState } from 'react'
import './profile.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar';
import axios from 'axios';

function Profile() {
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







  return (
    <>
    <Topbar/>
    <div className="homeContainer">
     <Sidebar/>
   
     <div className="profileRight">
     <div className="profileRightTop">
      <div className="profileCover">
     <img src={user.coverPic} alt="" className="profileCoverImg" />
     <img src={user.profilePic} alt="" className="profileUserImg" />
     </div>
     <div className="profileInfo">
      <h4 className='profileInfoName' >{user.userName}</h4>
      <p className="profileInfoDesc">{user.description?user.description:""}</p>
     </div>
     </div>
     <div className="profileRightBottom">
     <Feed userName="john" />
     <Rightbar  user={user} />
     </div>
     </div>
     </div>
    </>
  )
}

export default Profile
