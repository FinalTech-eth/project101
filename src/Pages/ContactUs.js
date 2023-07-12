import React from "react";
import Contact from "../Components/contact/Contact";
import bgImg from "../Assets/Images/download (2).jpg";
import topTornEdge from "../Assets/Images/beige-torn-edge.png";
import { Typography } from "@mui/material";

const ContactUs = () => {
  const heroContainerStyle = {
    position: "relative",
    height: "350px",
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${bgImg})`,
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
      <div style={heroContainerStyle}>
        <div style={heroTextStyle}>
          <Typography variant="h4" component="h1">
            Welcome to Our Church
          </Typography>
          <Typography variant="subtitle1">
            A place of love, faith, and community
          </Typography>
        </div>
      </div>
      <div style={edgeImageStyle}></div>

      <Contact />
    </>
  );
};

export default ContactUs;
