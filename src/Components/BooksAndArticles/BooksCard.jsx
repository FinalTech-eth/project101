import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./styles.css";
function BooksCard({ data }) {
  const [formattedDate, setFormattedDate] = useState(null);
  const formatDate = () => {
    const date = new Date(data.published_on); // Current date
    const formatted = date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

    console.log(formatted);
    setFormattedDate(formatted);
  };

  useEffect(() => {
    formatDate();
  }, [data]);
  return (
    <>
      <Card sx={{ minWidth: 300 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={data.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author: {data.author}
            <br />
            published: {formattedDate}
            <br />
            No. of Pages: {data.no_of_pages}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href={data.file}
            target="_blank"
            variant="outlined"
          >
            Download
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default BooksCard;
