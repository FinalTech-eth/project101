import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/material/styles';

import MediaCard from '../Components/Home/Card/Card'
import EventSection from '../Components/Home/Events';

const SectionContainer = styled('h2')(()=>({
    margin: '110px 7rem'
}))

const Events = () => {
    return <>
        <SectionContainer id='events'>
            <EventSection />
        </SectionContainer>
    </>
}

export {SectionContainer} 
export default Events