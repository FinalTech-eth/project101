import LightGallery from 'lightgallery/react';


import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import image from '../../../Assets/Images/logo.jpg'

import './gallery.css'

function Gallery() {
    const onInit = () => {
    };
    console.log('lightGallery has been initialized');


    return (
        <div className="gallery_container">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="custom-wrapper-class"
                onBeforeSlide={onBeforeSlide}
            >
                <a href="img/img1.jpg">
                    <img alt="img1" src={image} />
                </a>
                <a href="img/img2.jpg">
                    <img alt="img1" src={image} />
                </a>
                <a href="img/img1.jpg">
                    <img alt="img1" src={image} />
                </a>
                <a href="img/img2.jpg">
                    <img alt="img1" src={image} />
                </a>
            </LightGallery>
        </div>
    );
}



export default Gallery


