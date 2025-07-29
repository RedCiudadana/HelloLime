import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Diamond as Lemon, MessageCircle } from 'lucide-react';
import LimeLogo from '../assets/images/LIME-13.png';

interface FormData {
  name: string;
  email: string;
  phone: string;
  instagram: string;
  service: string;
  comment: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  instagram: '',
  service: '',
  comment: '',
};

const Quote: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    // Update page title
    document.title = 'Cotiza Ahora | Hello Lime';
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxfFiP6atkoY3wm5xdygK6-GgeZgyMnYwNwJGIFExXK9vOx4MvwQNepRNRCSFr2LPAD/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const params = new URLSearchParams();
      params.append('name', formData.name.trim());
      params.append('email', formData.email.trim());
      params.append('phone', formData.phone.trim());
      params.append('instagram', formData.instagram.trim());
      params.append('service', formData.service.trim());
      params.append('comment', formData.comment.trim());
      params.append('timestamp', new Date().toLocaleString('es-GT', { timeZone: 'America/Guatemala' }));

      await fetch(`${SCRIPT_URL}?${params.toString()}`, {
        method: 'GET',
      })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(json => console.log('Respuesta del script:', json))
      .catch(err => console.error('Error al llamar al Apps Script:', err));

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      // Opcional: mostrar error al usuario
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="container">
          <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="lg:w-5/12 relative bg-lime-primary p-12 text-white">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-8">
                  <img src={LimeLogo} style={{ filter: 'brightness(0) invert(1)', width:'250px' }} />
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Listo para transformar tu comunicación digital?
                </h1>
                
                <p className="text-lg mb-8 text-white/90">
                  Completa el formulario y te enviaremos una propuesta personalizada según tus necesidades y objetivos.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Check className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Respuesta en 24h</h3>
                      <p className="text-white/80">Nos comunicaremos contigo en menos de 24 horas hábiles</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Check className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Propuesta a medida</h3>
                      <p className="text-white/80">Creamos soluciones personalizadas según tu presupuesto</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Check className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Diagnóstico gratuito</h3>
                      <p className="text-white/80">Analizamos tu situación actual sin compromiso</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <p className="font-semibold mb-2">¿Prefieres contactarnos directamente?</p>
                  <a
                    href="https://wa.me/50230559906"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-lime-primary rounded-full font-medium hover:bg-gray-100 transition-colors"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Hablemos por WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-7/12 p-8 md:p-12">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full py-12"
                >
                  <div className="w-20 h-20 bg-lime-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Check size={40} className="text-lime-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">¡Solicitud enviada con éxito!</h2>
                  <p className="text-lg text-gray-600 mb-8 max-w-md">
                    Hemos recibido tu solicitud. Nuestro equipo te contactará en las próximas 24 horas hábiles.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-outline"
                  >
                    Enviar otra solicitud
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Solicita tu <span className="text-lime-primary">cotización</span>
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
                          Instagram o nombre del negocio
                        </label>
                        <input
                          type="text"
                          id="instagram"
                          name="instagram"
                          value={formData.instagram}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        ¿Qué servicio te interesa? *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-primary"
                        required
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="estrategia">Estrategia de contenidos</option>
                        <option value="diseno">Diseño gráfico</option>
                        <option value="video">Reels y video marketing</option>
                        <option value="foto">Producción fotográfica</option>
                        <option value="community">Community management</option>
                        <option value="pauta">Pauta digital</option>
                        <option value="otro">Otro / No estoy seguro</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                        Comentario adicional
                      </label>
                      <textarea
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-primary"
                        placeholder="Cuéntanos más sobre tu proyecto o necesidades..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="terms"
                        className="w-4 h-4 text-lime-primary border-gray-300 rounded focus:ring-lime-primary"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                        Acepto la <a href="#" className="text-lime-primary hover:underline">política de privacidad</a> y recibir comunicaciones de Hello Lime
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full btn btn-primary py-3 flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2" size={20} />
                          Envíame mi propuesta personalizada
                        </span>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;