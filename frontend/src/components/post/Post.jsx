import {useEffect, useState} from 'react'
import { MdMoreVert,MdThumbUp,MdComment } from "react-icons/md";
import './post.css'
import axios from 'axios'
import { format, render, cancel, register } from 'timeago.js';
import {Link,NavLink} from 'react-router-dom'

function Post({post}) {
  
  const [like ,setLike] =useState(1);
  const [isLiked,setIsliked]=useState(false);
  const [user,setUser]=useState({});

  useEffect(()=>{
    const fetchUser=async()=>{
     const res = await axios.get(`http://localhost:8500/users/${post.userId}`)
     //console.log(res)
     setUser(res.data)
    }
    fetchUser()
  
  
  },[post.userId])






  const  likeHandler= ()=>{
   setLike(isLiked?like-1:like+1);
   setIsliked(!isLiked);
  }

  return (
    <div className='post' >
      <div className="postWrapper">
        <div className="postTop">
            <div className="topLeft">
                {/* <NavLink to={`profile/${user.userName}`} >
               
                </NavLink> */}
                <a href={`profile/${user.userName}`}>
                <img src={user.profilePic} alt="" className="postProfileImg" />
                </a>
                
                <span className="postUserName">
                
                {
                  // users.filter(u=>{return u.id==post.userId})[0].userName
                  user.userName
                }


                </span>
                <span className="postDate">{format(post.createdAt)}</span>
            </div>
            <div className="topRight">
            <MdMoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post.description}</span>
            <img src={post.image} alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <MdThumbUp className='postLike'  onClick={()=>{likeHandler()}} />
                <span className="likeCounter">{ post.likes.length} likes</span>
                
            </div>
            <div className="postBottomRight">
                <MdComment className='postComment' />
                <span className="postCommentText">8 comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
