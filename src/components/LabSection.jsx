import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCertificate, FaAward, FaCheckCircle } from "react-icons/fa";
import labImage from '../assets/slider/WhatsApp4.jpg'
import "../styles/LabSection.css";

const LabSection = () => {
  return (
    <section className="lab-section-wrapper py-5">
      <Container className="lab-section">
        <Row className="align-items-center g-4">
          {/* Left Image */}
          <Col md={6} lg={5}>
            <div className="image-container">
              <img 
                src={labImage} 
                alt="TechnoPower Tech Solutions Laboratory Facility" 
                className="img-fluid lab-image" 
              />
              <div className="image-overlay">
                <div className="certification-badge">
                  <FaCertificate className="badge-icon" />
                  <span>NABL Certified</span>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Content */}
          <Col md={6} lg={7}>
            <div className="content-wrapper">
              <div className="section-header">
                <h2 className="section-title">
                  TechnoPower Tech Solutions
                  <span className="title-accent"></span>
                </h2>
                <div className="subtitle-badge">
                  <FaAward className="me-2" />
                  NABL Accredited Laboratory
                </div>
              </div>
              
              <div className="content-body">
                <p className="main-description">
                  TechnoPower Tech Solutions is an accredited laboratory from the 
                  <strong> National Accreditation Board for Testing and Calibration Laboratories (NABL)</strong>, 
                  an autonomous body under the aegis of the Department of Science & Technology, Government of India.
                </p>
                
                <div className="certification-details">
                  <div className="cert-item">
                    <FaCheckCircle className="cert-icon" />
                    <span><strong>Certification No:</strong> 7016</span>
                  </div>
                  <div className="cert-item">
                    <FaCheckCircle className="cert-icon" />
                    <span><strong>Accredited by:</strong> Govt. of India</span>
                  </div>
                  <div className="cert-item">
                    <FaCheckCircle className="cert-icon" />
                    <span><strong>Standards:</strong> ISO/IEC 17025:2017</span>
                  </div>
                </div>

                <div className="cta-section">
                  <Button className="lab-cta-button me-3">
                    View Certifications
                  </Button>
                  <Button variant="outline-primary" className="lab-outline-button">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LabSection;