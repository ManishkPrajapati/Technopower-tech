import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMicroscope, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";

import "../styles/InfoSection.css";

function InfoSection() {
  return (
    <section className="info-section">
      <Container>
        <Row>
          <Col md={4} className="info-box">
            <FaMicroscope className="info-icon" />
            <div className="info-content">
              <h5>BIS APPROVED LAB</h5>
              <p>
                TechnoPower Tech Solutions now BIS approved.
              </p>
            </div>
          </Col>
          <Col md={4} className="info-box">
              <a
                href="https://www.google.com/maps?q=23.268285,77.434058"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-start text-decoration-none text-dark"
              >
                <FaMapMarkerAlt className="info-icon" />
                <div className="info-content">
                  <h5>Offices Location</h5>
                  <p>
                    No.1, RAF Building, Special Area, Shed No.11, B-Block, 60 Feet Rd,
                    Govindpura Industrial Area, Bhopal, Madhya Pradesh 462023
                  </p>
                </div>
              </a>
            </Col>
          <Col md={4} className="info-box">
          <a href="#contact" className="d-flex align-items-start text-decoration-none text-dark">
            <FaHeadset className="info-icon" />
            <div className="info-content">
              <h5>Customer Support</h5>
              <p>
                Providing excellent service is important for growth in all of the situations.
              </p>
            </div>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default InfoSection;