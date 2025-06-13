import React from 'react';
import { Link } from 'react-router-dom';
import { Diamond as Lemon, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import LimeLogo from '../../assets/images/LIME-13.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-primary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={LimeLogo} width={'200px'}/>
            </div>
            <p className="text-gray-300">
              Impulsamos tu marca con contenido visual, estratégico y auténtico desde 2018.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/limesocialmedia?igsh=MWU4b2Q3dXQyOWU3dg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="text-white hover:text-lime-primary transition-colors" />
              </a>
              <a href="https://www.facebook.com/share/1CFZsS6i3J/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="text-white hover:text-lime-primary transition-colors" />
              </a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="text-white hover:text-lime-primary transition-colors" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/servicios" className="text-gray-300 hover:text-lime-primary transition-colors">Servicios</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-lime-primary transition-colors">Blog</Link></li>
              <li><Link to="/diagnostico" className="text-gray-300 hover:text-lime-primary transition-colors">Diagnóstico Digital</Link></li>
              <li><Link to="/cotiza" className="text-gray-300 hover:text-lime-primary transition-colors">Cotiza Ahora</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-lime-primary" />
                <a href="mailto:hola@hellolime.com" className="text-gray-300 hover:text-lime-primary transition-colors">
                  info@hellolime.com.gt
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-lime-primary" />
                <a href="tel:+123456789" className="text-gray-300 hover:text-lime-primary transition-colors">
                  +(502) 3031-2752
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-lime-primary mt-1" />
                <span className="text-gray-300">
                  Atlantis, Zona 10, Guatemala
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suscríbete</h4>
            <p className="text-gray-300 mb-4">
              Recibe nuestros tips y novedades en tu correo
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full p-3 rounded bg-dark-secondary text-white border border-gray-600 focus:border-lime-primary focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p className="mb-2">&copy; {new Date().getFullYear()} Hello Lime. Todos los derechos reservados.</p>
          <p className="text-sm">
            <Link to="/privacidad" className="hover:text-lime-primary">
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;