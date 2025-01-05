import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { id: 'alisado', name: 'Alisado', icon: '/iconos/alisado.svg' },
  { id: 'botox', name: 'Botox', icon: '/iconos/botox.svg' },
  { id: 'corte', name: 'Corte', icon: '/iconos/corte.svg' },
  { id: 'maquillaje', name: 'Maquillaje', icon: '/iconos/maquillaje.svg' },
  { id: 'cejas', name: 'Cejas', icon: '/iconos/cejas.svg' }
];

export const ServiceBar = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="relative flex flex-col items-center">
        <AnimatePresence>
          {!selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 10 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute -top-16 left-[80px] z-50"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ filter: 'drop-shadow(0px 0px 4px rgba(236, 72, 153, 0.5))' }}
                >
                  <path
                    d="M13.0607 39.0607C12.4749 39.6464 11.5251 39.6464 10.9393 39.0607L1.3934 29.5147C0.807611 28.9289 0.807611 27.9792 1.3934 27.3934C1.97919 26.8076 2.92893 26.8076 3.51472 27.3934L12 35.8787L20.4853 27.3934C21.0711 26.8076 22.0208 26.8076 22.6066 27.3934C23.1924 27.9792 23.1924 28.9289 22.6066 29.5147L13.0607 39.0607ZM13.5 0V38H10.5V0H13.5Z"
                    fill="#EC4899"
                  />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mantenemos el margen original en móvil */}
        <div className="mt-[5.5rem] md:mt-12 lg:mt-8">
          <div 
            style={{
              backgroundColor: 'white',
              padding: '2rem 3rem',
              borderRadius: '0',
              WebkitBorderRadius: '0',
              MozBorderRadius: '0',
              msTransform: 'none',
              WebkitTransform: 'none',
              transform: 'none'
            }}
          >
            <div className="flex gap-16 md:gap-24">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="flex flex-col items-center gap-3 cursor-pointer"
                  onClick={() => setSelectedService(prev => prev === service.id ? null : service.id)}
                >
                  <motion.img 
                    src={service.icon} 
                    alt={service.name} 
                    className="w-10 h-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  />
                  <span className="text-black text-base">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
