import React, { useEffect, useRef } from 'react';
import { servicesList } from '../data/services';

interface ServiceHighlightProps {
  activeService: string;
}

export const ServiceHighlight: React.FC<ServiceHighlightProps> = ({ activeService }) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;
    
    const service = servicesList.find(s => s.id === activeService);
    if (!service) return;

    imageRef.current.classList.remove(
      'highlight-hair',
      'highlight-face',
      'highlight-eyes',
      'highlight-nails'
    );

    if (service.highlightClass) {
      imageRef.current.classList.add(service.highlightClass);
    }
  }, [activeService]);

  const service = servicesList.find(s => s.id === activeService);

  return (
    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
      <div
        ref={imageRef}
        className="w-full h-full transition-all duration-700 ease-in-out transform hover:scale-105"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30" />
        {service && (
          <div className="absolute inset-0 transition-opacity duration-500">
            <div className={`absolute inset-0 ${service.overlayConfig.gradientClass} animate-pulse-subtle`}>
              <div className={`absolute ${service.overlayConfig.highlightPosition} inset-x-0 h-2/3 bg-gradient-radial from-[#F25AA3]/20 to-transparent`} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};