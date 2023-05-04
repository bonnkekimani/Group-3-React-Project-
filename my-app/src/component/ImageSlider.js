import React, { useState } from 'react';

function ImageSlider({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-carousel">
      <div className="image-carousel-arrow" onClick={handlePrev}>
        &lt;
      </div>
      <img src={images[activeIndex]} alt="" className="image-carousel-image" />
      <div className="image-carousel-arrow" onClick={handleNext}>
        &gt;
      </div>
    </div>
  );
}
  
  export default ImageSlider;