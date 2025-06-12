import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Benefits from '../components/home/Benefits';
import Portfolio from '../components/home/Portfolio';
import Services  from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import Clients from '../components/home/Clients';
import CTA from '../components/home/CTA';

const Home: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Hello Lime | Comunicación digital con sabor fresco';
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <Testimonials />
      <Clients />
      <CTA />
    </>
  );
};

export default Home;