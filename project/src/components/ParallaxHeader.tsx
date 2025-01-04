import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const sections = [
  {
    image: '/images/services/alisado-laser.png',
    title: 'Transformación Total',
    subtitle: 'Cambio Radical',
    description: 'Renueva completamente tu imagen y se la mujer que siempre quisiste ser',
    highlight: 'Belleza integral',
    features: ['Personalizado', 'Asesoría experta', 'Resultados garantizados']
  },
  {
    image: '/images/services/alisado-organico.png',
    title: 'Duración Sorprendete',
    subtitle: 'Tecnología Avanzada',
    description: 'Disfruta de un alisado que permanece perfecto durante 6 a 8 meses',
    highlight: 'Resultados inmediatos',
    features: ['Luce increíble por meses', 'Reducción del tiempo en tu rutina diaria', 'resistentes a la humedad y al calor']
  },
  {
    image: '/images/services/keratina-premium.png',
    title: 'Despídete del Frizz para Siempre',
    subtitle: 'Tratamiento Exclusivo',
    description: 'Cabello liso, suave y sin encrespamiento desde la primera sesión.',
    highlight: 'Nutrición profunda',
    features: ['Cabello completamente manejable', 'Hidratación intensa', 'Reparación total']
  },
  {
    image: '/images/services/Transformación Total.png',
    title: 'Cabello Saludable',
    subtitle: 'Cambio Radical',
    description: 'Un alisado seguro y libre de químicos dañinos para cuidar tu salud y tu cabello.',
    highlight: 'Belleza integral',
    features: ['Personalizado', 'Asesoría experta', 'Resultados garantizados']
  }
];

export const ParallaxHeader: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<SwiperType>();

  const handleSlideChange = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 5000,
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
          setActiveIndex(swiper.realIndex);
        }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        className="h-full w-full"
      >
        {sections.map((section, index) => (
          <SwiperSlide key={index} className="relative">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms]"
              style={{ 
                backgroundImage: `url(${section.image})`,
                transform: isChanging ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>
            
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4 lg:px-8">
                <AnimatePresence mode="wait" initial={false}>
                  {currentSlide === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ 
                        duration: 0.5,
                        exit: { duration: 0.3 }
                      }}
                      className="max-w-3xl space-y-6"
                    >
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-pink-400 font-medium tracking-wide"
                      >
                        {section.subtitle}
                      </motion.p>
                      
                      <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-6xl lg:text-7xl font-glitten text-white leading-tight"
                      >
                        {section.title}
                      </motion.h1>
                      
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-xl text-gray-200"
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
      </Swiper>
      
      {/* Botones de navegación personalizados */}
      <div className="absolute inset-0 pointer-events-none">
        <button className="swiper-button-prev-custom group 
                         absolute left-0 top-1/2 -translate-y-1/2
                         w-10 h-10 md:w-12 md:h-12 
                         bg-black/20 hover:bg-black/30
                         backdrop-blur-md rounded-r-full
                         flex items-center justify-center
                         transition-all duration-300 ease-out
                         transform hover:scale-110 hover:translate-x-1
                         pointer-events-auto
                         focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black/20"
                aria-label="Anterior slide">
          <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6 text-white 
                                    transition-transform duration-300 ease-out
                                    group-hover:-translate-x-0.5" />
        </button>

        <button className="swiper-button-next-custom group
                         absolute right-0 top-1/2 -translate-y-1/2
                         w-10 h-10 md:w-12 md:h-12
                         bg-black/20 hover:bg-black/30
                         backdrop-blur-md rounded-l-full
                         flex items-center justify-center
                         transition-all duration-300 ease-out
                         transform hover:scale-110 hover:-translate-x-1
                         pointer-events-auto
                         focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black/20"
                aria-label="Siguiente slide">
          <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6 text-white
                                     transition-transform duration-300 ease-out
                                     group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Indicadores de página */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10
                    flex space-x-4 px-6 py-4">
        {sections.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleSlideChange(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ease-out
                       ${activeIndex === idx 
                         ? 'w-8 bg-pink-500' 
                         : 'w-2.5 bg-white/50 hover:bg-white/70'}`}
            aria-label={`Ir a slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
