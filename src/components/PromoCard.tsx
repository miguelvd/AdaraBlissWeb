import React from 'react';
import { Sparkles, Heart, Star } from 'lucide-react';

interface PromoCardProps {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  discount: number;
  features: string[];
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
  features,
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
    <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative p-8 h-full flex flex-col justify-between min-h-[600px]">
        {/* Etiqueta de descuento */}
        <div className="absolute top-4 right-2 bg-[#F25AA3] text-white px-3 py-1.5 rounded-full font-bold text-sm">
          -{discount}%
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#F25AA3] rounded-2xl">
              {renderIcon()}
            </div>
            <h3 className="text-3xl font-glitten text-white">{title}</h3>
          </div>
          
          <p className="text-white/90">{description}</p>
          
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F25AA3]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {showPrices && (
            <div className="flex items-center gap-4">
              <span className="text-gray-400 line-through text-lg">
                {formatPrice(originalPrice)}
              </span>
              <span className="text-[#F25AA3] text-3xl font-bold">
                {formatPrice(discountPrice)}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="text-white/80 text-sm">
              <div>Del {new Date(startDate).toLocaleDateString('es-MX', { day: 'numeric', month: 'long' })}</div>
              <div>al {new Date(endDate).toLocaleDateString('es-MX', { day: 'numeric', month: 'long' })}</div>
            </div>
            <button className="px-6 py-3 bg-[#F25AA3] text-white rounded-full transition-colors hover:bg-black group-hover:bg-[#F25AA3]">
              Reservar Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;