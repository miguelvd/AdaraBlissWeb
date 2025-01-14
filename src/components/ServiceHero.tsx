import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import OptimizedImage from '../components/OptimizedImage'; // Import OptimizedImage
import { trackServiceNavigation } from '../utils/facebookPixel'; // Import trackServiceNavigation

const services = [
  { id: 'alisado', name: 'Alisado', image: '/images/services/hero/alisado-hero.png', path: '/servicios/alisado' },
  { id: 'botox', name: 'Botox', image: '/images/services/hero/botox-hero.png', path: '/servicios/botox' },
  { id: 'corte', name: 'Corte', image: '/images/services/hero/corte-hero.png', path: '/servicios/corte' },
  { id: 'maquillaje', name: 'Maquillaje', image: '/images/services/hero/maquillaje-hero.png', path: '/servicios/maquillaje' },
  { id: 'cejas', name: 'Cejas', image: '/images/services/hero/cejas-hero.png', path: '/servicios/cejas' }
];

const ServiceHero = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const prevServiceRef = useRef(selectedService);

  useEffect(() => {
    const imageUrls = ['/images/services/hero/main-hero.png', ...services.map(s => s.image)];
    let loadedCount = 0;

    const preloadImages = imageUrls.map(url => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imageUrls.length) {
            setImagesLoaded(true);
          }
          resolve(true);
        };
        img.onerror = () => resolve(false);
      });
    });

    Promise.all(preloadImages);
  }, []);

  useEffect(() => {
    if (prevServiceRef.current !== selectedService && selectedService !== null && prevServiceRef.current !== null) {
      trackServiceNavigation(prevServiceRef.current, selectedService);
      prevServiceRef.current = selectedService;
    }
  }, [selectedService]);

  const handleServiceClick = (serviceId: string) => {
    setSelectedService((prev: string | null) => prev === serviceId ? null : serviceId);
  };

  const handleContinueClick = () => {
    const service = services.find(s => s.id === selectedService);
    if (service) {
      navigate(service.path);
    }
  };

  if (!imagesLoaded) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#F25AA3]"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden -mt-screen mb-0 md:mb-0 mac:mb-0 lg:mb-0">
      {/* Título con ajustes responsivos más precisos */}
      <h1 className="text-4xl xs:text-[2.75rem] sm:text-5xl md:text-6xl text-center pt-4 xs:pt-6 sm:pt-8 md:pt-10 mac:pt-2 pb-1 text-[#F25AA3] font-semibold relative group">
        <span className="relative z-10">
          Nuestros Servicios
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F25AA3] to-transparent opacity-0 group-hover:opacity-100"
          animate={{
            x: [-500, 500],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            filter: 'blur(8px)',
            mixBlendMode: 'overlay'
          }}
        />
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
        initial={{ width: '60vw', height: '60vw', opacity: 0.4 }}
        animate={{
          width: selectedService ? (
            selectedService === 'alisado' ? '150vw' :
            selectedService === 'botox' ? '130vw' :
            selectedService === 'corte' ? '140vw' :
            selectedService === 'maquillaje' ? '130vw' :
            selectedService === 'cejas' ? '70vw' : '60vw'
          ) : '60vw',
          height: selectedService ? (
            selectedService === 'alisado' ? '150vw' :
            selectedService === 'botox' ? '130vw' :
            selectedService === 'corte' ? '140vw' :
            selectedService === 'maquillaje' ? '130vw' :
            selectedService === 'cejas' ? '70vw' : '60vw'
          ) : '60vw',
          opacity: selectedService ? (
            selectedService === 'alisado' ? 0.9 :
            selectedService === 'botox' ? .8 :
            selectedService === 'corte' ? 0.7 :
            selectedService === 'maquillaje' ? 0.7 :
            selectedService === 'cejas' ? 1 : 0.7
          ) : 0.4,
          x: selectedService ? (
            selectedService === 'alisado' ? '-50vw' :
            selectedService === 'botox' ? '20vw' :
            selectedService === 'corte' ? '-30vw' :
            selectedService === 'maquillaje' ? '10vw' :
            selectedService === 'cejas' ? '-5vw' : 0
          ) : 0,
          y: selectedService ? (
            selectedService === 'alisado' ? '-20vh' :
            selectedService === 'botox' ? '30vh' :
            selectedService === 'corte' ? '20vh' :
            selectedService === 'maquillaje' ? '-30vh' :
            selectedService === 'cejas' ? '-10vh' : 0
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
      <div className="absolute inset-0 flex items-center justify-center -mt-16 xs:mt-0">
        <div className="relative w-full h-full max-w-[95%] sm:max-w-[90%] md:max-w-[70%] mx-auto">
          {/* Imagen Principal */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: selectedService ? 0 : 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <OptimizedImage
              src="/images/services/hero/main-hero.png"
              alt="Main hero"
              className="w-full h-[85vh] sm:h-[70vh] md:h-[80vh] object-contain transform -translate-y-12 xs:translate-y-0"
              loading="eager"
              sizes="(max-width: 768px) 95vw, (max-width: 1024px) 90vw, 70vw"
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
              <OptimizedImage
                src={service.image}
                alt={`${service.name} hero`}
                className="w-full h-[85vh] sm:h-[70vh] md:h-[80vh] object-contain transform -translate-y-12 xs:translate-y-0"
                loading="eager"
                sizes="(max-width: 768px) 95vw, (max-width: 1024px) 90vw, 70vw"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Barra de servicios */}
      <div className="absolute w-full z-20
        bottom-[8vh] xs:bottom-0 
        md:bottom-[5vh] 
        lg:bottom-[8vh]"
      >
        <div className="max-w-7xl mx-auto px-2 xs:px-4">
          {/* Barra negra de fondo */}
          <div className="absolute inset-0 bg-black xs:rounded-[24px] -top-3 xs:-top-4 sm:-top-5 bottom-0 transform -translate-y-16 xs:translate-y-0"></div>
          
          {/* Contenedor de botones con ajustes responsivos */}
          <div className="relative grid grid-cols-5 gap-1 xs:gap-2 sm:gap-4 py-3 xs:py-4 sm:py-5 transform -translate-y-16 xs:translate-y-0">
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
                >
                  {/* Indicador elegante para alisado cuando no hay selección */}
                  {!selectedService && service.id === 'alisado' && (
                    <motion.div
                      className="absolute -inset-2"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [0.7, 1, 0.7],
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.5, 1]
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFFFF]/30 via-[#FFFFFFFF]/60 to-[#FFFFFFFF]/30 rounded-lg blur-md" />
                    </motion.div>
                  )}

                  <motion.div 
                    className={`flex items-center justify-center mb-1 sm:mb-2 transition-all`}
                    animate={shouldAnimate ? {
                      y: [0, -3, 0],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.5, 1]
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
                          : 'brightness(0) invert(1)',
                        transition: 'filter 0.3s ease'
                      }}
                    />
                  </motion.div>
                  <span className={`text-xs xs:text-sm sm:text-base font-medium transition-all ${
                    isSelected
                      ? 'relative text-transparent'
                      : 'text-white/80 group-hover:text-white'
                  }`}>
                    {isSelected ? (
                      <div className="relative">
                        {/* Texto base con contorno */}
                        <span
                          className="absolute inset-0 text-transparent"
                          style={{
                            WebkitTextStroke: '1px #F25AA3',
                          }}
                        >
                          {service.name}
                        </span>
                        
                        {/* Texto principal */}
                        <span className="relative z-10 text-white">
                          {service.name}
                        </span>
                        
                        {/* Efecto de luz */}
                        <motion.span
                          className="absolute inset-0"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            x: [-20, 20],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          style={{
                            background: 'linear-gradient(90deg, transparent 0%, #F25AA3 50%, transparent 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'blur(3px) brightness(1.5)',
                            mixBlendMode: 'soft-light',
                            WebkitTextStroke: '0.5px rgba(242, 90, 163, 0.5)',
                          }}
                        >
                          {service.name}
                        </motion.span>
                      </div>
                    ) : (
                      service.name
                    )}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Botón Continuar con ajustes responsivos */}
      {selectedService && (
        <div className="absolute w-full bottom-[30vh] xs:bottom-[22vh] sm:bottom-[25vh] md:bottom-[28vh] lg:bottom-[32vh] mac:bottom-[35vh] flex justify-center items-center z-30">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-[#F25AA3] hover:bg-[#ff69b4] text-white text-sm xs:text-base mac:text-lg font-bold py-2 xs:py-3 mac:py-4 px-6 xs:px-8 mac:px-10 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContinueClick}
          >
            Continuar
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default ServiceHero;
