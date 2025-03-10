import React from "react";
import programing from "../assets/icons/programming.png";
import { NavLink } from "react-router-dom";
import "../style/PhotoFooter.scss";

const PhotoFooter = () => {
  return (
    <footer className="photo-footer">
      <NavLink to="/">
        <span>
          <img
            src={programing}
            alt="camera icon"
          />
        </span>
      </NavLink>
     
    </footer>
  );
};

export default PhotoFooter;
