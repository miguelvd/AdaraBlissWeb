import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PromoCardProps {
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  discount: number;
  features: string[];
  icon: LucideIcon;
  image: string;
  endDate: string;
}

export const PromoCard: React.FC<PromoCardProps> = ({
  title,
  description,
  originalPrice,
  discountPrice,
  discount,
  features,
  icon: Icon,
  image,
  endDate
}) => {
  const formatPrice = (price: number) => 
    new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price);

  const daysLeft = Math.ceil((new Date(endDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24));

  return (
    <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-[600px]">
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
      <div className="relative p-8 h-full flex flex-col">
        {/* Etiqueta de descuento */}
        <div className="absolute top-4 right-4 bg-[#F25AA3] text-white px-4 py-2 rounded-full font-bold">
          -{discount}%
        </div>

        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-[#F25AA3] rounded-2xl">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-glitten text-white">{title}</h3>
          </div>
          <p className="text-white/90 mb-6">{description}</p>
          
          <div className="space-y-2 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F25AA3]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-400 line-through text-lg">
              {formatPrice(originalPrice)}
            </span>
            <span className="text-[#F25AA3] text-3xl font-bold">
              {formatPrice(discountPrice)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-white/80 text-sm">
              Oferta válida por {daysLeft} días
            </span>
            <button className="px-6 py-3 bg-[#F25AA3] text-white rounded-full transition-colors hover:bg-black group-hover:bg-[#F25AA3]">
              Reservar Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};