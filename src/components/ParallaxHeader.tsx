import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type SwiperCore from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const sections = [
  {
    id: 1,
    image: encodeURI('/images/banners/Transformacion total.png'),
    title: 'Cambio Radical',
    subtitle: 'Cambio Radical',
    description: 'Renueva completamente tu imagen y se la mujer que siempre quisiste ser',
    highlight: 'Belleza integral',
    features: ['Personalizado', 'Asesoría experta', 'Resultados garantizados']
  },
  {
    id: 2,
    image: encodeURI('/images/banners/Duracion sorpentende.jpg'),
    title: 'Duración Sorprendente',
    subtitle: 'Tecnología Avanzada',
    description: 'Disfruta de un alisado que permanece perfecto durante 6 a 8 meses',
    highlight: 'Resultados inmediatos',
    features: ['Luce increíble por meses', 'Reducción del tiempo en tu rutina diaria', 'Resistente a la humedad y al calor']
  },
  {
    id: 3,
    image: encodeURI('/images/banners/Despidete del Frizz.jpg'),
    title: 'Sin Frizz',
    subtitle: 'Tratamiento Exclusivo',
    description: 'Cabello liso, suave y sin encrespamiento desde la primera sesión.',
    highlight: 'Nutrición profunda',
    features: ['Cabello completamente manejable', 'Hidratación intensa', 'Reparación total']
  },
  {
    id: 4,
    image: encodeURI('/images/banners/cabello sano.png'),
    title: 'Cabello Saludable',
    subtitle: 'Cambio Radical',
    description: 'Un alisado seguro y libre de químicos dañinos para cuidar tu salud y tu cabello.',
    highlight: 'Belleza integral',
    features: ['Personalizado', 'Asesoría experta', 'Resultados garantizados']
  }
];

export const ParallaxHeader: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const swiperRef = useRef<SwiperCore>();

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagePromises = sections.map((section) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = section.image;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error cargando imágenes:', error);
        setImagesLoaded(true); // Mostrar contenido incluso si hay error
      }
    };

    loadImages();
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="text-2xl text-gray-600">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen">
      {/* Flechas de navegación */}
      <button 
        onClick={handlePrevSlide}
        className="hidden md:flex absolute left-4 z-20 top-1/2 -translate-y-1/2
                   w-12 h-12 items-center justify-center
                   bg-white/10 backdrop-blur-sm rounded-full
                   border border-white/20
                   transition-all duration-300
                   hover:bg-white/20 hover:scale-110
                   group"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6 text-white transition-transform group-hover:-translate-x-0.5" />
      </button>
      
      <button 
        onClick={handleNextSlide}
        className="hidden md:flex absolute right-4 z-20 top-1/2 -translate-y-1/2
                   w-12 h-12 items-center justify-center
                   bg-white/10 backdrop-blur-sm rounded-full
                   border border-white/20
                   transition-all duration-300
                   hover:bg-white/20 hover:scale-110
                   group"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6 text-white transition-transform group-hover:translate-x-0.5" />
      </button>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay, Navigation]}
        className="h-full"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1200}
        onSlideChange={() => {
          setIsChanging(true);
          setTimeout(() => setIsChanging(false), 500);
        }}
        onActiveIndexChange={(swiper) => {
          setCurrentSlide(swiper.realIndex);
        }}
      >
        {sections.map((section, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div className="absolute inset-0">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                  onLoad={() => console.log('Imagen cargada')}
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                  <AnimatePresence mode="wait" initial={false}>
                    {currentSlide === index && (
                      <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                          exit: { duration: 0.5 }
                        }}
                        className="max-w-3xl space-y-6 px-2 sm:px-4"
                      >
                        <motion.h1
                          initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
                          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                          exit={{ opacity: 0, scale: 1.1, filter: "blur(12px)" }}
                          transition={{ 
                            delay: 0.3,
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          className="text-5xl xs:text-6xl sm:text-7xl lg:text-8xl font-glitten text-white leading-[1.1] tracking-wide break-words"
                          style={{
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word',
                            hyphens: 'auto'
                          }}
                        >
                          {section.title}
                        </motion.h1>

                        <motion.p
                          initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
                          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                          exit={{ opacity: 0, x: 30, filter: "blur(6px)" }}
                          transition={{ 
                            delay: 0.4,
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          className="text-lg sm:text-xl text-gray-200"
                        >
                          {section.description}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ 
                            delay: 0.5,
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          className="flex flex-wrap gap-4 mt-8"
                        >
                          {section.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                              exit={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                              transition={{
                                delay: 0.6 + idx * 0.1,
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1]
                              }}
                              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full
                                       flex items-center space-x-2 text-white hover:bg-white/20 
                                       transform hover:scale-105 transition-all duration-300"
                            >
                              <ChevronRight className="h-4 w-4 text-pink-400" />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ delay: 0.8, duration: 0.5 }}
                          className="pt-8"
                        >
                          <a 
                            href="https://wa.me/524492175606?text=¡Hola! Me interesa obtener más información sobre el servicio de alisado. ¿Podrían proporcionarme detalles sobre precios y disponibilidad? Gracias."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 
                                     hover:from-pink-600 hover:to-pink-700
                                     text-white px-8 py-3 rounded-full
                                     transform transition hover:scale-105
                                     shadow-lg hover:shadow-pink-500/30">
                            Reserva tu cita
                          </a>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        :root {
          --sat: env(safe-area-inset-top);
          --sab: env(safe-area-inset-bottom);
          --sal: env(safe-area-inset-left);
          --sar: env(safe-area-inset-right);
        }

        body {
          padding: 0;
          margin: 0;
          overscroll-behavior: none;
        }

        @supports (-webkit-touch-callout: none) {
          .h-screen {
            height: -webkit-fill-available;
          }
        }

        @media (max-height: 700px) {
          .h-screen {
            min-height: 700px;
          }
        }
      `}</style>
    </div>
  );
};
