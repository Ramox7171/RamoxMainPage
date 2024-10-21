import { Outlet } from 'react-router-dom';
import React from 'react';
import SideComponent from './SideComponent';
import VideoDiv from './VideoDiv';
import SideLinks from './SideLinks';
import { links } from '../assets/store/DATA';



const PhotoLayout = () => {
  return (
    <>
      {/* Nie dodawaj Header tutaj */}
      <SideLinks links={links} side='left' />
      <SideComponent btnName='Genres'/>
      <VideoDiv />

      <Outlet /> {/* Renderuj dzieci */}
    </>
  );
};

export default PhotoLayout;