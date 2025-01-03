import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

// Inicializar EmailJS
emailjs.init("CR8cbh63NyhAqGGkM"); // Reemplaza con tu Public Key de EmailJS

interface ContactFormData {
  to_name: string;
  from_name: string;
  from_email: string;
  phone: string;
  message: string;
}

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const templateParams = {
        to_name: "Contactanos",
        from_name: data.from_name,
        from_email: data.from_email,
        phone: data.phone,
        message: data.message,
        reply_to: data.from_email,
        to_email: 'soluciones@adarabliss.com'
      };

      await emailjs.send(
        'service_sxvo3q8',           // Reemplaza con tu Service ID
        'template_1fgmkp6',          // Reemplaza con tu Template ID
        templateParams
      );

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Nombre"
          className={`w-full p-3 rounded-lg border ${errors.from_name ? 'border-red-500' : 'border-gray-300'}`}
          {...register('from_name', { 
            required: 'El nombre es requerido',
            minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres' }
          })}
        />
        {errors.from_name && (
          <p className="mt-1 text-sm text-red-500">{errors.from_name.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          className={`w-full p-3 rounded-lg border ${errors.from_email ? 'border-red-500' : 'border-gray-300'}`}
          {...register('from_email', {
            required: 'El email es requerido',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido'
            }
          })}
        />
        {errors.from_email && (
          <p className="mt-1 text-sm text-red-500">{errors.from_email.message}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          placeholder="Teléfono"
          className={`w-full p-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          {...register('phone', {
            required: 'El teléfono es requerido',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Teléfono inválido (10 dígitos)'
            }
          })}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Mensaje"
          rows={4}
          className={`w-full p-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          {...register('message', {
            required: 'El mensaje es requerido',
            minLength: { value: 10, message: 'El mensaje debe tener al menos 10 caracteres' }
          })}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-[#F25AA3] hover:bg-[#d14589] text-white py-3 rounded-lg transition-colors ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      {submitStatus === 'success' && (
        <div className="p-3 bg-green-100 text-green-700 rounded-lg">
          ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-3 bg-red-100 text-red-700 rounded-lg">
          Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
        </div>
      )}
    </form>
  );
};
