import React from "react";
import GalleryComponent from "../Components/Home/Gallary/Gallery";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const GalleryLayer = () => {
  return (
    <>
      <Box>
        <h3 className="center_center section_header">Gallery</h3>
        <GalleryComponent />
        <Box className="center_center">
          <Button
            component={Link}
            to="/gallery"
            variant="outlined"
            color="primary"
            size="large"
            sx={{ margin: '2rem', padding: '1rem', width: "fit-content" }}
          >
            View All
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default GalleryLayer;
