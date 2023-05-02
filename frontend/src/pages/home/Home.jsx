import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./home.css"
function Home() {
  return (
    <div>
     <div className="homeContainer">
     <Sidebar/>
     <Feed/>
     <Rightbar/>
     </div>
    </div>
  )
}

export default Home
