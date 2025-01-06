import React from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  path: string;
}

export const services: Service[] = [
  {
    id: 'keratina-premium',
    title: 'Alisado con Keratina Japonesa',
    description: 'Tratamiento profesional que elimina el frizz y alisa el cabello hasta por 6 meses. Nutre, repara y da brillo intenso a tu cabello.',
    image: '/images/services/keratina-premium.png',
    path: '/servicios/keratina-premium'
  },
  {
    id: 'alisado-laser',
    title: 'Alisado Láser',
    description: 'Tecnología avanzada que sella la cutícula y alisa desde la primera sesión. Resultados inmediatos y duraderos.',
    image: '/images/services/alisado-laser.png',
    path: '/servicios/alisado-laser'
  },
  {
    id: 'alisado-organico',
    title: 'Alisado Orgánico',
    description: 'Fórmula natural que alisa y nutre tu cabello sin químicos agresivos. Ideal para cabellos sensibles y tratados.',
    image: '/images/services/alisado-organico.png',
    path: '/servicios/alisado-organico'
  }
];