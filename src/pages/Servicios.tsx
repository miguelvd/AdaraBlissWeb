import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Heart } from 'lucide-react';

// Servicios de alisado
const serviciosAlaciado = [
  {
    id: 'keratina',
    titulo: 'Keratina Premium',
    descripcion: 'Tratamiento profesional que elimina el frizz y alisa el cabello hasta por 6 meses.',
    icon: Sparkles,
    color: 'bg-gradient-to-br from-pink-400 to-pink-600',
    route: '/servicios/keratina-premium'
  },
  {
    id: 'laser',
    titulo: 'Alisado Láser',
    descripcion: 'Tecnología avanzada que sella la cutícula y alisa desde la primera sesión.',
    icon: Scissors,
    color: 'bg-gradient-to-br from-purple-400 to-purple-600',
    route: '/servicios/alisado-laser'
  },
  {
    id: 'organico',
    titulo: 'Alisado Orgánico',
    descripcion: 'Fórmula natural que alisa y nutre tu cabello sin químicos agresivos.',
    icon: Heart,
    color: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
    route: '/servicios/alisado-organico'
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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl text-center mb-16 text-[#F25AA3] font-glitten">
          Tipos de Alaciado
        </h1>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {serviciosAlaciado.map((servicio) => (
            <motion.div
              key={servicio.id}
              variants={item}
              className="relative group cursor-pointer"
              onClick={() => navigate(servicio.route)}
            >
              <div className={`${servicio.color} rounded-2xl p-8 text-white shadow-xl transform transition-all duration-300 hover:scale-105`}>
                <div className="flex justify-center mb-6">
                  <servicio.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">{servicio.titulo}</h3>
                <p className="text-center text-white/90">{servicio.descripcion}</p>
                <button className="mt-6 w-full bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                  Más información
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};