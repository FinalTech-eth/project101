import React from "react";
import AboutSection from "../Components/About/AboutSection";

const About = () => {
  React.useEffect(() => {
    document.getElementById("about-top").scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div id="about-top">
      <AboutSection />
    </div>
  );
};

export default About;
