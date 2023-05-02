import React from 'react'
import "./rightbar.css";
import{users }from '../../dummyData'
import Online from '../online/Online';




function HomeRightBar({profile}){
  
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


function  ProfileRightBar(){
  return(
 <>
 <h4 className='rightBarTitle' >User information </h4>

 <div className="rightBarInfo">
  <span className="rightBarInfoKey">city: </span>
  <span className="rightBarInfoValue">NewYork </span>
 </div>
 <div className="rightBarInfo">
  <span className="rightBarInfoKey">From: </span>
  <span className="rightBarInfoValue">Kerala </span>
 </div>
 <div className="rightBarInfo">
  <span className="rightBarInfoKey">Relationship: </span>
  <span className="rightBarInfoValue">single </span>
 </div>
 <h4 className="rightBarTitle">User Friends</h4>
 <div className="rightBarFollowings">

  <div className="rightBarFollowing">
    <img src="https://i.pinimg.com/originals/3e/fd/7b/3efd7b3dbe7dbc36b0cd692d21665202.jpg" alt="" className="rightBarFollowingImg" />
    <span className="rightBarFollowingName">John carter</span>
  </div>
  <div className="rightBarFollowing">
    <img src="https://i.pinimg.com/originals/3e/fd/7b/3efd7b3dbe7dbc36b0cd692d21665202.jpg" alt="" className="rightBarFollowingImg" />
    <span className="rightBarFollowingName">John carter</span>
  </div>
  <div className="rightBarFollowing">
    <img src="https://i.pinimg.com/originals/3e/fd/7b/3efd7b3dbe7dbc36b0cd692d21665202.jpg" alt="" className="rightBarFollowingImg" />
    <span className="rightBarFollowingName">John carter</span>
  </div>
  <div className="rightBarFollowing">
    <img src="https://i.pinimg.com/originals/3e/fd/7b/3efd7b3dbe7dbc36b0cd692d21665202.jpg" alt="" className="rightBarFollowingImg" />
    <span className="rightBarFollowingName">John carter</span>
  </div>
 
 
 </div>
 </>


  )
}






function Rightbar() {



  return (
    <div className='rightBar' >
      <div className="rightBarWrapper">
      
      <ProfileRightBar/>
      

      </div>
    </div>
  )
}

export default Rightbar
