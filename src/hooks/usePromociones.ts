import { useState, useEffect } from 'react';
import { getPromotions } from '../services/api';
import type { Promotion } from '../types/promotion';

// Datos temporales mientras se implementa el backend
const promocionesData: Promotion[] = [];

export const usePromociones = () => {
  const [promociones, setPromociones] = useState<Promotion[]>([]);
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
