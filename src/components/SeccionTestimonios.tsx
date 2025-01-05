import React from 'react';
import { FormularioOpinion } from './FormularioOpinion';
import { StarRating } from './StarRating';

export const SeccionTestimonios = () => {
  const testimonios = [
    {
      nombre: "María González",
      rating: 5,
      comentario: "¡Increíble servicio! Mi cabello nunca se había visto mejor. El equipo es muy profesional y amable.",
      fecha: "2024-12-15"
    },
    {
      nombre: "Ana Martínez",
      rating: 5,
      comentario: "Excelente atención y resultados. El alisado quedó perfecto y el ambiente es muy agradable.",
      fecha: "2024-12-10"
    },
    {
      nombre: "Laura Pérez",
      rating: 5,
      comentario: "Super recomendado. La atención personalizada y el resultado final superaron mis expectativas.",
      fecha: "2024-12-05"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-glitten text-center mb-12 text-white">
        Lo que dicen nuestras clientas
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {testimonios.map((testimonio, index) => (
          <div 
            key={index}
            className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="mb-4">
              <StarRating rating={testimonio.rating} />
            </div>
            <p className="text-gray-300 mb-4 italic">"{testimonio.comentario}"</p>
            <div className="text-gray-400">
              <p className="font-semibold">{testimonio.nombre}</p>
              <p className="text-sm">{new Date(testimonio.fecha).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-glitten text-center mb-8 text-white">
          Comparte tu experiencia
        </h3>
        <FormularioOpinion />
      </div>
    </div>
  );
};
