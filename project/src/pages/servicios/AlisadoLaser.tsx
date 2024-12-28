import React from 'react';
import { Star, Shield, Zap } from 'lucide-react';
import { WaveDivider } from '../../components/WaveDivider';
import ParallaxHeader from '../../components/ParallaxHeader';

export const AlisadoLaser = () => {
  return (
    <div className="pt-16">
      <ParallaxHeader />
      <section className="min-h-screen bg-gradient-to-b from-white to-pink-50">
        <WaveDivider position="top" />
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-5xl md:text-7xl text-center mb-8 text-[#F25AA3] font-glitten">
            Alisado Láser
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Nuestro tratamiento de alisado láser utiliza la tecnología más avanzada para sellar la cutícula 
                y alisar el cabello desde la primera sesión, garantizando resultados inmediatos y duraderos.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Zap, title: 'Tecnología Avanzada', text: 'Sistema láser de última generación' },
                  { icon: Star, title: 'Resultados Inmediatos', text: 'Alisado perfecto desde la primera sesión' },
                  { icon: Shield, title: 'Protección Total', text: 'Sella y protege cada fibra capilar' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                    <item.icon className="w-6 h-6 text-[#F25AA3]" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800"
                alt="Alisado Láser"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F25AA3]/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};