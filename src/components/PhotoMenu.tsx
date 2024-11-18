import React from "react";
import { NavLink } from "react-router-dom";

import '../style/PhotoMenu.scss';
const PhotoMenu = () => {
  return (
    <>
      <div className="photo-menu">
      
      <button className="photo-menu__button portrait"><span className="photo-menu__button__text"><NavLink>Portrait</NavLink></span></button>
      <button className="photo-menu__button nude"><span className="photo-menu__button__text">Nude</span></button>
      <button className="photo-menu__button animals"><span className="photo-menu__button__text">Animals</span></button>
      <button className="photo-menu__button automotive"><span className="photo-menu__button__text">Automotive</span></button>
      
      </div>
    </>
  );
};

export default PhotoMenu;
