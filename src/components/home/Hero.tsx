import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Diamond as Lemon, MessageCircle, FileSpreadsheet } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-lime-primary rounded-bl-[30%]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 mb-6 bg-lime-primary/10 px-4 py-2 rounded-full">
              <Lemon size={20} className="text-lime-primary" />
              <span className="text-lime-dark font-medium">+6 años de experiencia</span>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Transforma tu presencia digital con{' '}
              <span className="text-lime-primary">estrategias que convierten</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Descubre cómo está tu marca en redes sociales y obtén un plan personalizado para alcanzar tus objetivos.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link 
                to="/diagnostico" 
                className="btn btn-primary btn-lg group"
              >
                Diagnóstico Digital Gratuito
                <FileSpreadsheet className="ml-2 group-hover:scale-110 transition-transform" size={20} />
              </Link>
              <a 
                href="https://wa.me/50230312752"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#25D366] text-white hover:bg-[#128C7E] btn-lg group"
              >
                Hablar por WhatsApp
                <MessageCircle className="ml-2 group-hover:scale-110 transition-transform" size={20} />
              </a>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0"
            >
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-lime-primary">200+</div>
                <div className="text-sm text-gray-600">Clientes Activos</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-lime-primary">95%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-lime-primary">40%</div>
                <div className="text-sm text-gray-600">Más Ventas</div>
              </div>
            </motion.div> */}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mx-auto lg:mx-0 max-w-md lg:max-w-full"
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6476118/pexels-photo-6476118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Equipo creativo de Hello Lime" 
                className="rounded-2xl shadow-xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lime-primary rounded-2xl -z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-accent rounded-2xl -z-0"></div>
            </div>

            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-sm font-medium text-gray-800">Resultados Promedio</div>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-lime-primary rounded-full"></div>
                  <div className="ml-2 text-sm">+150% Engagement</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-lime-primary rounded-full"></div>
                  <div className="ml-2 text-sm">+40% Conversiones</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-lime-primary rounded-full"></div>
                  <div className="ml-2 text-sm">+80% Alcance</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;