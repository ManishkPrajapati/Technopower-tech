// File: src/components/TopBar.jsx
import React from 'react';
import { FaPhone, FaEnvelope, FaDownload, FaPaperPlane } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container-fluid">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start gap-2 gap-md-0">
          <div className="px-md-2">
            <strong>TechnoPower Tech Solutions</strong>
          </div>
          <div className="px-md-2">
            <FaPhone className="me-1" />
            <a href="tel:+919425813624" className="text-white text-decoration-none">
              (+91) 9425 813 624
            </a>
          </div>
          <div className="px-md-2">
            <FaEnvelope className="me-1" />
            <a href="mailto:technolab@gmail.com" className="text-white text-decoration-none">
              technolab@gmail.com
            </a>
          </div>
          <div className="px-md-2">
            <FaPaperPlane className="me-1" />
            <strong>Approved By</strong> BIS APPROVED AND NABL ACCREDITED LABORATORY
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
