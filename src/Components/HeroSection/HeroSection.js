import React from 'react'
import { Typography } from '@mui/material';

import topTornEdge from '../../Assets/Images/beige-torn-edge.png'

const HeroSection = ({ url }) => {

    const heroContainerStyle = {
        position: 'relative',
        height: '80vh',
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
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
    const edgeImageStyle = {
        backgroundImage: `url(${topTornEdge})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '-48px',
        zIndex: 100,
        height: '50px',
    }

    return (
        <div>
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
            <div style={edgeImageStyle} ></div>
        </div>
    )
}

export default HeroSection