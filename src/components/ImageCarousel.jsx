import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={prevSlide}>
                &#10094;
            </button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button className="carousel-button next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default ImageCarousel;
