import { SERVICES_CONFIG } from '../config/services';

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
    if (process.env.NODE_ENV === 'development') {
      console.log('Facebook Pixel Event:', {
        event: args[0],
        name: args[1],
        params: args[2]
      });
    }
  }
};

// Eventos específicos
export const trackWhatsAppClick = (serviceName?: string) => {
  const service = serviceName ? SERVICES_CONFIG[serviceName] : null;
  fbq('track', 'Contact', {
    content_category: service?.category || 'General',
    content_name: service?.name || 'General',
    value: service?.price || 0,
    currency: 'MXN'
  });
};

export const trackServiceView = (serviceName: string) => {
  const service = SERVICES_CONFIG[serviceName];
  if (!service) return;

  fbq('track', 'ViewContent', {
    content_type: 'service',
    content_name: service.name,
    content_category: service.category,
    value: service.price,
    currency: 'MXN'
  });
};

export const trackPromoView = (promoName: string, value?: number) => {
  fbq('track', 'ViewContent', {
    content_type: 'promotion',
    content_name: promoName,
    value: value || 0,
    currency: 'MXN'
  });
};

export const trackScheduleAppointment = (serviceName: string) => {
  const service = SERVICES_CONFIG[serviceName];
  if (!service) return;

  fbq('track', 'Schedule', {
    content_category: 'Appointment',
    content_name: service.name,
    value: service.price,
    currency: 'MXN',
    predicted_ltv: service.price
  });
};

export const trackContactFormSubmission = (formData: {
  service?: string;
  source?: string;
}) => {
  fbq('track', 'Lead', {
    content_category: 'Contact',
    content_name: formData.service || 'General',
    source: formData.source || 'Contact Form',
  });
};

export const trackFeedbackSubmission = (data: {
  service: string;
  rating: number;
}) => {
  fbq('track', 'SubmitReview', {
    content_type: 'service_review',
    content_name: data.service,
    rating: data.rating,
  });
};

export const trackServiceNavigation = (from: string, to: string) => {
  fbq('track', 'ServiceNavigation', {
    from_service: from,
    to_service: to,
    content_category: 'Navigation'
  });
};

export const trackGalleryInteraction = (action: 'view' | 'zoom', imageCategory: string) => {
  fbq('track', 'GalleryInteraction', {
    content_type: 'gallery',
    content_category: imageCategory,
    action: action
  });
};

export const trackDeepScroll = (percentage: number, pageName: string) => {
  if (percentage >= 75) { // Solo trackear cuando el usuario ha visto 75% o más
    fbq('track', 'DeepScroll', {
      content_type: 'page',
      content_name: pageName,
      scroll_depth: percentage
    });
  }
};
