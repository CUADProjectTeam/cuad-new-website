import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
    useEffect(() => {
        const preloadImages = () => {
            const imagePromises = images.map((src) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            Promise.all(imagePromises)
                .then(() => { })
                .catch((error) => console.error('Error preloading images:', error));
        };

        preloadImages();
    }, [images]);

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
            {images.length > 1 && <button className="carousel-button prev" onClick={prevSlide}>
                &#10094;
            </button>}
            {/* <div
                className="carousel-image"
                style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    width: '100%',
                    maxHeight: '100%',
                    backgroundRepeat: 'no-repeat'
                }}>
            </div> */}
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            {images.length > 1 && <button className="carousel-button next" onClick={nextSlide}>
                &#10095;
            </button>}
        </div>
    );
};

export default ImageCarousel;
