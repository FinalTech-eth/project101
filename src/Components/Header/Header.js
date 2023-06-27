import React from 'react';
import { Typography, Box } from '@mui/material';

const headerStyles = {
  backgroundColor: '#3f51b5', // Customize the background color
  padding: '24px',
  color: '#fff', // Customize the text color
};

const titleStyles = {
  fontWeight: 'bold',
  fontSize: '2rem',
  marginBottom: '8px',
};

const subtitleStyles = {
  fontSize: '1.2rem',
};

const Header = ({title, subtitle}) => {
  return (
    <Box style={headerStyles} mb={3}>
      <Typography variant="h1" style={titleStyles}>
        {{title}}
      </Typography>
      <Typography variant="subtitle1" style={subtitleStyles}>
        {{subtitle}}
      </Typography>
    </Box>
  );
};

export default Header;
