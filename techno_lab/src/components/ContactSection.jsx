// File: src/components/ContactSection.jsx
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rsv62gk', 'template_hrhm8xq', form.current, '1SvseIpC3Fj_94IWs')
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        alert('Failed to send the message. Please try again later.');
        console.error(error);
      });
  };

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <p className="text-uppercase small text-muted fw-semibold">
          <span className="me-1 text-warning">▴</span> Connect with us
        </p>
        <h2 className="fw-bold mb-4">Please share your query with us</h2>

        <form ref={form} onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: '720px' }}>
          <div className="row mb-3">
            <div className="col-md-6">
              <input type="text" name="user_name" className="form-control" placeholder="Name*" required />
            </div>
            <div className="col-md-6">
              <input type="email" name="user_email" className="form-control" placeholder="Email*" required />
            </div>
          </div>
          <div className="mb-3">
            <input type="text" name="subject" className="form-control" placeholder="Your inquiry about" />
          </div>
          <div className="mb-3">
            <textarea name="message" rows="4" className="form-control" placeholder="Let us know what you need" required></textarea>
          </div>
          <button type="submit" className="btn btn-warning text-white fw-semibold px-4 py-2">
            Get A Quote →
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
