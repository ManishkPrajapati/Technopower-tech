import React from 'react';
import { FaArrowRight, FaCog, FaCheckCircle } from 'react-icons/fa';
import machine1 from '../assets/images/testing_1.jpg';
import "../styles/Services.css"

const services = [
  {
    title: 'Transformer Testing',
    description: 'These materials need to be tested for quality and specification.',
    image: machine1,
    link: 'mechanical-testing-building-materials.html',
    features: [
      'Quality Assurance Testing',
      'Specification Compliance',
      'Performance Analysis',
      'Safety Standards Verification'
    ]
  }
];

function Services() {
  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="section-title mb-3">
              <b>Our Services</b>
              <span className="title-underline"></span>
            </h2>
            <p className="section-subtitle text-muted">
              Professional testing solutions with precision and reliability for various industrial applications
            </p>
          </div>
        </div>
        
        {/* Services Content */}
        {services.map((service, index) => (
          <div className="service-item mb-5" key={index}>
            <div className="row align-items-center g-4">
              {/* Image Column */}
              <div className={`col-md-6 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
                <div className="service-image-container">
                  <img
                    src={service.image}
                    alt={`${service.title} - Professional Testing Equipment`}
                    className="service-image"
                  />
                  <div className="image-overlay">
                    <FaCog className="overlay-icon" />
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className={`col-md-6 ${index % 2 !== 0 ? 'order-md-1' : ''}`}>
                <div className="service-content">
                  <div className="service-badge">
                    <FaCog className="me-2" />
                    Professional Testing
                  </div>
                  
                  <h3 className="service-title">{service.title}</h3>
                  
                  <p className="service-description">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        <FaCheckCircle className="feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Additional Services Teaser */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="more-services-card">
              <h4>Need Custom Testing Solutions?</h4>
              <p className="mb-3">We offer specialized testing services tailored to your specific requirements</p>
              <a href="#contact" className="btn btn-primary btn-lg contact-btn">
                Contact Us for Custom Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;