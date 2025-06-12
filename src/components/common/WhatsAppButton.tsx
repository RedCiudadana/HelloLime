import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after 1.5 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const whatsappNumber = '+123456789'; // Replace with actual WhatsApp number
  const message = 'Hola, me gustaría información sobre sus servicios de marketing digital';

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="relative">
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 bg-white text-dark-primary rounded-lg shadow-lg p-4 text-sm min-w-64 transition-opacity duration-200">
            <p className="font-medium mb-1">¿Necesitas ayuda con tu marca?</p>
            <p className="text-gray-600">Respuesta inmediata vía WhatsApp 👋</p>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
          </div>
        )}
        
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:bg-[#128C7E] transition-transform hover:scale-110"
          aria-label="Contactar por WhatsApp"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <MessageCircle className="text-white" size={32} />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;