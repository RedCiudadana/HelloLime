import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart2, 
  Palette, 
  Video, 
  Camera, 
  MessageCircle, 
  Target,
  ArrowUpRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Servicio1 from '../../assets/images/services/pautas.jpg';
import Servicio2 from '../../assets/images/services/desarrolloweb.jpg';
import Servicio3 from '../../assets/images/services/redessociales.svg';
import Servicio4 from '../../assets/images/services/disenografico.jpg';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  index: number;
  list: string[];
}

const serviceItems: Omit<ServiceProps, 'index'>[] = [
  {
    icon: <BarChart2 size={40} className="text-lime-primary" />,
    title: "Pauta digital inteligente",
    list: ['Estrategias de Publicidad', 'Facebook Ads', 'Instagram Ads'],
    description: "Optimizamos tu inversión en publicidad digital con campañas segmentadas y efectivas. Analizamos resultados constantemente para mejorar el rendimiento y maximizar el ROI de tu inversión publicitaria.",
    image: Servicio1,
  },
  {
    icon: <Palette size={40} className="text-lime-primary" />,
    title: "Desarrollo Web",
    list: ['Análisis Web', 'Diseño Web', 'Google Analytics', 'Chatbots'],
    description: "",
    image: Servicio2,
  },
  {
    icon: <Camera size={40} className="text-lime-primary" />,
    title: "Redes Sociales",
    list: ['Social Media Management', 'Community Management', 'Análisis y Reportería (KPls)'],
    description: "Gestionamos tus redes sociales de forma integral, creando comunidad y manteniendo una comunicación activa con tu audiencia. Incluye creación de contenido, programación y atención de comentarios y mensajes.",
    image: Servicio3,
  },
  {
    icon: <Palette size={40} className="text-lime-primary" />,
    title: "Diseño Gráfico y Producción Audiovisual",
    list: ['Diseño Gráfico Digital', 'Animación', 'Fotografía'],
    description: "Sesiones de fotos profesionales para tu marca, productos o servicios. Utilizamos nuestros equipos de última generación para capturar imágenes que destacan en el feed y generan mayor interacción.",
    image: Servicio4,
  },
  {
    icon: <Video size={40} className="text-lime-primary" />,
    title: "Inbound Marketing",
    list: ['Marketing de Contenidos', 'Lead Generation'],
    description: "",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const ServiceItem: React.FC<ServiceProps> = ({ image, title, description, index, icon, list }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl shadow-lg"
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 to-transparent group-hover:from-lime-dark/90 transition-colors duration-300">
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <p className="text-sm font-medium text-lime-primary mb-2">{icon}</p>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <ul className="text-sm text-gray-200 mb-3 block group-hover:hidden transition-opacity duration-300" style={{listStyle:'disc', marginLeft:20}}>
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-200 mb-3 hidden group-hover:block transition-opacity duration-300">
            {description}
          </p>
          {/* <Link 
            to={`/portafolio/${id}`}
            className="inline-flex items-center text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Ver proyecto <ArrowUpRight size={16} className="ml-1" />
          </Link> */}
        </div>
      </div>
    </motion.div>
  );
};

const Service: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div className="max-w-3xl mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Servicios para <span className="text-lime-primary">potenciar tu negocio</span> en Marketing Digital
            </h2>
            <p className="text-xl text-gray-600">
              Nos especializamos en comprender las necesidades específicas de
              nuestros clientes para desarrollar estrategias de marketing digital y
              publicidad que tengan un desempeño excepcional.
            </p>
          </div>
          <Link to="/servicios" className="btn btn-outline self-start md:self-auto">
            Ver todos los servicios
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.slice(0,3).map((item, index) => (
            <ServiceItem 
              key={index} 
              {...item} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
