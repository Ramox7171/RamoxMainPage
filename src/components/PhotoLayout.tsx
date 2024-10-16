import { Outlet } from 'react-router-dom';
import React from 'react';
import PhotoHeader from './PhotoHeader';
import PhotoFooter from './PhotoFooter';




const PhotoLayout = () => {
  return (
    <>
      <PhotoHeader />
      <div className='container'>

      <div className='wrapper'>
        <div className='main'>
         <Outlet/>
        </div>
      </div>
      </div>
      <PhotoFooter />
    </>
  );
}

export default PhotoLayout;