import React from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import { posts } from '../../dummyData'




function Feed() {
 
  return (
    <div className='feed' >
      <div className="feedWrapper">
        <Share/>
        {posts.map((p)=>{
           return <Post key={p.id} post={p} />
        })}
        {/* <Post/> */}
      </div>
    </div>
  )
}

export default Feed
