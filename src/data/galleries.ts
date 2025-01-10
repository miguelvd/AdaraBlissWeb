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
    description: 'Cortes personalizados que realzan tu belleza natural',
    coverImage: '/images/gallery/Corte/WhatsApp Image 2025-01-03 at 11.04.59 PM.jpeg',
    images: [
      {
        url: '/images/gallery/Corte/WhatsApp Image 2025-01-03 at 11.04.59 PM.jpeg',
        alt: 'Corte - Resultado 1',
        thumbnail: '/images/gallery/Corte/WhatsApp Image 2025-01-03 at 11.04.59 PM.jpeg'
      },
      {
        url: '/images/gallery/Corte/WhatsApp Image 2025-01-03 at 11.04.59 PM (1).jpeg',
        alt: 'Corte - Resultado 2',
        thumbnail: '/images/gallery/Corte/WhatsApp Image 2025-01-03 at 11.04.59 PM (1).jpeg'
      },
      {
        url: '/images/gallery/Corte/WhatsApp Image 2025-01-03 at 11.06.11 PM.jpeg',
        alt: 'Corte - Resultado 3',
        thumbnail: '/images/gallery/Corte/WhatsApp Image 2025-01-03 at 11.06.11 PM.jpeg'
      }
    ]
  },
  maquillaje: {
    id: 'maquillaje',
    title: 'Maquillaje',
    description: 'Looks perfectos para cada ocasión',
    coverImage: '/images/gallery/Maquillaje/05db9587-2273-4975-9ac9-012f57206ab1.jpg',
    images: [
      {
        url: '/images/gallery/Maquillaje/05db9587-2273-4975-9ac9-012f57206ab1.jpg',
        alt: 'Maquillaje - Resultado 1',
        thumbnail: '/images/gallery/Maquillaje/05db9587-2273-4975-9ac9-012f57206ab1.jpg'
      },
      {
        url: '/images/gallery/Maquillaje/0a47ba9f-78f5-46ea-b971-032a7958d04c.jpg',
        alt: 'Maquillaje - Resultado 2',
        thumbnail: '/images/gallery/Maquillaje/0a47ba9f-78f5-46ea-b971-032a7958d04c.jpg'
      },
      {
        url: '/images/gallery/Maquillaje/2485fe58-82c4-444b-938e-ffad29324273.jpg',
        alt: 'Maquillaje - Resultado 3',
        thumbnail: '/images/gallery/Maquillaje/2485fe58-82c4-444b-938e-ffad29324273.jpg'
      },
      {
        url: '/images/gallery/Maquillaje/62e4d31a-eb7f-467f-b977-b15bc3746154.jpg',
        alt: 'Maquillaje - Resultado 4',
        thumbnail: '/images/gallery/Maquillaje/62e4d31a-eb7f-467f-b977-b15bc3746154.jpg'
      },
      {
        url: '/images/gallery/Maquillaje/7718b1ed-4c94-4922-b2bc-e680b2bc1fe6.jpg',
        alt: 'Maquillaje - Resultado 5',
        thumbnail: '/images/gallery/Maquillaje/7718b1ed-4c94-4922-b2bc-e680b2bc1fe6.jpg'
      },
      {
        url: '/images/gallery/Maquillaje/7c5c8884-e820-48bd-a580-1979434df75f.jpg',
        alt: 'Maquillaje - Resultado 6',
        thumbnail: '/images/gallery/Maquillaje/7c5c8884-e820-48bd-a580-1979434df75f.jpg'
      },
      {
        url: '/images/gallery/Maquillaje/97a719a5-2d90-4f93-a720-fccc6d1a2b7d.jpg',
        alt: 'Maquillaje - Resultado 7',
        thumbnail: '/images/gallery/Maquillaje/97a719a5-2d90-4f93-a720-fccc6d1a2b7d.jpg'
      },
      {
        url: '/images/gallery/Maquillaje/a0da67d5-8be7-45e9-a178-e9e0320d3d09.jpg',
        alt: 'Maquillaje - Resultado 8',
        thumbnail: '/images/gallery/Maquillaje/a0da67d5-8be7-45e9-a178-e9e0320d3d09.jpg'
      }
    ]
  },
  cejas: {
    id: 'cejas',
    title: 'Cejas',
    description: 'Diseño y perfilado de cejas',
    coverImage: '/images/gallery/Cejas/1.jpg',
    images: [
      {
        url: '/images/gallery/Cejas/1.jpg',
        alt: 'Cejas - Resultado 1',
        thumbnail: '/images/gallery/Cejas/1.jpg'
      },
      {
        url: '/images/gallery/Cejas/2.jpg',
        alt: 'Cejas - Resultado 2',
        thumbnail: '/images/gallery/Cejas/2.jpg'
      },
      {
        url: '/images/gallery/Cejas/3.jpg',
        alt: 'Cejas - Resultado 3',
        thumbnail: '/images/gallery/Cejas/3.jpg'
      },
      {
        url: '/images/gallery/Cejas/4.jpg',
        alt: 'Cejas - Resultado 4',
        thumbnail: '/images/gallery/Cejas/4.jpg'
      }
    ]
  }
};