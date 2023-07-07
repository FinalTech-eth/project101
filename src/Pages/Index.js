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
      <section id="Events">
      <Events />
      </section>
      <section id="Gallery">
      <GalleryLayer />
      </section>
      <section className="other-churches">
      <OtherChurchs />
      </section>
      <section className="notice">

      <NoticeBoard />
      </section>
     
     
    </>
  );
};

export default Home;
