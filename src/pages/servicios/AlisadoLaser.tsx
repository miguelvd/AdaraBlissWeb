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
    <div className="min-h-screen bg-white pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Alisado Láser
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La última tecnología en alisado capilar para un cabello perfecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/images/services/Laser.png"
              alt="Alisado Láser"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">
              Descubre la Revolución en Alisado Capilar
            </h2>
            <p className="text-gray-600 mb-8">
              Nuestro alisado láser utiliza la más avanzada tecnología para transformar
              tu cabello desde la primera sesión. Este tratamiento no solo alisa, sino
              que también sella la cutícula, proporcionando un acabado suave y brillante
              que dura más tiempo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={beneficio.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="mb-4">
                    {beneficio.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{beneficio.titulo}</h3>
                  <p className="text-gray-600 text-sm">{beneficio.descripcion}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};