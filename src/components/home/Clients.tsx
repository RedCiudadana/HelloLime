import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, User, Utensils, Dumbbell, Gem, Cake, Scissors } from 'lucide-react';

interface ClientLogoProps {
  icon: React.ReactNode;
  name: string;
  index: number;
}

const clientLogos: Omit<ClientLogoProps, 'index'>[] = [
  {
    icon: <Utensils size={32} className="text-lime-primary" />,
    name: "Bares",
  },
  {
    icon: <Gem size={32} className="text-lime-primary" />,
    name: "Joyeria",
  },
  {
    icon: <User size={32} className="text-lime-primary" />,
    name: "ONG",
  },
  {
    icon: <Dumbbell size={32} className="text-lime-primary" />,
    name: "Club deportivo",
  },
  {
    icon: <Scissors size={32} className="text-lime-primary" />,
    name: "Barberia",
  },
  {
    icon: <Building size={32} className="text-lime-primary" />,
    name: "Colegios",
  },
  {
    icon: <Cake size={32} className="text-lime-primary" />,
    name: "Pasteleria",
  },
];

const ClientLogo: React.FC<ClientLogoProps> = ({ icon, name, index }) => {
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
      className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="mb-3">{icon}</div>
      <p className="font-medium text-center">{name}</p>
    </motion.div>
  );
};

const Clients: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sectores donde generamos <span className="text-lime-primary">impacto</span>
          </h2>
          <p className="text-xl text-gray-600">
            Nuestros clientes nos respaldan con su confianza
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
          {clientLogos.map((logo, index) => (
            <ClientLogo key={index} {...logo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;