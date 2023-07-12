import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const ErrorContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
}));

const ErrorText = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "bold",
  marginBottom: "1rem",
}));

const ErrorButton = styled(Button)(({ theme }) => ({
  marginTop: "2rem",
}));

const NotFoundPage = () => {
  return (
    <ErrorContainer>
      <ErrorText variant="h1">404</ErrorText>
      <Typography variant="h5">Oops! Page not found.</Typography>
      <ErrorButton component={Link} to="/" variant="contained" color="primary">
        Go Home
      </ErrorButton>
    </ErrorContainer>
  );
};

export default NotFoundPage;
