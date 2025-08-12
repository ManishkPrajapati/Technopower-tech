import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSlider from './components/HeroSlider';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import ContactSection from './components/ContactSection.jsx';
import LabSection from './components/LabSection.jsx';

function App() {
  return (
    <>
      <Navbar />

      <HeroSlider />
      <About />

      <section id="about">
        <LabSection />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
}


export default App;