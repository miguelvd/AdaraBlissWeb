import { Sparkles, Scissors, Heart, Brush } from 'lucide-react';
import React from 'react';

interface ServiceOverlay {
  gradientClass: string;
  highlightPosition: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType;
  highlightClass: string;
  overlayConfig: ServiceOverlay;
}

export const servicesList: Service[] = [
  {
    id: 'alisado-keratina',
    name: 'Alisado con Keratina',
    description: 'Tratamiento profesional que elimina el frizz y alisa el cabello hasta por 6 meses.',
    icon: Sparkles,
    highlightClass: 'highlight-hair',
    overlayConfig: {
      gradientClass: 'bg-gradient-to-b from-[#F25AA3]/30 to-transparent',
      highlightPosition: 'top-0'
    }
  },
  {
    id: 'alisado-laser',
    name: 'Alisado Láser',
    description: 'Tecnología avanzada que sella la cutícula y alisa desde la primera sesión.',
    icon: Scissors,
    highlightClass: 'highlight-hair',
    overlayConfig: {
      gradientClass: 'bg-gradient-to-t from-[#F25AA3]/30 to-transparent',
      highlightPosition: 'bottom-0'
    }
  },
  {
    id: 'alisado-organico',
    name: 'Alisado Orgánico',
    description: 'Fórmula natural que alisa y nutre tu cabello sin químicos agresivos.',
    icon: Heart,
    highlightClass: 'highlight-hair',
    overlayConfig: {
      gradientClass: 'bg-gradient-to-r from-[#F25AA3]/30 to-transparent',
      highlightPosition: 'left-0'
    }
  },
  {
    id: 'tratamiento-facial',
    name: 'Tratamiento Facial',
    description: 'Rejuvenece y revitaliza tu piel con nuestros tratamientos especializados.',
    icon: Brush,
    highlightClass: 'highlight-face',
    overlayConfig: {
      gradientClass: 'bg-gradient-conic from-[#F25AA3]/30 via-transparent to-[#F25AA3]/30',
      highlightPosition: 'inset-1/4'
    }
  }
];