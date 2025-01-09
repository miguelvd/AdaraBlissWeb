export const compressImage = async (
  file: File,
  maxSizeInMB: number = 5,
  quality: number = 0.7
): Promise<string> => {
  // Convertir el archivo a una imagen
  const createImage = (file: File): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(img.src);
        resolve(img);
      };
      img.onerror = reject;
    });
  };

  // Comprimir la imagen
  const compress = (img: HTMLImageElement, quality: number): Promise<string> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;

      // Calcular las dimensiones manteniendo la proporción
      let { width, height } = img;
      const maxDimension = 1920; // Máximo 1920px para cualquier dimensión

      if (width > maxDimension || height > maxDimension) {
        if (width > height) {
          height = (height / width) * maxDimension;
          width = maxDimension;
        } else {
          width = (width / height) * maxDimension;
          height = maxDimension;
        }
      }

      // Establecer dimensiones del canvas
      canvas.width = width;
      canvas.height = height;

      // Dibujar la imagen en el canvas
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);

      // Convertir a base64
      const base64 = canvas.toDataURL('image/jpeg', quality);
      resolve(base64);
    });
  };

  // Función para calcular el tamaño de una cadena base64 en MB
  const getBase64Size = (base64String: string): number => {
    const stringLength = base64String.length - 'data:image/jpeg;base64,'.length;
    const sizeInBytes = (stringLength * 3) / 4;
    return sizeInBytes / (1024 * 1024); // Convertir a MB
  };

  try {
    const img = await createImage(file);
    let compressedBase64 = await compress(img, quality);
    let currentQuality = quality;

    // Reducir la calidad gradualmente hasta que el tamaño sea menor que el máximo
    while (getBase64Size(compressedBase64) > maxSizeInMB && currentQuality > 0.1) {
      currentQuality -= 0.1;
      compressedBase64 = await compress(img, currentQuality);
    }

    return compressedBase64;
  } catch (error) {
    console.error('Error al comprimir la imagen:', error);
    throw error;
  }
};
