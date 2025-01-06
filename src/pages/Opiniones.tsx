import React, { useState } from 'react';
import { WaveDivider } from '../components/WaveDivider';
import { StarRating } from '../components/StarRating';
import { Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Inicializar EmailJS
emailjs.init("CR8cbh63NyhAqGGkM");

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
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 6;

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return formData.nombre.trim().length >= 3; // Al menos 3 caracteres
      case 2:
        return formData.servicio !== ''; // Debe seleccionar un servicio
      case 3:
        return formData.atencion.trim().length >= 3; // Al menos 3 caracteres
      case 4:
        return formData.experiencia.trim().length >= 10; // Al menos 10 caracteres
      case 5:
        return true; // Las mejoras son opcionales
      case 6:
        return formData.rating > 0; // Debe seleccionar al menos 1 estrella
      default:
        return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Enviando opinión...');
      
      const templateParams = {
        to_name: 'Adara Bliss',
        from_name: formData.nombre,
        to_email: 'soluciones@adarabliss.com',
        nombre: formData.nombre,
        servicio: formData.servicio,
        atencion: formData.atencion,
        experiencia: formData.experiencia,
        mejoras: formData.mejoras || 'No hay sugerencias',
        rating: `${formData.rating} estrellas`,
        subject: `Nueva Opinión de Cliente - ${formData.servicio}`
      };

      console.log('Datos enviados:', templateParams);

      try {
        const response = await emailjs.send(
          'service_sxvo3q8',
          'template_ohu4xes',
          templateParams
        );

        console.log('Respuesta del servidor:', response);
        
        if (response.status === 200) {
          setShowThankYou(true);
          
          setTimeout(() => {
            setFormData({
              nombre: '',
              servicio: '',
              atencion: '',
              experiencia: '',
              mejoras: '',
              rating: 0
            });
            setCurrentStep(1);
            setShowThankYou(false);
          }, 3000);
        } else {
          throw new Error('Error al enviar el correo');
        }
      } catch (error: any) {
        console.error('Error al enviar la opinión:', error);
        let errorMessage = error.text || error.message || 'Error desconocido';
        alert(`Hubo un error al enviar tu opinión: ${errorMessage}`);
      } finally {
        setIsSubmitting(false);
      }
    } catch (error: any) {
      console.error('Error al enviar la opinión:', error);
      let errorMessage = error.text || error.message || 'Error desconocido';
      alert(`Hubo un error al enviar tu opinión: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const servicios = [
    'Keratina Japonesa',
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
            {showThankYou ? (
              <div className="text-center py-8 space-y-4">
                <div className="text-6xl">🎉</div>
                <h2 className="text-2xl font-semibold text-[#F25AA3]">¡Gracias por tu opinión!</h2>
                <p className="text-gray-600">Tu mensaje ha sido enviado con éxito. Valoramos mucho tus comentarios.</p>
              </div>
            ) : (
              <>
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
                    {currentStep === 1 && formData.nombre.trim().length > 0 && formData.nombre.trim().length < 3 && (
                      <p className="mt-2 text-sm text-red-500">El nombre debe tener al menos 3 caracteres</p>
                    )}
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
                    {currentStep === 2 && formData.servicio === '' && (
                      <p className="mt-2 text-sm text-red-500">Por favor selecciona un servicio</p>
                    )}
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
                      placeholder="Nombre o características de quien te atendió (ej: chica de cabello rizado, alta, etc.)"
                    />
                    {currentStep === 3 && formData.atencion.trim().length > 0 && formData.atencion.trim().length < 3 && (
                      <p className="mt-2 text-sm text-red-500">El nombre debe tener al menos 3 caracteres</p>
                    )}
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
                    {currentStep === 4 && formData.experiencia.trim().length > 0 && formData.experiencia.trim().length < 10 && (
                      <p className="mt-2 text-sm text-red-500">Por favor cuéntanos un poco más sobre tu experiencia (mínimo 10 caracteres)</p>
                    )}
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
                    <h3 className="text-xl font-semibold mb-4">¿Cómo calificarías tu experiencia general?</h3>
                    <div className="flex justify-center">
                      <StarRating rating={formData.rating} onRatingChange={handleRatingChange} />
                    </div>
                    <div className="flex justify-between mt-8">
                      <button
                        onClick={() => setCurrentStep(prev => prev - 1)}
                        className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        Anterior
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting || formData.rating === 0}
                        className={`px-6 py-2 ${
                          isSubmitting || formData.rating === 0
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-pink-600 hover:bg-pink-700'
                        } text-white rounded-lg transition-colors`}
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar opinión'}
                      </button>
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
                        className={`px-6 py-2 rounded-full transition-colors ${
                          isStepValid(currentStep)
                            ? 'bg-[#F25AA3] text-white hover:bg-black'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!isStepValid(currentStep)}
                      >
                        Siguiente
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};