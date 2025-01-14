import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { trackContactFormSubmission } from '../utils/facebookPixel';

// Inicializar EmailJS
emailjs.init("CR8cbh63NyhAqGGkM");

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
        'service_sxvo3q8',
        'template_1fgmkp6',
        templateParams
      );

      trackContactFormSubmission({
        service: data.message.includes('servicio') ? 'Consulta de Servicio' : 'General',
        source: 'Contact Form'
      });

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
    <div className="max-w-2xl mx-auto">
      <motion.form 
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-6 bg-neutral-800/30 backdrop-blur-md p-8 rounded-2xl border border-white/5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div>
          <input
            type="text"
            placeholder="Nombre"
            className={`w-full p-3 rounded-lg bg-white/10 border ${
              errors.from_name ? 'border-red-500' : 'border-white/10'
            } text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors`}
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
            className={`w-full p-3 rounded-lg bg-white/10 border ${
              errors.from_email ? 'border-red-500' : 'border-white/10'
            } text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors`}
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
            className={`w-full p-3 rounded-lg bg-white/10 border ${
              errors.phone ? 'border-red-500' : 'border-white/10'
            } text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors`}
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
            className={`w-full p-3 rounded-lg bg-white/10 border ${
              errors.message ? 'border-red-500' : 'border-white/10'
            } text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors resize-none`}
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
          className={`w-full p-3 rounded-lg bg-pink-500 text-white font-semibold
                    transform transition-all duration-200
                    hover:bg-pink-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
          >
            ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
          >
            Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
          </motion.div>
        )}
      </motion.form>
    </div>
  );
};
