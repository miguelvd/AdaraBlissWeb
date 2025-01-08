import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { WhatsAppButton } from '../../components/WhatsAppButton';
import { WaveDivider } from '../../components/WaveDivider';

export const KeratinaJaponesa = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Keratina Japonesa
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Descubre la magia de un cabello perfectamente liso y sedoso
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">¿Qué es la Keratina Japonesa?</h2>
            <p className="text-gray-600 mb-4">
              La Keratina Japonesa es un tratamiento profesional que transforma tu cabello,
              eliminando el frizz y proporcionando un liso perfecto que puede durar hasta 6 meses.
              Este innovador tratamiento utiliza una fórmula avanzada que no solo alisa, sino que
              también fortalece y protege tu cabello.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Beneficios</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Elimina el frizz por completo</li>
              <li>Alisa el cabello de forma natural</li>
              <li>Dura hasta 6 meses</li>
              <li>Fortalece y repara el cabello</li>
              <li>Reduce el tiempo de secado</li>
              <li>Protege contra la humedad</li>
            </ul>
          </div>
          
          <div>
            <img
              src="/images/services/keratina-japonesa.jpg"
              alt="Keratina Japonesa"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Proceso del Tratamiento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-pink-500 mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Diagnóstico</h3>
              <p className="text-gray-600">
                Evaluamos tu tipo de cabello y su estado actual para personalizar el tratamiento.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-pink-500 mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aplicación</h3>
              <p className="text-gray-600">
                Aplicamos la keratina sección por sección, asegurando una cobertura uniforme.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-pink-500 mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sellado</h3>
              <p className="text-gray-600">
                Sellamos el tratamiento con calor para resultados duraderos.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <WhatsAppButton />
    </div>
  );
};

export default KeratinaJaponesa;
