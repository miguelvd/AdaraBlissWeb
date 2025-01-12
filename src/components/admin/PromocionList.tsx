import React, { useEffect } from 'react';
import type { Promotion } from '../../types/promotion';
import { formatDate } from '../../utils/dateUtils';
import PromoCard from '../PromoCard';

const DEFAULT_IMAGE = '/public/images/default-promo.jpg';

interface PromocionListProps {
  promociones: Promotion[];
  onEdit: (promo: Promotion) => void;
  onDelete: (promo: Promotion) => void;
}

const PromocionList: React.FC<PromocionListProps> = ({
  promociones,
  onEdit,
  onDelete,
}) => {
  useEffect(() => {
    console.log('PromocionList - Montado');
    console.log('Promociones recibidas:', promociones);
  }, []);

  const handleEdit = (promo: Promotion) => {
    console.log('Editando promoción:', promo);
    onEdit(promo);
  };

  const handleDelete = (promo: Promotion) => {
    console.log('Eliminando promoción:', promo);
    onDelete(promo);
  };

  if (!Array.isArray(promociones)) {
    console.error('PromocionList - promociones no es un array:', promociones);
    return <div>Error: formato de datos inválido</div>;
  }

  if (promociones.length === 0) {
    console.log('PromocionList - No hay promociones');
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No hay promociones disponibles</p>
      </div>
    );
  }

  console.log('PromocionList - Renderizando lista de promociones');
  return (
    <div className="space-y-4">
      {promociones.map((promo) => {
        console.log('Renderizando promoción:', promo.id, promo);
        return (
          <div
            key={promo.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4"
          >
            <div className="flex-1">
              <PromoCard
                {...promo}
                icon="Sparkles"
                discount={((promo.originalPrice - promo.discountPrice) / promo.originalPrice * 100).toFixed(0) + '%'}
                discountLabel="DESCUENTO"
                onImageError={(e) => {
                  console.log('Error cargando imagen para promoción:', promo.id);
                  e.currentTarget.src = DEFAULT_IMAGE;
                }}
              />
            </div>

            <div className="flex justify-end items-start space-x-2">
              <button
                onClick={() => handleEdit(promo)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(promo)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PromocionList;
