import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Camera, TrendingUp, Users } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-lime-primary hover:shadow-xl transition-shadow"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-lime-primary/10 flex items-center justify-center rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Clock size={28} className="text-lime-primary" />,
      title: "+6 años de experiencia",
      description: "Experiencia comprobada generando resultados para marcas de diferentes industrias.",
      delay: 0,
    },
    {
      icon: <Camera size={28} className="text-lime-primary" />,
      title: "Producción propia",
      description: "Fotos y videos de alta calidad creados por nuestro equipo especializado.",
      delay: 0.2,
    },
    {
      icon: <TrendingUp size={28} className="text-lime-primary" />,
      title: "Contenido que convierte",
      description: "Estrategias digitales enfocadas en generar resultados medibles para tu negocio.",
      delay: 0.4,
    },
    {
      icon: <Users size={28} className="text-lime-primary" />,
      title: "Atención personalizada",
      description: "Servicio cercano y a medida para las necesidades específicas de tu marca.",
      delay: 0.6,
    },
  ];

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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué elegir <span className="text-lime-primary">Hello Lime</span>?
          </h2>
          <p className="text-xl text-gray-600">
            Potenciamos tu presencia digital con estrategias efectivas y resultados medibles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;