import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const sections = [
  {
    id: 1,
    image: encodeURI('/images/banners/Transformacion total.png'),
    title: 'Transformación Total',
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
  const swiperRef = useRef<SwiperType | null>(null);

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
    <div className="relative w-full overflow-hidden" style={{
      height: '100vh',
      minHeight: '500px',
      maxHeight: '100vh'
    }}>
      <Swiper
        modules={[Autoplay, Navigation]}
        speed={1200}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChangeTransitionStart={() => {
          setIsChanging(true);
        }}
        onSlideChangeTransitionEnd={() => {
          setIsChanging(false);
        }}
        onActiveIndexChange={(swiper) => {
          setCurrentSlide(swiper.realIndex);
        }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        className="h-full w-full relative"
      >
        {sections.map((section) => (
          <SwiperSlide key={section.id} className="relative overflow-hidden">
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${section.image})`,
                  backgroundPosition: '50% 30%',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  transform: `scale(${isChanging ? 1.1 : 1.02})`,
                  opacity: isChanging ? 0.8 : 1,
                  transition: 'all 1200ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"
                style={{
                  opacity: isChanging ? 0.7 : 1,
                  transition: 'opacity 1200ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </div>
            
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <AnimatePresence mode="wait" initial={false}>
                  {currentSlide === sections.indexOf(section) && (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ 
                        duration: 0.5,
                        exit: { duration: 0.3 }
                      }}
                      className="max-w-3xl space-y-6 px-2 sm:px-4"
                    >
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-pink-400 font-medium tracking-wide text-base sm:text-lg"
                      >
                        {section.subtitle}
                      </motion.p>
                      
                      <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
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
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-lg sm:text-xl text-gray-200"
                      >
                        {section.description}
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-wrap gap-4 mt-8"
                      >
                        {section.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.6 + idx * 0.1, duration: 0.3 }}
                            className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full
                                     flex items-center space-x-2 text-white"
                          >
                            <ChevronRightIcon className="h-4 w-4 text-pink-400" />
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
                        <button className="bg-gradient-to-r from-pink-500 to-pink-600 
                                         hover:from-pink-600 hover:to-pink-700
                                         text-white px-8 py-3 rounded-full
                                         transform transition hover:scale-105
                                         shadow-lg hover:shadow-pink-500/30">
                          Reserva tu cita
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Paginación personalizada */}
        <div className="absolute bottom-20 left-0 right-0 z-50 flex justify-center gap-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 bg-pink-500' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>

        {/* Botones de navegación */}
        <div className="absolute inset-0 pointer-events-none">
          <button 
            className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2
                     w-10 h-10 bg-black/20 hover:bg-black/30 backdrop-blur-sm
                     rounded-full flex items-center justify-center
                     transition-all duration-300 pointer-events-auto
                     focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Anterior"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>

          <button 
            className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2
                     w-10 h-10 bg-black/20 hover:bg-black/30 backdrop-blur-sm
                     rounded-full flex items-center justify-center
                     transition-all duration-300 pointer-events-auto
                     focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Siguiente"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
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
