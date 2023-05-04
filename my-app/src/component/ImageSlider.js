import React, { useState } from 'react';

const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ];
  
  const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPreviousSlide = () => {
      const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(index);
    };
  
    const goToNextSlide = () => {
      const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(index);
    };
  
    return (
      <div className="slider-container">
        <LeftArrow onClick={goToPreviousSlide} />
        <Image src={images[currentIndex]} />
        <RightArrow onClick={goToNextSlide} />
      </div>
    );
  };
  
  const LeftArrow = ({ onClick }) => (
    <div className="arrow left" onClick={onClick}>
      &lt;
    </div>
  );
  
  const RightArrow = ({ onClick }) => (
    <div className="arrow right" onClick={onClick}>
      &gt;
    </div>
  );
  
  const Image = ({ src }) => (
    <div className="image-container">
      <img src={src} alt="slider" className="image" />
    </div>
  );
  
  export default ImageSlider;