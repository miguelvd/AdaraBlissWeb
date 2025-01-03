import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Heart } from 'lucide-react';
import { ServiceHero } from '../components/ServiceHero';

// Servicios de alisado
const serviciosAlaciado = [
  {
    id: 'keratina',
    titulo: 'Keratina Premium',
    descripcion: 'Tratamiento profesional que elimina el frizz y alisa el cabello hasta por 6 meses.',
    icon: Sparkles,
    color: 'from-pink-400 to-pink-600',
    route: '/servicios/keratina'
  },
  {
    id: 'laser',
    titulo: 'Alisado Láser',
    descripcion: 'Tecnología avanzada que sella la cutícula y alisa desde la primera sesión.',
    icon: Scissors,
    color: 'from-purple-400 to-purple-600',
    route: '/servicios/laser'
  },
  {
    id: 'organico',
    titulo: 'Alisado Orgánico',
    descripcion: 'Fórmula natural que alisa y nutre tu cabello sin químicos agresivos.',
    icon: Heart,
    color: 'from-emerald-400 to-emerald-600',
    route: '/servicios/organico'
  }
];

// Animaciones
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Servicios = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const showAlisado = location.hash === '#alisado';

  const handleMoreInfo = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50/50">
      {showAlisado ? (
        <div className="container mx-auto px-4 pt-32 md:pt-40 pb-12 md:pb-16 flex-grow flex flex-col items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-glitten text-center mb-16 md:mb-20 text-pink-500"
          >
            Tipos de Alisado
          </motion.h1>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-8 md:gap-12 w-full max-w-6xl mx-auto"
          >
            {serviciosAlaciado.map((servicio) => (
              <motion.div
                key={servicio.id}
                variants={item}
                className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${servicio.color} opacity-90`} />
                
                <div className="relative p-8 md:p-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm mb-6">
                    <servicio.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-glitten text-white mb-4">
                    {servicio.titulo}
                  </h2>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                    {servicio.descripcion}
                  </p>
                  <button 
                    onClick={() => handleMoreInfo(servicio.route)}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-pink-500 rounded-full text-sm font-medium hover:bg-pink-50 transition-colors duration-300"
                  >
                    Más Información
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        // Vista principal de servicios con la chica
        <ServiceHero />
      )}
    </div>
  );
};