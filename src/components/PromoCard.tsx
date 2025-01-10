import React from 'react';
import { Sparkles, Heart, Star } from 'lucide-react';

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
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
      </div>

      {/* Etiqueta de descuento */}
      <div className="absolute top-4 right-4 bg-[#F25AA3] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg transform hover:scale-105 transition-transform duration-200">
        {renderIcon()}
        <span className="font-bold text-sm md:text-base">
          {discountLabel || `${discount}% OFF`}
        </span>
      </div>

      {/* Contenido */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-between min-h-[400px] md:min-h-[450px]">
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-200 text-sm md:text-base line-clamp-3 md:line-clamp-4">{description}</p>
        </div>
        
        {showPrices && (
          <div className="mt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
              <span className="text-gray-400 line-through text-sm md:text-base">
                {formatPrice(originalPrice)}
              </span>
              <span className="text-white font-bold text-lg md:text-2xl">
                {formatPrice(discountPrice)}
              </span>
            </div>
          </div>
        )}

        <div className="mt-6 text-sm text-gray-300">
          <p>Válido del {new Date(startDate).toLocaleDateString('es-MX', { day: 'numeric', month: 'long' })}</p>
          <p>al {new Date(endDate).toLocaleDateString('es-MX', { day: 'numeric', month: 'long' })}</p>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;