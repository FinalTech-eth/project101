import React from 'react'
import Events from '../Layers/EventsLayer'
import SwipeableTextMobileStepper from "./Hero/Hero";

const Home = () => {
  return<>
    <Events />
    <section className="hero">
        <SwipeableTextMobileStepper />
      </section>
  </>

}

export default Home;
