import React from "react";
import Contact from "../Components/contact/Contact";
import bgImg from "../Assets/Images/4934192.webp";
import topTornEdge from "../Assets/Images/beige-torn-edge.png";
import { Typography } from "@mui/material";

const ContactUs = () => {
  const heroContainerStyle = {
    position: "relative",
    height: "50vh",
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

  React.useEffect(() => {
    document
      .getElementById("contact-us-hero")
      .scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      <div style={heroContainerStyle} id="contact-us-hero">
        <div style={heroTextStyle}>
          <Typography variant="h2">Contact Us</Typography>
        </div>
      </div>
      <div style={edgeImageStyle}></div>

      <Contact />
    </>
  );
};

export default ContactUs;
