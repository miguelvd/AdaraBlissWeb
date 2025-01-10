import { Promotion } from '../data/promotions';

const PROMOTIONS_KEY = 'promotions';

export const getLocalPromotions = (): Promotion[] => {
  try {
    const storedData = localStorage.getItem(PROMOTIONS_KEY);
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error('Error getting promotions from localStorage:', error);
    return [];
  }
};

export const saveLocalPromotions = (promotions: Promotion[]): void => {
  try {
    localStorage.setItem(PROMOTIONS_KEY, JSON.stringify(promotions));
  } catch (error) {
    console.error('Error saving promotions to localStorage:', error);
  }
};

export const clearLocalPromotions = (): void => {
  try {
    localStorage.removeItem(PROMOTIONS_KEY);
  } catch (error) {
    console.error('Error clearing promotions from localStorage:', error);
  }
};
