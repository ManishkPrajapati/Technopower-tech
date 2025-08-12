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
            <FaMapMarkerAlt className="info-icon" />
            <div className="info-content">
              <h5>Offices Location</h5>
              <p>
                02, Bhawani Nagar, I/F of RMJ Motors Showroom, J.K. Road, Bhopal
              </p>
            </div>
          </Col>
          <Col md={4} className="info-box">
            <FaHeadset className="info-icon" />
            <div className="info-content">
              <h5>Customer Support</h5>
              <p>
                Providing excellent service is important for growth in all of the situations.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default InfoSection;