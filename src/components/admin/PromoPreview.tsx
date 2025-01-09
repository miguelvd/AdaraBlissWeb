import React from 'react';
import { Promotion } from '../../data/promotions';
import PromoCard from '../PromoCard';

interface PromoPreviewProps {
  promotion: Promotion;
}

export const PromoPreview: React.FC<PromoPreviewProps> = ({ promotion }) => {
  if (!promotion) return null;

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Vista Previa</h3>
      <div className="transform scale-75 origin-top">
        <PromoCard {...promotion} />
      </div>
    </div>
  );
};
