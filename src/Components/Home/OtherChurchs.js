import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import img1 from '../../Assets/Images/download (2).jpg';
import img2 from '../../Assets/Images/download.jpg';
import bgimage from '../../Assets/Images/photo_5823502271126815190_y.jpg'
const churchData = [
    {
        id: 1,
        title: 'Church 1',
        description: 'Description 1',
        imageUrl: img1,
        websiteUrl: 'https://church1.com',
    },
    {
        id: 2,
        title: 'Church 2',
        description: 'Description 2',
        imageUrl: img2,
        websiteUrl: 'https://church2.com',
    },
    {
        id: 1,
        title: 'Church 1',
        description: 'Description 1',
        imageUrl: img1,
        websiteUrl: 'https://church1.com',
    },
    {
        id: 2,
        title: 'Church 2',
        description: 'Description 2',
        imageUrl: img2,
        websiteUrl: 'https://church2.com',
    },

];

const SectionContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    padding: '7rem 0',
    margin: '7rem 0',
    backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}));
const Overlay = styled('div')(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 50, 0.7)',
    backdropFilter: 'blur(5px)', // Optional: Add blur effect to the overlay
}));


const CardContainer = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textDecoration: 'none',
    zIndex: "1",
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    cursor: 'poiner',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
        width: 'calc(50% - 16px)',
        margin: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
        width: 'calc(33.33% - 16px)',
        margin: theme.spacing(1),
    },
}));

const OtherChurchs = () => {
    return (
        <SectionContainer>
            <Overlay />
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
                <Typography sx={{ zIndex: '1', mb: "2rem"}} variant="h4" component="h2" color="white" gutterBottom>
                    Other Churches
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" gap={2}>
                    {churchData.map(church => (
                        <CardContainer
                            key={church.id}
                            component="a"
                            href={church.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <CardMedia component="img" height="200" image={church.imageUrl} alt={church.title} />
                            <CardContent>
                                <Typography variant="h6" sx={{ textAlign: 'center'}}>
                                    {church.title}
                                </Typography>
                                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                    {church.description}
                                </Typography>
                            </CardContent>
                        </CardContainer>
                    ))}
                </Box>
            </Box>
        </SectionContainer>
    );
};

export default OtherChurchs;
