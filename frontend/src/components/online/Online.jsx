import React from 'react'
import './online.css'
function Online({user}) {
  return (
    <li className="rightBarFriend">
    <div className="rightBarProfileImgContainer">
      <img src={user.profilePic} alt="" className="rightBarProfileImg" />
      <span className="rightBarOnline"></span>
    </div>
    <span className="rightBarUserName">{user.userName}</span>
   </li>
  )
}

export default Online
