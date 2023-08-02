import React, { useState, useEffect } from "react";
import axios from "../../API/axios";
import ModalImage from "react-modal-image";
import { Pagination } from "@mui/material";

import lightTexture from "../../Assets/Images/light-texture.jpg";
import "./gallery.css";
import Loading from "../Loading";

export default function AllImagesGallery() {
  const itemsPerPage = 10; // Number of items to display per page
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

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

  // Calculate the index of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = images.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div style={containerStyle}>
      <div className="gallery-container">
        {currentImages.map((image, index) => (
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
      <Pagination
        count={Math.ceil(images.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
      />
    </div>
  );
}
