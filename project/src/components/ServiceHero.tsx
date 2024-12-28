import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  { id: 'alisado', name: 'Alisado', image: '/images/services/hero/alisado-hero.png' },
  { id: 'botox', name: 'Botox', image: '/images/services/hero/botox-hero.png' },
  { id: 'corte', name: 'Corte', image: '/images/services/hero/corte-hero.png' },
  { id: 'maquillaje', name: 'Maquillaje', image: '/images/services/hero/maquillaje-hero.png' },
  { id: 'cejas', name: 'Cejas', image: '/images/services/hero/cejas-hero.png' }
];

export const ServiceHero = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(prev => prev === serviceId ? null : serviceId);
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <h1 className="text-5xl md:text-6xl text-center pt-24 pb-8 text-[#F25AA3] font-semibold">
        Nuestros Servicios
      </h1>

      {/* Elementos decorativos */}
      <motion.div
        className="absolute left-[10%] top-[20%] w-24 h-24 rounded-full bg-[#F25AA3]/20"
        animate={{
          scale: selectedService === 'alisado' ? 2 : selectedService ? 0.8 : 1,
          opacity: selectedService === 'alisado' ? 0.6 : selectedService ? 0.2 : 0.2,
          x: selectedService === 'alisado' ? 100 : 0,
          y: selectedService === 'alisado' ? -50 : 0,
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[15%] bottom-[30%] w-16 h-16 rounded-full bg-[#F25AA3]/40"
        animate={{
          scale: selectedService === 'botox' ? 1.8 : selectedService ? 0.6 : 1,
          opacity: selectedService === 'botox' ? 0.5 : selectedService ? 0.3 : 0.3,
          x: selectedService === 'botox' ? -80 : 0,
          y: selectedService === 'botox' ? 30 : 0,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[30%] top-[40%] w-20 h-20 rounded-full bg-[#F25AA3]/60"
        animate={{
          scale: selectedService === 'corte' ? 2.5 : selectedService ? 0.7 : 1,
          opacity: selectedService === 'corte' ? 0.7 : selectedService ? 0.2 : 0.25,
          x: selectedService === 'corte' ? 60 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[25%] top-[25%] w-12 h-12 rounded-full bg-[#F25AA3]/45"
        animate={{
          scale: selectedService === 'maquillaje' ? 2.2 : selectedService ? 0.5 : 1,
          opacity: selectedService === 'maquillaje' ? 0.4 : selectedService ? 0.3 : 0.35,
          x: selectedService === 'maquillaje' ? -40 : 0,
          y: selectedService === 'maquillaje' ? 60 : 0,
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[20%] bottom-[50%] w-14 h-14 rounded-full bg-[#F25AA3]/50"
        animate={{
          scale: selectedService === 'cejas' ? 1.7 : selectedService ? 0.9 : 1,
          opacity: selectedService === 'cejas' ? 0.6 : selectedService ? 0.2 : 0.4,
          x: selectedService === 'cejas' ? 90 : 0,
          y: selectedService === 'cejas' ? -20 : 0,
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />

      {/* Círculo rosa de fondo */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-[#F25AA3]/40"
        initial={{ width: '40vh', height: '40vh', opacity: 0.4 }}
        animate={{
          width: selectedService ? (
            selectedService === 'alisado' ? '130vh' :
            selectedService === 'botox' ? '100vh' :
            selectedService === 'corte' ? '120vh' :
            selectedService === 'maquillaje' ? '110vh' :
            selectedService === 'cejas' ? '50vh' : '50vh'
          ) : '40vh',
          height: selectedService ? (
            selectedService === 'alisado' ? '130vh' :
            selectedService === 'botox' ? '100vh' :
            selectedService === 'corte' ? '120vh' :
            selectedService === 'maquillaje' ? '110vh' :
            selectedService === 'cejas' ? '50vh' : '10vh'
          ) : '40vh',
          opacity: selectedService ? (
            selectedService === 'alisado' ? 0.9 :
            selectedService === 'botox' ? .8 :
            selectedService === 'corte' ? 0.7 :
            selectedService === 'maquillaje' ? 0.7 :
            selectedService === 'cejas' ? 1 : 0.7
          ) : 0.4,
          x: selectedService ? (
            selectedService === 'alisado' ? -200 :
            selectedService === 'botox' ? 100 :
            selectedService === 'corte' ? -150 :
            selectedService === 'maquillaje' ? 50 :
            selectedService === 'cejas' ? -10 : 0
          ) : 0,
          y: selectedService ? (
            selectedService === 'alisado' ? -100 :
            selectedService === 'botox' ? 150 :
            selectedService === 'corte' ? 100 :
            selectedService === 'maquillaje' ? -150 :
            selectedService === 'cejas' ? -50 : 0
          ) : 0
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Destellos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: selectedService ? [0, 1, 0] : 0
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute left-[15%] top-[25%] pointer-events-none"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L23.5 16.5L40 20L23.5 23.5L20 40L16.5 23.5L0 20L16.5 16.5L20 0Z" fill="white" fillOpacity="0.8"/>
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: selectedService ? [0, 1, 0] : 0
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute left-[25%] top-[20%] scale-75 pointer-events-none"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L23.5 16.5L40 20L23.5 23.5L20 40L16.5 23.5L0 20L16.5 16.5L20 0Z" fill="white" fillOpacity="0.6"/>
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: selectedService ? [0, 1, 0] : 0
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute left-[20%] top-[30%] scale-50 pointer-events-none"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L23.5 16.5L40 20L23.5 23.5L20 40L16.5 23.5L0 20L16.5 16.5L20 0Z" fill="white" fillOpacity="0.7"/>
        </svg>
      </motion.div>

      {/* Contenedor de imágenes */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-[95%] sm:max-w-[90%] md:max-w-[70%] mx-auto">
          {/* Imagen Principal */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: selectedService ? 0 : 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img
              src="/images/services/hero/main-hero.png"
              alt="Main hero"
              className="w-full h-[85vh] sm:h-[70vh] md:h-[80vh] object-contain"
            />
          </motion.div>

          {/* Imágenes de Servicios */}
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedService === service.id ? 1 : 0 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut",
                opacity: { 
                  duration: 0.5,
                  ease: "easeInOut" 
                }
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src={service.image}
                alt={`${service.name} hero`}
                className="w-full h-[85vh] sm:h-[70vh] md:h-[80vh] object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Barra de servicios */}
      <div className="absolute bottom-20 left-0 right-0 px-2 sm:bottom-15 px-4 z-10">
        <motion.div 
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Barra negra de fondo */}
          <div className="absolute inset-0 bg-black rounded-[24px] -top-4 -bottom-1"></div>
          
          <div className="flex justify-center items-center gap-3 sm:gap-8 overflow-x-auto pb-4 px-1 sm:px-2 scrollbar-hide relative">
            {services.map((service) => {
              const isSelected = selectedService === service.id;
              const isAlisado = service.id === 'alisado';
              const shouldAnimate = !selectedService && isAlisado;
              
              return (
                <motion.button
                  key={service.id}
                  onClick={() => handleServiceClick(service.id)}
                  className={`flex flex-col items-center min-w-[70px] sm:min-w-[90px] group transition-all relative z-10`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={shouldAnimate ? {
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  } : {}}
                >
                  <motion.div 
                    className={`flex items-center justify-center mb-1 sm:mb-2 transition-all`}
                    animate={shouldAnimate ? {
                      y: [0, -3, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    } : {}}
                  >
                    <img 
                      src={`/iconos/${service.id}.svg`}
                      alt={service.name}
                      className={`w-6 h-5 sm:w-8 sm:h-8 transition-all`}
                      style={{
                        filter: isSelected 
                          ? 'brightness(0) saturate(100%) invert(55%) sepia(82%) saturate(4402%) hue-rotate(308deg) brightness(100%) contrast(101%)'
                          : 'brightness(0) invert(1)'
                      }}
                    />
                  </motion.div>
                  <span className={`text-sm sm:text-base font-medium transition-all ${
                    isSelected
                      ? 'text-[#F25AA3]'
                      : 'text-white/80 group-hover:text-white'
                  }`}>
                    {service.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Botón Continuar */}
      {selectedService && (
        <div className="absolute w-full bottom-[20%] flex justify-center items-center">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
            }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6 
            }}
          >
            <motion.button
              className="bg-[#F25AA3] hover:bg-[#ff69b4] text-white font-bold py-3 px-8 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                console.log(`Navegando al servicio: ${selectedService}`);
              }}
            >
              <span className="text-lg">Continuar</span>
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
};
