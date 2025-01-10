import React, { useRef, useState } from 'react';
import { Upload } from 'lucide-react';
import { compressImage } from '../../utils/imageCompression';

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

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        setIsLoading(true);

        // Validar el tipo de archivo
        if (!file.type.startsWith('image/')) {
          alert('Por favor, selecciona un archivo de imagen válido.');
          return;
        }

        let imageUrl: string;
        
        // Si el archivo es mayor a 5MB, comprimir
        if (file.size > 5 * 1024 * 1024) {
          imageUrl = await compressImage(file);
        } else {
          // Si es menor a 5MB, solo convertir a base64
          imageUrl = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.readAsDataURL(file);
          });
        }

        setPreviewUrl(imageUrl);
        onImageChange(imageUrl);
      } catch (error) {
        console.error('Error al procesar la imagen:', error);
        alert('Hubo un error al procesar la imagen. Por favor, intenta con otra.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {isRequired ? 'Imagen (requerido)' : 'Imagen'}
      </label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg relative">
        {isLoading ? (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F25AA3]"></div>
          </div>
        ) : null}
        
        <div className="space-y-1 text-center">
          {previewUrl ? (
            <div className="relative group">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-h-64 rounded-lg mx-auto"
              />
              <div
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg cursor-pointer"
                onClick={handleClick}
              >
                <Upload className="h-8 w-8 text-white" />
              </div>
            </div>
          ) : (
            <div
              className="flex flex-col items-center justify-center cursor-pointer"
              onClick={handleClick}
            >
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <div className="relative cursor-pointer font-medium text-[#F25AA3] hover:text-pink-500">
                  <span>Sube una imagen</span>
                </div>
                <p className="pl-1">o arrastra y suelta</p>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, GIF hasta 5MB
              </p>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            className="sr-only"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
      </div>
    </div>
  );
};
