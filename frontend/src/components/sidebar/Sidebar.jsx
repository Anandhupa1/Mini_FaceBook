import React from 'react'
import "./sidebar.css"
import { MdRssFeed,MdComment,MdOndemandVideo,MdGroups,MdBookmark,MdQuestionMark,MdOutlineCases,MdCalendarMonth, } from "react-icons/md";
function Sidebar() {
  return (
    <div className='sideBar' >
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem"><MdRssFeed className='sideBarIcon' />Feed</li>
          <li className="sideBarListItem"><MdComment className='sideBarIcon'/>Chats</li>
          <li className="sideBarListItem"><MdOndemandVideo className='sideBarIcon'/>Videos</li>
          <li className="sideBarListItem"><MdGroups className='sideBarIcon'/>Groups</li>
          <li className="sideBarListItem"><MdQuestionMark className='sideBarIcon'/>Questions</li>
          <li className="sideBarListItem"><MdOutlineCases className='sideBarIcon'/>Jobs</li>
          <li className="sideBarListItem"><MdCalendarMonth className='sideBarIcon'/>events</li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className='sideBarHr' />
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/4.jpeg?raw=true" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">John doe</span>
          </li>
          <li className="sideBarFriend">
            <img src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/4.jpeg?raw=true" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">John doe</span>
          </li>
          <li className="sideBarFriend">
            <img src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/4.jpeg?raw=true" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">John doe</span>
          </li>
          <li className="sideBarFriend">
            <img src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/4.jpeg?raw=true" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">John doe</span>
          </li>
          <li className="sideBarFriend">
            <img src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/4.jpeg?raw=true" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">John doe</span>
          </li>
          <li className="sideBarFriend">
            <img src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/4.jpeg?raw=true" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">John doe</span>
          </li>
          <li className="sideBarFriend">
            <img src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/4.jpeg?raw=true" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">John doe</span>
          </li>
          <li className="sideBarFriend">
            <img src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/4.jpeg?raw=true" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">John doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
