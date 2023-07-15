import React from "react";
import AllImagesGallery from "../Components/Gallery/AllImagesGallery";
import Header from "../Components/Header/Header";
import img2 from "../Assets/Images/photo_5877545827432512349_w.jpg";

import { Typography } from "@mui/material";
import topTornEdge from "../Assets/Images/beige-torn-edge.png";

const Gallery = () => {
  const heroContainerStyle = {
    position: "relative",
    height: "60vh",
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${img2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // marginBottom: '2rem',
    maxWidth: "100vw",
    left: 0,
    right: 0,
  };
  const heroTextStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
  };
  const edgeImageStyle = {
    position: "relative",
    backgroundImage: `url(${topTornEdge})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginTop: "-48px",
    zIndex: 100,
    height: "50px",
  };

  return (
    <>
      <div className="">
        <div style={heroContainerStyle}>
          <div style={heroTextStyle}>
            <Typography variant="h3">Gallery</Typography>
          </div>
        </div>
        <div style={edgeImageStyle}></div>
        {/* <Header title='Gallery' subtitle='all images' /> */}
        <AllImagesGallery />
      </div>
    </>
  );
};

export default Gallery;
