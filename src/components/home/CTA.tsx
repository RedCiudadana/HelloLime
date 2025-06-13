import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, ArrowRight, FileSpreadsheet } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whatsappNumber = '+50230312752'; // Replace with actual WhatsApp number
  const message = 'Hola, me gustaría información sobre sus servicios de marketing digital';

  return (
    <section className="py-20 bg-lime-primary">
      <div className="container">
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-20 bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-accent/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Listo para potenciar tu marca en redes sociales?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Elige la opción que mejor se adapte a tus necesidades
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-lime-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileSpreadsheet className="text-lime-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Diagnóstico Gratuito</h3>
                <p className="text-gray-600 mb-6">Analiza tu presencia digital y recibe recomendaciones personalizadas</p>
                <Link 
                  to="/diagnostico"
                  className="btn btn-primary w-full"
                >
                  Comenzar Diagnóstico
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-[#25D366]" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Consulta Directa</h3>
                <p className="text-gray-600 mb-6">Conversemos sobre tus objetivos y cómo podemos ayudarte</p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#25D366] text-white hover:bg-[#128C7E] w-full"
                >
                  Chatear por WhatsApp
                  <MessageCircle className="ml-2" size={18} />
                </a>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-lime-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="text-lime-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Solicitar Propuesta</h3>
                <p className="text-gray-600 mb-6">Recibe una cotización personalizada para tu proyecto</p>
                <Link 
                  to="/cotiza"
                  className="btn btn-outline w-full"
                >
                  Pedir Cotización
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;