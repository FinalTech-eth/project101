import React, { useState } from 'react';
import { Box, Tab, Tabs, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

import MediaCard from '../Events/Card';
import img1 from '../../Assets/Images/download (2).jpg';
import img2 from '../../Assets/Images/download.jpg';

const eventsData = [
  { id: 4, category: 'Category A', title: 'Event 2 lkd lasien c lser', date: 'November 12 2023', imageUrl: img2 },
  { id: 5, category: 'Category A', title: 'Event 2', date: 'November 12 2023', imageUrl: img1 },
  { id: 6, category: 'Category A', title: 'Event 2', date: 'November 12 2023', imageUrl: img2 },
  { id: 7, category: 'Category B', title: 'Event 3', date: 'November 12 2023', imageUrl: img1 },
  { id: 8, category: 'Category B', title: 'Event 3', date: 'November 12 2023', imageUrl: img2 },
  { id: 9, category: 'Category B', title: 'Event 3', date: 'November 12 2023', imageUrl: img1 },
];


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
            <MediaCard url={event.imageUrl} title={event.title} date={event.date} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventSection;


