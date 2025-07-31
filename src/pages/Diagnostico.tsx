import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle2, Target, MessageCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, Title, ProgressBar, BarChart, Color } from '@tremor/react';

interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    score: {
      strategy: number;
      content: number;
      engagement: number;
      consistency: number;
      branding: number;
    };
  }[];
}

interface Results {
  strategy: number;
  content: number;
  engagement: number;
  consistency: number;
  branding: number;
}

interface ContactInfo {
  email: string;
  whatsapp: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "¿Con qué frecuencia publicas contenido en redes sociales?",
    options: [
      {
        id: "1a",
        text: "No publico regularmente",
        score: { strategy: 2, content: 2, engagement: 1, consistency: 1, branding: 2 }
      },
      {
        id: "1b",
        text: "1-2 veces por semana",
        score: { strategy: 3, content: 3, engagement: 2, consistency: 2, branding: 3 }
      },
      {
        id: "1c",
        text: "3-4 veces por semana",
        score: { strategy: 4, content: 4, engagement: 4, consistency: 4, branding: 4 }
      },
      {
        id: "1d",
        text: "Diariamente",
        score: { strategy: 5, content: 5, engagement: 5, consistency: 5, branding: 5 }
      }
    ]
  },
  {
    id: 2,
    text: "¿Tienes una estrategia de contenido definida?",
    options: [
      {
        id: "2a",
        text: "No tengo estrategia",
        score: { strategy: 1, content: 2, engagement: 2, consistency: 1, branding: 2 }
      },
      {
        id: "2b",
        text: "Tengo ideas básicas",
        score: { strategy: 2, content: 3, engagement: 3, consistency: 2, branding: 3 }
      },
      {
        id: "2c",
        text: "Sigo un plan mensual",
        score: { strategy: 4, content: 4, engagement: 4, consistency: 4, branding: 4 }
      },
      {
        id: "2d",
        text: "Tengo estrategia completa",
        score: { strategy: 5, content: 5, engagement: 5, consistency: 5, branding: 5 }
      }
    ]
  },
  {
    id: 3,
    text: "¿Cómo es la interacción con tu audiencia?",
    options: [
      {
        id: "3a",
        text: "Muy baja o nula",
        score: { strategy: 2, content: 2, engagement: 1, consistency: 2, branding: 2 }
      },
      {
        id: "3b",
        text: "Ocasional",
        score: { strategy: 3, content: 3, engagement: 2, consistency: 3, branding: 3 }
      },
      {
        id: "3c",
        text: "Regular",
        score: { strategy: 4, content: 4, engagement: 4, consistency: 4, branding: 4 }
      },
      {
        id: "3d",
        text: "Muy activa",
        score: { strategy: 5, content: 5, engagement: 5, consistency: 5, branding: 5 }
      }
    ]
  },
  {
    id: 4,
    text: "¿Utilizas contenido visual profesional?",
    options: [
      {
        id: "4a",
        text: "No uso contenido visual",
        score: { strategy: 2, content: 1, engagement: 1, consistency: 1, branding: 1 }
      },
      {
        id: "4b",
        text: "Uso fotos básicas",
        score: { strategy: 3, content: 2, engagement: 2, consistency: 2, branding: 2 }
      },
      {
        id: "4c",
        text: "Mezclo profesional y básico",
        score: { strategy: 4, content: 4, engagement: 4, consistency: 3, branding: 4 }
      },
      {
        id: "4d",
        text: "Todo es profesional",
        score: { strategy: 5, content: 5, engagement: 5, consistency: 5, branding: 5 }
      }
    ]
  },
  {
    id: 5,
    text: "¿Cómo manejas las respuestas a comentarios y mensajes?",
    options: [
      {
        id: "5a",
        text: "No respondo regularmente",
        score: { strategy: 2, content: 2, engagement: 1, consistency: 1, branding: 2 }
      },
      {
        id: "5b",
        text: "Respondo cuando puedo",
        score: { strategy: 3, content: 3, engagement: 2, consistency: 2, branding: 3 }
      },
      {
        id: "5c",
        text: "Respondo en 24 horas",
        score: { strategy: 4, content: 4, engagement: 4, consistency: 4, branding: 4 }
      },
      {
        id: "5d",
        text: "Respondo inmediatamente",
        score: { strategy: 5, content: 5, engagement: 5, consistency: 5, branding: 5 }
      }
    ]
  },
  {
    id: 6,
    text: "¿Utilizas herramientas de análisis y métricas?",
    options: [
      {
        id: "6a",
        text: "No uso ninguna herramienta",
        score: { strategy: 1, content: 2, engagement: 1, consistency: 1, branding: 2 }
      },
      {
        id: "6b",
        text: "Solo métricas básicas",
        score: { strategy: 2, content: 3, engagement: 2, consistency: 2, branding: 3 }
      },
      {
        id: "6c",
        text: "Uso algunas herramientas",
        score: { strategy: 4, content: 4, engagement: 3, consistency: 3, branding: 4 }
      },
      {
        id: "6d",
        text: "Análisis completo",
        score: { strategy: 5, content: 5, engagement: 5, consistency: 5, branding: 5 }
      }
    ]
  },
  {
    id: 7,
    text: "¿Tienes una identidad visual consistente?",
    options: [
      {
        id: "7a",
        text: "No tengo identidad definida",
        score: { strategy: 2, content: 2, engagement: 2, consistency: 1, branding: 1 }
      },
      {
        id: "7b",
        text: "Uso elementos básicos",
        score: { strategy: 3, content: 3, engagement: 3, consistency: 2, branding: 2 }
      },
      {
        id: "7c",
        text: "Tengo guía de marca",
        score: { strategy: 4, content: 4, engagement: 4, consistency: 4, branding: 4 }
      },
      {
        id: "7d",
        text: "Branding profesional completo",
        score: { strategy: 5, content: 5, engagement: 5, consistency: 5, branding: 5 }
      }
    ]
  },
  {
    id: 8,
    text: "¿Realizas campañas publicitarias en redes sociales?",
    options: [
      {
        id: "8a",
        text: "No hago publicidad",
        score: { strategy: 2, content: 2, engagement: 1, consistency: 1, branding: 2 }
      },
      {
        id: "8b",
        text: "Ocasionalmente",
        score: { strategy: 3, content: 3, engagement: 2, consistency: 2, branding: 3 }
      },
      {
        id: "8c",
        text: "Regularmente",
        score: { strategy: 4, content: 4, engagement: 4, consistency: 4, branding: 4 }
      },
      {
        id: "8d",
        text: "Constantemente con estrategia",
        score: { strategy: 5, content: 5, engagement: 5, consistency: 5, branding: 5 }
      }
    ]
  },
  {
    id: 9,
    text: "¿Cómo manejas la planificación de contenido?",
    options: [
      {
        id: "9a",
        text: "Publico sin planificar",
        score: { strategy: 1, content: 2, engagement: 2, consistency: 1, branding: 2 }
      },
      {
        id: "9b",
        text: "Planifico algunos días",
        score: { strategy: 2, content: 3, engagement: 3, consistency: 2, branding: 3 }
      },
      {
        id: "9c",
        text: "Planifico semanalmente",
        score: { strategy: 4, content: 4, engagement: 4, consistency: 4, branding: 4 }
      },
      {
        id: "9d",
        text: "Planifico mensualmente",
        score: { strategy: 5, content: 5, engagement: 5, consistency: 5, branding: 5 }
      }
    ]
  },
  {
    id: 10,
    text: "¿Cómo es tu presencia en diferentes redes sociales?",
    options: [
      {
        id: "10a",
        text: "Solo una red social",
        score: { strategy: 2, content: 2, engagement: 2, consistency: 2, branding: 2 }
      },
      {
        id: "10b",
        text: "2-3 redes principales",
        score: { strategy: 3, content: 3, engagement: 3, consistency: 3, branding: 3 }
      },
      {
        id: "10c",
        text: "Presencia en 4-5 redes",
        score: { strategy: 4, content: 4, engagement: 4, consistency: 4, branding: 4 }
      },
      {
        id: "10d",
        text: "Estrategia omnicanal",
        score: { strategy: 5, content: 5, engagement: 5, consistency: 5, branding: 5 }
      }
    ]
  }
];

const initialResults: Results = {
  strategy: 0,
  content: 0,
  engagement: 0,
  consistency: 0,
  branding: 0,
};

const Diagnostico: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [results, setResults] = useState<Results | null>(null);
  const [showContact, setShowContact] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({ email: '', whatsapp: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleAnswer = (optionId: string) => {
    const newAnswers = [...answers, optionId];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newAnswers);
      setShowContact(true);
    }
  };

  const calculateResults = (finalAnswers: string[]) => {
    const finalResults = finalAnswers.reduce((acc, answerId, index) => {
      const question = questions[index];
      const option = question.options.find(opt => opt.id === answerId);
      
      if (option) {
        return {
          strategy: acc.strategy + option.score.strategy,
          content: acc.content + option.score.content,
          engagement: acc.engagement + option.score.engagement,
          consistency: acc.consistency + option.score.consistency,
          branding: acc.branding + option.score.branding,
        };
      }
      return acc;
    }, {...initialResults});

    // Normalize scores to percentages
    const maxScore = questions.length * 5;
    const normalizedResults = {
      strategy: (finalResults.strategy / maxScore) * 100,
      content: (finalResults.content / maxScore) * 100,
      engagement: (finalResults.engagement / maxScore) * 100,
      consistency: (finalResults.consistency / maxScore) * 100,
      branding: (finalResults.branding / maxScore) * 100,
    };

    setResults(normalizedResults);
  };

  const getScoreColor = (score: number): Color => {
    if (score >= 80) return 'emerald';
    if (score >= 60) return 'yellow';
    return 'rose';
  };

  const getScoreLabel = (score: number): string => {
    if (score >= 80) return 'Excelente';
    if (score >= 60) return 'Bueno';
    if (score >= 40) return 'Regular';
    return 'Necesita mejora';
  };

  const getBarChartData = (results: Results) => {
    return [
      {
        name: 'Estrategia',
        'Nivel Actual': results.strategy,
        'Potencial de Mejora': 100 - results.strategy,
      },
      {
        name: 'Contenido',
        'Nivel Actual': results.content,
        'Potencial de Mejora': 100 - results.content,
      },
      {
        name: 'Engagement',
        'Nivel Actual': results.engagement,
        'Potencial de Mejora': 100 - results.engagement,
      },
      {
        name: 'Consistencia',
        'Nivel Actual': results.consistency,
        'Potencial de Mejora': 100 - results.consistency,
      },
      {
        name: 'Branding',
        'Nivel Actual': results.branding,
        'Potencial de Mejora': 100 - results.branding,
      },
    ];
  };

  const getServiceTitle = (area: string): string => {
    const titles: { [key: string]: string } = {
      strategy: "Estrategia de Contenidos",
      content: "Producción de Contenido",
      engagement: "Community Management",
      consistency: "Gestión de Redes Sociales",
      branding: "Diseño y Branding",
    };
    return titles[area] || "Consultoría Digital";
  };

  const getServiceDescription = (area: string): string => {
    const descriptions: { [key: string]: string } = {
      strategy: "Desarrollamos un plan estratégico completo para optimizar tu presencia digital.",
      content: "Creación de contenido profesional y atractivo para tu audiencia.",
      engagement: "Mejoramos la interacción con tu comunidad y aumentamos el engagement.",
      consistency: "Establecemos una presencia constante y profesional en redes sociales.",
      branding: "Fortalecemos tu imagen de marca con diseño profesional.",
    };
    return descriptions[area] || "Asesoría personalizada para mejorar tu presencia digital.";
  };

  const getRecommendedServices = () => {
    if (!results) return [];

    const scores = Object.entries(results).sort((a, b) => a[1] - b[1]);
    const recommendations = [];

    // Add recommendations based on lowest scores
    for (let i = 0; i < 3; i++) {
      if (scores[i][1] < 70) {
        recommendations.push({
          area: scores[i][0],
          title: getServiceTitle(scores[i][0]),
          description: getServiceDescription(scores[i][0]),
          score: scores[i][1],
          priority: i === 0 ? "Alta" : i === 1 ? "Media" : "Baja",
          improvement: 100 - scores[i][1],
        });
      }
    }

    return recommendations;
  };

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyig3aUnqOrczA9VkwUx3UWPjf0BFHaaTKpfTFmAU64dJZ-RwVtty3g3k69bcrN-asgig/exec';
  
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const params = new URLSearchParams();
      params.append('timestamp', new Date().toISOString());
      params.append('email', contactInfo.email.trim());
      // Enviar cada respuesta individualmente
      answers.forEach((answer, index) => {
        params.append(`pregunta${index + 1}`, answer);
      });
      // Enviar resultados individuales
      if (results) {
        params.append('estrategia', results.strategy.toString());
        params.append('contenido', results.content.toString());
        params.append('engagement', results.engagement.toString());
        params.append('consistencia', results.consistency.toString());
        params.append('branding', results.branding.toString());
      }

      const response = await fetch(`${SCRIPT_URL}?${params.toString()}`, {
        method: 'GET',
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const json = await response.json();

      if (json.success) {
        setShowContact(false);
        setIsSubmitted(true);
        setContactInfo({ email: '', whatsapp: '' });
      } else {
        alert(json.error || 'Ocurrió un error');
      }
    } catch (err) {
      alert('Ocurrió un error al enviar el formulario');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {!results ? (
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Diagnóstico Digital <span className="text-lime-primary">Gratuito</span>
                  </h1>
                  <p className="text-gray-600">
                    Responde estas {questions.length} preguntas para recibir un análisis detallado de tu presencia en redes sociales y recomendaciones personalizadas.
                  </p>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start space-x-3">
                      <Lock className="text-lime-primary mt-1" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">
                          Tus datos están protegidos. Al continuar, aceptas nuestra{' '}
                          <Link to="/privacidad" className="text-lime-primary hover:underline" target="_blank">
                            política de privacidad
                          </Link>
                          . Solo utilizaremos tu información para:
                        </p>
                        <ul className="mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
                          <li>Generar tu diagnóstico personalizado</li>
                          <li>Enviarte los resultados por email</li>
                          <li>Contactarte para resolver tus dudas</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500">
                      Pregunta {currentQuestion + 1} de {questions.length}
                    </span>
                    <span className="text-sm font-medium text-lime-primary">
                      {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-lime-primary rounded-full h-2 transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-6">
                    {questions[currentQuestion].text}
                  </h2>
                  <div className="space-y-4">
                    {questions[currentQuestion].options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(option.id)}
                        className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-lime-primary hover:bg-lime-primary/5 transition-colors"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                {showContact ? (
                  <>
                    {isSubmitted && (
                      <div className="mb-12 text-center">
                        <div className="w-20 h-20 bg-lime-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                          <CheckCircle2 size={40} className="text-lime-primary" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">¡Diagnóstico enviado con éxito!</h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                          Hemos recibido tus datos. Te enviaremos el diagnóstico completo a tu correo electrónico.
                        </p>
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="btn btn-outline"
                        >
                          Enviar otro diagnóstico
                        </button>
                      </div>
                    )}
                    <div className="mb-12">
                      <h3 className="text-xl font-semibold mb-4">
                        Ingresa tus datos para recibir el diagnóstico completo
                      </h3>
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email profesional
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={contactInfo.email}
                            onChange={e => setContactInfo({ ...contactInfo, email: e.target.value })}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-lime-primary"
                          />
                        </div>
                        {/* Aceptación de política */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
                          <p className="text-sm text-gray-600">
                            Al enviar este formulario, aceptas nuestra{' '}
                            <Link to="/privacidad" className="text-lime-primary hover:underline" target="_blank">
                              política de privacidad
                            </Link>{' '}
                            y consientes recibir comunicaciones relacionadas con tu diagnóstico.
                          </p>
                        </div>
                        <button type="submit" className="w-full btn btn-primary" disabled={isSubmitting}>
                          {isSubmitting ? 'Enviando...' : 'Ver mi diagnóstico completo'}
                        </button>
                      </form>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center mb-12">
                      <div className="w-16 h-16 bg-lime-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={32} className="text-lime-primary" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">
                        Tu Diagnóstico Digital
                      </h2>
                      <p className="text-xl text-gray-600">
                        Análisis completo de tu presencia en redes sociales
                      </p>
                    </div>

                    <Card className="mb-8">
                      <Title>Nivel de Madurez Digital</Title>
                      <BarChart
                        className="mt-6"
                        data={getBarChartData(results)}
                        index="name"
                        categories={['Nivel Actual', 'Potencial de Mejora']}
                        colors={['emerald', 'gray']}
                        valueFormatter={(number: number) => `${number.toFixed(0)}%`}
                        yAxisWidth={48}
                      />
                    </Card>

                    <div className="space-y-8 mb-12">
                      <h3 className="text-2xl font-bold">Áreas de Mejora Prioritarias</h3>
                      {getRecommendedServices().map((service, index) => (
                        <Card key={index} className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                service.priority === "Alta" 
                                  ? "bg-rose-100 text-rose-700"
                                  : service.priority === "Media"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-blue-100 text-blue-700"
                              }`}>
                                Prioridad {service.priority}
                              </span>
                            </div>
                            <div className="mt-4 md:mt-0">
                              <Link
                                to={`/servicios#${service.area}`}
                                className="btn btn-primary"
                              >
                                Ver solución
                                <ArrowRight size={16} className="ml-2" />
                              </Link>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-4">{service.description}</p>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Nivel actual</span>
                              <span className="font-medium">{Math.round(service.score)}%</span>
                            </div>
                            <ProgressBar
                              value={service.score}
                              color={getScoreColor(service.score)}
                              className="h-2"
                            />
                            <p className="text-sm text-gray-500">
                              Potencial de mejora: +{Math.round(service.improvement)}%
                            </p>
                          </div>
                        </Card>
                      ))}
                    </div>

                    <div className="text-center">
                      <p className="text-gray-600 mb-6">
                        ¿Listo para mejorar tu presencia digital?
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/cotiza" className="btn btn-primary">
                          Solicitar propuesta
                          <Target size={18} className="ml-2" />
                        </Link>
                        <a
                          href={`https://wa.me/123456789?text=Hola,%20acabo%20de%20realizar%20mi%20diagnóstico%20digital%20y%20me%20gustaría%20recibir%20más%20información`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn bg-[#25D366] text-white hover:bg-[#128C7E]"
                        >
                          Consultar por WhatsApp
                          <MessageCircle size={18} className="ml-2" />
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Diagnostico;