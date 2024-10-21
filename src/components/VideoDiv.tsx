import React from "react";
import "./VideoDiv.css";
import videoBg from '../assets/video/test4.mp4';

const VideoDiv = () => {
  return <div className="video">
    {/* <div className="overlay"></div> */}
    <video src={videoBg}  autoPlay loop muted/>
    
  </div>;
  
};

export default VideoDiv;
