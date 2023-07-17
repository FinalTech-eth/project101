import React, { useState, useEffect } from "react";
import { Box, Select, MenuItem, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import MediaCard from "../Events/Card";
import axios from "../../API/axios";
import Loading from "../Loading";
import EventCategories from "../../Enums/EventCategory";

const HeaderContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2rem",
  marginBottom: "3rem",
  fontFamily: "var(--font-family_2)",
}));

const EventSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(EventCategories.ALL);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);
  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/event");
      const sortedEvents = response.data.items.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setEvents(sortedEvents);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const currentDate = new Date();

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredEvents = events.filter((event) => {
    if (selectedCategory === EventCategories.ALL) {
      return new Date(event.date) >= currentDate;
    } else {
      return (
        event?.category?.includes(selectedCategory) &&
        new Date(event.date) >= currentDate
      );
    }
  });

  if (isLoading) {
    return <Loading />;
  }
  if (events?.length === 0) {
    return;
  }
  return (
    <div id="events">
      <HeaderContainer>
        <Typography
          sx={{
            fontFamily: "'Crimson Text', serif",
          }}
          variant="h4"
        >
          Events
        </Typography>
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          displayEmpty
          inputProps={{ "aria-label": "Event categories" }}
        >
          <MenuItem value={EventCategories.ALL}>All Events</MenuItem>
          <MenuItem value={EventCategories.WORSHIP_SERVICES}>
            Worship Services
          </MenuItem>
          <MenuItem value={EventCategories.BIBLE_STUDY}>Bible Study</MenuItem>
          <MenuItem value={EventCategories.SPECIAL_CELEBRATIONS}>
            Special Celebrations
          </MenuItem>
          <MenuItem value={EventCategories.COMMUNITY_OUTREACH}>
            Community Outreach
          </MenuItem>
          <MenuItem value={EventCategories.YOUTH_AND_CHILDRENS_PROGRAMS}>
            Youth and Children's Programs
          </MenuItem>
        </Select>
      </HeaderContainer>

      {filteredEvents.length === 0 ? (
        <Typography variant="body1" align="center">
          No events for this category.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {filteredEvents.map((event) => (
            <Grid key={event.id} item xs={12} sm={6} md={4}>
              <MediaCard
                id={event._id}
                url={event.image}
                title={event.title}
                date={event.date}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default EventSection;
