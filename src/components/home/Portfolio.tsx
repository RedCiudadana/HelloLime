import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PortfolioItemProps {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
  index: number;
}

const portfolioItems: Omit<PortfolioItemProps, 'index'>[] = [
  {
    id: 'cafe-aroma',
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Campaña de Instagram para Café Aroma",
    category: "Diseño y Fotografía",
    description: "Serie de posts y stories que aumentaron en un 30% la interacción con seguidores.",
  },
  {
    id: 'fitness-club',
    image: "https://images.pexels.com/photos/9803258/pexels-photo-9803258.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Reels semanales para Fitness Club",
    category: "Video Marketing",
    description: "Contenido de ejercicios y rutinas que generó más de 50k reproducciones en un mes.",
  },
  {
    id: 'colegio-norte',
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Contenido educativo para Colegio del Norte",
    category: "Estrategia Digital",
    description: "Plan estratégico que incrementó las inscripciones en un 25% para el nuevo ciclo escolar.",
  },
];

const PortfolioItem: React.FC<PortfolioItemProps> = ({ id, image, title, category, description, index }) => {
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
          <p className="text-sm font-medium text-lime-primary mb-2">{category}</p>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-200 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
          <Link 
            to={`/portafolio/${id}`}
            className="inline-flex items-center text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Ver proyecto <ArrowUpRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
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
              Transformamos marcas a través de estrategias digitales efectivas
            </p>
          </div>
          <Link to="/services" className="btn btn-outline self-start md:self-auto">
            Ver todos los servicios
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem 
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

export default Portfolio;