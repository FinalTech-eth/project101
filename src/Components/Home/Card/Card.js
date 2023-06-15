import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../../../Assets/Images/logo.jpg'
import './card.css'

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className='card-container'>
      <CardMedia
        sx={{ height: 140 }}
        image={logo}
        title="green iguana"
      />
      <CardContent>
        <Typography className='card-title' gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography className='card-body' variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
