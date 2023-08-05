import React, { useEffect, useState } from "react";
import { Button, FormControl, Box, Divider } from "@mui/material";
import axios from "../../API/axios";
import { useLocation } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TodayIcon from "@mui/icons-material/Today";
import parser from "html-react-parser";
import "./styles.css";
const SingleArticle = () => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const id = searchParams.get("id");

  const admin = JSON.parse(localStorage.getItem("admin"));
  const token = admin?.token;

  const fetchArticle = async () => {
    setIsLoading(true);
    const { data } = await axios.get(`/article/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    setArticle(data);
    setIsLoading(false);
  };

  const [formattedDate, setFormattedDate] = useState(null);
  const formatDate = () => {
    const date = new Date(article?.publication_date); // Current date
    const formatted = date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    setFormattedDate(formatted);
  };

  useEffect(() => {
    formatDate();
  }, [article]);

  useEffect(() => {
    document.getElementById("article").scrollIntoView({ behaviour: "smooth" });
    fetchArticle();
  }, []);
  return (
    <>
      <Box className="single-article-container" id="article">
        <Box>
          <h2 className="article-title">{article?.title}</h2>
        </Box>
        <Divider />
        <Box className="article-publisher-details">
          <Box>
            <span className="article-author">
              <PermIdentityIcon className="article-icon" /> {article?.author}
            </span>
          </Box>
          <Box>
            <span className="article-publication-date">
              <TodayIcon className="article-icon" /> {formattedDate}
            </span>
          </Box>
        </Box>
        <Box className="article-content">
          <Box className="article-image-container">
            <img src={article?.image} alt="article-image"></img>
          </Box>
          {article ? parser(article?.description) : ""}
        </Box>
      </Box>
    </>
  );
};

export default SingleArticle;
