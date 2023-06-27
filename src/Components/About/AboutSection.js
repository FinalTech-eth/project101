import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import img1 from '../../Assets/Images/download (2).jpg'
import img2 from '../../Assets/Images/download.jpg'

const AboutSection = () => {
    const containerStyle = {
        padding: "4rem 7rem"
    };
    const heroContainerStyle = {
        position: 'relative',
        height: '350px',
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: '2rem',
        width: '100vw',
        left: 0,
        right: 0,
    };

    const heroTextStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#fff',
    };

    const titleStyle = {
        marginBottom: '4rem',
        fontWeight: 'bold',
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        borderRadius: '1rem',
    };

    const contentStyle = {
        // marginTop: '4rem',
    };

    return (
        <Box m={0}>
            <div style={heroContainerStyle}>
                <div style={heroTextStyle}>
                    <Typography variant="h4" component="h1">
                        Welcome to Our Church
                    </Typography>
                    <Typography variant="subtitle1">
                        A place of love, faith, and community
                    </Typography>
                </div>
            </div>

            <Typography variant="h5" align="center" style={titleStyle}>
                About Us
            </Typography>

            <Grid container spacing={4} alignItems="center" style={containerStyle}>
                <Grid item xs={12} md={6}>
                    <img
                        src={img1}
                        alt="Church"
                        style={imageStyle}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="body1" style={contentStyle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
                        massa pharetra, vestibulum urna nec, laoreet ante. Quisque vitae
                        fermentum tellus. Nulla dapibus augue ut ligula malesuada finibus.
                        Nullam ac fermentum justo. Sed varius feugiat sem, id auctor magna
                        vestibulum at. Sed maximus, lectus ut dapibus fringilla, mauris
                        mauris maximus urna, a interdum mauris lectus id neque. Nullam nec
                        purus id nisl fringilla laoreet. In vestibulum tempor tortor, sit
                        amet gravida neque gravida non. Donec fringilla, sem vel rutrum
                        sagittis, mi neque bibendum mi, sed tristique ligula nunc in odio.
                        Nulla vestibulum volutpat neque, a consectetur sem fringilla et.
                        Integer suscipit massa eget enim maximus, nec lacinia nulla
                        hendrerit.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutSection;
