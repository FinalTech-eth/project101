import React, { useState, useEffect } from "react";
import axios from "../../API/axios";
import ModalImage from "react-modal-image";
import { Pagination, Button } from "@mui/material";

import lightTexture from "../../Assets/Images/light-texture.jpg";
import "./gallery.css";
import Loading from "../Loading";

export default function AllImagesGallery() {
  const itemsPerPage = 10; // Number of items to display per page
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [refetch, setRefetch] = useState(false);

  const [totalPages, setTotalPages] = useState(0);

  

  useEffect(() => {
    fetchImages();
  }, [currentPage]);

  const fetchImages = async () => {
    try {
      console.log(currentPage)
      const response = await axios.get(`/gallery?page=${currentPage}`);
      console.log(response.data)

      setTotalPages(response.data.totalPages);
      const transformedImages = response.data.items.map((item) => ({
        original: item.image,
        thumbnail: item.image,
        caption: item.caption,
      }));
      setImages(transformedImages);
      console.log("tr", transformedImages)
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
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
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </Button>
        <span>{currentPage}</span>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
     
    </div>
  );
}
