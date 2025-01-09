import React from 'react';
import '../../styles/FAQ.css';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: '¿Cuánto tiempo dura el tratamiento de keratina?',
      answer: 'La duración del tratamiento depende del largo y grosor del cabello, pero generalmente toma entre 2-3 horas.',
      category: 'tratamientos'
    },
    {
      question: '¿Con qué frecuencia debo hacerme el tratamiento?',
      answer: 'Se recomienda cada 4-6 meses, dependiendo del tipo de cabello y cuidado.',
      category: 'tratamientos'
    },
    {
      question: '¿Puedo lavar mi cabello después del tratamiento?',
      answer: 'Se recomienda esperar 48-72 horas después del tratamiento antes de lavar el cabello.',
      category: 'cuidados'
    },
    {
      question: '¿Qué productos debo usar después del tratamiento?',
      answer: 'Recomendamos usar productos sin sulfatos y específicos para cabello tratado.',
      category: 'productos'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#F25AA3] sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="mt-12">
          <dl className="space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt className="text-lg">
                  <button className="text-left w-full flex justify-between items-start text-gray-400">
                    <span className="font-medium text-gray-900">{faq.question}</span>
                  </button>
                </dt>
                <dd className="mt-2 pr-12">
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;