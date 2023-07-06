import * as React from 'react';
import { Link } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Box, Tab, Tabs, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { format } from 'date-fns';

import '../../Components/Home/Card/card.css';

const CardContainer = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: '2rem',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const CardOverlay = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
}));

export default function MediaCard({ id, url, title, date }) {
  const formattedDate = format(new Date(date), 'MMM d yyyy');

  return (
    <Link to={`/event/${id}`} style={{ textDecoration: 'none' }}>
      <CardContainer>
        <CardMedia component="img" height="200" image={url} alt={title} />
        <CardOverlay>
          <CardContent>
            <Typography variant="h6" component="div" sx={{ textAlign: 'left' }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'left' }}>
              {formattedDate}
            </Typography>
          </CardContent>
        </CardOverlay>
      </CardContainer>
    </Link>
  );
}
