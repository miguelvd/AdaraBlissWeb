import React from 'react';
import { WaveDivider } from '../components/WaveDivider';
import { PromoCard } from '../components/PromoCard';
import { promotions } from '../data/promotions';
import { SparkleGroup } from '../components/SparkleGroup';

export const Promociones = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-white to-pink-50">
      <section className="relative py-20 px-4">
        <WaveDivider position="top" />
        <SparkleGroup className="opacity-50" />
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl text-[#F25AA3] font-glitten mb-4">
              Promociones Especiales
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descubre nuestras increíbles ofertas y transforma tu cabello 
              con los mejores tratamientos a precios irresistibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <div 
                key={promo.id}
                className="opacity-0 translate-y-8 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <PromoCard {...promo} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};