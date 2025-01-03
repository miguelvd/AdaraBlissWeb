import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Scissors, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  path: string;
  icon: React.FC<{ className?: string }>;
  color: string;
}

const services: Service[] = [
  {
    title: 'Keratina Premium',
    description: 'Tratamiento profesional que elimina el frizz y alisa el cabello hasta por 6 meses.',
    path: '/servicios/keratina-premium',
    icon: Sparkles,
    color: 'from-pink-400 to-pink-600'
  },
  {
    title: 'Alisado Láser',
    description: 'Tecnología avanzada que sella la cutícula y alisa desde la primera sesión.',
    path: '/servicios/alisado-laser',
    icon: Scissors,
    color: 'from-purple-400 to-purple-600'
  },
  {
    title: 'Alisado Orgánico',
    description: 'Fórmula natural que alisa y nutre tu cabello sin químicos agresivos.',
    path: '/servicios/alisado-organico',
    icon: Heart,
    color: 'from-emerald-400 to-emerald-600'
  }
];

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

export const ServicesSection = () => {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 md:py-12 px-4 max-w-5xl mx-auto"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={item}
          className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative p-6 flex flex-col items-center text-center">
            <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
              <service.icon className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-glitten text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {service.description}
            </p>
            <Link
              to={service.path}
              className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full text-sm font-medium hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Más información
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
