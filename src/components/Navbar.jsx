import React, { useState, useEffect } from 'react';
import logo from '../assets/icons/logo.png';
import "../styles/Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu after click
  const handleNavClick = (callback) => {
    if (callback) callback();
    setIsMenuOpen(false);
    document.querySelector(".navbar-collapse")?.classList.remove("show");
  };

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="TechnoPower Tech Solutions Logo" className="logo-img" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  });
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => handleNavClick()}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={() => handleNavClick()}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => handleNavClick()}>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link quote-link" href="#contact" onClick={() => handleNavClick()}>
                Get Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
