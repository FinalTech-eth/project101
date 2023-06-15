import React from "react";
import SwipeableTextMobileStepper from "./Hero/Hero";
import Events from "../Layers/EventsLayer";
import NoticeBoard from "../Layers/NoticeBoard/NoticeBoard";
import GalleryLayer from "../Layers/Gallery";

const Home = () => {
  return (
    <>
      <section className="hero">
        <SwipeableTextMobileStepper />
      </section>
      <Events />
      <GalleryLayer />
      <NoticeBoard />
    </>
  );
};

export default Home;
