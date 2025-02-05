import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "/image1.jpg", // Replace these with your actual image names in the public folder
    "/image2.jpg",
    "/image3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const getPositionClass = (index) => {
    if (index === currentIndex) return "center";
    if (index === (currentIndex + 1) % images.length) return "right";
    if (index === (currentIndex - 1 + images.length) % images.length) return "left";
    return "hidden";
  };

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div key={index} className={`slide ${getPositionClass(index)}`}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <style jsx>{`
        .slider-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 400px;
          position: relative;
          overflow: hidden;
        }

        .slide {
          position: absolute;
          transition: transform 1s, opacity 1s;
          opacity: 0;
          transform: scale(0.8);
          filter: blur(4px);
        }

        .slide img {
          max-width: 300px;
          max-height: 300px;
          border-radius: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .slide.center {
          transform: scale(1);
          opacity: 1;
          filter: blur(0);
        }

        .slide.left {
          transform: translateX(-120%) scale(0.8);
          opacity: 0.5;
        }

        .slide.right {
          transform: translateX(120%) scale(0.8);
          opacity: 0.5;
        }

        .slide.hidden {
          opacity: 0;
          transform: translateX(0) scale(0.5);
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
