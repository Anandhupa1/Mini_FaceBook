import React from 'react'
import './profile.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar';


function Profile() {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
     <Sidebar/>
   
     <div className="profileRight">
     <div className="profileRightTop">
      <div className="profileCover">
     <img src="https://i.pinimg.com/originals/30/5c/5a/305c5a457807ba421ed67495c93198d3.jpg" alt="" className="profileCoverImg" />
     <img src="https://i.pinimg.com/originals/3e/fd/7b/3efd7b3dbe7dbc36b0cd692d21665202.jpg" alt="" className="profileUserImg" />
     </div>
     <div className="profileInfo">
      <h4 className='profileInfoName' >Anandhu P A</h4>
      <p className="profileInfoDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, rerum?</p>
     </div>
     </div>
     <div className="profileRightBottom">
     <Feed/>
     <Rightbar profile />
     </div>
     </div>
     </div>
    </>
  )
}

export default Profile
