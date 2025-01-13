export const WHATSAPP_NUMBER = '524492175606';

export const getWhatsAppLink = (service: string) => {
  const message = `Vi en la página web este beneficio del alisado "${service}", ¿Podrías darme más información?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
