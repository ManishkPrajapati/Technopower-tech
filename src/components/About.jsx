import React from 'react';
import machine1 from '../assets/images/ct_testing.jpg';
import isoImg from '../assets/images/iso.jpg';
import nablImg from '../assets/images/nabl.jpg';
import "../styles/About.css"

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="section-title mb-3">About Our Laboratory</h2>
            <p className="section-subtitle text-muted">
              Trusted testing solutions with international accreditation and quality standards
            </p>
          </div>
        </div>

        <div className="row justify-content-center text-center">
          {/* Column 1 */}
          <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center mb-4">
            <div className="about-card">
              <div className="image-wrapper">
                <img
                  src={machine1}
                  alt="TechnoPower Tech Solutions Laboratory Equipment"
                  className="about-image"
                />
              </div>
              <div className="card-content">
                <h5 className="card-title">TechnoPower Tech Solutions</h5>
                <p className="card-text">
                  NABL accredited lab recognized by the Department of Science & Technology, Govt. of India.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center mb-4">
            <div className="about-card">
              <div className="image-wrapper">
                <img
                  src={isoImg}
                  alt="ISO Certification Standards"
                  className="about-image"
                />
              </div>
              <div className="card-content">
                <h5 className="card-title">ISO Certified Facility</h5>
                <p className="card-text">
                  We follow strict ISO standards to ensure precision and quality in our testing services.
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center mb-4">
            <div className="about-card">
              <div className="image-wrapper">
                <img
                  src={nablImg}
                  alt="NABL Accreditation Certificate"
                  className="about-image"
                />
              </div>
              <div className="card-content">
                <h5 className="card-title">NABL Accredited</h5>
                <p className="card-text">
                  Our lab maintains internationally recognized quality standards in testing and calibration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;