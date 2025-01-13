declare global {
  interface Window {
    fbq: any;
  }
}

export const FB_PIXEL_ID = '967115785291052';

// Eventos personalizados
export const fbq = (...args: any) => {
  if (window.fbq) {
    window.fbq(...args);
  }
};

// Eventos específicos
export const trackWhatsAppClick = (service?: string) => {
  fbq('track', 'Contact', {
    content_category: 'WhatsApp',
    content_name: service || 'General'
  });
};

export const trackServiceView = (serviceName: string) => {
  fbq('track', 'ViewContent', {
    content_type: 'service',
    content_name: serviceName
  });
};

export const trackPromoView = (promoName: string) => {
  fbq('track', 'ViewContent', {
    content_type: 'promotion',
    content_name: promoName
  });
};
