import React, { useState } from 'react';
import { Box, Tab, Tabs, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

import img1 from '../../Assets/Images/download (2).jpg';
import img2 from '../../Assets/Images/download.jpg';

const eventsData = [
  { id: 4, category: 'Category A', title: 'Event 2', description: 'Description 2', imageUrl: img2 },
  { id: 5, category: 'Category A', title: 'Event 2', description: 'Description 2', imageUrl: img1 },
  { id: 6, category: 'Category A', title: 'Event 2', description: 'Description 2', imageUrl: img2 },
  { id: 7, category: 'Category B', title: 'Event 3', description: 'Description 3', imageUrl: img1 },
  { id: 8, category: 'Category B', title: 'Event 3', description: 'Description 3', imageUrl: img2 },
  { id: 9, category: 'Category B', title: 'Event 3', description: 'Description 3', imageUrl: img1 },
];

const CardContainer = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: "2rem",
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const CardOverlay = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
}));

const HeaderContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',
  marginBottom: '3rem',
  fontFamily: 'var(--font-family_2)',
  // color: 'var(--primary-clr)',
}))

const EventSection = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filteredEvents = selectedTab === 'All' ? eventsData : eventsData.filter(event => event.category === selectedTab);

  return (
    <Box>
      <HeaderContainer>
        <Grid container>
          <Grid item md={6}>
            <Typography variant="h4" sx={{ marginLeft: '24px' }}>
              Events
            </Typography>
          </Grid>

          <Grid item md={6}>
            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Event categories" centered>
              <Tab value="All" label="All Events" />
              <Tab value="Category A" label="Category A" />
              <Tab value="Category B" label="Category B" />
            </Tabs>
          </Grid>
        </Grid>
      </HeaderContainer>

      <Grid container spacing={2}>
        {filteredEvents.map(event => (
          <Grid key={event.id} item xs={12} sm={6} md={4}>
            <CardContainer>
              <CardMedia component="img" height="200" image={event.imageUrl} alt={event.title} />

              <CardOverlay>
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ color: 'white', textAlign: 'center' }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
                    {event.description}
                  </Typography>
                </CardContent>
              </CardOverlay>
            </CardContainer>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventSection;


