import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

const contactData = [
  {
    city: "Edmonton, Alberta",
    contactPerson: "Bro. Tadyose Asfaw",
    phoneNumber: "(587)-710-3558",
    address: "9950 -148 street, T5N 3E9",
  },
  {
    city: "Toronto, Ontario",
    contactPerson: "Bro. Frezer Getachew",
    phoneNumber: "(647)-702-2625",
    address: "Address",
  },
  {
    city: "Ottawa, Ontario",
    contactPerson: "Bro. Eyob Melesse",
    phoneNumber: "(819)-712-1100",
    address: "1196 Wellington Street, K1Y 2Z5",
  },
];

const SectionContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  padding: "7rem 1rem",
  margin: "7rem 0",
  backgroundColor: "#f5f5f5",
}));

const CardContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    width: "50%",
    margin: "0 auto",
  },
  [theme.breakpoints.up("lg")]: {
    width: "40%",
  },
}));

const Contact = () => {
  return (
    <SectionContainer>
      {contactData.map((contact) => (
        <CardContainer key={contact.city}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", marginBottom: "1rem" }}
            >
              {contact.city}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
              Contact Person: {contact.contactPerson}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
              Phone Number: {contact.phoneNumber}
            </Typography>
            <Typography variant="body1">Address: {contact.address}</Typography>
          </CardContent>
        </CardContainer>
      ))}
    </SectionContainer>
  );
};

export default Contact;
