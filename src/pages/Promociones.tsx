import React from 'react';
import PromoCard from '../components/PromoCard';
import SEO from '../components/SEO';
import { usePromociones } from '../hooks/usePromociones';

const DEFAULT_IMAGE = '/public/images/default-promo.jpg';

const Promociones: React.FC = () => {
  const { promociones, loading, error } = usePromociones();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = DEFAULT_IMAGE;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#F25AA3]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error al cargar las promociones: {error}</div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Promociones Especiales"
        description="Descubre nuestras promociones exclusivas en tratamientos faciales, masajes y servicios de belleza. Ofertas por tiempo limitado en Adara Bliss Salon & Spa."
        keywords={[
          'promociones spa',
          'descuentos belleza',
          'ofertas tratamientos faciales',
          'promociones masajes',
          'ofertas especiales spa',
          'descuentos salon belleza puebla'
        ]}
        type="article"
      />
      
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-glitten text-gray-900 mb-4">
              Promociones Especiales
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestras ofertas exclusivas y date el gusto que te mereces
            </p>
          </div>
          
          {promociones.length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl p-8">
                <div className="md:flex flex-col items-center">
                  <div className="mb-6">
                    <svg
                      className="mx-auto h-24 w-24 text-pink-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">
                      No hay promociones disponibles
                    </h3>
                    <p className="text-gray-600 mb-6">
                      En este momento no tenemos promociones activas, pero estamos trabajando en nuevas ofertas especiales para ti.
                    </p>
                    <p className="text-gray-500 text-sm">
                      ¡Vuelve pronto para descubrir nuestras próximas promociones!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {promociones.map((promo) => (
                <div key={promo.id}>
                  <PromoCard
                    {...promo}
                    image={promo.image || DEFAULT_IMAGE}
                    onImageError={handleImageError}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Promociones;