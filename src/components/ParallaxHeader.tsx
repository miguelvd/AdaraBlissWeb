import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const sections = [
  {
    id: 1,
    image: '/images/banners/Transformacion total.png',
    title: 'Cambio Radical',
    subtitle: 'Cambio Radical',
    description: 'Renueva completamente tu imagen y se la mujer que siempre quisiste ser',
    highlight: 'Belleza integral',
    features: ['Personalizado', 'Asesoría experta', 'Resultados garantizados']
  },
  {
    id: 2,
    image: '/images/banners/Duracion sorpentende.jpg',
    title: 'Duración Sorprendente',
    subtitle: 'Tecnología Avanzada',
    description: 'Disfruta de un alisado que permanece perfecto durante 6 a 8 meses',
    highlight: 'Resultados inmediatos',
    features: ['Luce increíble por meses', 'Reducción del tiempo en tu rutina diaria', 'Resistente a la humedad y al calor']
  },
  {
    id: 3,
    image: '/images/banners/Despidete del Frizz.jpg',
    title: 'Sin Frizz',
    subtitle: 'Tratamiento Exclusivo',
    description: 'Cabello liso, suave y sin encrespamiento desde la primera sesión.',
    highlight: 'Nutrición profunda',
    features: ['Cabello completamente manejable', 'Hidratación intensa', 'Reparación total']
  },
  {
    id: 4,
    image: '/images/banners/cabello sano.png',
    title: 'Cabello Saludable',
    subtitle: 'Cambio Radical',
    description: 'Un alisado seguro y libre de químicos dañinos para cuidar tu salud y tu cabello.',
    highlight: 'Belleza integral',
    features: ['Personalizado', 'Asesoría experta', 'Resultados garantizados']
  }
];

const WHATSAPP_NUMBER = '524492175606';

export const ParallaxHeader: React.FC = () => {
  const swiperRef = useRef<SwiperType>();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

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

  const getWhatsAppLink = (section: typeof sections[0]) => {
    const message = `Vi en la página web este beneficio del alisado "${section.title}", ¿Podrías darme más información?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

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
        ref={prevRef}
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
        ref={nextRef}
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
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        speed={1500}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== 'boolean'
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex);
        }}
        className="w-full h-screen relative"
      >
        {sections.map((section, index) => (
          <SwiperSlide key={section.id} className="relative w-full h-screen">
            {/* Contenedor de imagen con altura fija */}
            <div className="absolute inset-0 w-full h-full">
              <OptimizedImage
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover transform scale-[1.02] transition-transform duration-[2000ms]"
                loading={index === 0 ? 'eager' : 'lazy'}
                sizes="100vw"
              />
            </div>
            
            {/* Overlay oscuro con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
            
            {/* Contenido */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 lg:px-8">
                <AnimatePresence mode="wait">
                  {currentSlide === index && (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="max-w-3xl"
                    >
                      {/* Highlight */}
                      <motion.span
                        className="inline-block text-pink-400 text-lg font-medium mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {section.highlight}
                      </motion.span>

                      {/* Título */}
                      <motion.h1
                        className="text-5xl sm:text-6xl lg:text-7xl font-glitten text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {section.title}
                      </motion.h1>

                      {/* Descripción */}
                      <motion.p
                        className="text-xl text-gray-200 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {section.description}
                      </motion.p>

                      {/* Características */}
                      <motion.div 
                        className="flex flex-wrap gap-4 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {section.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm"
                          >
                            <span className="mr-2">•</span>
                            {feature}
                          </span>
                        ))}
                      </motion.div>

                      {/* Botón */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <a
                          href={getWhatsAppLink(section)}
                          className="inline-flex items-center px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-medium transition-colors duration-200"
                        >
                          Agenda tu cita
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </a>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
