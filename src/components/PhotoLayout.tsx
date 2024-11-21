import { Outlet } from 'react-router-dom';
import React from 'react';
import SideComponent from './SideComponent';
import VideoDiv from './VideoDiv';
import SideLinks from './SideLinks';
import { links } from '../assets/store/DATA';
import PhotoFooter from './PhotoFooter';
import PhotoGallery from './PhotoGallery';
import { portraitPh } from '../assets/store/DATA';
// import PhotoMenu from './PhotoMenu';



const PhotoLayout = () => {
  return (
    <>
     
      <SideLinks links={links} side='left' />
      <SideComponent btnName='Genres'>
       {/* <PhotoMenu /> */}
       <PhotoGallery items={portraitPh} />
      </SideComponent>
      <VideoDiv />

      <Outlet /> 
      <PhotoFooter />
    </>
  );
};

export default PhotoLayout;