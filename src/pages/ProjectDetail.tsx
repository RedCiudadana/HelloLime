import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, BarChart2, Target, ArrowRight } from 'lucide-react';

interface ProjectData {
  id: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  client: {
    name: string;
    position: string;
    company: string;
    testimonial: string;
    image: string;
  };
}

const projectsData: { [key: string]: ProjectData } = {
  'cafe-aroma': {
    id: 'cafe-aroma',
    title: 'Campaña de Instagram para Café Aroma',
    category: 'Diseño y Fotografía',
    industry: 'restaurantes',
    description: 'Serie de posts y stories que aumentaron en un 30% la interacción con seguidores.',
    challenge: 'Café Aroma necesitaba destacar en un mercado altamente competitivo y atraer a una audiencia más joven sin perder su esencia premium.',
    solution: 'Desarrollamos una estrategia visual que combina fotografía gastronómica profesional con storytelling auténtico, resaltando la calidad de sus productos y la experiencia única del local.',
    results: [
      'Aumento del 30% en engagement',
      '2,500 nuevos seguidores en 3 meses',
      'Incremento del 25% en ventas de productos destacados',
      '45% más de visitas al local por recomendaciones en Instagram'
    ],
    images: [
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3252051/pexels-photo-3252051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    client: {
      name: 'María González',
      position: 'Gerente de Marketing',
      company: 'Café Aroma',
      testimonial: 'El equipo de Hello Lime entendió perfectamente nuestra visión y la tradujo en una estrategia visual que no solo es hermosa, sino que también genera resultados tangibles.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  }
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData[id || ''];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="pt-24 pb-16">
        <div className="container">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Proyecto no encontrado</h1>
            <Link to="/portafolio" className="text-lime-primary hover:text-lime-dark">
              Volver al portafolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <Link 
          to="/portafolio"
          className="inline-flex items-center text-gray-600 hover:text-lime-primary mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Volver al portafolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <span className="inline-block px-3 py-1 bg-lime-primary/10 text-lime-primary rounded-full text-sm font-medium mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{project.description}</p>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">El Desafío</h2>
                  <p className="text-gray-600">{project.challenge}</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Nuestra Solución</h2>
                  <p className="text-gray-600">{project.solution}</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Resultados</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {project.results.map((result, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center">
                          <BarChart2 size={20} className="text-lime-primary mr-2" />
                          <span className="text-gray-800">{result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Imagen ${index + 1}`}
                    className="w-full rounded-xl shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <div className="flex items-start space-x-6">
              <img
                src={project.client.image}
                alt={project.client.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-600 italic mb-4">"{project.client.testimonial}"</p>
                <p className="font-semibold">{project.client.name}</p>
                <p className="text-sm text-gray-500">{project.client.position}, {project.client.company}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">¿Te gustaría lograr resultados similares?</h2>
              <p className="text-gray-600">Descubre cómo podemos ayudarte a alcanzar tus objetivos</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#25D366] text-white hover:bg-[#128C7E] flex items-center justify-center"
              >
                <MessageCircle size={20} className="mr-2" />
                Conversar por WhatsApp
              </a>
              <Link
                to="/cotiza"
                className="btn btn-primary flex items-center justify-center"
              >
                <Target size={20} className="mr-2" />
                Solicitar propuesta
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;