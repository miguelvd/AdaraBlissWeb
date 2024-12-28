import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const sections = [
  {
    image: '/images/services/alisado-laser.png',
    title: 'Alisado Láser',
    subtitle: 'Tecnología Avanzada',
    description: 'Transforma tu cabello con la última tecnología en alisado',
    highlight: 'Resultados inmediatos',
    features: ['Sin formol', 'Duración 6-8 meses', 'Brillo intenso']
  },
  {
    image: '/images/services/alisado-organico.png',
    title: 'Alisado Orgánico',
    subtitle: '100% Natural',
    description: 'Cuida tu cabello con productos orgánicos certificados',
    highlight: 'Libre de químicos',
    features: ['Ingredientes naturales', 'Protección UV', 'Anti-frizz']
  },
  {
    image: '/images/services/keratina-premium.png',
    title: 'Keratina Premium',
    subtitle: 'Tratamiento Exclusivo',
    description: 'Restaura y fortalece tu cabello desde la raíz',
    highlight: 'Nutrición profunda',
    features: ['Proteínas de keratina', 'Hidratación intensa', 'Reparación total']
  },
  {
    image: '/images/services/Transformación Total.png',
    title: 'Transformación Total',
    subtitle: 'Cambio Radical',
    description: 'Renueva completamente tu imagen',
    highlight: 'Belleza integral',
    features: ['Personalizado', 'Asesoría experta', 'Resultados garantizados']
  }
];

const DynamicHeader: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 px-4 md:px-8 
                    flex justify-between items-center pointer-events-none z-20">
        <button className="swiper-button-prev-custom group 
                         w-12 h-12 md:w-14 md:h-14 
                         bg-white/10 hover:bg-white/20
                         backdrop-blur-md rounded-full
                         flex items-center justify-center
                         transition-all duration-300 ease-out
                         transform hover:scale-110
                         pointer-events-auto
                         focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black/20"
                aria-label="Anterior slide">
          <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8 text-white 
                                    transition-transform duration-300 ease-out
                                    group-hover:-translate-x-0.5" />
        </button>

        <button className="swiper-button-next-custom group
                         w-12 h-12 md:w-14 md:h-14
                         bg-white/10 hover:bg-white/20
                         backdrop-blur-md rounded-full
                         flex items-center justify-center
                         transition-all duration-300 ease-out
                         transform hover:scale-110
                         pointer-events-auto
                         focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black/20"
                aria-label="Siguiente slide">
          <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8 text-white
                                     transition-transform duration-300 ease-out
                                     group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Indicadores de página */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10
                    flex space-x-3">
        {sections.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 
                       ${activeIndex === idx ? 'w-8 bg-pink-500' : 'bg-white/50'}`}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicHeader;
