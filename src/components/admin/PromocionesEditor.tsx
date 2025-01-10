import React, { useState, useEffect } from 'react';
import { ImageUploader } from './ImageUploader';
import PromoCard from '../PromoCard';
import type { Promotion } from '../../types/promotion';
import { getPromotions, updatePromotion, createPromotion, deletePromotion } from '../../services/api';
import { CheckCircle, AlertCircle, Plus, Trash2, Clock } from 'lucide-react';

interface EditorProps {
  selectedPromo: Promotion;
  setSelectedPromo: (promo: Promotion) => void;
  onSave: (promo: Promotion) => Promise<void>;
  onCancel: () => void;
}

const Editor: React.FC<EditorProps> = ({ 
  selectedPromo, 
  setSelectedPromo, 
  onSave, 
  onCancel 
}) => {
  const [showPrices, setShowPrices] = useState(selectedPromo.showPrices);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave({
      ...selectedPromo,
      showPrices
    });
  };

  const updatePromo = (updates: Partial<Promotion>) => {
    setSelectedPromo({
      ...selectedPromo,
      ...updates
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-[#F25AA3]">{selectedPromo.id.startsWith('promo-') ? 'Nueva Promoción' : 'Editar Promoción'}</h3>
            <button
              onClick={onCancel}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Columna izquierda - Campos del formulario */}
            <div className="flex-1 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Título <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={selectedPromo.title}
                  onChange={(e) => updatePromo({ title: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#F25AA3] focus:ring-[#F25AA3]"
                  required
                  minLength={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Descripción <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={selectedPromo.description}
                  onChange={(e) => updatePromo({ description: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#F25AA3] focus:ring-[#F25AA3]"
                  rows={4}
                  required
                  minLength={10}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Fecha de Inicio <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={selectedPromo.startDate.split('T')[0]}
                    onChange={(e) => updatePromo({ startDate: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#F25AA3] focus:ring-[#F25AA3]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Fecha de Fin <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={selectedPromo.endDate.split('T')[0]}
                    onChange={(e) => updatePromo({ endDate: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#F25AA3] focus:ring-[#F25AA3]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-3 text-sm font-medium text-gray-700 mb-4">
                  <input
                    type="checkbox"
                    checked={showPrices}
                    onChange={(e) => setShowPrices(e.target.checked)}
                    className="rounded border-gray-300 text-[#F25AA3] focus:ring-[#F25AA3]"
                  />
                  <span>Mostrar precios en la promoción</span>
                </label>

                {showPrices && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Precio Original <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1 relative rounded-lg shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          value={selectedPromo.originalPrice}
                          onChange={(e) => updatePromo({ originalPrice: Number(e.target.value) })}
                          className="block w-full pl-7 rounded-lg border-gray-300 focus:border-[#F25AA3] focus:ring-[#F25AA3]"
                          required
                          min={0}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Precio con Descuento <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1 relative rounded-lg shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="number"
                          value={selectedPromo.discountPrice}
                          onChange={(e) => updatePromo({ discountPrice: Number(e.target.value) })}
                          className="block w-full pl-7 rounded-lg border-gray-300 focus:border-[#F25AA3] focus:ring-[#F25AA3]"
                          required
                          min={0}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Porcentaje de Descuento <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 relative rounded-lg shadow-sm">
                  <input
                    type="number"
                    value={selectedPromo.discount}
                    onChange={(e) => updatePromo({ discount: Number(e.target.value) })}
                    className="block w-full pr-12 rounded-lg border-gray-300 focus:border-[#F25AA3] focus:ring-[#F25AA3]"
                    required
                    min={0}
                    max={100}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">%</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Texto Personalizado de Descuento
                </label>
                <input
                  type="text"
                  value={selectedPromo.discountLabel || ''}
                  onChange={(e) => updatePromo({ discountLabel: e.target.value })}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#F25AA3] focus:ring-[#F25AA3]"
                  placeholder="Ej: ¡Botox Gratis! o Botox a $1"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Si se deja vacío, se mostrará el porcentaje de descuento
                </p>
              </div>
            </div>

            {/* Columna derecha - Vista previa e imagen */}
            <div className="flex-1 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Imagen <span className="text-red-500">*</span>
                </label>
                <ImageUploader
                  currentImage={selectedPromo.image}
                  onImageChange={(imageUrl) => updatePromo({ image: imageUrl })}
                  isRequired={true}
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-4">Vista Previa</h3>
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                  <PromoCard {...selectedPromo} showPrices={showPrices} />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-4 mt-8">
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#F25AA3] text-white rounded-lg hover:bg-pink-600"
              >
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const PromocionesEditor = () => {
  const [promos, setPromos] = useState<Promotion[]>([]);
  const [selectedPromo, setSelectedPromo] = useState<Promotion | null>(null);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const loadPromotions = async () => {
    try {
      setLoading(true);
      const data = await getPromotions();
      setPromos(data);
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Error al cargar las promociones'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      await deletePromotion(id);
      await loadPromotions();
      setStatus({
        type: 'success',
        message: 'Promoción eliminada exitosamente'
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Error al eliminar la promoción'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (promo: Promotion) => {
    try {
      setLoading(true);
      if (promo.id) {
        await updatePromotion(promo);
      } else {
        await createPromotion(promo);
      }
      await loadPromotions();
      setSelectedPromo(null);
      setStatus({
        type: 'success',
        message: 'Promoción guardada exitosamente'
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Error al guardar la promoción'
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    // Ajustar la fecha a la zona horaria de México
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'America/Mexico_City',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };
    return date.toLocaleDateString('es-MX', options);
  };

  const handleAddNew = () => {
    const now = new Date();
    const thirtyDaysFromNow = new Date(now);
    thirtyDaysFromNow.setDate(now.getDate() + 30);
    
    const newPromo: Promotion = {
      id: `promo-${Date.now()}`,
      title: '',
      description: '',
      originalPrice: 0,
      discountPrice: 0,
      discount: 0,
      icon: 'Sparkles',
      image: '',
      startDate: now.toISOString().split('T')[0],
      endDate: thirtyDaysFromNow.toISOString().split('T')[0],
      showPrices: false,
      isActive: true
    };
    setSelectedPromo(newPromo);
  };

  const isPromoActive = (promo: Promotion) => {
    const now = new Date();
    const start = new Date(promo.startDate);
    const end = new Date(promo.endDate);
    
    // Ajustar las fechas al inicio y fin del día en la zona horaria local
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    
    return start <= now && now <= end && promo.isActive;
  };

  useEffect(() => {
    loadPromotions();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Promociones</h1>
        <button
          onClick={() => setSelectedPromo(null)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Cargando...' : 'Nueva Promoción'}
        </button>
      </div>

      {status.type && (
        <div className={`mb-4 p-4 rounded-lg ${
          status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          <div className="flex items-center">
            {status.type === 'success' ? (
              <CheckCircle className="w-5 h-5 mr-2" />
            ) : (
              <AlertCircle className="w-5 h-5 mr-2" />
            )}
            {status.message}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6">
        {promos.map((promo) => (
          <div
            key={promo.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="p-6 flex items-start justify-between gap-6">
              {/* Imagen de la promoción */}
              <div className="w-48 h-48 flex-shrink-0">
                <img
                  src={promo.image || '/placeholder-image.jpg'}
                  alt={promo.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Información de la promoción */}
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-xl font-semibold text-gray-900">{promo.title}</h2>
                  {isPromoActive(promo) ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Activa
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Inactiva
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Inicio: {formatDate(promo.startDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Fin: {formatDate(promo.endDate)}</span>
                  </div>
                  {promo.showPrices && (
                    <div className="flex items-center gap-2">
                      <span className="line-through">${promo.originalPrice}</span>
                      <span className="font-medium text-[#F25AA3]">${promo.discountPrice}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Acciones */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedPromo(promo)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(promo.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPromo && (
        <Editor
          selectedPromo={selectedPromo}
          setSelectedPromo={setSelectedPromo}
          onSave={handleSubmit}
          onCancel={() => setSelectedPromo(null)}
        />
      )}
    </div>
  );
};
