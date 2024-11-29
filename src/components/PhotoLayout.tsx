import { Outlet } from "react-router-dom";
import React from "react";
import SideComponent from "./SideComponent";
import VideoDiv from "./VideoDiv";
import SideLinks from "./SideLinks";
import { links } from "../assets/store/DATA";
import PhotoFooter from '../components/PhotoFooter.tsx';


import PhotoMenu from "./PhotoMenu";
import PhotoAbout from "./PhotoAbout.tsx";

const PhotoLayout = () => {
  return (
    <>
   
      <SideLinks
        links={links}
        side="left"
      />
      <SideComponent btnName="Genres">
        <PhotoMenu />
      </SideComponent>
      <PhotoAbout />
      <Outlet />
      <VideoDiv />
      <PhotoFooter />

      
      
      
    </>
  );
};

export default PhotoLayout;
