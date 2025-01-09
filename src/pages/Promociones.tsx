import React, { useEffect, useState } from 'react';
import PromoCard from '../components/PromoCard';
import { getPromotions } from '../services/api';
import type { Promotion } from '../data/promotions';
import { WaveDivider } from '../components/WaveDivider';
import { SparkleGroup } from '../components/SparkleGroup';
import { Helmet } from 'react-helmet';

export const Promociones: React.FC = () => {
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
      });

      setPromotions(activePromos);
    } catch (error) {
      console.error('Error loading promotions:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F25AA3]"></div>
      </div>
    );
  }

  if (promotions.length === 0) {
    return (
      <div className="text-center text-gray-600">
        No hay promociones activas en este momento.
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Promociones - Adara Bliss</title>
        <meta name="description" content="Descubre nuestras promociones especiales en tratamientos capilares y servicios de belleza." />
      </Helmet>

      <div className="pt-16 min-h-screen bg-gradient-to-b from-white to-pink-50">
        <section className="relative py-20 px-4">
          <SparkleGroup />
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#F25AA3] mb-4">
                Promociones Activas
              </h1>
              <p className="text-gray-600 text-lg">
                ¡Descubre nuestras increíbles ofertas y tratamientos especiales!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {promotions.map(promo => (
                <div 
                  key={promo.id}
                  className="opacity-0 translate-y-8 animate-fade-in"
                  style={{ animationDelay: `${promotions.indexOf(promo) * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <PromoCard {...promo} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <WaveDivider position="bottom" />
      </div>
    </>
  );
};