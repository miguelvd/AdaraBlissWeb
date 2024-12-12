import React, { useEffect, useRef } from 'react';
import { Crown, Star, Clock, Shield, Sparkles } from 'lucide-react';

const powerItems = [
  {
    title: "Transformación Total",
    description: "El alisado no es solo un cambio estético, es una transformación que refleja tu fuerza y determinación.",
    image: "/images/power/transformacion..png",
    beforeImage: "/images/power/before.png",
    afterImage: "/images/power/after.png",
    icon: Crown,
    color: "#FFB6C1"
  },
  {
    title: "Confianza Radiante",
    description: "Un cabello liso y bien cuidado es sinónimo de confianza y elegancia.",
    image: "/images/power/confianza.png",
    icon: Star,
    color: "#FFC0CB"
  },
  {
    title: "Resultados Duraderos",
    description: "Nuestros tratamientos garantizan resultados que perduran en el tiempo.",
    image: "/images/power/duracion.png",
    icon: Clock,
    color: "#FFE4E1"
  },
  {
    title: "Cuidado Profesional",
    description: "Tu cabello está en manos de expertos que cuidan cada detalle.",
    image: "/images/power/cuidado.png",
    icon: Shield,
    color: "#FFF0F5"
  }
];

export const PowerSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      const elements = currentRef.querySelectorAll('.fade-in');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (currentRef) {
        const elements = currentRef.querySelectorAll('.fade-in');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-white to-pink-50/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-[#F25AA3] font-glitten fade-in">
          El Poder del Alisado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {powerItems.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-lg p-6 fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex items-start space-x-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon className="w-6 h-6 text-[#F25AA3]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              {item.beforeImage && item.afterImage && (
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Antes</p>
                    <img
                      src={item.beforeImage}
                      alt="Antes"
                      className="rounded-lg w-full h-32 object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Después</p>
                    <img
                      src={item.afterImage}
                      alt="Después"
                      className="rounded-lg w-full h-32 object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};