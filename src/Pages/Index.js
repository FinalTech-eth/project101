import React from 'react'
import Events from '../Layers/EventsLayer'
import SwipeableTextMobileStepper from "./Hero/Hero";
import GalleryLayer from '../Layers/Gallery';
// import Gallery from '../Components/Home/Gallary/Gallery';

const Home = () => {
  return<>
    <section className="hero">
        {/* <SwipeableTextMobileStepper /> */}
      </section>
      <section >
            <Events />
      </section>

      <section >
            <GalleryLayer />
      </section>
  </>

}

export default Home;
