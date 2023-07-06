import React, { useState, useEffect } from 'react';
import { Box, Tab, Tabs, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import MediaCard from '../Events/Card';
import axios from '../../API/axios';

const HeaderContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',
  marginBottom: '3rem',
  fontFamily: 'var(--font-family_2)',
  // color: 'var(--primary-clr)',
}));

const EventSection = () => {
  const [selectedTab, setSelectedTab] = useState('All');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/event');
      setEvents(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const currentDate = new Date();

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filteredEvents = selectedTab === 'All'
    ? events.filter(event => new Date(event.date) >= currentDate)
    : events.filter(event => event.category === selectedTab && new Date(event.date) >= currentDate);

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
            <MediaCard id={event._id} url={event.image} title={event.title} date={event.date} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventSection;
