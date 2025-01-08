import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ParallaxHeader } from '../../components/ParallaxHeader';
import { Crown, Star, Shield } from 'lucide-react';
import { WaveDivider } from '../../components/WaveDivider';

export const KeratinaPremium = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20">
      <section className="min-h-screen bg-gradient-to-b from-white to-pink-50">
        <WaveDivider position="top" />
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#F25AA3] font-glitten">
            Keratina Japonesa
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Nuestro tratamiento de keratina japonesa es la solución definitiva para un cabello perfectamente liso y manejable. 
                Con una duración de hasta 6 meses, este tratamiento elimina el frizz y transforma tu cabello.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Crown, title: 'Calidad Premium', text: 'Utilizamos productos de la más alta calidad' },
                  { icon: Star, title: 'Resultados Duraderos', text: 'Hasta 6 meses de cabello perfectamente liso' },
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
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800"
                alt="Keratina Japonesa"
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