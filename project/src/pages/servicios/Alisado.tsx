import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const serviciosAlaciado = [
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

export const Alisado = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-pink-50/50 to-white pointer-events-none" />
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-pink-100/30 blur-3xl" />
      <div className="absolute top-40 left-10 w-48 h-48 rounded-full bg-purple-100/30 blur-3xl" />
      
      {/* Content */}
      <div className="relative pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-glitten text-[#F25AA3] mb-4"
            >
              Tipos de Alaciado
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Descubre nuestros tratamientos especializados para conseguir el cabello liso y sedoso que siempre has deseado
            </motion.p>
          </div>

          {/* Services Grid */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {serviciosAlaciado.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-pink-50 shadow-lg hover:shadow-xl transition-all duration-500"
                onClick={() => navigate(service.path)}
              >
                {/* Decorative background circles */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-50 blur-xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 blur-xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative p-8 flex flex-col items-center text-center">
                  {/* Icon */}
                  <motion.div 
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-glitten bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  {/* Button */}
                  <button
                    className="relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl text-sm font-medium overflow-hidden transition-all duration-300 hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 hover:shadow-lg"
                  >
                    <span className="relative z-10">Más información</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Decoration */}
          <div className="mt-20 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
