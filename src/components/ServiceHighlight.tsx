import React, { useEffect, useRef } from 'react';
import { services } from '../data/services';

interface ServiceHighlightProps {
  activeService: string;
}

export const ServiceHighlight: React.FC<ServiceHighlightProps> = ({ activeService }) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;
    
    const service = services.find(s => s.id === activeService);
    if (!service) return;

    // Aplicar clases de transición
    imageRef.current.style.backgroundImage = `url(${service.image})`;
  }, [activeService]);

  const service = services.find(s => s.id === activeService);
  if (!service) return null;

  return (
    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-sm opacity-90">{service.description}</p>
        </div>
      </div>
    </div>
  );
};