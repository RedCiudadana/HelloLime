import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, ShoppingBag, Utensils, Dumbbell, GraduationCap, Heart, Quote } from 'lucide-react';

interface ClientProps {
  logo: React.ReactNode;
  name: string;
  industry: string;
  testimonial?: string;
  person?: string;
  position?: string;
  image?: string;
}

const clients: ClientProps[] = [
  {
    logo: <Utensils size={40} className="text-lime-primary" />,
    name: "Sabores Gourmet",
    industry: "Restaurante",
    testimonial: "Hello Lime transformó nuestra presencia en redes sociales. Las sesiones fotográficas mensuales y el contenido estratégico han incrementado nuestras reservas un 35% en seis meses.",
    person: "Carlos Méndez",
    position: "Chef Ejecutivo",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    logo: <ShoppingBag size={40} className="text-lime-primary" />,
    name: "Boutique Florale",
    industry: "Moda",
    testimonial: "Desde que comenzamos a trabajar con Hello Lime, nuestras ventas online han aumentado un 40%. Su estrategia de contenidos y producción fotográfica profesional ha elevado nuestra imagen de marca.",
    person: "María González",
    position: "Directora de Marketing",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    logo: <GraduationCap size={40} className="text-lime-primary" />,
    name: "Colegio Innovación",
    industry: "Educación",
    testimonial: "Su estrategia de contenidos ha sido clave para posicionar nuestra institución como líder en innovación educativa. Los reels y videos han tenido un gran impacto en nuestra comunidad.",
    person: "Carlos Rodríguez",
    position: "Director",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    logo: <Dumbbell size={40} className="text-lime-primary" />,
    name: "Fitness Revolution",
    industry: "Gimnasio",
    testimonial: "El equipo de Hello Lime entiende perfectamente nuestra visión. Han creado una narrativa visual que realmente conecta con nuestra audiencia y ha generado un aumento significativo en nuevas membresías.",
    person: "Laura Méndez",
    position: "CEO",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    logo: <Building size={40} className="text-lime-primary" />,
    name: "Plaza Comercial",
    industry: "Centro Comercial",
  },
  {
    logo: <Heart size={40} className="text-lime-primary" />,
    name: "Centro Bienestar",
    industry: "Salud y Bienestar",
  },
];

const ClientWithTestimonial: React.FC<{ client: ClientProps; index: number }> = ({ client, index }) => {
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
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white rounded-xl shadow-lg overflow-hidden`}
    >
      <div className="md:w-1/2 bg-gray-50 p-8 md:p-12 flex flex-col justify-center">
        <div className="mb-4 flex items-center space-x-3">
          {client.logo}
          <h3 className="text-2xl font-bold">{client.name}</h3>
        </div>
        <p className="text-gray-500 mb-6">{client.industry}</p>
        <div className="mb-6">
          <Quote size={30} className="text-lime-primary opacity-20" />
          <p className="text-gray-600 italic">"{client.testimonial}"</p>
        </div>
        {client.person && (
          <div className="flex items-center mt-4">
            {client.image && (
              <img 
                src={client.image} 
                alt={client.person} 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
            )}
            <div>
              <p className="font-semibold">{client.person}</p>
              <p className="text-sm text-gray-500">{client.position}</p>
            </div>
          </div>
        )}
      </div>
      <div className="md:w-1/2">
        <img
          src={`https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
          alt={`${client.name} working with Hello Lime`}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

const ClientLogo: React.FC<{ client: ClientProps; index: number }> = ({ client, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="mb-3">{client.logo}</div>
      <p className="font-medium text-center">{client.name}</p>
      <p className="text-sm text-gray-500">{client.industry}</p>
    </motion.div>
  );
};

const Clients: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Update page title
    document.title = 'Clientes | Hello Lime';
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const clientsWithTestimonials = clients.filter(client => client.testimonial);
  const clientLogos = clients.filter(client => !client.testimonial);

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
              Nuestros <span className="text-lime-primary">clientes</span>
            </h1>
            <p className="text-xl text-gray-600">
              Marcas que confían en nosotros para su comunicación digital
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
            {clients.map((client, index) => (
              <ClientLogo key={index} client={client} index={index} />
            ))}
          </div>

          <div className="space-y-12">
            {clientsWithTestimonials.slice(0, 2).map((client, index) => (
              <ClientWithTestimonial key={index} client={client} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-lime-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para unirte a nuestros clientes satisfechos?
              </h2>
              <p className="text-xl text-gray-600">
                Deja que nuestro equipo de expertos lleve tu comunicación digital al siguiente nivel
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#25D366] text-white hover:bg-[#128C7E]"
              >
                Hablar por WhatsApp
              </a>
              <a href="/cotiza" className="btn btn-primary">
                Solicitar presupuesto
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;