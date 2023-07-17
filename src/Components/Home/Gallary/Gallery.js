import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import axios from "../../../API/axios";
import Loading from "../../Loading";

const GalleryComponent = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("/gallery");
      const transformedImages = response.data.items.map((item) => ({
        original: item.image,
        thumbnail: item.image,
        originalAlt: `Image ${item._id}`,
        thumbnailAlt: `Thumbnail ${item._id}`,
      }));
      setImages(transformedImages);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

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
