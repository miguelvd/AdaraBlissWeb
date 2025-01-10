import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'keratina-premium',
    title: 'Keratina Premium',
    description: 'Tratamiento profesional que elimina el frizz y alisa el cabello hasta por 6 meses.',
    icon: '/images/services/keratina-premium.png',
    color: 'bg-[#F25AA3]'
  },
  {
    id: 'alisado-laser',
    title: 'Alisado Láser',
    description: 'Tecnología avanzada que sella la cutícula y alisa desde la primera sesión.',
    icon: '/images/services/alisado-laser.png',
    color: 'bg-[#9747FF]'
  },
  {
    id: 'alisado-organico',
    title: 'Alisado Orgánico',
    description: 'Fórmula natural que alisa y nutre tu cabello sin químicos agresivos.',
    icon: '/images/services/alisado-organico.png',
    color: 'bg-[#10B981]'
  }
];

const ServiceDetails: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className={`w-20 h-20 ${service.color} rounded-2xl p-4 mb-6 shadow-lg`}>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-6 px-6 py-2 rounded-full text-white ${service.color} hover:opacity-90`}
              >
                Más información
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
