import { Sparkles, Scissors, Heart } from 'lucide-react';

interface Treatment {
  title: string;
  description: string;
  icon: React.ComponentType;
  path: string;
}

export const treatments: Treatment[] = [
  {
    title: 'Keratina Premium',
    description: 'Tratamiento profesional que elimina el frizz y alisa el cabello hasta por 6 meses.',
    icon: Sparkles,
    path: '/servicios/keratina-premium'
  },
  {
    title: 'Alisado Láser',
    description: 'Tecnología avanzada que sella la cutícula y alisa desde la primera sesión.',
    icon: Scissors,
    path: '/servicios/alisado-laser'
  },
  {
    title: 'Alisado Orgánico',
    description: 'Fórmula natural que alisa y nutre tu cabello sin químicos agresivos.',
    icon: Heart,
    path: '/servicios/alisado-organico'
  }
];