import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import img from '../../Assets/Images/download.jpg'
import bgUrl from '../../Assets/Images/beige-texture.jpg'

const SingleEvent = () => {
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
  }

  return (
    <Container style={containerStyle}>

      <Grid container spacing={4} style={eventContent} alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" style={titleStyle}>
            Event Title
          </Typography>
          <Typography variant="subtitle1" style={contentStyle}>
            <strong>Date:</strong> September 30, 2023
          </Typography>
          <Typography variant="subtitle1" style={contentStyle}>
            <strong>Time:</strong> 7:00 PM - 10:00 PM
          </Typography>
          <Typography variant="subtitle1" style={contentStyle}>
            <strong>Location:</strong> Church Hall
          </Typography>
          <Typography variant="body1" style={contentStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            massa pharetra, vestibulum urna nec, laoreet ante. Quisque vitae
            fermentum tellus. Nulla dapibus augue ut ligula malesuada finibus.
            Nullam ac fermentum justo. Sed varius feugiat sem, id auctor magna
            vestibulum at. Sed maximus, lectus ut dapibus fringilla, mauris
            mauris maximus urna, a interdum mauris lectus id neque. Nullam nec
            purus id nisl fringilla laoreet. In vestibulum tempor tortor, sit
            amet gravida neque gravida non. Donec fringilla, sem vel rutrum
            sagittis, mi neque bibendum mi, sed tristique ligula nunc in odio.
            Nulla vestibulum volutpat neque, a consectetur sem fringilla et.
            Integer suscipit massa eget enim maximus, nec lacinia nulla
            hendrerit.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleEvent;
