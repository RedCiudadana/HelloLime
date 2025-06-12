import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Hello Lime transformó nuestra presencia en redes sociales. Nuestras ventas en línea aumentaron un 40% en solo 3 meses.",
    name: "María González",
    position: "Directora de Marketing",
    company: "Boutique Florale",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    quote: "Su estrategia de contenidos ha sido clave para posicionar nuestra marca como líder en el sector educativo. Altamente recomendables.",
    name: "Carlos Rodríguez",
    position: "Director",
    company: "Colegio Innovación",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    quote: "El equipo de Hello Lime entiende perfectamente nuestra visión. Han creado una narrativa visual que realmente conecta con nuestra audiencia.",
    name: "Laura Méndez",
    position: "CEO",
    company: "Fitness Revolution",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    quote: "La calidad de sus producciones fotográficas y videos es excepcional. Han elevado nuestra imagen de marca significativamente.",
    name: "Javier Torres",
    position: "Chef Ejecutivo",
    company: "Sabores Gourmet",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros <span className="text-lime-primary">clientes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Marcas que han transformado su presencia digital con nosotros
          </p>
        </motion.div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="testimonial-swiper pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col">
                <div className="mb-4">
                  <Quote size={40} className="text-lime-primary opacity-20" />
                </div>
                <p className="text-gray-600 mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;