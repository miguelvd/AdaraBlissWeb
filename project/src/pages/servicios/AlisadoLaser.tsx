import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield } from 'lucide-react';

interface Beneficio {
  icon: React.ReactNode;
  titulo: string;
  descripcion: string;
}

const beneficios: Beneficio[] = [
  {
    icon: <Sparkles className="w-8 h-8 text-pink-500" />,
    titulo: "Tecnología Avanzada",
    descripcion: "Utilizamos la última tecnología en alisado capilar"
  },
  {
    icon: <Zap className="w-8 h-8 text-pink-500" />,
    titulo: "Resultados Inmediatos",
    descripcion: "Alisa desde la primera sesión con resultados visibles"
  },
  {
    icon: <Shield className="w-8 h-8 text-pink-500" />,
    titulo: "Cuidado Térmico",
    descripcion: "Protege el cabello durante el proceso de alisado"
  }
];

export const AlisadoLaser = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl text-center font-glitten text-[#F25AA3] mb-12"
        >
          Alisado Láser
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nuestro tratamiento de alisado láser representa la última innovación en tecnología capilar. 
              Utilizando un sistema avanzado de nano-partículas activadas por láser, este tratamiento 
              sella la cutícula y alisa el cabello desde la primera aplicación, proporcionando resultados 
              extraordinarios y duraderos.
            </p>

            <div className="space-y-6">
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 transform transition-transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {beneficio.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-glitten text-gray-800 mb-2">
                        {beneficio.titulo}
                      </h3>
                      <p className="text-gray-600">
                        {beneficio.descripcion}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Elementos decorativos */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            
            {/* Imagen principal */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="/images/services/alisado-laser.jpg"
                alt="Alisado Láser"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};