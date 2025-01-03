import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "María García",
    role: "Cliente frecuente",
    content: "El mejor servicio de alaciado que he probado. Mi cabello quedó increíble y el efecto duró mucho más de lo esperado.",
    rating: 5
  },
  {
    name: "Ana Rodríguez",
    role: "Cliente nueva",
    content: "Excelente atención y resultados profesionales. El personal es muy amable y conocedor.",
    rating: 5
  },
  {
    name: "Laura Martínez",
    role: "Cliente frecuente",
    content: "Increíble experiencia. Mi cabello nunca había lucido tan hermoso y saludable.",
    rating: 5
  }
];

export const TestimonialSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-glitten text-center mb-12 text-white">
        Testimonios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-pink-500 fill-current"
                />
              ))}
            </div>
            <p className="text-gray-300 mb-4">{testimonial.content}</p>
            <div className="mt-4">
              <p className="text-white font-semibold">{testimonial.name}</p>
              <p className="text-pink-500 text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
