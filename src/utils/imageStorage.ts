const IMAGE_STORAGE_KEY = 'dev_images';

interface StoredImage {
  id: string;
  data: string;
  timestamp: number;
}

export const saveImage = (imageUrl: string): string => {
  try {
    // Generar un ID único para la imagen
    const imageId = `img_${Date.now()}`;
    
    // Si la imagen ya es una URL de datos, usarla directamente
    const imageData = imageUrl.startsWith('data:') ? imageUrl : imageUrl;
    
    // Obtener imágenes existentes
    const storedImagesStr = localStorage.getItem(IMAGE_STORAGE_KEY);
    const storedImages: StoredImage[] = storedImagesStr ? JSON.parse(storedImagesStr) : [];
    
    // Agregar nueva imagen
    storedImages.push({
      id: imageId,
      data: imageData,
      timestamp: Date.now()
    });
    
    // Guardar en localStorage
    localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(storedImages));
    
    return imageId;
  } catch (error) {
    console.error('Error saving image:', error);
    return imageUrl;
  }
};

export const getImage = (imageId: string): string | null => {
  try {
    // Si no es un ID de imagen almacenada, retornar la URL original
    if (!imageId.startsWith('img_')) {
      return imageId;
    }
    
    const storedImagesStr = localStorage.getItem(IMAGE_STORAGE_KEY);
    if (!storedImagesStr) return null;
    
    const storedImages: StoredImage[] = JSON.parse(storedImagesStr);
    const image = storedImages.find(img => img.id === imageId);
    
    return image ? image.data : null;
  } catch (error) {
    console.error('Error getting image:', error);
    return null;
  }
};

export const clearImages = () => {
  try {
    localStorage.removeItem(IMAGE_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing images:', error);
  }
};
