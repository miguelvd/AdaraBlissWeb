import React from 'react';
import { Sparkles, Heart, Star, Calendar } from 'lucide-react';

const WHATSAPP_NUMBER = '522223915914';

interface PromoCardProps {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  discount: number;
  discountLabel?: string;
  icon: 'Sparkles' | 'Star' | 'Heart';
  image: string;
  startDate: string;
  endDate: string;
  showPrices: boolean;
}

const PromoCard: React.FC<PromoCardProps> = ({
  title,
  description,
  originalPrice,
  discountPrice,
  discount,
  discountLabel,
  icon,
  image,
  startDate,
  endDate,
  showPrices
}) => {
  const formatPrice = (price: number) => 
    new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    // Ajustar la fecha a la zona horaria de México
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'America/Mexico_City',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };
    return date.toLocaleDateString('es-MX', options);
  };

  const getWhatsAppMessage = () => {
    const message = `¡Hola! Vi en tu página web la promoción de ${title} ${showPrices ? `a ${formatPrice(discountPrice)}` : ''} y me interesa agendar una cita. ¿Podrías darme más información?`;
    return encodeURIComponent(message);
  };

  const renderIcon = () => {
    switch (icon) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-white" />;
      case 'Star':
        return <Star className="w-6 h-6 text-white" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-white" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 [transform-style:preserve-3d]">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30" />
      </div>

      {/* Etiqueta de descuento */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-[#F25AA3] to-pink-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg transform hover:scale-105 transition-transform duration-200">
        {renderIcon()}
        <span className="font-bold text-sm md:text-base">
          {discountLabel || `${discount}% OFF`}
        </span>
      </div>

      {/* Contenido */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-between min-h-[450px] md:min-h-[500px]">
        <div className="space-y-6">
          {/* Título y descripción */}
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">{title}</h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">{description}</p>
          </div>

          {/* Precios */}
          {showPrices && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6">
                <span className="text-gray-400 line-through text-base md:text-lg">
                  {formatPrice(originalPrice)}
                </span>
                <span className="text-white font-bold text-2xl md:text-3xl">
                  {formatPrice(discountPrice)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Sección inferior */}
        <div className="space-y-6">
          {/* Fechas de validez */}
          <div className="flex items-center gap-3 text-gray-300 bg-white/5 backdrop-blur-sm rounded-xl p-3">
            <Calendar className="w-5 h-5 text-[#F25AA3]" />
            <div className="text-sm">
              <p>Válido del {formatDate(startDate)}</p>
              <p>al {formatDate(endDate)}</p>
            </div>
          </div>

          {/* Botón de WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${getWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-[#F25AA3] to-pink-600 hover:from-pink-600 hover:to-[#F25AA3]
                     text-white text-center px-6 py-4 rounded-2xl
                     transform transition-all duration-300 hover:scale-[1.02]
                     shadow-lg hover:shadow-pink-500/30
                     flex items-center justify-center gap-3 
                     text-lg font-semibold tracking-wide"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.50002 20.4999L4.90002 15.9999C3.81002 14.3499 3.24002 12.4499 3.25002 10.4999C3.25002 5.69992 7.15002 1.79992 11.95 1.79992C14.275 1.79992 16.475 2.69992 18.125 4.34992C19.775 5.99992 20.675 8.19992 20.675 10.5249C20.675 15.3249 16.775 19.2249 11.975 19.2249H11.975C10.125 19.2249 8.32502 18.7249 6.77502 17.7749L3.50002 20.4999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.75 10C8.75 10.4142 8.41421 10.75 8 10.75C7.58579 10.75 7.25 10.4142 7.25 10C7.25 9.58579 7.58579 9.25 8 9.25C8.41421 9.25 8.75 9.58579 8.75 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.75 10C12.75 10.4142 12.4142 10.75 12 10.75C11.5858 10.75 11.25 10.4142 11.25 10C11.25 9.58579 11.5858 9.25 12 9.25C12.4142 9.25 12.75 9.58579 12.75 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.75 10C16.75 10.4142 16.4142 10.75 16 10.75C15.5858 10.75 15.25 10.4142 15.25 10C15.25 9.58579 15.5858 9.25 16 9.25C16.4142 9.25 16.75 9.58579 16.75 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Agenda tu cita
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;