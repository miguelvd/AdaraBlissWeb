import React from 'react';
import { WaveDivider } from '../components/WaveDivider';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';

export const Servicios = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-white to-pink-50/30">
      <section className="py-20 px-4">
        <WaveDivider position="top" />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl text-center mb-16 text-[#F25AA3] font-glitten">
            Nuestros Servicios
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="opacity-0 translate-y-8 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  path={service.path}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};