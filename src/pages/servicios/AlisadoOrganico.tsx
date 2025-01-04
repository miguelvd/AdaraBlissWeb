import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ParallaxHeader } from '../../components/ParallaxHeader';
import { Leaf, Heart, Sparkles } from 'lucide-react';
import { WaveDivider } from '../../components/WaveDivider';

export const AlisadoOrganico = () => {
  return (
    <div className="pt-16">
      <section className="min-h-screen bg-gradient-to-b from-white to-pink-50">
        <WaveDivider position="top" />
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-5xl md:text-7xl text-center mb-8 text-[#F25AA3] font-glitten">
            Alisado Orgánico
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Nuestro alisado orgánico combina ingredientes naturales que alisan y nutren tu cabello 
                sin utilizar químicos agresivos, proporcionando un resultado natural y saludable.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Leaf, title: '100% Natural', text: 'Ingredientes orgánicos certificados' },
                  { icon: Heart, title: 'Cuidado Suave', text: 'Ideal para cabellos sensibles' },
                  { icon: Sparkles, title: 'Brillo Natural', text: 'Realza la belleza natural de tu cabello' }
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
                src="https://images.unsplash.com/photo-1523263685509-57c81f9b1283?auto=format&fit=crop&q=80&w=800"
                alt="Alisado Orgánico"
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