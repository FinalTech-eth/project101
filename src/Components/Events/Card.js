import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { format } from "date-fns";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

const CardContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  gap: theme.spacing(2),
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
  },
}));

const CardOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  textAlign: "left",
}));

const MediaCard = ({ id, url, title, date }) => {
  const formattedDate = format(new Date(date), "MMM d yyyy");

  return (
    <Link to={`/event/${id}`} style={{ textDecoration: "none" }}>
      <CardContainer>
        <CardMedia component="img" height="200" image={url} alt={title} />
        <CardOverlay>
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              sx={{
                textAlign: "left",
                fontFamily: "'Crimson Text', serif",
                color: "#1976d2",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: "left",
                fontFamily: "'Lato', Arial, sans-serif",
              }}
            >
              {formattedDate}
            </Typography>
          </CardContent>
        </CardOverlay>
      </CardContainer>
    </Link>
  );
};

export default MediaCard;
