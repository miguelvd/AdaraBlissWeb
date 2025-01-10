import type { Promotion } from '../types/promotion';

const API_URL = 'https://adarabliss.com/api';

// Función para obtener todas las promociones
export const getPromotions = async (): Promise<Promotion[]> => {
  try {
    const response = await fetch(`${API_URL}/promotions.php`);
    if (!response.ok) {
      throw new Error('Error al obtener promociones');
    }
    const { data } = await response.json();
    return data.map((promo: any) => ({
      ...promo,
      // Asegurarnos de que los tipos sean correctos
      id: String(promo.id),
      originalPrice: Number(promo.originalPrice),
      discountPrice: Number(promo.discountPrice),
      discount: String(promo.discount),
      showPrices: Boolean(promo.showPrices),
      icon: promo.icon || 'Sparkles'
    }));
  } catch (error) {
    console.error('Error fetching promotions:', error);
    throw error;
  }
};

// Función para actualizar una promoción existente
export const updatePromotion = async (promotion: Promotion): Promise<void> => {
  const response = await fetch(`${API_URL}/promotions.php`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(promotion),
  });

  if (!response.ok) {
    throw new Error('Error al actualizar la promoción');
  }
};

// Función para crear una nueva promoción
export const createPromotion = async (promotion: Promotion): Promise<void> => {
  const response = await fetch(`${API_URL}/promotions.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(promotion),
  });

  if (!response.ok) {
    throw new Error('Error al crear la promoción');
  }
};

// Función para eliminar una promoción
export const deletePromotion = async (promotionId: string): Promise<void> => {
  const response = await fetch(`${API_URL}/promotions.php`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: promotionId }),
  });

  if (!response.ok) {
    throw new Error('Error al eliminar la promoción');
  }
};
