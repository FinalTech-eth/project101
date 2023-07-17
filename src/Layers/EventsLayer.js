import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/material/styles";

import MediaCard from "../Components/Home/Card/Card";
import EventSection from "../Components/Home/Events";

const Events = () => {
  return (
    <>
      <div className="page-container" id="events">
        <EventSection />
      </div>
    </>
  );
};

export default Events;
