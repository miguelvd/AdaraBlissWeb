export const uploadImage = async (formData: FormData): Promise<Response> => {
  console.log('imageService - Iniciando carga de imagen');
  
  try {
    // Log del FormData
    console.log('imageService - Contenido del FormData:');
    for (const pair of formData.entries()) {
      if (pair[1] instanceof File) {
        const file = pair[1] as File;
        console.log('FormData entry:', {
          name: pair[0],
          fileName: file.name,
          type: file.type,
          size: file.size
        });
      } else {
        console.log('FormData entry:', pair[0], pair[1]);
      }
    }

    const response = await fetch('https://adarabliss.com/api/upload_image.php', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log('imageService - Respuesta del servidor:', data);

    if (!response.ok) {
      console.error('imageService - Error del servidor:', {
        status: response.status,
        statusText: response.statusText,
        data: data
      });
      throw new Error(data.error || 'Error al subir la imagen');
    }

    return data;
  } catch (error) {
    console.error('imageService - Error detallado:', {
      error,
      message: error instanceof Error ? error.message : 'Error desconocido',
      stack: error instanceof Error ? error.stack : undefined
    });
    throw error;
  }
};
