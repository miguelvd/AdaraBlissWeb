import { Sparkles, Heart, Star } from 'lucide-react';

export interface Promotion {
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

export const promotions: Promotion[] = [
  {
    id: 'promo-keratina',
    title: 'Keratina Japonesa',
    description: 'Transforma tu cabello con nuestro tratamiento premium de keratina japonesa. Obtén un cabello suave, brillante y manejable.',
    originalPrice: 2500,
    discountPrice: 1875,
    discount: 25,
    features: [
      'Duración de 4-6 meses',
      'Incluye shampoo y acondicionador',
      'Consulta gratuita',
      'Garantía de satisfacción'
    ],
    icon: 'Sparkles',
    image: '/images/promos/keratina.jpg',
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    showPrices: true
  },
  {
    id: 'promo-alisado',
    title: 'Alisado Orgánico',
    description: 'Alisa tu cabello de forma natural con nuestro tratamiento orgánico. Libre de químicos agresivos.',
    originalPrice: 2000,
    discountPrice: 1600,
    discount: 20,
    features: [
      'Duración de 3-4 meses',
      'Productos 100% orgánicos',
      'Incluye kit de mantenimiento',
      'Ideal para cabellos sensibles'
    ],
    icon: 'Heart',
    image: '/images/promos/alisado.jpg',
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    showPrices: true
  },
  {
    id: 'promo-combo',
    title: 'Combo Belleza',
    description: 'Renueva tu look completo con nuestro combo especial. Incluye tratamiento capilar, corte y peinado.',
    originalPrice: 3000,
    discountPrice: 2100,
    discount: 30,
    features: [
      'Tratamiento personalizado',
      'Corte de cabello',
      'Peinado profesional',
      'Diagnóstico capilar gratis'
    ],
    icon: 'Star',
    image: '/images/promos/combo.jpg',
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    showPrices: true
  }
];