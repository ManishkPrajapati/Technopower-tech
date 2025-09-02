import React, { useRef, useState } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneVolume,
  FaClock,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import logo from '../assets/icons/logo.png';
import "../styles/Footer.css"

function Footer() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await emailjs.sendForm('service_rsv62gk', 'template_hrhm8xq', form.current, '1SvseIpC3Fj_94IWs');
      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error(error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="container">
          <div className="row g-4">
            {/* Company Information */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-column">
                <div className="footer-brand">
                  <img
                    src={logo}
                    alt="TechnoPower Tech Solutions Logo"
                    className="footer-logo"
                  />
                  <h5 className="brand-name">TechnoPower Tech Solutions</h5>
                </div>
                
                <p className="company-description">
                  TechnoPower Tech Solutions is working on new international standards for developing quality, administrative and technical systems with NABL accreditation.
                </p>

                <div className="contact-info">
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <span>No.1, RAF Building, Special Area, Shed No.11, B-Block, 60 Feet Rd, Govindpura Industrial Area, Bhopal, Madhya Pradesh 462023</span>
                  </div>
                  
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <a href=" technopower.tech.solu@gmail.com" className="contact-link">
                       technopower.tech.solu@gmail.com
                    </a>
                  </div>
                  
                  <div className="contact-item">
                    <FaPhoneVolume className="contact-icon" />
                    <div className="contact-link">
                      <a href="tel:+917554517726">+91 75545 17726</a> |{" "}
                      <a href="tel:+916232179524">+91 62321 79524</a>
                    </div>
                  </div>

                  
                  <div className="contact-item">
                    <FaClock className="contact-icon" />
                    <span>Mon-Sat: 10:00am to 6:00pm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-column">
                <div className="section-header">
                  <span className="header-accent">▴</span>
                  <h5>Connect with us / Get Quote</h5>
                </div>
                
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="user_name" 
                      className="form-input" 
                      placeholder="Your Name*" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="user_email" 
                      className="form-input" 
                      placeholder="Your Email*" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-group">
                    <textarea 
                      name="message" 
                      rows="3" 
                      className="form-input" 
                      placeholder="Your Message*" 
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <FaCheckCircle />
                        Sent Successfully!
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'error' && (
                    <div className="error-message">
                      Failed to send message. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="col-lg-4 col-md-12">
              <div className="footer-column">
                <h5 className="map-title">Find Us Here</h5>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.075943348692!2d77.434058!3d23.268285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69003af7be0d%3A0xf16be2bdff75e7a3!2sTECHNOPOWER%20TECH%20SOLUTIONS%20LLP!5e0!3m2!1sen!2sin!4v1694340079339!5m2!1sen!2sin"
                    className="map-iframe"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TechnoPower Tech Solutions Location"
                  />
                </div>
                
                <div className="map-info">
                  <p><strong>Visit Our Laboratory</strong></p>
                  <p className="text-muted">NABL Accredited Testing Facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">
                Copyright © 2025 TechnoPower Tech Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;