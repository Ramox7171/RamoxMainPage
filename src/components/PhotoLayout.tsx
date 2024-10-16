import { Outlet } from 'react-router-dom';
import React from 'react';

const PhotoLayout = () => {
  return (
    <div>
      {/* Nie dodawaj Header tutaj */}
      <Outlet /> {/* Renderuj dzieci */}
    </div>
  );
};

export default PhotoLayout;