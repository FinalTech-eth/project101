import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Box, Tab, Tabs, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';

import '../../Components/Home/Card/card.css'

const CardContainer = styled(Card)(() => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: "2rem",
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.02)',
    },

}));

const CardOverlay = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    transition: 'background-color 0.3s ease',
    // '&:hover': {
    //     backgroundColor: 'rgba(0, 0, 0, 0.7)',
    // },
    // padding: '1.875rem 1.8125rem 2.1875rem'
}));


export default function MediaCard({url, title, date}) {
    return (
        <CardContainer>
            <CardMedia component="img" height="200" image={url} alt={title} />

            <CardOverlay>
                <CardContent>
                    <Typography variant="h6" component="div" sx={{  textAlign: 'left' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{  textAlign: 'left' }}>
                        {date}
                    </Typography>
                </CardContent>
            </CardOverlay>
        </CardContainer>
    );
}


