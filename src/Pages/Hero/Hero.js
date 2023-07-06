import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./hero.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    title: "WELLCOME TO OUR CHURCH",
    label: "join the prayer",
    imgPath: "https://wallpaperaccess.com/full/1239452.jpg",
  },
  {
    title: "FIND JESUSE",
    label: "God has plan for you",
    imgPath:
      "https://www.catholicfoundationmt.org/wp-content/uploads/2019/03/five-loaf.jpeg",
  },
  {
    title: "CONNECT AND GROW",
    label: "Prayer Elegant",
    imgPath: "https://wallpaperaccess.com/full/1686985.jpg",
  },
  {
    title: "I Will Build My Church",
    label: "Upon This Rock ",
    imgPath:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlibGUlMjByZWFkaW5nfGVufDB8fDB8fHww&w=1000&q=80",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ Width: "100%", flexGrow: 1 }}>
      <div>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "left",
           
            width: "50vw",
            pl: 2,
          }}
          id="hero-text"
        >
          <Typography sx={{fontSize: "3vw"}}>{images[activeStep].label}</Typography>
          <Typography sx={{fontSize: "8vw"}}>{images[activeStep].title}</Typography>
        </Paper>
        <hr className="hLine-1" />
        <hr className="hLine-2" />
        <hr className="vLine-1" />
        <hr className="vLine-2" />
      </div>

      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "100vh",
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
