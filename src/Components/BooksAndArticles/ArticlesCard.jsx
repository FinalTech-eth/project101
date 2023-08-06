import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import parser from "html-react-parser";

function BooksAndArticlesCard({ data }) {
  const navigate = useNavigate();
  const handleNavigate = ({ slug, id }) => {
    navigate({ pathname: "/article/" + slug, search: `?id=${id}` });
  };
  return (
    <>
      <Card
        sx={{
          minWidth: 290,
          maxWidth: 300,
          minHeight: 350,
          position: "relative",
        }}
      >
        <CardMedia sx={{ height: 150 }} image={data.image} title={data.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {parser(data.description.substring(0, 100))}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => handleNavigate({ slug: data.slug, id: data._id })}
            variant="outlined"
            className="article-read-more-btn"
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default BooksAndArticlesCard;
