export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: string;
  discountLabel?: string;
  icon: 'Sparkles' | 'Star' | 'Heart';
  image: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}
