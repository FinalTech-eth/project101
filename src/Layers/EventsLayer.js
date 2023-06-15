import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from '@mui/material/styles';

import MediaCard from '../Components/Home/Card/Card'
import EventSection from '../Components/Home/Events';

const SectionContainer = styled('div')(()=>({
    margin: '110px 7rem'
}))

const Events = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return <>

        {/* <Slider {...settings}>
            <div className='card_gap'>
                <MediaCard />
            </div>
            <div>
                <MediaCard />
            </div>
            <div>
                <MediaCard />
            </div>
            <div>
                <MediaCard />
            </div>
            <div>
                <MediaCard />
            </div>
            <div>
                <MediaCard />
            </div>
        </Slider> */}
        <SectionContainer>
            <EventSection />
        </SectionContainer>
    </>
}

export {SectionContainer} 
export default Events