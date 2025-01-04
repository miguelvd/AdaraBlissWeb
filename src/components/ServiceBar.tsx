import React from 'react';

const services = [
  { id: 'alisado', name: 'Alisado', icon: '/iconos/alisado.svg' },
  { id: 'botox', name: 'Botox', icon: '/iconos/botox.svg' },
  { id: 'corte', name: 'Corte', icon: '/iconos/corte.svg' },
  { id: 'maquillaje', name: 'Maquillaje', icon: '/iconos/maquillaje.svg' },
  { id: 'cejas', name: 'Cejas', icon: '/iconos/cejas.svg' }
];

export const ServiceBar = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-black rounded-[40px] py-8 px-12">
        <div className="flex gap-16 md:gap-24">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center gap-3">
              <img 
                src={service.icon} 
                alt={service.name} 
                className="w-10 h-10 invert" 
              />
              <span className="text-white text-base">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
