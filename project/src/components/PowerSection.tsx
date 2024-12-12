import React, { useEffect, useRef } from 'react';
import { Crown, Star, Clock, Shield, Sparkles } from 'lucide-react';

const powerItems = [
  {
    title: "Transformación Total",
    description: "El alisado no es solo un cambio estético, es una transformación que refleja tu fuerza y determinación.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800",
    beforeImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://plus.unsplash.com/premium_photo-1664298528358-790433c3c824?auto=format&fit=crop&q=80&w=800",
    icon: Crown,
    color: "#FFB6C1"
  },
  {
    title: "Confianza Radiante",
    description: "Un cabello liso y bien cuidado es sinónimo de confianza y elegancia.",
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800",
    icon: Star,
    color: "#FFC0CB"
  },
  {
    title: "Ahorro de Tiempo",
    description: "Despertar con el cabello perfectamente liso elimina la necesidad de peinados diarios complicados.",
    image: "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?auto=format&fit=crop&q=80&w=800",
    icon: Clock,
    color: "#FFB6C1"
  }
];

export const PowerSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-white to-pink-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-5xl md:text-7xl text-center mb-24 text-[#F25AA3] font-glitten animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
          El Poder del Alisado
          <div className="absolute -top-8 -right-8 w-16 h-16">
            <Sparkles className="w-full h-full text-[#F25AA3] opacity-50" />
          </div>
        </h2>

        <div className="space-y-40">
          {powerItems.map((item, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 transform translate-y-16 transition-all duration-1000 ease-out"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative group">
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  <div className="w-full md:w-2/3 relative overflow-hidden rounded-[2rem] shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#F25AA3]/20"></div>
                    {item.beforeImage && item.afterImage ? (
                      <div className="relative h-[500px] group cursor-pointer">
                        <div className="absolute inset-0">
                          <img
                            src={item.beforeImage}
                            alt="Before"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 transform translate-x-1/2 group-hover:translate-x-0 transition-transform duration-500">
                          <img
                            src={item.afterImage}
                            alt="After"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-y-0 left-1/2 w-1 bg-white transform -translate-x-1/2"></div>
                      </div>
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>

                  <div className="w-full md:w-1/3 p-8">
                    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <div 
                          className="w-16 h-16 rounded-2xl p-4 flex items-center justify-center"
                          style={{ backgroundColor: item.color }}
                        >
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-glitten">{item.title}</h3>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -inset-4 bg-gradient-to-r from-[#F25AA3]/20 to-transparent rounded-[2.5rem] -z-10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};