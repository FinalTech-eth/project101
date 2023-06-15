import React from 'react'
import MediaCard from '../Components/Home/Card/Card'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    
        <Slider {...settings}>
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
        </Slider>
    </>
}

export default Events