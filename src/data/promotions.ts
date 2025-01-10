import { Sparkles, Heart, Star } from 'lucide-react';

export interface Promotion {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  discount: number;
  discountLabel?: string;
  icon: 'Sparkles' | 'Star' | 'Heart';
  image: string;
  startDate: string;
  endDate: string;
  showPrices: boolean;
  isActive: boolean;
}

// Función para verificar si una promoción está activa
export const isPromoActive = (promo: Promotion): boolean => {
  const now = new Date();
  const start = new Date(promo.startDate + 'T00:00:00-06:00');
  const end = new Date(promo.endDate + 'T23:59:59-06:00');
  
  // Ajustar las fechas al inicio y fin del día
  start.setUTCHours(0, 0, 0, 0);
  end.setUTCHours(23, 59, 59, 999);

  return start <= now && now <= end && promo.isActive;
};