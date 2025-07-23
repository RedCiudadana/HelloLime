import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import WhitepaperPopup from './components/common/WhitepaperPopup';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import Quote from './pages/Quote';
import Diagnostico from './pages/Diagnostico';
import Privacy from './pages/Privacy';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/portafolio/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cotiza" element={<Quote />} />
          <Route path="/diagnostico" element={<Diagnostico />} />
          <Route path="/privacidad" element={<Privacy />} />
        </Routes>
      </main>
      <WhatsAppButton />
      {/* <WhitepaperPopup /> */}
      <Footer />
    </div>
  );
}

export default App;