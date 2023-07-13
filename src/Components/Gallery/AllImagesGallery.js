import { useState, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import axios from "../../API/axios";

import lightTexture from "../../Assets/Images/light-texture.jpg";
import "./gallery.css";
import Loading from "../Loading";

export default function AllImagesGallery() {
  const [index, setIndex] = useState(-1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("/gallery");
      const transformedImages = response.data.items.map((item) => ({
        src: item.image,
        original: item.image,
        width: 320,
        height: 213,
      }));
      setImages(transformedImages);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  const containerStyle = {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    paddingRight: "7rem",
    paddingLeft: "7rem",
    backgroundImage: `url(${lightTexture})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    maxWidth: "100vw",
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={containerStyle}>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
}
