import { useState, useEffect } from 'react';
import { getPromotions } from '../services/api';

interface Promocion {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  discount: string;
  discountLabel?: string;
  icon: 'Sparkles' | 'Star' | 'Heart';
  image: string;
  startDate: string;
  endDate: string;
  showPrices: boolean;
}

// Datos temporales mientras se implementa el backend
const promocionesData: Promocion[] = [];

export const usePromociones = () => {
  const [promociones, setPromociones] = useState<Promocion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPromociones = async () => {
      try {
        setLoading(true);
        const data = await getPromotions();
        setPromociones(data);
      } catch (err) {
        setError('Error al cargar las promociones');
        console.error('Error fetching promotions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPromociones();
  }, []);

  return { promociones, loading, error };
};
