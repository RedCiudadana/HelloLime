import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

const WhitepaperPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-6 z-30 w-80"
        >
          <div className="bg-white rounded-xl shadow-xl p-6">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="text-lg font-bold mb-2">
                  ¡Descarga Gratis!
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  "Guía 2025: Potencia tu Negocio con IA en Redes Sociales"
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu email profesional"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-primary text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full btn btn-primary py-2 text-sm flex items-center justify-center"
                  >
                    <Download size={16} className="mr-2" />
                    Descargar Whitepaper
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-2">
                <p className="text-lime-primary font-semibold mb-1">¡Gracias!</p>
                <p className="text-sm text-gray-600">
                  Revisa tu email para descargar la guía
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhitepaperPopup;