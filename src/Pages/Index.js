import React from "react";
import SwipeableTextMobileStepper from "./Hero/Hero";
import Events from "../Layers/EventsLayer";
import NoticeBoard from "../Layers/NoticeBoard/NoticeBoard";
import GalleryLayer from "../Layers/Gallery";
import OtherChurchs from "../Components/Home/OtherChurchs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const param = searchParams.get("section");

  React.useEffect(() => {
    if (param) {
      document.getElementById(param).scrollIntoView({ behavior: "smooth" });
    }
  }, [param]);
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
      <section className="Other-churches" id="Other-churches">
        <OtherChurchs />
      </section>
      <section className="Notice" id="Notice">
        <NoticeBoard />
      </section>
    </>
  );
};

export default Home;
