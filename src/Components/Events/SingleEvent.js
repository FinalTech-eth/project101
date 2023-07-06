import { useState, useEffect } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import img from '../../Assets/Images/download.jpg';
import bgUrl from '../../Assets/Images/beige-texture.jpg';
import axios from '../../API/axios';
import Loading from '../Loading';
import { useParams } from 'react-router-dom';
import { format } from "date-fns";

const SingleEvent = ({title, description, date, location}) => {

  // const formattedDate = format(new Date(date), "MMM d yyyy");

  const containerStyle = {
    paddingTop: '5rem',
    paddingBottom: '7rem',
    backgroundImage: `url(${bgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    maxWidth: '100vw',
  };

  const titleStyle = {
    marginBottom: '2rem',
    fontWeight: 'bold',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '1rem',
  };

  const contentStyle = {
    marginTop: '2rem',
  };

  const eventContent = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Container style={containerStyle}>
      <Grid container spacing={4} style={eventContent} alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" style={titleStyle}>
            {title}
          </Typography>
          <Typography variant="subtitle1" style={contentStyle}>
            {/* <strong>Date:</strong> {formattedDate} */}
          </Typography>
          <Typography variant="subtitle1" style={contentStyle}>
            {/* <strong>Time:</strong> 7:00 PM - 10:00 PM */}
          </Typography>
          <Typography variant="subtitle1" style={contentStyle}>
            <strong>Location:</strong> {location}
          </Typography>
          <Typography variant="body1" style={contentStyle}>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleEvent;
