import { useEffect, useState } from 'react';
import { getPromotions } from '../services/api';
import { Promotion } from '../data/promotions';
import PromoCard from './PromoCard';

export const PromocionesSection = () => {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPromotions();
  }, []);

  const loadPromotions = async () => {
    try {
      setLoading(true);
      const data = await getPromotions();
      // Filtrar promociones activas según la fecha actual
      const now = new Date('2025-01-09T13:05:25-06:00');
      const activePromos = data.filter(promo => {
        const start = new Date(promo.startDate);
        const end = new Date(promo.endDate);
        
        // Ajustar las fechas al inicio y fin del día
        start.setUTCHours(0, 0, 0, 0);
        end.setUTCHours(23, 59, 59, 999);

        return start <= now && now <= end && promo.isActive;
      }).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
      setPromotions(activePromos);
    } catch (error) {
      console.error('Error loading promotions:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F25AA3]"></div>
      </div>
    );
  }

  if (promotions.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-glitten text-center mb-12">
          Promociones Especiales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map(promo => (
            <PromoCard key={promo.id} {...promo} />
          ))}
        </div>
      </div>
    </section>
  );
};
