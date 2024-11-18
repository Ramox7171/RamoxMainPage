import { Outlet } from 'react-router-dom';
import React from 'react';
import SideComponent from './SideComponent';
import VideoDiv from './VideoDiv';
import SideLinks from './SideLinks';
import { links } from '../assets/store/DATA';
import PhotoFooter from './PhotoFooter';
import PhotoMenu from './PhotoMenu';



const PhotoLayout = () => {
  return (
    <>
     
      <SideLinks links={links} side='left' />
      <SideComponent btnName='Genres'>
       <PhotoMenu />
      </SideComponent>
      <VideoDiv />

      <Outlet /> 
      <PhotoFooter />
    </>
  );
};

export default PhotoLayout;