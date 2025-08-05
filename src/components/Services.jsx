import React from 'react';
import machine1 from '../assets/images/testing.jpg';

const services = [
  {
    title: 'Transformer Testing',
    description: 'These materials need to be tested for quality and specification.',
    image: machine1,
    link: 'mechanical-testing-building-materials.html',
  },
  {
    title: 'Insulation Resistance Test',
    description: 'Ensures safety and reliability by checking insulation resistance.',
    image: machine1,
    link: 'insulation-test.html',
  },
  {
    title: 'Circuit Breaker Analysis',
    description: 'Detailed breaker performance and timing evaluation.',
    image: machine1,
    link: 'breaker-analysis.html',
  },
];

function Services() {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5"><b>Our Services</b></h2>
        
        {services.map((service, index) => (
          <div className="row align-items-center mb-5" key={index}>
            <div className={`col-md-6 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
              <img
                src={service.image}
                alt={service.title}
                className="img-fluid shadow-sm rounded"
                style={{
                  maxHeight: '300px',
                  objectFit: 'contain',
                  width: '100%',
                  backgroundColor: '#f9f9f9',
                  padding: '4mm'
                }}
              />
            </div>

            <div className={`col-md-6 ${index % 2 !== 0 ? 'order-md-1' : ''}`}>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <a href={service.link} className="btn btn-outline-primary">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
