import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArticleIcon from "@mui/icons-material/Article";

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
          <Link to="/dashboard/events" style={{ textDecoration: "none" }}>
            <Card sx={{ border: "1px solid var(--border-clr)" }}>
              <CardContent>
                <EventIcon sx={{ fontSize: 48, color: "var(--primary-clr)" }} />
                <Typography variant="h5">Events</Typography>
                <Typography variant="body2">View upcoming events</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/dashboard/notice" style={{ textDecoration: "none" }}>
            <Card sx={{ border: "1px solid var(--border-clr)" }}>
              <CardContent>
                <AnnouncementIcon
                  sx={{ fontSize: 48, color: "var(--primary-clr)" }}
                />
                <Typography variant="h5">Notices</Typography>
                <Typography variant="body2">
                  Check out important notices
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/dashboard/gallery" style={{ textDecoration: "none" }}>
            <Card sx={{ border: "1px solid var(--border-clr)" }}>
              <CardContent>
                <PhotoLibraryIcon
                  sx={{ fontSize: 48, color: "var(--primary-clr)" }}
                />
                <Typography variant="h5">Gallery</Typography>
                <Typography variant="body2">
                  Browse through our photo gallery
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/dashboard/Books" style={{ textDecoration: "none" }}>
            <Card sx={{ border: "1px solid var(--border-clr)" }}>
              <CardContent>
                <MenuBookIcon
                  sx={{ fontSize: 48, color: "var(--primary-clr)" }}
                />
                <Typography variant="h5">Books</Typography>
                <Typography variant="body2">Upload Books</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/dashboard/articles" style={{ textDecoration: "none" }}>
            <Card sx={{ border: "1px solid var(--border-clr)" }}>
              <CardContent>
                <ArticleIcon
                  sx={{ fontSize: 48, color: "var(--primary-clr)" }}
                />
                <Typography variant="h5">Articles</Typography>
                <Typography variant="body2">Post Articles</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
