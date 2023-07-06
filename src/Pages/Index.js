import React from "react";
import SwipeableTextMobileStepper from "./Hero/Hero";
import Events from "../Layers/EventsLayer";
import NoticeBoard from "../Layers/NoticeBoard/NoticeBoard";
import GalleryLayer from "../Layers/Gallery";
import OtherChurchs from "../Components/Home/OtherChurchs";

const Home = () => {
  return (
    <>
      <section className="hero">
        <SwipeableTextMobileStepper />
      </section>
      <Events />
      <GalleryLayer />
      <OtherChurchs />
      <NoticeBoard />
    </>
  );
};

export default Home;
