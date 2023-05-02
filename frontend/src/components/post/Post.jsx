import {useState} from 'react'
import { MdMoreVert,MdThumbUp,MdComment } from "react-icons/md";
import './post.css'
import { users } from '../../dummyData';

function Post({post}) {
  
  const [like ,setLike] =useState(1);
  const [isLiked,setIsliked]=useState(false);
  const  likeHandler= ()=>{
   setLike(isLiked?like-1:like+1);
   setIsliked(!isLiked);
  }

  return (
    <div className='post' >
      <div className="postWrapper">
        <div className="postTop">
            <div className="topLeft">
                <img src={users.filter(u=>{return u.id==post.userId})[0].profilePic} alt="" className="postProfileImg" />
                <span className="postUserName">
                {/* username here */}
                {
                  users.filter(u=>{return u.id==post.userId})[0].userName
                }


                </span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="topRight">
            <MdMoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey its my first post</span>
            <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <MdThumbUp className='postLike'  onClick={()=>{likeHandler()}} />
                <span className="likeCounter">{like} likes</span>
                
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
