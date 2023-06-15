import React from "react";
import SwipeableTextMobileStepper from "./Hero/Hero";
import Events from "../Layers/EventsLayer";
import NoticeBoard from "../Layers/NoticeBoard/NoticeBoard";
const Home = () => {
  return (
    <>
      <section className="hero">
        <SwipeableTextMobileStepper />
      </section>
      <Events />
      <NoticeBoard />
    </>
  );
};

export default Home;
