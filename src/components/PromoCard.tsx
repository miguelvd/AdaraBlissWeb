import React, { useEffect } from 'react';
import { Sparkles, Heart, Star, Calendar } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { formatDate } from '../utils/dateUtils';

const WHATSAPP_NUMBER = '524492175606';
const DEFAULT_IMAGE = '/images/gallery/Maquillaje/97a719a5-2d90-4f93-a720-fccc6d1a2b7d.jpg';

interface PromoCardProps {
  id: string;
  title: string;
  description: string;
  icon: 'Sparkles' | 'Star' | 'Heart';
  image: string;
  startDate: string;
  endDate: string;
  discount: string;
  discountLabel?: string;
  onImageError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const PromoCard: React.FC<PromoCardProps> = ({
  id,
  title,
  description,
  icon,
  image,
  startDate,
  endDate,
  discount,
  discountLabel,
  onImageError
}) => {
  useEffect(() => {
    console.log('PromoCard - Montado:', { id, title, image });
  }, [id, title, image]);

  const getWhatsAppMessage = () => {
    const message = `¡Hola! Me interesa la promoción "${title}" que vi en la página web. ¿Podrías darme más información para agendar una cita?`;
    return encodeURIComponent(message);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('PromoCard - Error cargando imagen:', { id, image });
    if (onImageError) {
      onImageError(e);
    }
    console.log('PromoCard - Usando imagen por defecto');
    e.currentTarget.src = DEFAULT_IMAGE;
  };

  const IconComponent = {
    Sparkles,
    Star,
    Heart,
  }[icon] || Sparkles;

  // Asegurarse de que la URL de la imagen sea absoluta y use la ruta correcta
  const imageUrl = image.startsWith('http') ? image : image;

  console.log('PromoCard - Renderizando:', { id, title, imageUrl });
  return (
    <div className="group relative h-[600px] rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <OptimizedImage 
          src={imageUrl || DEFAULT_IMAGE} 
          alt={title}
          onError={handleImageError}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="relative h-full flex flex-col justify-between p-8">
        {/* Encabezado */}
        <div className="space-y-4">
          {/* Etiqueta de descuento */}
          <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full shadow-lg">
            {discountLabel || `${discount}% OFF`}
          </div>
        </div>

        {/* Contenido principal */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-white mb-3 leading-tight group-hover:text-pink-200 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed line-clamp-3 group-hover:text-white transition-colors duration-300">
              {description}
            </p>
          </div>

          {/* Fechas y botón */}
          <div className="space-y-4">
            {/* Fechas */}
            <div className="flex items-center gap-2 text-gray-300">
              <Calendar className="w-5 h-5" />
              <span>
                {formatDate(startDate)} - {formatDate(endDate)}
              </span>
            </div>

            {/* Botón de WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${getWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl text-center transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Agendar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;