import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";
import img1 from "../../Assets/Images/photo_5823502271126815195_y.jpg";
import img2 from "../../Assets/Images/pexels-photo-1766215.jpeg";
import img3 from "../../Assets/Images/pexels-photo-1202723.jpeg";
import img4 from "../../Assets/Images/pexels-photo-11514758.jpeg";
import img5 from "../../Assets/Images/pexels-photo-13913336.jpeg";
import bgimage from "../../Assets/Images/photo_5823502271126815190_y.jpg";
const churchData = [
  {
    id: 1,
    title: "Apostolic church of International Ministry of Canada",
    description: "",
    imageUrl: img1,
    websiteUrl: "https://acimca.com/",
  },
  {
    id: 2,
    title: "Apostolic church of Australia",
    description: "",
    imageUrl: img2,
    websiteUrl: "https://acifa.org.au/",
  },
  {
    id: 3,
    title: "Apostolic church of International Fellowship North America",
    description: "",
    imageUrl: img3,
    websiteUrl: "https://sites.google.com/view/live4lifeacifna/home?authuser=0",
  },
  {
    id: 4,
    title: "Apostolic Church of International Fellowship South Africa",
    description: "",
    imageUrl: img4,
    websiteUrl: "https://www.acifsa.co.za/aboutus.php",
  },
  {
    id: 5,
    title: "Apostolic church of Ethiopia",
    description: "",
    imageUrl: img5,
    websiteUrl: "https://acieth.org/about/establishment/",
  },
];

const SectionContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  minHeight: "80vh",
  padding: "7rem 1rem",
  margin: "7rem 0",
  backgroundImage: `url(${bgimage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));
const Overlay = styled("div")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 50, 0.7)",
  backdropFilter: "blur(5px)", // Optional: Add blur effect to the overlay
}));

const CardContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  textDecoration: "none",
  zIndex: "1",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
  cursor: "poiner",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  [theme.breakpoints.up("md")]: {
    width: "calc(50% - 16px)",
    margin: theme.spacing(1),
  },
  [theme.breakpoints.up("lg")]: {
    width: "calc(33.33% - 16px)",
    margin: theme.spacing(1),
  },
}));

const OtherChurchs = () => {
  return (
    <SectionContainer>
      <Overlay />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="70vh"
      >
        <Typography
          className="section_header"
          sx={{
            zIndex: "1",
            mb: "2rem",
            fontFamily: "'Crimson Text', serif",
            fontSize: "36px",
          }}
          variant="h4"
          //   component="h2"
          color="white"
          gutterBottom
        >
          Other Churches
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
        >
          {churchData.map((church) => (
            <CardContainer
              key={church.id}
              component="a"
              href={church.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              height="200"
            >
              <CardMedia
                component="img"
                height="180"
                image={church.imageUrl}
                alt={church.title}
              />
              <CardContent>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  {church.title}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  {church.description}
                </Typography>
              </CardContent>
            </CardContainer>
          ))}
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default OtherChurchs;
