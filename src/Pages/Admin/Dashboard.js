<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

const Dashboard = () => {
  function checkTokenExpiry() {
    const expiryTime = JSON.parse(localStorage.getItem("expiryTime"));
    
    if (new Date().getTime() >= expiryTime) {
      // Token has expired, remove it from local storage
      localStorage.removeItem("admin");
      localStorage.removeItem("expiryTime");
    }
  }
  
  // Set a timeout to trigger the token expiry check after 24 hours
  setTimeout(checkTokenExpiry, 24 * 60 * 60 * 1000);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/dashboard/events" style={{ textDecoration: 'none' }}>
            <Card sx={{ backgroundColor: '#f44336', color: '#fff' }}>
              <CardContent>
                <EventIcon sx={{ fontSize: 48 }} />
                <Typography variant="h5">Events</Typography>
                <Typography variant="body2">View upcoming events</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/dashboard/notices" style={{ textDecoration: 'none' }}>
            <Card sx={{ backgroundColor: '#2196f3', color: '#fff' }}>
              <CardContent>
                <AnnouncementIcon sx={{ fontSize: 48 }} />
                <Typography variant="h5">Notices</Typography>
                <Typography variant="body2">Check out important notices</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/dashboard/gallery" style={{ textDecoration: 'none' }}>
            <Card sx={{ backgroundColor: '#4caf50', color: '#fff' }}>
              <CardContent>
                <PhotoLibraryIcon sx={{ fontSize: 48 }} />
                <Typography variant="h5">Gallery</Typography>
                <Typography variant="body2">Browse through our photo gallery</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

=======
import React from "react";
import { TabPanel, TabContext } from "@mui/lab";
import { Tab, Tabs, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { EditNote } from "@mui/icons-material";
import { ArticleOutlined } from "@mui/icons-material";
import Notice from "./Components/Notice";
const TabsContainer = styled(Box)({
  display: "flex",
  width: "100%",
  minHeight: "100vh",
  "& > .MuiTabs-root": {
    padding: "10px",
    paddingTop: "1rem",
  },
});

const StyledTabs = styled(Tabs)({
  textAlign: "start",
  color: "#323335",
  fontWeight: 600,
  borderRight: "2px solid #D8E2F5",
  paddingTop: "30px",
  borderRightColor: "#D8E2F5",
  boxShadow: "2px 0px 4px rgba(189, 191, 199, 0.2)",
  "& .Mui-selected": {
    backgroundColor: "#EDEEF1",
    color: "#FCFCFC",
    "& span": {
      color: "#323335",
    },
  },

  "& .MuiPaper-root": {
    backgroundColor: "transparent",
  },

  "& .MuiPaper-elevation1": {
    boxShadow: "none",
  },

  "& .MuiAccordionSummary-root": {
    padding: 0,
  },
  "& .MuiTab-root": {
    padding: "0px",
    paddingLeft: "12px",
    color: "#323335",
    maxWidth: "100%",
  },
  "& .MuiTab-textColorInherit": {
    opacity: 1,
  },
  width: "270px",
  minWidth: "270px",
  maxWidth: "270px",
});

const StyledTab = styled(Tab)({
  marginTop: "15px",
});
const TabContentStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  fontFamily: '"Crimson Text", serif',
};

const Dashboard = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const iconStyle = {
    fontSize: "20px",
    marginRight: "15px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
  };

  return (
    <>
      <TabsContainer>
        <TabContext value={value}>
          <StyledTabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                display: "none",
              },
            }}
            aria-label="admin tabs"
          >
            <h3 gutterBottom>Admin Panel</h3>
            <StyledTab
              label={
                <Box sx={TabContentStyles}>
                  <EditNote sx={iconStyle} />
                  Notice
                </Box>
              }
              value="1"
            />
            <Tab
              label={
                <Box sx={TabContentStyles}>
                  <ArticleOutlined sx={iconStyle} />
                  Articles & Books
                </Box>
              }
              value="2"
            />
          </StyledTabs>

          <Box sx={{ flexGrow: "1" }}>
            <TabPanel value="1">
              <Notice />
            </TabPanel>
          </Box>
        </TabContext>
      </TabsContainer>
    </>
  );
};

>>>>>>> 4fb5b03226a68476223651aeb14318c8dcb1b657
export default Dashboard;
