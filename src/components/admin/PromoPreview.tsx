import React from 'react';
import { Promotion } from '../../types/promotion';
import { formatDate } from '../../utils/dateUtils';

interface PromoPreviewProps {
  promotion: Promotion;
}

export const PromoPreview: React.FC<PromoPreviewProps> = ({ promotion }) => {
  if (!promotion) return null;

  const previewPromotion = {
    ...promotion,
    startDate: formatDate(promotion.startDate),
    endDate: formatDate(promotion.endDate)
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Vista Previa</h3>
      <div className="transform scale-75 origin-top">
        <div className="bg-white rounded-lg p-4 shadow">
          <h4 className="text-xl font-bold text-[#F25AA3] mb-4">{promotion.title}</h4>
          <p className="text-gray-600 mb-4">{promotion.description}</p>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">
              <span className="font-medium">Inicio:</span> {previewPromotion.startDate}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Fin:</span> {previewPromotion.endDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
