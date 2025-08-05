import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSlider from './components/HeroSlider';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import ContactSection from './components/ContactSection.jsx';

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSlider />

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </>
  );
}


export default App;