import './topbar.css'
import { FaFacebookMessenger,FaUserAlt,FaRocketchat,FaBell,FaSearch } from "react-icons/fa";
function Topbar() {
  return (
    <div className='topBarContainer' >
      <div className="topBarLeft">
        <span className="logo">Mini FaceBook</span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <FaSearch className='searchIcon' />
          <input placeholder='search ' className="searchInput" />
        </div>
      </div>
      <div className="topBarRight">
      <div className="topBarLinks">
        <span className="topBarLink">Homepage</span>
        <span className="topBarLink">Timeline</span>
      </div>
      <div className="topBarIcons">
      <div className="topBarIconItem">
      <FaUserAlt/>
      <span className="topBarIconBadge">1</span>
      </div>
      <div className="topBarIconItem">
      <FaFacebookMessenger/>
      <span className="topBarIconBadge">2</span>
      </div>
      <div className="topBarIconItem">
      <FaBell/>
      <span className="topBarIconBadge">1</span>
      </div>
    </div>
    <img src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/1.jpeg?raw=true" alt="" className="topBarImg" />
    </div>
    </div>
  )
}

export default Topbar
