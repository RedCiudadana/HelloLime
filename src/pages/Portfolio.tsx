import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PortfolioItemProps {
  id: string;
  image: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  index: number;
}

const portfolioItems: Omit<PortfolioItemProps, 'index'>[] = [
  {
    id: 'cafe-aroma',
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Campaña de Instagram para Café Aroma",
    category: "Diseño y Fotografía",
    industry: "restaurantes",
    description: "Serie de posts y stories que aumentaron en un 30% la interacción con seguidores.",
  },
  {
    id: 'fitness-club',
    image: "https://images.pexels.com/photos/9803258/pexels-photo-9803258.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Reels semanales para Fitness Club",
    category: "Video Marketing",
    industry: "gimnasios",
    description: "Contenido de ejercicios y rutinas que generó más de 50k reproducciones en un mes.",
  },
  {
    id: 'colegio-norte',
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Contenido educativo para Colegio del Norte",
    category: "Estrategia Digital",
    industry: "colegios",
    description: "Plan estratégico que incrementó las inscripciones en un 25% para el nuevo ciclo escolar.",
  },
  {
    id: 'boutique-florale',
    image: "https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Branding para Boutique Florale",
    category: "Diseño Gráfico",
    industry: "moda",
    description: "Rediseño completo de identidad visual que posicionó la marca en un segmento premium.",
  },
  {
    id: 'plaza-comercial',
    image: "https://images.pexels.com/photos/7414214/pexels-photo-7414214.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Campaña navideña para Plaza Comercial",
    category: "Producción Fotográfica",
    industry: "moda",
    description: "Sesión fotográfica temática que incrementó las ventas un 40% durante temporada alta.",
  },
  {
    id: 'tech-startup',
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Estrategia omnicanal para Tech Startup",
    category: "Consultoría Digital",
    industry: "tecnologia",
    description: "Plan integral de contenidos que ayudó a consolidar su posicionamiento en el mercado.",
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
  const [filter, setFilter] = useState<string>('todos');
  const [filteredItems, setFilteredItems] = useState<PortfolioItemProps[]>(portfolioItems);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Update page title
    document.title = 'Portafolio | Hello Lime';
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (filter === 'todos') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.industry === filter)
      );
    }
  }, [filter]);

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'restaurantes', label: 'Restaurantes' },
    { id: 'moda', label: 'Moda' },
    { id: 'gimnasios', label: 'Gimnasios' },
    { id: 'colegios', label: 'Colegios' },
    { id: 'tecnologia', label: 'Tecnología' },
  ];

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
              Nuestro <span className="text-lime-primary">portafolio</span>
            </h1>
            <p className="text-xl text-gray-600">
              Proyectos que muestran el impacto de nuestra estrategia y creatividad
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`px-5 py-2 rounded-full transition-colors ${
                  filter === item.id
                    ? 'bg-lime-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <PortfolioItem key={item.id} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;