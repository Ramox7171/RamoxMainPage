import React, { useState } from "react";
import PhotoGallery from "./PhotoGallery";
import { photos } from "../assets/store/DATA";

import "../style/PhotoMenu.scss";

const PhotoMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleButtonClick = (category: string) => {
    setSelectedCategory(category);
  };

  
  const filteredPhotos =
    selectedCategory === null
      ? []
      : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <div>
      {!selectedCategory ? (
        <div className="photo-menu">
          <button
            onClick={() => handleButtonClick("people")}
            className="photo-menu__button portrait"
          >
            <span className="photo-menu__button__text">People</span>
          </button>
          <button
            onClick={() => handleButtonClick("product")}
            className="photo-menu__button nude"
          >
            <span className="photo-menu__button__text">Product</span>
          </button>
          <button
            onClick={() => handleButtonClick("animals")}
            className="photo-menu__button animals"
          >
            <span className="photo-menu__button__text">Animals</span>
          </button>
          <button
            onClick={() => handleButtonClick("automotive")}
            className="photo-menu__button automotive"
          >
            <span className="photo-menu__button__text">Automotive</span>
          </button>
        </div>
      ) : (
        <div className="photo-gallery-wrapper">
          
          

         
          <PhotoGallery items={filteredPhotos} />
          <button
            onClick={() => setSelectedCategory(null)}
            className="photo-gallery__back-button"
          >
            Back to Categories
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoMenu;