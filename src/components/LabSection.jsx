import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCertificate, FaAward, FaCheckCircle } from "react-icons/fa";
import { SiCssdesignawards } from "react-icons/si";
import { PiCertificate } from "react-icons/pi";
import labImage from '../assets/images/front_gate.jpg';
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
                  <SiCssdesignawards className="badge-icon" />
                  <span>NABL Certified</span>
                </div>
              </div>
              <div className="image-overla">
                <div className="certification-badg">
                  <SiCssdesignawards className="badge-icon" />
                  <span>BIS Certified</span>
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
                  TechnoPower Tech Solutions specializes in comprehensive transformer testing services.
                  Equipped to Test transformers up to 350 KVA, we ensure Reliable and Accurate results for a wide range of transformer types with precision-driven diagnostics and advanced testing capabilities.
                </p>
                
                <div className="certification-details">
                  <div className="cert-item">
                    <FaCheckCircle className="cert-icon" />
                    <span><strong>Certification No:</strong> 15808</span>
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
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LabSection;
