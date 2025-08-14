import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import InfoSection from "./InfoSection";

// import what1 from "../assets/slider/WhatsApp1.jpg";
// import what2 from "../assets/slider/WhatsApp2.jpg";
// import what3 from "../assets/slider/WhatsApp3.jpg";
// import what4 from "../assets/slider/WhatsApp4.jpg";
import back_office from "../assets/slider/back.jpg";
import front_office from "../assets/slider/front_office.jpg";
import board from "../assets/slider/board.jpg";
import labImage from '../assets/slider/front_office.jpg'
import inside from "../assets/slider/inside.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/HeroSlider.css";

const images = [
  { src: labImage, alt: "front office" },
  { src: back_office, alt: "back office" },
  { src: board, alt: "board" },
  { src: inside, alt: "sitting area" }
  // { src: what1, alt: "lab1" },
  // { src: what2, alt: "lab2" },
  // { src: what3, alt: "lab3" },
  // { src: what4, alt: "lab4" }
];

function HeroSlider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: false
  };

  return (
    <section className="hero-slider-container">
      <div className="slider-content">
        <div className="slider-wrapper">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="slider-item">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="slider-image"
                />
              </div>
            ))}
          </Slider>
        </div>
        
        {/* Content overlay */}
        <div className="content-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              Transformer Testing Laboratory accredited by NABL and BIS
            </h1>
            <button className="quote-button">
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </div>

      {/* Info section at bottom */}
      <div className="info-section-bottom">
        <InfoSection />
      </div>
    </section>
  );
}

export default HeroSlider;