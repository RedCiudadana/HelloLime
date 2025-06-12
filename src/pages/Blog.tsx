import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPostProps[] = [
  {
    id: 1,
    title: "10 ideas de contenido para Instagram que generan engagement",
    excerpt: "Descubre las estrategias más efectivas para aumentar la interacción de tus seguidores y convertirlos en clientes fieles.",
    date: "2023-06-15",
    author: "Laura Martínez",
    category: "Redes Sociales",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true,
  },
  {
    id: 2,
    title: "Cómo crear una estrategia de contenidos efectiva para tu marca",
    excerpt: "Aprende a desarrollar un plan de contenidos que conecte con tu audiencia y potencie los resultados de tu negocio.",
    date: "2023-05-22",
    author: "Carlos Sánchez",
    category: "Estrategia",
    image: "https://images.pexels.com/photos/6476118/pexels-photo-6476118.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Tendencias de branding visual para 2023",
    excerpt: "Explora las tendencias de diseño más relevantes para mantener la identidad de tu marca fresca y contemporánea.",
    date: "2023-04-10",
    author: "Ana García",
    category: "Diseño",
    image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Los secretos de los Reels virales: técnicas que funcionan",
    excerpt: "Conoce las claves para crear Reels que capturen la atención y se compartan masivamente.",
    date: "2023-03-18",
    author: "Miguel López",
    category: "Video",
    image: "https://images.pexels.com/photos/9803258/pexels-photo-9803258.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    title: "5 métricas clave para medir el éxito de tu estrategia digital",
    excerpt: "Aprende a interpretar los datos más importantes para evaluar y mejorar constantemente tus acciones en redes sociales.",
    date: "2023-02-05",
    author: "Carlos Sánchez",
    category: "Analytics",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    title: "Fotografía para redes sociales: consejos para destacar",
    excerpt: "Técnicas prácticas para mejorar la calidad visual de tu contenido sin necesidad de equipo profesional.",
    date: "2023-01-20",
    author: "Miguel López",
    category: "Fotografía",
    image: "https://images.pexels.com/photos/7414201/pexels-photo-7414201.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

const FeaturedPost: React.FC<{ post: BlogPostProps }> = ({ post }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="md:flex">
        <div className="md:w-1/2">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8 md:p-12">
          <div className="flex items-center space-x-2 mb-4">
            <span className="inline-block px-3 py-1 bg-lime-primary/10 text-lime-primary rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">Destacado</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-6">
            {post.excerpt}
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <div className="flex items-center mr-4">
              <Calendar size={16} className="mr-1" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center">
              <User size={16} className="mr-1" />
              <span>{post.author}</span>
            </div>
          </div>
          <Link
            to={`/blog/${post.id}`}
            className="inline-flex items-center font-medium text-lime-primary hover:text-lime-dark transition-colors"
          >
            Leer artículo completo
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const BlogCard: React.FC<{ post: BlogPostProps; index: number }> = ({ post, index }) => {
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
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-white text-lime-primary rounded-full text-sm font-medium">
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center mr-4">
            <Calendar size={16} className="mr-1" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            <span>{post.author}</span>
          </div>
        </div>
        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center font-medium text-lime-primary hover:text-lime-dark transition-colors"
        >
          Leer artículo
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

const BlogLeadForm: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <h3 className="text-xl font-bold mb-4">
        Descarga nuestra guía gratuita
      </h3>
      <p className="text-gray-600 mb-6">
        10 ideas de contenido para Instagram 2023 que generan conversiones
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-primary"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-primary"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full btn btn-primary"
        >
          Descargar guía gratuita
        </button>
      </form>
    </motion.div>
  );
};

const Blog: React.FC = () => {
  const [filter, setFilter] = useState<string>('todos');
  const [filteredPosts, setFilteredPosts] = useState<BlogPostProps[]>(blogPosts);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  useEffect(() => {
    // Update page title
    document.title = 'Blog / Tips | Hello Lime';
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (filter === 'todos') {
      setFilteredPosts(regularPosts);
    } else {
      setFilteredPosts(
        regularPosts.filter((post) => post.category.toLowerCase() === filter.toLowerCase())
      );
    }
  }, [filter]);

  const categories = ['todos', 'Redes Sociales', 'Estrategia', 'Diseño', 'Video', 'Analytics', 'Fotografía'];

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
              Blog y <span className="text-lime-primary">Tips</span>
            </h1>
            <p className="text-xl text-gray-600">
              Recursos, consejos y tendencias sobre comunicación digital
            </p>
          </motion.div>

          {featuredPost && <FeaturedPost post={featuredPost} />}

          <div className="mt-16 mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full transition-colors ${
                  filter === category
                    ? 'bg-lime-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category === 'todos' ? 'Todos' : category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <BlogLeadForm />
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">
                  Categorías
                </h3>
                <ul className="space-y-2">
                  {categories.filter(cat => cat !== 'todos').map((category) => (
                    <li key={category} className="flex items-center justify-between">
                      <button
                        onClick={() => setFilter(category)}
                        className="flex items-center text-gray-700 hover:text-lime-primary transition-colors"
                      >
                        <Tag size={16} className="mr-2" />
                        {category}
                      </button>
                      <span className="text-sm text-gray-500">
                        {regularPosts.filter(post => post.category === category).length}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">
                  ¿Necesitas ayuda con tu estrategia digital?
                </h3>
                <p className="text-gray-600 mb-6">
                  Agenda una llamada de diagnóstico gratuita y descubre cómo podemos ayudarte.
                </p>
                <Link to="/cotiza" className="btn btn-primary w-full">
                  Agendar llamada
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;