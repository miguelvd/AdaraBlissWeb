import React, { useRef, useState } from 'react';
import { Upload } from 'lucide-react';
import { uploadImage } from '../../services/imageService';

interface ImageUploaderProps {
  currentImage: string;
  onImageChange: (imageUrl: string) => void;
  isRequired?: boolean;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  currentImage,
  onImageChange,
  isRequired = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(currentImage);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsLoading(true);
      setError(null);

      // Validar el tipo de archivo
      if (!file.type.startsWith('image/')) {
        throw new Error('Por favor, selecciona un archivo de imagen válido.');
      }

      // Validar tamaño (5MB)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error('La imagen no debe superar los 5MB.');
      }

      // Crear FormData y añadir el archivo
      const formData = new FormData();
      formData.append('image', file);

      // Subir la imagen
      const response = await uploadImage(formData);
      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Error al subir la imagen');
      }

      // Actualizar la vista previa y notificar el cambio
      setPreviewUrl(data.url);
      onImageChange(data.url);
    } catch (error) {
      console.error('Error al procesar la imagen:', error);
      setError(error instanceof Error ? error.message : 'Error al procesar la imagen');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative w-full">
      <div 
        className={`
          relative w-full h-64 border-2 border-dashed rounded-lg 
          ${isRequired && !currentImage ? 'border-red-500' : 'border-gray-300'} 
          hover:border-primary-500 transition-colors cursor-pointer
          flex flex-col items-center justify-center
          ${isLoading ? 'opacity-50' : ''}
        `}
        onClick={handleClick}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Vista previa"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="text-center p-4">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              Haz clic para seleccionar una imagen
            </p>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          disabled={isLoading}
        />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}

      {isRequired && !currentImage && (
        <p className="mt-2 text-sm text-red-600">
          Este campo es requerido
        </p>
      )}
    </div>
  );
};
