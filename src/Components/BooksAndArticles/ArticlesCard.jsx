import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function BooksAndArticlesCard({ data }) {
  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          sx={{ height: 200 }}
          image="https://tesfaapologetics.org/wp-content/uploads/2019/01/evangelising-JW-300x300.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="google.com" variant="outlined">
            ተጨማሪ ያብቡ
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default BooksAndArticlesCard;
