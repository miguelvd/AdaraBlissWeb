import React, { useState, useEffect } from 'react';
import { ImageUploader } from './ImageUploader';
import PromoCard from '../PromoCard';
import type { Promotion } from '../../types/promotion';
import { getPromotions, updatePromotion, createPromotion, deletePromotion, uploadImage } from '../../services/api';
import { CheckCircle, AlertCircle, Plus, Trash2, Clock } from 'lucide-react';

const DEFAULT_IMAGE = '/public/images/default-promo.jpg';

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
  console.log('Editor - Montado con promoción:', selectedPromo);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Editor - useEffect - selectedPromo actualizada:', selectedPromo);
  }, [selectedPromo]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Editor - Intentando guardar promoción:', selectedPromo);
    try {
      await onSave(selectedPromo);
      console.log('Editor - Promoción guardada exitosamente');
    } catch (error) {
      console.error('Editor - Error al guardar promoción:', error);
      setError('Error al guardar la promoción');
    }
  };

  const updatePromo = (updates: Partial<Promotion>) => {
    console.log('Editor - Actualizando promoción con:', updates);
    setSelectedPromo({
      ...selectedPromo,
      ...updates
    });
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      console.log('Editor - No se seleccionó ningún archivo');
      return;
    }

    try {
      console.log('Editor - Iniciando carga de imagen');
      setUploading(true);
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/upload_image.php', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Error al subir la imagen');
      }

      const data = await response.json();
      console.log('Editor - Imagen cargada exitosamente:', data);
      
      if (data.success && data.url) {
        updatePromo({ image: data.url });
      } else {
        throw new Error(data.error || 'Error desconocido al subir la imagen');
      }
    } catch (error) {
      console.error('Editor - Error detallado al subir imagen:', error);
      setError(error instanceof Error ? error.message : 'Error desconocido');
    } finally {
      setUploading(false);
    }
  };

  console.log('Editor - Renderizando con estado:', { uploading, error });
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Título
            </label>
            <input
              type="text"
              value={selectedPromo.title}
              onChange={(e) => updatePromo({ title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F25AA3] focus:ring-[#F25AA3]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              value={selectedPromo.description}
              onChange={(e) => updatePromo({ description: e.target.value })}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F25AA3] focus:ring-[#F25AA3]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Descuento
            </label>
            <input
              type="text"
              value={selectedPromo.discount}
              onChange={(e) => updatePromo({ discount: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F25AA3] focus:ring-[#F25AA3]"
              placeholder="Ej: 20% OFF, 2x1, etc."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fecha de Inicio
            </label>
            <input
              type="date"
              value={selectedPromo.startDate.split('T')[0]}
              onChange={(e) => updatePromo({ startDate: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F25AA3] focus:ring-[#F25AA3]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fecha de Fin
            </label>
            <input
              type="date"
              value={selectedPromo.endDate.split('T')[0]}
              onChange={(e) => updatePromo({ endDate: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F25AA3] focus:ring-[#F25AA3]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Imagen
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-[#F25AA3] file:text-white
                hover:file:bg-[#D14A93]"
            />
            {uploading && (
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1 animate-spin" />
                Subiendo imagen...
              </div>
            )}
            {error && (
              <div className="mt-2 text-sm text-red-500">
                Error al subir la imagen: {error}
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Vista Previa</h3>
          <PromoCard
            {...selectedPromo}
            icon="Sparkles"
            discountLabel="DESCUENTO"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F25AA3]"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-[#F25AA3] border border-transparent rounded-md shadow-sm hover:bg-[#D14A93] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F25AA3]"
          disabled={uploading}
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

const PromocionesEditor: React.FC = () => {
  console.log('PromocionesEditor - Montando componente');
  const [promociones, setPromociones] = useState<Promotion[]>([]);
  const [selectedPromo, setSelectedPromo] = useState<Promotion | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPromociones = async () => {
    try {
      console.log('PromocionesEditor - Cargando promociones');
      const data = await getPromotions();
      console.log('PromocionesEditor - Promociones cargadas:', data);
      setPromociones(data);
    } catch (error) {
      console.error('PromocionesEditor - Error al cargar promociones:', error);
      setError('Error al cargar las promociones');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPromociones();
  }, []);

  const handleCreateNew = () => {
    console.log('PromocionesEditor - Creando nueva promoción');
    setSelectedPromo({
      id: '',
      title: '',
      description: '',
      image: DEFAULT_IMAGE,
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
      originalPrice: 0,
      discountPrice: 0,
      showPrices: false,
      discount: ''
    });
  };

  const handleSave = async (promo: Promotion) => {
    try {
      console.log('PromocionesEditor - Guardando promoción:', promo);
      if (promo.id) {
        await updatePromotion(promo);
        console.log('PromocionesEditor - Promoción actualizada');
      } else {
        await createPromotion(promo);
        console.log('PromocionesEditor - Nueva promoción creada');
      }
      setSelectedPromo(null);
      await loadPromociones();
    } catch (error) {
      console.error('PromocionesEditor - Error al guardar promoción:', error);
      throw error;
    }
  };

  const handleDelete = async (promo: Promotion) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar esta promoción?')) {
      return;
    }

    try {
      console.log('PromocionesEditor - Eliminando promoción:', promo);
      await deletePromotion(promo.id);
      console.log('PromocionesEditor - Promoción eliminada');
      await loadPromociones();
    } catch (error) {
      console.error('PromocionesEditor - Error al eliminar promoción:', error);
      setError('Error al eliminar la promoción');
    }
  };

  console.log('PromocionesEditor - Renderizando con estado:', { 
    promocionesCount: promociones.length, 
    selectedPromo: selectedPromo?.id, 
    loading, 
    error 
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Clock className="w-8 h-8 animate-spin text-[#F25AA3]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    );
  }

  if (selectedPromo) {
    return (
      <Editor
        selectedPromo={selectedPromo}
        setSelectedPromo={setSelectedPromo}
        onSave={handleSave}
        onCancel={() => setSelectedPromo(null)}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Promociones</h2>
        <button
          onClick={handleCreateNew}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#F25AA3] rounded-md hover:bg-[#D14A93] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F25AA3]"
        >
          <Plus className="w-5 h-5 mr-1" />
          Nueva Promoción
        </button>
      </div>

      {promociones.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No hay promociones disponibles</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {promociones.map((promo) => (
            <div
              key={promo.id}
              className="bg-white rounded-lg shadow-md p-4 flex gap-4"
            >
              <div className="flex-1">
                <PromoCard
                  {...promo}
                  icon="Sparkles"
                  discountLabel="DESCUENTO"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setSelectedPromo(promo)}
                  className="flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(promo)}
                  className="flex items-center px-3 py-1.5 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PromocionesEditor;
