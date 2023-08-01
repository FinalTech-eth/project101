import React, { useState, useEffect } from "react";
import axios from "../../API/axios";
import ModalImage from "react-modal-image";
import lightTexture from "../../Assets/Images/light-texture.jpg";
import "./gallery.css";
import Loading from "../Loading";
import { Pagination } from "@mui/material";

const IMAGES_PER_PAGE = 10; // Number of images per page

export default function AllImagesGallery() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages(currentPage);
  }, [currentPage]);

  const fetchImages = async (page) => {
    try {
      const response = await axios.get(
        `/gallery?page=${page}&limit=${IMAGES_PER_PAGE}`
      );
      const transformedImages = response.data.items.map((item) => ({
        original: item.image,
        thumbnail: item.image,
        caption: item.caption,
      }));
      setImages(transformedImages);
      setTotalPages(Math.ceil(response.data.totalItems / IMAGES_PER_PAGE));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
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
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePaginationChange}
          color="primary"
          className="pagination"
        />
      )}
    </div>
  );
}
