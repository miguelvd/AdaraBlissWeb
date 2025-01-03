import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "María García",
    role: "Cliente frecuente",
    content: "El mejor servicio de alaciado que he probado. Mi cabello quedó increíble y el efecto duró mucho más de lo esperado.",
    rating: 5,
    image: "/images/testimonials/testimonial1.png.png"
  },
  {
    name: "Ana Rodríguez",
    role: "Cliente nueva",
    content: "Excelente atención y resultados profesionales. El personal es muy amable y conocedor.",
    rating: 5,
    image: "/images/testimonials/testimonial2.png.png"
  },
  {
    name: "Laura Martínez",
    role: "Cliente frecuente",
    content: "Increíble experiencia. Mi cabello nunca había lucido tan hermoso y saludable.",
    rating: 5,
    image: "/images/testimonials/testimonial1.png.png"
  }
];

export const TestimonialSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-glitten text-center mb-16 text-white"
      >
        Testimonios
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group h-full"
          >
            {/* Tarjeta principal */}
            <div className="bg-neutral-800/30 backdrop-blur-md p-8 rounded-2xl shadow-xl
                          transform transition-all duration-300 group-hover:translate-y-[-5px]
                          border border-white/5 group-hover:border-pink-500/20
                          relative overflow-hidden h-full flex flex-col">
              {/* Icono de comillas decorativo */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} className="text-pink-500" />
              </div>

              {/* Contenedor de la imagen y gradiente */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden 
                              border-2 border-pink-500/50 group-hover:border-pink-500 
                              transition-all duration-300 shadow-lg 
                              shadow-pink-500/20 group-hover:shadow-pink-500/40">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                {/* Efecto de brillo detrás de la imagen */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                              rounded-full blur-xl -z-10" />
              </div>

              {/* Estrellas con animación */}
              <div className="flex gap-1 justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.2 }}
                  >
                    <Star
                      className="w-5 h-5 text-pink-500 fill-current transform transition-transform duration-300
                               hover:scale-110 hover:text-pink-400"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Contenido del testimonio */}
              <div className="flex-grow flex flex-col">
                <p className="text-gray-300 text-center mb-6 leading-relaxed relative z-10
                            transition-colors duration-300 group-hover:text-white flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Información del cliente */}
                <div className="text-center mt-auto">
                  <p className="text-white font-semibold text-lg mb-1 
                              transition-colors duration-300 group-hover:text-pink-400">
                    {testimonial.name}
                  </p>
                  <p className="text-pink-500/80 text-sm font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
