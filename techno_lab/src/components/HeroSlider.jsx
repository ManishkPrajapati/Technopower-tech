import React from 'react';

import what1 from '../assets/slider/WhatsApp1.jpg';
import what2 from '../assets/slider/WhatsApp2.jpg';
import what3 from '../assets/slider/WhatsApp3.jpg';
import what4 from '../assets/slider/WhatsApp4.jpg';

import '../styles/HeroSlider.css'; // for custom arrow styles

const images = [
  { src: what1, alt: 'lab1' },
  { src: what2, alt: 'lab2' },
  { src: what3, alt: 'lab3' },
  { src: what4, alt: 'lab4' }
];

function HeroSlider() {
  return (
    <section
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="4000"
      data-bs-wrap="true"
    >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            key={index}
            style={{ height: '500px' }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="d-block w-100"
              style={{
                objectFit: 'contain',
                height: '100%',
              }}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon custom-arrow" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon custom-arrow" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
}

export default HeroSlider;
