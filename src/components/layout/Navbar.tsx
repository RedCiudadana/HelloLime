import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Diamond as Lemon, Menu, X, Instagram, Linkedin } from 'lucide-react';
import LimeLogo from '../../assets/images/LIME-13.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          {/* <Lemon size={32} className="text-lime-primary" />
          <span className="text-xl font-poppins font-bold">Hello Lime</span> */}
          <img src={LimeLogo} width={'200px'}/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition-colors hover:text-lime-primary ${
                  isActive ? 'text-lime-primary' : 'text-dark-primary'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          
          {/* Social Media Links */}
          <div className="flex items-center space-x-4 border-l pl-4 border-gray-200">
            <a 
              href="https://instagram.com/hellolime" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-primary hover:text-lime-primary transition-colors"
              aria-label="Síguenos en Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://linkedin.com/company/hellolime" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-primary hover:text-lime-primary transition-colors"
              aria-label="Síguenos en LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <Link
            to="/cotiza"
            className="btn btn-primary rounded-full px-6 py-2 font-medium"
          >
            Cotiza Ahora
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col p-5 space-y-5">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-medium py-2 transition-colors ${
                  isActive ? 'text-lime-primary' : 'text-dark-primary'
                }`
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
          
          {/* Social Media Links for Mobile */}
          <div className="flex items-center space-x-4 py-2">
            <a 
              href="https://instagram.com/hellolime" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-primary hover:text-lime-primary transition-colors"
              aria-label="Síguenos en Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://linkedin.com/company/hellolime" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-primary hover:text-lime-primary transition-colors"
              aria-label="Síguenos en LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <Link
            to="/cotiza"
            className="btn btn-primary rounded-full text-center"
            onClick={closeMenu}
          >
            Cotiza Ahora
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;