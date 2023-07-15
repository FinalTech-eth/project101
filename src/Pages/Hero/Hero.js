import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./hero.css";
import img1 from "../../Assets/Images/photo_4958761978181037036_y.jpg";
import img2 from "../../Assets/Images/photo_4958761978181037038_y.jpg";
import img3 from "../../Assets/Images/photo_4958761978181037043_y.jpg";
import img4 from "../../Assets/Images/photo_4958761978181037044_y.jpg";

const images = [
  {
    title: "Well Come to Apostolic church of Canada/Ottawa",
    label: "Join the Prayer",
    article: "",
    imgPath: img1,
  },
  {
    title: "Hear, O Israel:",
    label: " The LORD our God is one Lord.",
    article: "Deuteronomy 6:4",

    imgPath: img2,
  },
  {
    title: "And the LORD shall be king over all the earth:",
    label: "In that day shall there be one LORD, and his name one.",
    article: "Zechariah 14:9 ",

    imgPath: img3,
  },
  {
    title: "Thou believest that there is one God;",
    label: "Thou doest well: the devils also believe, and tremble.",
    article: "James 2:19",

    imgPath: img4,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%", flexGrow: 1 }}>
      <div className="home_hero_container">
        <hr className="hLine-1" />
        <hr className="hLine-2" />
        <hr className="vLine-1" />
        <hr className="vLine-2" />
      </div>

      <Carousel
        autoPlay
        infiniteLoop
        emulateTouch
        showArrows={false}
        showStatus={false}
        stopOnHover={false}
        swipeable={false}
        interval={6000}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            <Box
              component="img"
              sx={{
                height: "100vh",
                display: "block",
                overflow: "hidden",
                width: "100vw",
                objectFit: "cover",
              }}
              src={step.imgPath}
              alt={step.label}
            />
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
                padding: "2rem",
                background: "rgba(0, 0, 0, 0.5)",
                color: "white",
                height: "100%",
                overflow: "hidden",
              }}
              id="hero-text"
            >
              <Typography
                variant="h2"
                id="hero_header_2"
                sx={{ textAlign: "left", marginBottom: "2rem" }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="h4"
                id="hero_header_1"
                sx={{ textAlign: "left", marginBottom: "1rem" }}
              >
                {step.label}
              </Typography>
              <Typography
                sx={{ textAlign: "left", marginBottom: "1rem" }}
                variant="h6"
              >
                {step.article}
              </Typography>
            </Paper>
          </div>
        ))}
      </Carousel>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
