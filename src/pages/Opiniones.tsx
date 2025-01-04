import React, { useState } from 'react';
import { WaveDivider } from '../components/WaveDivider';
import { StarRating } from '../components/StarRating';
import { Sparkles } from 'lucide-react';

export const Opiniones = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    servicio: '',
    atencion: '',
    experiencia: '',
    mejoras: '',
    rating: 0
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos
    console.log(formData);
  };

  const servicios = [
    'Keratina Premium',
    'Alisado Láser',
    'Alisado Orgánico',
    'Botox Capilar',
    'Extensión de Pestañas',
    'Diseño de Cejas',
    'Manicure & Pedicure'
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-white to-pink-50/30">
      <section className="relative py-20 px-4">
        <WaveDivider position="top" />
        
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl text-[#F25AA3] font-glitten mb-4 relative">
              Tu Opinión
              <Sparkles className="absolute -top-6 -right-6 w-12 h-12 text-[#F25AA3] opacity-50" />
            </h1>
            <p className="text-gray-600">Tu opinión nos ayuda a mejorar cada día</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="h-2 bg-gray-100 rounded-full">
                <div 
                  className="h-2 bg-[#F25AA3] rounded-full transition-all duration-500"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
              <div className="text-center mt-2 text-sm text-gray-500">
                Paso {currentStep} de {totalSteps}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Nombre */}
              <div className={`transition-all duration-500 ${currentStep === 1 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  ¿Cuál es tu nombre?
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F25AA3] focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Step 2: Servicio */}
              <div className={`transition-all duration-500 ${currentStep === 2 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  ¿Qué servicio te realizaste?
                </label>
                <select
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F25AA3] focus:border-transparent transition-all"
                >
                  <option value="">Selecciona un servicio</option>
                  {servicios.map((servicio) => (
                    <option key={servicio} value={servicio}>
                      {servicio}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Atención */}
              <div className={`transition-all duration-500 ${currentStep === 3 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  ¿Quién te atendió?
                </label>
                <input
                  type="text"
                  name="atencion"
                  value={formData.atencion}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F25AA3] focus:border-transparent transition-all"
                  placeholder="Nombre de quien te atendió"
                />
              </div>

              {/* Step 4: Experiencia */}
              <div className={`transition-all duration-500 ${currentStep === 4 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Cuéntanos tu experiencia
                </label>
                <textarea
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F25AA3] focus:border-transparent transition-all h-32"
                  placeholder="¿Qué te pareció nuestro servicio?"
                />
              </div>

              {/* Step 5: Mejoras */}
              <div className={`transition-all duration-500 ${currentStep === 5 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  ¿Qué podemos mejorar?
                </label>
                <textarea
                  name="mejoras"
                  value={formData.mejoras}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F25AA3] focus:border-transparent transition-all h-32"
                  placeholder="Tus sugerencias son muy importantes para nosotros"
                />
              </div>

              {/* Step 6: Rating */}
              <div className={`transition-all duration-500 ${currentStep === 6 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <label className="block text-lg font-medium text-gray-700 mb-4">
                  ¿Cómo calificarías tu experiencia general?
                </label>
                <div className="flex justify-center">
                  <StarRating
                    rating={formData.rating}
                    setRating={(rating) => setFormData({ ...formData, rating })}
                  />
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <button
                  type="button"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  className={`px-6 py-2 rounded-full border-2 border-[#F25AA3] text-[#F25AA3] hover:bg-[#F25AA3] hover:text-white transition-colors ${
                    currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={currentStep === 1}
                >
                  Anterior
                </button>

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                    className="px-6 py-2 rounded-full bg-[#F25AA3] text-white hover:bg-black transition-colors"
                  >
                    Siguiente
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full bg-[#F25AA3] text-white hover:bg-black transition-colors"
                  >
                    Enviar
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};