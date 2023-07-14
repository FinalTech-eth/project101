import React, { useState, useEffect } from "react";
import axios from "../../API/axios";
import ModalImage from "react-modal-image";

import lightTexture from "../../Assets/Images/light-texture.jpg";
import "./gallery.css";
import Loading from "../Loading";

export default function AllImagesGallery() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("/gallery");
      const transformedImages = response.data.items.map((item) => ({
        original: item.image,
        thumbnail: item.image,
        caption: item.caption,
      }));
      setImages(transformedImages);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const containerStyle = {
    backgroundImage: `url(${lightTexture})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    maxWidth: "100vw",
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={containerStyle}>
      <div className="gallery-container">
        {images.map((image, index) => (
          <ModalImage
            key={index}
            small={image.thumbnail}
            large={image.original}
            alt={image.caption}
            showPrevButton={true}
            showNextButton={true}
            className="fullscreen-image"
          />
        ))}
      </div>
    </div>
  );
}
