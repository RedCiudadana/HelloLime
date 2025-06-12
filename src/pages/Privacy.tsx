import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

const Privacy: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    document.title = 'Política de Privacidad | Hello Lime';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Política de <span className="text-lime-primary">Privacidad</span>
              </h1>
              <p className="text-xl text-gray-600">
                Tu privacidad es importante para nosotros
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Shield className="text-lime-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Datos Protegidos</h3>
                    <p className="text-gray-600">
                      Tus datos personales están seguros y protegidos bajo estrictos protocolos de seguridad.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Lock className="text-lime-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Uso Responsable</h3>
                    <p className="text-gray-600">
                      Solo utilizamos tu información para los fines específicamente autorizados.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Eye className="text-lime-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Transparencia</h3>
                    <p className="text-gray-600">
                      Te informamos claramente sobre cómo utilizamos tus datos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <FileCheck className="text-lime-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Control Total</h3>
                    <p className="text-gray-600">
                      Tienes derecho a acceder, rectificar y eliminar tus datos en cualquier momento.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Información que Recopilamos</h2>
                  <p className="text-gray-600 mb-4">
                    Recopilamos la siguiente información cuando utilizas nuestro diagnóstico digital o solicitas una cotización:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Nombre completo</li>
                    <li>Correo electrónico</li>
                    <li>Número de teléfono (opcional)</li>
                    <li>Nombre de tu empresa o marca</li>
                    <li>Respuestas al diagnóstico digital</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Uso de la Información</h2>
                  <p className="text-gray-600 mb-4">
                    Utilizamos tu información para:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Generar tu diagnóstico digital personalizado</li>
                    <li>Enviarte la propuesta solicitada</li>
                    <li>Contactarte para brindar seguimiento a tu solicitud</li>
                    <li>Mejorar nuestros servicios y experiencia de usuario</li>
                    <li>Enviarte información relevante sobre nuestros servicios (solo si lo autorizas)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Protección de Datos</h2>
                  <p className="text-gray-600 mb-4">
                    Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales, incluyendo:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Encriptación de datos sensibles</li>
                    <li>Acceso restringido a la información</li>
                    <li>Monitoreo regular de seguridad</li>
                    <li>Actualizaciones periódicas de nuestros sistemas de seguridad</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Tus Derechos</h2>
                  <p className="text-gray-600 mb-4">
                    Tienes derecho a:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Acceder a tus datos personales</li>
                    <li>Rectificar información incorrecta</li>
                    <li>Solicitar la eliminación de tus datos</li>
                    <li>Oponerte al procesamiento de tus datos</li>
                    <li>Retirar tu consentimiento en cualquier momento</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Contacto</h2>
                  <p className="text-gray-600 mb-4">
                    Para ejercer tus derechos o realizar consultas sobre nuestra política de privacidad, puedes contactarnos a través de:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Email: privacidad@hellolime.com</li>
                    <li>Teléfono: +123 456 789</li>
                    <li>Formulario de contacto en nuestra web</li>
                  </ul>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;