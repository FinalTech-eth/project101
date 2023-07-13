import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function BooksCard({ data }) {
  return (
    <>
      <Card sx={{ minWidth: 300 }}>
        <CardMedia
          sx={{ height: 200 }}
          image="https://tesfaapologetics.org/wp-content/uploads/2019/01/evangelising-JW-300x300.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Book Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author: Segni Guta
            <br />
            published: 2010
            <br />
            No. of Pages: 222
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="google.com" variant="outlined">
            Download
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default BooksCard;
