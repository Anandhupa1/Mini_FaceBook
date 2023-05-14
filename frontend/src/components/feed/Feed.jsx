import React from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import { useEffect ,useState} from 'react'
import axios from 'axios';



function Feed({userName}) {
if(!sessionStorage.getItem("authToken")){window.location.href="/login"}
const [posts,setPosts]=useState([]);

useEffect(()=>{
  const fetchTimeline=async()=>{
   const res = userName?await axios.get(`http://localhost:8500/posts/myPosts/${sessionStorage.getItem("userId")}`)      : await axios.get(`http://localhost:8500/posts/timeline/${sessionStorage.getItem("userId")}`);
   //console.log(res)
   setPosts(res.data)
  }
  fetchTimeline()


},[])



 
  return (
    <div className='feed' >
      <div className="feedWrapper">
        <Share/>
        {posts.map((p)=>{
           return <Post key={p._id} post={p} />
        })}
        {/* <Post/> */}
      </div>
    </div>
  )
}

export default Feed
