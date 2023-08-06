import React, { useState } from "react";
import AboutSection from "../Components/About/AboutSection";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
