import React, { useState } from "react";
import AboutSection from "../Components/About/AboutSection";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const About = () => {
  React.useEffect(() => {
    document.getElementById("about-top").scrollIntoView({ behavior: "smooth" });
  }, []);

  const [description, setDescription] = useState("");
  return (
    <div id="about-top">
      <AboutSection />
      <CKEditor
        editor={ClassicEditor}
        data={description}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDescription(data);
          console.log("The data : ", { event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default About;
