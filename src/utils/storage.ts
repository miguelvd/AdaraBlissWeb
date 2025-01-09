import { Promotion } from '../data/promotions';

const STORAGE_KEY = 'adara_promotions';

export const savePromotions = (promotions: Promotion[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(promotions));
  } catch (error) {
    console.error('Error saving promotions:', error);
  }
};

export const loadPromotions = (): Promotion[] | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Error loading promotions:', error);
    return null;
  }
};
