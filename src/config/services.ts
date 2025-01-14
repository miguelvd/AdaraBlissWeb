export interface ServiceConfig {
  name: string;
  price: number;
  category: string;
  duration: string;
}

export const SERVICES_CONFIG: Record<string, ServiceConfig> = {
  'Alisado Láser': {
    name: 'Alisado Láser',
    price: 2500,
    category: 'Alisados',
    duration: '3-4 horas'
  },
  'Alisado Orgánico': {
    name: 'Alisado Orgánico',
    price: 2000,
    category: 'Alisados',
    duration: '2-3 horas'
  },
  'Keratina Japonesa': {
    name: 'Keratina Japonesa',
    price: 2800,
    category: 'Alisados',
    duration: '3-4 horas'
  },
  'Botox': {
    name: 'Botox Capilar',
    price: 1800,
    category: 'Tratamientos',
    duration: '2-3 horas'
  },
  'Alisado Tradicional': {
    name: 'Alisado Tradicional',
    price: 1500,
    category: 'Alisados',
    duration: '2-3 horas'
  }
};
