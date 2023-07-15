import React, { useState, useEffect } from "react";
import axios from "../../../API/axios";
import {
  Grid,
  Button,
  Card,
  CardMedia,
  IconButton,
  Modal,
  Backdrop,
  Fade,
  CircularProgress,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FileUploadWithPreview from "./Upload";
import Loading from "../../Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AlIGalleryImages = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const admin = JSON.parse(localStorage.getItem("admin"));
  const token = admin.token;

  useEffect(() => {
    fetchImages();
  }, [currentPage, refetch]);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`/gallery?page=${currentPage}`);
      setImages(response.data.items);
      setTotalPages(response.data.totalPages);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      setIsLoading(true);
      await axios.delete(`/gallery/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Remove the deleted image from the state
      setImages((prevImages) => prevImages.filter((image) => image._id !== id));
      setIsLoading(false);
      toast.success("Image deleted successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete the image.");
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

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setRefetch((prevRefetch) => !prevRefetch);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <div
        className="center_center"
        style={{ padding: "2rem", justifyContent: "space-between" }}
      >
        <h2>All Images</h2>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Upload
        </Button>
      </div>
      <Grid container spacing={2}>
        {images.map((image) => (
          <Grid item xs={12} sm={3} md={2} key={image._id}>
            <Card sx={{ height: "200" }}>
              <CardMedia component="img" src={image.image} alt={image._id} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "8px",
                }}
              >
                <IconButton onClick={() => handleDeleteImage(image._id)}>
                  <DeleteForeverIcon />
                </IconButton>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
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

      <Modal
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
        }}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
      >
        <Fade in={openModal}>
          <div
            style={{
              backgroundColor: "#fff",
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
              padding: "24px",
              width: "80vw",
              height: "80vh",
              overflow: "scroll",
            }}
          >
            <FileUploadWithPreview onClose={handleCloseModal} />
          </div>
        </Fade>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default AlIGalleryImages;
