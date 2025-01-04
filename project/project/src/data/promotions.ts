import { Sparkles, Scissors, Heart, Star } from 'lucide-react';

export const promotions = [
  {
    id: 'promo-keratina',
    title: 'Keratina Premium',
    description: 'Transforma tu cabello con nuestro tratamiento estrella',
    originalPrice: 2500,
    discountPrice: 1800,
    discount: 28,
    features: [
      'Duración hasta 6 meses',
      'Incluye shampoo y acondicionador',
      'Consulta gratuita'
    ],
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
    endDate: '2024-04-30'
  },
  {
    id: 'promo-laser',
    title: 'Alisado Láser',
    description: 'La última tecnología en alisado permanente',
    originalPrice: 3000,
    discountPrice: 2400,
    discount: 20,
    features: [
      'Resultados desde la primera sesión',
      'Incluye tratamiento post-alisado',
      'Garantía de satisfacción'
    ],
    icon: Star,
    image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800',
    endDate: '2024-04-15'
  },
  {
    id: 'promo-organico',
    title: 'Alisado Orgánico',
    description: 'Lo natural también puede ser extraordinario',
    originalPrice: 2000,
    discountPrice: 1500,
    discount: 25,
    features: [
      '100% productos naturales',
      'Ideal para cabello sensible',
      'Incluye masaje capilar'
    ],
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1523263685509-57c81f9b1283?auto=format&fit=crop&q=80&w=800',
    endDate: '2024-04-20'
  }
];