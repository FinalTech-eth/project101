import "./styles.css";
import img from "../../Assets/Images/photo_5823502271126815178_y.jpg";
import React, { useState, useEffect } from "react";
import axios from "../../API/axios";
import parser from "html-react-parser";
const NoticeBoard = () => {
  const [notice, setNotice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const admin = JSON.parse(localStorage.getItem("admin"));
  const token = admin?.token;

  const fetchNotice = async () => {
    try {
      const response = await axios.get("/notice");
      console.log("The reps: ", response.data.items);
      setNotice(response.data.items[0]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotice();
  }, []);
  return (
    <div className="notice-board-container">
      <div className="notice-board-img-container">
        <img src={notice?.image} alt="church worship time" />
      </div>
      <div className="notice-message-container">
        <div className="notice-message">
          <h1>{notice?.title}</h1>
          {notice && parser(notice.description)}
        </div>
      </div>
      <div class="clear"></div>
    </div>
  );
};

export default NoticeBoard;
