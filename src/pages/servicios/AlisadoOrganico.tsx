import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Droplets } from 'lucide-react';

interface Beneficio {
  icon: React.ReactNode;
  titulo: string;
  descripcion: string;
}

const beneficios: Beneficio[] = [
  {
    icon: <Leaf className="w-8 h-8 text-emerald-500" />,
    titulo: "100% Natural",
    descripcion: "Fórmula orgánica sin químicos agresivos"
  },
  {
    icon: <Heart className="w-8 h-8 text-emerald-500" />,
    titulo: "Nutrición Profunda",
    descripcion: "Nutre y repara mientras alisa tu cabello"
  },
  {
    icon: <Droplets className="w-8 h-8 text-emerald-500" />,
    titulo: "Hidratación Total",
    descripcion: "Mantiene el cabello hidratado y saludable"
  }
];

export const AlisadoOrganico = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl text-center font-glitten text-[#4CAF50] mb-12"
        >
          Alisado Orgánico
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/images/services/Alisado Organico.png"
              alt="Alisado Orgánico"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">
              Alisado Natural y Saludable
            </h2>
            <p className="text-gray-600 mb-8">
              Nuestro alisado orgánico utiliza ingredientes naturales que respetan
              la salud de tu cabello. Este tratamiento no solo alisa, sino que también
              nutre y fortalece tu cabello de manera natural, sin químicos agresivos.
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