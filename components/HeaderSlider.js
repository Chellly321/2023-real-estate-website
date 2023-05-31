import React, { useState, useEffect } from 'react';

// styles and icons 
import './HeaderSlider.css';
import Image1 from '../assets/banner-img.jpg';
import Image2 from '../assets/property-img2.avif';
import Image3 from '../assets/property-img1.webp';
import HomeSearchBar from './HomeSearchBar';

export default function HeaderSlide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Image1, Image2, Image3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [slides.length]);

  return (
    <>
    <div className='slideshow'>
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={index === currentSlide ? 'active' : ''}
        />
      ))}
      <HomeSearchBar />
    </div>
  
    </>
  );
}
