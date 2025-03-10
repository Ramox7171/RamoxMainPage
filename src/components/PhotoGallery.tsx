import React, { useEffect, useState } from "react";
import "../style/PhotoGallery.scss";
import close from "../assets/icons/close.png";
import left from "../assets/icons/left.png";
import right from "../assets/icons/right.png";

interface PhotoGalleryItem {
  id: string;
  title: string;
  img: string;
  description: string;
}

interface PhotoGalleryProps {
  items: PhotoGalleryItem[];
}

const PhotoGallery = ({ items }: PhotoGalleryProps) => {
  const [photoNumber, setPhotoNumber] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = (index: number) => {
    setPhotoNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handlePrevPhoto = () => {
    setPhotoNumber(photoNumber === 0 ? items.length - 1 : photoNumber - 1);
  };

  const handleNextPhoto = () => {
    setPhotoNumber(photoNumber === items.length - 1 ? 0 : photoNumber + 1);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!openModal) return;

    switch (event.key) {
      case "ArrowLeft":
        setPhotoNumber((prev) => (prev === 0 ? items.length - 1 : prev - 1));
        break;

      case "ArrowRight":
        setPhotoNumber((prev) => (prev === items.length - 1 ? 0 : prev + 1));
        break;

      case "Escape":
        handleCloseModal();
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModal, items]);

  return (
    <>
      {/* Modal */}
      {openModal && items.length > 0 && items[photoNumber] && (
        <div className="slider-wrap">
          <div className="fullScreenImage">
            <img
              src={items[photoNumber].img}
              alt={items[photoNumber].title}
            />
            <div className="modal-info">
              <h2>{items[photoNumber].title}</h2>
              <p>{items[photoNumber].description}</p>
            </div>
            <img
              src={close}
              className="btnClose"
              onClick={handleCloseModal}
              alt="Close"
            />
            <img
              src={left}
              className="btnLeft"
              onClick={handlePrevPhoto}
              alt="Previous"
            />
            <img
              src={right}
              className="btnRight"
              onClick={handleNextPhoto}
              alt="Next"
            />
          </div>
        </div>
      )}

      {/* Gallery */}
      <div className="gallery-wrap">
        {items &&
          items.map((photo, index) => (
            <div
              className="photo"
              key={photo.id} 
              onClick={() => handleOpenModal(index)}
            >
              <img src={photo.img} alt={photo.title} />
            </div>
          ))}
      </div>
    </>
  );
};

export default PhotoGallery;
