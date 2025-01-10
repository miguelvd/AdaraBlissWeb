import type { Promotion } from '../types/promotion';

// Función auxiliar para obtener el storage key según el ambiente
const getStorageKey = () => {
  return process.env.NODE_ENV === 'development' ? 'localPromotions' : 'promotions';
};

// Función para obtener todas las promociones
export const getPromotions = async (): Promise<Promotion[]> => {
  if (process.env.NODE_ENV === 'development') {
    // En desarrollo, usar localStorage
    const storageKey = getStorageKey();
    const storedPromos = localStorage.getItem(storageKey);
    return storedPromos ? JSON.parse(storedPromos) : [];
  } else {
    // En producción, hacer la llamada al API
    try {
      const response = await fetch('/api/promotions');
      if (!response.ok) throw new Error('Error al obtener promociones');
      return await response.json();
    } catch (error) {
      console.error('Error fetching promotions:', error);
      return [];
    }
  }
};

// Función para actualizar una promoción existente
export const updatePromotion = async (promotion: Promotion): Promise<void> => {
  if (process.env.NODE_ENV === 'development') {
    const storageKey = getStorageKey();
    const promos = await getPromotions();
    const index = promos.findIndex(p => p.id === promotion.id);
    
    if (index === -1) {
      throw new Error('Promoción no encontrada');
    }
    
    // Actualizamos la promoción existente manteniendo su ID
    promos[index] = promotion;
    localStorage.setItem(storageKey, JSON.stringify(promos));
  } else {
    const response = await fetch(`/api/promotions/${promotion.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(promotion)
    });
    if (!response.ok) throw new Error('Error al actualizar promoción');
  }
};

// Función para crear una nueva promoción
export const createPromotion = async (promotion: Promotion): Promise<void> => {
  if (process.env.NODE_ENV === 'development') {
    const storageKey = getStorageKey();
    const promos = await getPromotions();
    
    // Nos aseguramos de que el ID sea único
    if (promos.some(p => p.id === promotion.id)) {
      throw new Error('Ya existe una promoción con este ID');
    }
    
    promos.push(promotion);
    localStorage.setItem(storageKey, JSON.stringify(promos));
  } else {
    const response = await fetch('/api/promotions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(promotion)
    });
    if (!response.ok) throw new Error('Error al crear promoción');
  }
};

// Función para eliminar una promoción
export const deletePromotion = async (promotionId: string): Promise<void> => {
  if (process.env.NODE_ENV === 'development') {
    const storageKey = getStorageKey();
    const promos = await getPromotions();
    const filteredPromos = promos.filter(p => p.id !== promotionId);
    localStorage.setItem(storageKey, JSON.stringify(filteredPromos));
  } else {
    const response = await fetch(`/api/promotions/${promotionId}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Error al eliminar promoción');
  }
};
