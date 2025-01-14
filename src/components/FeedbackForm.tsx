import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { jsPDF } from 'jspdf';
import { trackFeedbackSubmission } from '../utils/facebookPixel';

interface FeedbackFormData {
  name: string;
  email: string;
  service: string;
  rating: number;
  comment: string;
}

export const FeedbackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FeedbackFormData>();

  const generatePDF = (data: FeedbackFormData) => {
    const doc = new jsPDF();
    
    // Agregar logo o encabezado
    doc.setFontSize(20);
    doc.setTextColor(242, 90, 163); // Color rosa #F25AA3
    doc.text('Adara Bliss - Opinión del Cliente', 20, 20);
    
    // Agregar contenido
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Nombre: ${data.name}`, 20, 40);
    doc.text(`Email: ${data.email}`, 20, 50);
    doc.text(`Servicio: ${data.service}`, 20, 60);
    doc.text(`Calificación: ${data.rating}/5`, 20, 70);
    doc.text('Comentario:', 20, 80);
    
    // Agregar comentario con saltos de línea automáticos
    const splitComment = doc.splitTextToSize(data.comment, 170);
    doc.text(splitComment, 20, 90);
    
    // Agregar fecha
    const date = new Date().toLocaleDateString();
    doc.text(`Fecha: ${date}`, 20, doc.internal.pageSize.height - 20);
    
    return doc.output('blob');
  };

  const onSubmit = async (data: FeedbackFormData) => {
    setIsSubmitting(true);
    try {
      // Generar PDF
      const pdfBlob = generatePDF(data);
      const pdfFile = new File([pdfBlob], 'opinion.pdf', { type: 'application/pdf' });
      
      // Crear FormData para enviar el PDF
      const formData = new FormData();
      formData.append('pdf', pdfFile);
      
      // Enviar email con EmailJS
      const templateParams = {
        to_name: 'Adara Bliss',
        from_name: data.name,
        from_email: data.email,
        service: data.service,
        rating: data.rating,
        comment: data.comment,
        to_email: 'soluciones@adarabliss.com',
        pdf_url: URL.createObjectURL(pdfBlob) // URL temporal del PDF
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',  // Reemplazar con tu Service ID de EmailJS
        'YOUR_TEMPLATE_ID', // Reemplazar con tu Template ID de EmailJS
        templateParams,
        'YOUR_PUBLIC_KEY'   // Reemplazar con tu Public Key de EmailJS
      );

      trackFeedbackSubmission({
        service: data.service,
        rating: data.rating
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Nombre"
          className={`w-full p-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          {...register('name', { 
            required: 'El nombre es requerido',
            minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres' }
          })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          className={`w-full p-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          {...register('email', {
            required: 'El email es requerido',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido'
            }
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <select
          className={`w-full p-3 rounded-lg border ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
          {...register('service', { required: 'Por favor selecciona un servicio' })}
        >
          <option value="">Selecciona un servicio</option>
          <option value="alisado">Alisado</option>
          <option value="botox">Botox</option>
          <option value="corte">Corte</option>
          <option value="maquillaje">Maquillaje</option>
          <option value="cejas">Cejas</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
        )}
      </div>

      <div>
        <select
          className={`w-full p-3 rounded-lg border ${errors.rating ? 'border-red-500' : 'border-gray-300'}`}
          {...register('rating', { required: 'Por favor selecciona una calificación' })}
        >
          <option value="">Calificación</option>
          <option value="5">⭐⭐⭐⭐⭐ Excelente</option>
          <option value="4">⭐⭐⭐⭐ Muy bueno</option>
          <option value="3">⭐⭐⭐ Bueno</option>
          <option value="2">⭐⭐ Regular</option>
          <option value="1">⭐ Necesita mejorar</option>
        </select>
        {errors.rating && (
          <p className="mt-1 text-sm text-red-500">{errors.rating.message}</p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Tu opinión"
          rows={4}
          className={`w-full p-3 rounded-lg border ${errors.comment ? 'border-red-500' : 'border-gray-300'}`}
          {...register('comment', {
            required: 'Por favor comparte tu opinión',
            minLength: { value: 10, message: 'Tu opinión debe tener al menos 10 caracteres' }
          })}
        />
        {errors.comment && (
          <p className="mt-1 text-sm text-red-500">{errors.comment.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-[#F25AA3] hover:bg-[#d14589] text-white py-3 rounded-lg transition-colors ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Opinión'}
      </button>

      {submitStatus === 'success' && (
        <div className="p-3 bg-green-100 text-green-700 rounded-lg">
          ¡Gracias por tu opinión! La hemos recibido correctamente.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-3 bg-red-100 text-red-700 rounded-lg">
          Hubo un error al enviar tu opinión. Por favor, intenta nuevamente.
        </div>
      )}
    </form>
  );
};
