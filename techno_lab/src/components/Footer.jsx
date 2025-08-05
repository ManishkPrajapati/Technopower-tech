import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneVolume,
  FaClock
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-bgg border-top py-5 bg-light text-dark">
      <div className="container">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-lg-3 col-md-6 mb-4 border-end">
            <img
              src="src/assets/icons/logo.jpg"
              alt="TechnoPower Lab Logo"
              className="mb-2"
              style={{ maxHeight: 60 }}
            />
            <p className="mt-2">
              TechnoPower Tech Solutions is working on new international standard for developing quality, administrative and technical systems.
            </p>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/krishnalabbpl" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/krishnalabbpl/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4 border-end">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-decoration-none text-dark">About Us</a></li>
              <li><a href="#contact" className="text-decoration-none text-dark">Contact Us</a></li>
              <li><a href="#services" className="text-decoration-none text-dark">Facilities</a></li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="col-lg-3 col-md-12 mb-4 border-end">
            <h5 className="fw-bold">Find Us Here</h5>
            <div className="ratio ratio-4x3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.075943348692!2d77.434058!3d23.268285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69003af7be0d%3A0xf16be2bdff75e7a3!2sTECHNOPOWER%20TECH%20SOLUTIONS%20LLP!5e0!3m2!1sen!2sin!4v1694340079339!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TechnoPower Tech Solutions Location"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold">Get In Touch</h5>
            <p><FaMapMarkerAlt className="me-2" /> No.1, RAF Building, Special Area, Shed No.11,B- Block, 60 Feet Rd, Govindpura Industrial Area, Bhopal, Madhya Pradesh 462023</p>
            <p><FaEnvelope className="me-2" /> <a href="mailto:krishnalab12@gmail.com" className="text-dark">technolab12@gmail.com</a></p>
            <p><FaPhoneVolume className="me-2" /> <a href="tel:+919425813624" className="text-dark">+91-9425 813 624</a></p>
            <p><FaClock className="me-2" /> Mon-Sat: 10:00am to 6:00pm</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
