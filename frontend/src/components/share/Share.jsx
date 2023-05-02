import React from 'react'
import './share.css';
import {FaSmileBeam ,FaTag,} from "react-icons/fa"
import { MdPermMedia,MdScreenShare,MdLocationPin} from "react-icons/md";
function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/4.jpeg?raw=true" alt="" />
                <input placeholder="what's in your mind ?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
            <div className="shareOptions">

            <div className="shareOption">
                <MdPermMedia  className='shareIcon file' />
                <span className='shareOptionText' >photo or video</span>
            </div>
            <div  className="shareOption">
                <FaTag className='shareIcon tag' />
                <span className='shareOptionText' >tag</span>
            </div>
            <div className="shareOption">
                <MdLocationPin className='shareIcon locationIcon' />
                <span className='shareOptionText' >location</span>
            </div>
            <div className="shareOption">
                <FaSmileBeam className='shareIcon smile' />
                <span className='shareOptionText' >feelings</span>
            </div>
            <button className="shareButton">share</button>
            </div>
            {/* <button className="shareButton">share</button> */}
            </div>
        </div>
     
    </div>
  )
}

export default Share
