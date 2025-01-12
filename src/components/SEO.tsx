import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = '/images/og-image.jpg',
  url = 'https://adarabliss.com',
  type = 'website',
  keywords = []
}) => {
  const defaultKeywords = [
    'salón de belleza',
    'spa',
    'tratamientos faciales',
    'masajes',
    'belleza',
    'bienestar',
    'Puebla',
    'estética',
    'cuidado personal'
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(', ');
  const fullTitle = `${title} | Adara Bliss Salon & Spa`;

  return (
    <Helmet>
      {/* Básico */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Adara Bliss Salon & Spa" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Otros */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          "name": "Adara Bliss Salon & Spa",
          "image": image,
          "description": description,
          "@id": url,
          "url": url,
          "telephone": "+522223915914",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Calle 2 Sur 3702",
            "addressLocality": "Puebla",
            "addressRegion": "Puebla",
            "postalCode": "72530",
            "addressCountry": "MX"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 19.0412894,
            "longitude": -98.2061992
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "20:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/adarablisssalon",
            "https://www.instagram.com/adarablisssalon"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
