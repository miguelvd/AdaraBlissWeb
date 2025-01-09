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

  useEffect(() => {
    loadPromotions();
  }, []);

  const loadPromotions = async () => {
    try {
      setLoading(true);
      const data = await getPromotions();
      const sortedPromos = data.sort((a, b) => {
        if (isPromoActive(a) && !isPromoActive(b)) return -1;
        if (!isPromoActive(a) && isPromoActive(b)) return 1;
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
      });
      setPromos(sortedPromos);
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Error al cargar las promociones'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (promo: Promotion) => {
    setSelectedPromo(promo);
  };

  const handleDelete = async (promoId: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar esta promoción?')) return;

    try {
      setLoading(true);
      await deletePromotion(promoId);
      setPromos(promos.filter(p => p.id !== promoId));
      setStatus({
        type: 'success',
        message: 'Promoción eliminada correctamente'
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Error al eliminar la promoción'
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ type: null, message: '' }), 3000);
    }
  };

  const handleAddNew = () => {
    const now = new Date();
    const thirtyDaysFromNow = new Date(now);
    thirtyDaysFromNow.setDate(now.getDate() + 30);

    const newPromo: Promotion = {
      id: `promo-${Date.now()}`,
      title: 'Nueva Promoción',
      description: 'Descripción de la promoción',
      originalPrice: 0,
      discountPrice: 0,
      discount: 0,
      icon: 'Sparkles',
      image: '',
      startDate: now.toISOString().split('T')[0],
      endDate: thirtyDaysFromNow.toISOString().split('T')[0],
      showPrices: true,
      isActive: true
    };
    setSelectedPromo(newPromo);
  };

  const handleSubmit = async (promo: Promotion) => {
    try {
      setLoading(true);
      const isNewPromo = promo.id.startsWith('promo-');
      
      if (isNewPromo) {
        // Si es una nueva promoción, generamos un ID único
        const newPromo = {
          ...promo,
          id: `promo_${Date.now()}`
        };
        await createPromotion(newPromo);
      } else {
        // Si es una promoción existente, actualizamos
        await updatePromotion(promo);
      }
      
      await loadPromotions();
      setStatus({
        type: 'success',
        message: `Promoción ${isNewPromo ? 'creada' : 'actualizada'} correctamente`
      });
      setSelectedPromo(null);
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Error al guardar los cambios'
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ type: null, message: '' }), 3000);
    }
  };

  const isPromoActive = (promo: Promotion): boolean => {
    const now = new Date();
    const start = new Date(promo.startDate + 'T00:00:00-06:00');
    const end = new Date(promo.endDate + 'T23:59:59-06:00');
    return start <= now && now <= end && promo.isActive;
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#F25AA3]">Editor de Promociones</h2>
        <button
          onClick={handleAddNew}
          className="px-4 py-2 bg-[#F25AA3] text-white rounded-lg hover:bg-pink-600 flex items-center gap-2"
          disabled={loading}
        >
          <Plus className="w-5 h-5" />
          Nueva Promoción
        </button>
      </div>
      
      {status.type && (
        <div className={`fixed top-4 right-4 px-4 py-3 rounded flex items-center gap-2 shadow-lg ${
          status.type === 'success' 
            ? 'bg-green-100 border border-green-400 text-green-700'
            : 'bg-red-100 border border-red-400 text-red-700'
        }`}>
          {status.type === 'success' ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          {status.message}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F25AA3]"></div>
        </div>
      ) : !selectedPromo ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promos.map(promo => {
            const isActive = isPromoActive(promo);
            return (
              <div key={promo.id} className={`bg-white rounded-lg shadow-md p-6 ${
                !isActive ? 'opacity-60' : ''
              }`}>
                <div className="relative w-full h-40 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                  />
                  {!isActive ? (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
                      <div className="text-center">
                        <Clock className="w-8 h-8 mx-auto mb-2" />
                        <span className="text-sm">
                          {new Date(promo.startDate) > new Date() 
                            ? 'Próximamente'
                            : 'Finalizada'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Activa
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{promo.title}</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDelete(promo.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <div className="text-sm text-gray-500 space-y-1 mb-4">
                  <div>Inicio: {new Date(promo.startDate).toLocaleDateString('es-MX')}</div>
                  <div>Fin: {new Date(promo.endDate).toLocaleDateString('es-MX')}</div>
                </div>
                <button
                  onClick={() => handleEdit(promo)}
                  className="w-full px-4 py-2 bg-[#F25AA3] text-white rounded-lg hover:bg-pink-600 disabled:opacity-50"
                  disabled={loading}
                >
                  Editar
                </button>
              </div>
            );
          })}
        </div>
      ) : (
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
