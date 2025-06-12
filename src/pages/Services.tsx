import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart2, 
  Palette, 
  Video, 
  Camera, 
  MessageCircle, 
  Target,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  index: number;
  list: string[];
}

const services: Omit<ServiceProps, 'index'>[] = [
  {
    icon: <BarChart2 size={40} className="text-lime-primary" />,
    title: "Pauta digital inteligente",
    list: ['Estrategias de Publicidad', 'Facebook Ads', 'Instagram Ads'],
    description: "Optimizamos tu inversión en publicidad digital con campañas segmentadas y efectivas. Analizamos resultados constantemente para mejorar el rendimiento y maximizar el ROI de tu inversión publicitaria.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: <Palette size={40} className="text-lime-primary" />,
    title: "Desarrollo Web",
    list: ['Análisis Web', 'Diseño Web', 'Google Analytics', 'Chatbots'],
    description: "",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: <Camera size={40} className="text-lime-primary" />,
    title: "Redes Sociales",
    list: ['Socia Media Management', 'Community Management', 'Análisis y Reportería (KPls)'],
    description: "Gestionamos tus redes sociales de forma integral, creando comunidad y manteniendo una comunicación activa con tu audiencia. Incluye creación de contenido, programación y atención de comentarios y mensajes.",
    image: "https://images.pexels.com/photos/9803258/pexels-photo-9803258.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: <Palette size={40} className="text-lime-primary" />,
    title: "Diseño Gráfico y Producción Audiovisual",
    list: ['Diseño Gráfico Digital', 'Animación', 'Fotografía'],
    description: "Sesiones de fotos profesionales para tu marca, productos o servicios. Utilizamos nuestros equipos de última generación para capturar imágenes que destacan en el feed y generan mayor interacción.",
    image: "https://images.pexels.com/photos/7414214/pexels-photo-7414214.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: <Video size={40} className="text-lime-primary" />,
    title: "Inbound Marketing",
    list: ['Marketing de Contenidos', 'Lead Generation'],
    description: "",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Service: React.FC<ServiceProps> = ({ icon, title, description, image, index, list }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-xl shadow-lg overflow-hidden`}
    >
      <div className="w-full lg:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-64 lg:h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <ul className="text-md mb-3 text-gray-600 block group-hover:hidden transition-opacity duration-300" style={{listStyle:'disc', marginLeft:20}}>
          {list.map((item) => (
            <p><li>{item}</li></p>
          ))}
        </ul>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link
          to="/cotiza"
          className="btn btn-primary self-start"
        >
          Solicitar este servicio
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Update page title
    document.title = 'Servicios | Hello Lime';
    // Scroll to top on page load
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-lime-primary">servicios</span>
            </h1>
            <p className="text-xl text-gray-600">
              Soluciones digitales a la medida para potenciar tu marca
            </p>
          </motion.div>

          <div className="flex flex-col space-y-12">
            {services.map((service, index) => (
              <Service key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lime-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Paquetes personalizados
              </h2>
              <p className="text-xl text-gray-600">
                Combinamos nuestros servicios para crear la solución ideal para tu negocio
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-2">¿No sabes qué necesitas?</h3>
                <p className="text-gray-600 mb-6">
                  Agenda una llamada de diagnóstico gratuita y te asesoramos sobre la mejor estrategia para tu marca.
                </p>
                <Link to="/cotiza" className="btn btn-primary w-full md:w-auto">
                  Solicitar diagnóstico
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-2">¿Buscas algo específico?</h3>
                <p className="text-gray-600 mb-6">
                  Elaboramos propuestas a la medida según tus necesidades y presupuesto.
                </p>
                <Link to="/cotiza" className="btn btn-outline w-full md:w-auto">
                  Solicitar cotización
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;