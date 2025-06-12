import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Diamond as Lemon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  index: number;
}

const teamMembers: Omit<TeamMemberProps, 'index'>[] = [
  {
    name: "Laura Martínez",
    position: "Directora Creativa",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Carlos Sánchez",
    position: "Director de Estrategia",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Ana García",
    position: "Diseñadora Senior",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "Miguel López",
    position: "Fotógrafo y Videógrafo",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image, index }) => {
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
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  const [historyRef, historyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Update page title
    document.title = 'Sobre Nosotros | Hello Lime';
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center space-x-2 mb-6 bg-lime-primary/10 px-4 py-2 rounded-full">
                <Lemon size={20} className="text-lime-primary" />
                <span className="text-lime-dark font-medium">Hello Lime</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Comunicación digital <span className="text-lime-primary">con enfoque estratégico</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Somos un equipo de profesionales apasionados por crear contenido que conecta, convierte y construye marcas memorables.
              </p>
              <Link to="/cotiza" className="btn btn-primary">
                Trabajemos juntos
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/6476118/pexels-photo-6476118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Equipo Hello Lime" 
                  className="rounded-2xl shadow-xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lime-primary rounded-2xl -z-0"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-accent rounded-2xl -z-0"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={historyRef} className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={historyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-12"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nuestra <span className="text-lime-primary">historia</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Hello Lime nació en 2018 con una misión clara: ayudar a las marcas a comunicarse de manera efectiva en un mundo digital cada vez más competitivo.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Lo que comenzó como un pequeño estudio de diseño, rápidamente evolucionó a una agencia integral de comunicación digital impulsada por resultados y centrada en el cliente.
              </p>
              <p className="text-lg text-gray-600">
                Hoy, tras más de 6 años de experiencia y cientos de proyectos exitosos, nuestro equipo multidisciplinario sigue trabajando con la misma pasión y compromiso del primer día.
              </p>

              <div className="mt-10 flex items-center space-x-4">
                <div className="flex flex-col items-center justify-center w-20 h-20 bg-lime-primary/10 rounded-full">
                  <span className="text-2xl font-bold text-lime-primary">6+</span>
                  <span className="text-xs">Años</span>
                </div>
                <div className="flex flex-col items-center justify-center w-20 h-20 bg-lime-primary/10 rounded-full">
                  <span className="text-2xl font-bold text-lime-primary">200+</span>
                  <span className="text-xs">Clientes</span>
                </div>
                <div className="flex flex-col items-center justify-center w-20 h-20 bg-lime-primary/10 rounded-full">
                  <span className="text-2xl font-bold text-lime-primary">15+</span>
                  <span className="text-xs">Expertos</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative h-full min-h-[400px] bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Equipo Hello Lime trabajando" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-primary/80 to-transparent p-6">
                  <div className="flex items-center text-white mb-2">
                    <Calendar size={20} className="mr-2" />
                    <span>Fundado en 2018</span>
                  </div>
                  <h3 className="text-xl text-white font-semibold">
                    De pequeño estudio a agencia integral
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nuestros <span className="text-lime-primary">valores</span>
            </h2>
            <p className="text-xl text-gray-600">
              Principios que guían nuestro trabajo y relación con los clientes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-lime-primary/10 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A8D129" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M12 7c1-.56 2.78-2 5-2 .97 0 1.94.27 2.76.79"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Creatividad</h3>
              <p className="text-gray-600">
                Buscamos soluciones innovadoras y únicas para cada cliente. No creemos en fórmulas genéricas ni en contenido repetitivo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-lime-primary/10 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A8D129" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"></path><path d="M2 12s3-9 10-9 10 9 10 9"></path><path d="M2 12s3 9 10 9 10-9 10-9"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Transparencia</h3>
              <p className="text-gray-600">
                Creemos en la comunicación clara y directa. Compartimos métricas reales y nos enfocamos en resultados tangibles para su negocio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-lime-primary/10 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A8D129" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cercanía</h3>
              <p className="text-gray-600">
                Trabajamos como una extensión de su equipo. Nos involucramos profundamente con su marca para entender sus necesidades y objetivos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={teamRef} className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nuestro <span className="text-lime-primary">equipo</span>
            </h2>
            <p className="text-xl text-gray-600">
              Profesionales apasionados por la comunicación digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-lime-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Agendemos una reunión para conocer más sobre tu proyecto
            </p>
            <Link to="/cotiza" className="btn btn-primary btn-lg">
              Agendemos una reunión
              <Calendar className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;