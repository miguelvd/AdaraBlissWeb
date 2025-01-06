interface GalleryImage {
  url: string;
  alt: string;
  thumbnail?: string;
}

interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: GalleryImage[];
}

export const galleries: Record<string, GalleryCategory> = {
  keratinaJaponesa: {
    id: 'keratina-japonesa',
    title: 'Keratina Japonesa',
    description: 'Transformaciones con nuestro tratamiento estrella',
    coverImage: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.15 PM.jpeg',
    images: [
      {
        url: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.15 PM.jpeg',
        alt: 'Keratina Japonesa - Resultado 1',
        thumbnail: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.15 PM.jpeg'
      },
      {
        url: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.16 PM (1).jpeg',
        alt: 'Keratina Japonesa - Resultado 2',
        thumbnail: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.16 PM (1).jpeg'
      },
      {
        url: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.16 PM (2).jpeg',
        alt: 'Keratina Japonesa - Resultado 3',
        thumbnail: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.16 PM (2).jpeg'
      },
      {
        url: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.16 PM (3).jpeg',
        alt: 'Keratina Japonesa - Resultado 4',
        thumbnail: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.16 PM (3).jpeg'
      },
      {
        url: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.16 PM.jpeg',
        alt: 'Keratina Japonesa - Resultado 5',
        thumbnail: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.16 PM.jpeg'
      },
      {
        url: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.17 PM (1).jpeg',
        alt: 'Keratina Japonesa - Resultado 6',
        thumbnail: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.17 PM (1).jpeg'
      },
      {
        url: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.17 PM (2).jpeg',
        alt: 'Keratina Japonesa - Resultado 7',
        thumbnail: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.17 PM (2).jpeg'
      },
      {
        url: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.17 PM (3).jpeg',
        alt: 'Keratina Japonesa - Resultado 8',
        thumbnail: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.17 PM (3).jpeg'
      },
      {
        url: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.17 PM (4).jpeg',
        alt: 'Keratina Japonesa - Resultado 9',
        thumbnail: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.17 PM (4).jpeg'
      },
      {
        url: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.17 PM.jpeg',
        alt: 'Keratina Japonesa - Resultado 10',
        thumbnail: '/images/gallery/Keratina Japonesa/WhatsApp Image 2025-01-03 at 10.19.17 PM.jpeg'
      }
    ]
  },
  alisadoLaser: {
    id: 'alisado-laser',
    title: 'Alisado Láser',
    description: 'Tecnología avanzada que sella la cutícula y alisa desde la primera sesión',
    coverImage: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.31.38 PM.jpeg',
    images: [
      {
        url: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.31.38 PM.jpeg',
        alt: 'Alisado Láser - Resultado 1',
        thumbnail: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.31.38 PM.jpeg'
      },
      {
        url: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.31.38 PM (1).jpeg',
        alt: 'Alisado Láser - Resultado 2',
        thumbnail: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.31.38 PM (1).jpeg'
      },
      {
        url: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.31.39 PM.jpeg',
        alt: 'Alisado Láser - Resultado 3',
        thumbnail: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.31.39 PM.jpeg'
      },
      {
        url: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.31.39 PM (1).jpeg',
        alt: 'Alisado Láser - Resultado 4',
        thumbnail: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.31.39 PM (1).jpeg'
      },
      {
        url: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.31.39 PM (4).jpeg',
        alt: 'Alisado Láser - Resultado 5',
        thumbnail: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.31.39 PM (4).jpeg'
      },
      {
        url: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.31.39 PM (5).jpeg',
        alt: 'Alisado Láser - Resultado 6',
        thumbnail: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.31.39 PM (5).jpeg'
      },
      {
        url: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.31.39 PM (6).jpeg',
        alt: 'Alisado Láser - Resultado 7',
        thumbnail: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.31.39 PM (6).jpeg'
      },
      {
        url: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.32.17 PM.jpeg',
        alt: 'Alisado Láser - Resultado 8',
        thumbnail: '/images/gallery/Alisado laser/WhatsApp Image 2025-01-03 at 10.32.17 PM.jpeg'
      }
    ]
  },
  alisadoOrganico: {
    id: 'alisado-organico',
    title: 'Alisado Orgánico',
    description: 'Resultados naturales y saludables',
    coverImage: '/images/gallery/Alisado Organico/WhatsApp Image 2025-01-03 at 10.42.34 PM.jpeg',
    images: [
      {
        url: '/images/gallery/Alisado Organico/WhatsApp Image 2025-01-03 at 10.42.34 PM.jpeg',
        alt: 'Alisado Orgánico - Resultado 1',
        thumbnail: '/images/gallery/Alisado Organico/WhatsApp Image 2025-01-03 at 10.42.34 PM.jpeg'
      },
      {
        url: '/images/gallery/Alisado Organico/WhatsApp Image 2025-01-03 at 10.42.34 PM (1).jpeg',
        alt: 'Alisado Orgánico - Resultado 2',
        thumbnail: '/images/gallery/Alisado Organico/WhatsApp Image 2025-01-03 at 10.42.34 PM (1).jpeg'
      },
      {
        url: '/images/gallery/Alisado Organico/WhatsApp Image 2025-01-03 at 10.42.35 PM.jpeg',
        alt: 'Alisado Orgánico - Resultado 3',
        thumbnail: '/images/gallery/Alisado Organico/WhatsApp Image 2025-01-03 at 10.42.35 PM.jpeg'
      },
      {
        url: '/images/gallery/Alisado Organico/WhatsApp Image 2025-01-03 at 10.42.35 PM (1).jpeg',
        alt: 'Alisado Orgánico - Resultado 4',
        thumbnail: '/images/gallery/Alisado Organico/WhatsApp Image 2025-01-03 at 10.42.35 PM (1).jpeg'
      },
      {
        url: '/images/gallery/Alisado Organico/WhatsApp Image 2025-01-03 at 10.42.35 PM (2).jpeg',
        alt: 'Alisado Orgánico - Resultado 5',
        thumbnail: '/images/gallery/Alisado Organico/WhatsApp Image 2025-01-03 at 10.42.35 PM (2).jpeg'
      }
    ]
  },
  botox: {
    id: 'botox',
    title: 'Botox Capilar',
    description: 'Rejuvenece y revitaliza tu cabello',
    coverImage: '/images/gallery/Botox/d39c75f6-8042-4f68-a5ac-1ed9b1f32aec.jpg',
    images: [
      {
        url: '/images/gallery/Botox/d39c75f6-8042-4f68-a5ac-1ed9b1f32aec.jpg',
        alt: 'Botox Capilar - Resultado 1',
        thumbnail: '/images/gallery/Botox/d39c75f6-8042-4f68-a5ac-1ed9b1f32aec.jpg'
      },
      {
        url: '/images/gallery/Botox/243fd7bd-956a-4844-9004-0a71288f1fd9.jpg',
        alt: 'Botox Capilar - Resultado 2',
        thumbnail: '/images/gallery/Botox/243fd7bd-956a-4844-9004-0a71288f1fd9.jpg'
      },
      {
        url: '/images/gallery/Botox/5f68f613-d15e-4ff4-9e08-6fcac747a20a.jpg',
        alt: 'Botox Capilar - Resultado 3',
        thumbnail: '/images/gallery/Botox/5f68f613-d15e-4ff4-9e08-6fcac747a20a.jpg'
      },
      {
        url: '/images/gallery/Botox/0afc5079-9063-4e79-be31-176c5c632d3b.jpg',
        alt: 'Botox Capilar - Resultado 4',
        thumbnail: '/images/gallery/Botox/0afc5079-9063-4e79-be31-176c5c632d3b.jpg'
      }
    ]
  },
  corte: {
    id: 'corte',
    title: 'Cortes',
    description: 'Estilo y personalidad en cada corte',
    coverImage: '/images/services/corte.png',
    images: [
      {
        url: '/images/gallery/corte/after.png',
        alt: 'Corte Resultado 1',
        thumbnail: '/images/gallery/corte/after-thumb.png'
      },
      {
        url: '/images/gallery/corte/before.png',
        alt: 'Corte Resultado 2',
        thumbnail: '/images/gallery/corte/before-thumb.png'
      }
    ]
  },
  maquillaje: {
    id: 'maquillaje',
    title: 'Maquillaje',
    description: 'Arte que realza tu belleza natural',
    coverImage: '/images/services/maquillaje.png',
    images: [
      {
        url: '/images/gallery/maquillaje/after.png',
        alt: 'Maquillaje Resultado 1',
        thumbnail: '/images/gallery/maquillaje/after-thumb.png'
      },
      {
        url: '/images/gallery/maquillaje/before.png',
        alt: 'Maquillaje Resultado 2',
        thumbnail: '/images/gallery/maquillaje/before-thumb.png'
      }
    ]
  },
  cejas: {
    id: 'cejas',
    title: 'Diseño de Cejas',
    description: 'Precisión y arte para tu mirada',
    coverImage: '/images/services/cejas.png',
    images: [
      {
        url: '/images/gallery/cejas/after.png',
        alt: 'Diseño de Cejas Resultado 1',
        thumbnail: '/images/gallery/cejas/after-thumb.png'
      },
      {
        url: '/images/gallery/cejas/before.png',
        alt: 'Diseño de Cejas Resultado 2',
        thumbnail: '/images/gallery/cejas/before-thumb.png'
      }
    ]
  }
};