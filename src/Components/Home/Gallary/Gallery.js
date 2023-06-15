import React from 'react';
import { styled } from '@mui/material/styles';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Gallery } from 'react-grid-gallery';
import img1 from '../../../Assets/Images/download (2).jpg'
import img2 from '../../../Assets/Images/download.jpg'

const images = [
{
original: img1,
thumbnail: img1,
originalAlt: 'Image 1',
thumbnailAlt: 'Thumbnail 1',
},
{
original: img2,
thumbnail: img2,
originalAlt: 'Image 2',
thumbnailAlt: 'Thumbnail 2',
},
// Add more images as needed
];

const GalleryComponent = () => {
return (
<div>
<ImageGallery
     items={images}
     showFullscreenButton={false}
     showPlayButton={false}
     autoPlay
     slideInterval={5000}
   />
</div>
);
};

export default GalleryComponent;