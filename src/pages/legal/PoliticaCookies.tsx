import React from 'react';

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Política de Cookies
        </h1>

        <div className="prose prose-pink max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ¿Qué son las cookies?
            </h2>
            <p className="text-gray-600 mb-4">
              Las cookies son pequeños archivos de texto que los sitios web colocan en su dispositivo 
              mientras navega. Se utilizan ampliamente para hacer que los sitios web funcionen de 
              manera más eficiente, así como para proporcionar información a los propietarios del sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Tipos de cookies que utilizamos
            </h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">
              1. Cookies Esenciales
            </h3>
            <p className="text-gray-600 mb-4">
              Son necesarias para el funcionamiento básico del sitio web. Le permiten navegar por 
              nuestro sitio y usar funciones esenciales como áreas seguras y el sistema de reservas 
              en línea.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mb-3">
              2. Cookies Analíticas
            </h3>
            <p className="text-gray-600 mb-4">
              Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web. Utilizamos 
              esta información para mejorar la funcionalidad y el contenido de nuestro sitio.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mb-3">
              3. Cookies de Funcionalidad
            </h3>
            <p className="text-gray-600 mb-4">
              Permiten que el sitio web recuerde las elecciones que hace (como su nombre de usuario, 
              idioma o la región en la que se encuentra) y proporcione funciones mejoradas y más 
              personales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ¿Cómo utilizamos las cookies?
            </h2>
            <p className="text-gray-600 mb-4">
              Utilizamos cookies para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Recordar sus preferencias de navegación</li>
              <li>Mejorar la velocidad y seguridad del sitio</li>
              <li>Proporcionar una experiencia de navegación personalizada</li>
              <li>Analizar cómo se utiliza nuestro sitio web</li>
              <li>Mejorar nuestros servicios a través de la información recopilada</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Control de cookies
            </h2>
            <p className="text-gray-600 mb-4">
              Puede controlar y/o eliminar las cookies según lo desee. Puede eliminar todas las 
              cookies que ya están en su dispositivo y puede configurar la mayoría de los navegadores 
              para evitar que se coloquen. Sin embargo, si lo hace, es posible que deba ajustar 
              manualmente algunas preferencias cada vez que visite un sitio y que algunos servicios 
              y funcionalidades no funcionen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cómo gestionar las cookies en su navegador
            </h2>
            <p className="text-gray-600 mb-4">
              La mayoría de los navegadores web permiten cierto control de la mayoría de las cookies 
              a través de la configuración del navegador. Para obtener más información sobre las cookies, 
              incluido cómo ver qué cookies se han establecido y cómo administrarlas y eliminarlas, 
              visite www.allaboutcookies.org.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cookies de terceros
            </h2>
            <p className="text-gray-600 mb-4">
              En algunos casos especiales, también utilizamos cookies proporcionadas por terceros de 
              confianza. Por ejemplo:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Google Analytics para ayudarnos a comprender cómo usa nuestro sitio</li>
              <li>Redes sociales para permitir la integración con sus servicios</li>
              <li>Servicios de publicidad para mostrar anuncios relevantes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Actualizaciones de la política
            </h2>
            <p className="text-gray-600 mb-4">
              Podemos actualizar esta política de cookies ocasionalmente. Le recomendamos que revise 
              esta página periódicamente para mantenerse informado sobre cualquier cambio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contacto
            </h2>
            <p className="text-gray-600 mb-4">
              Si tiene alguna pregunta sobre nuestra política de cookies, no dude en contactarnos 
              a través de nuestros canales oficiales de comunicación.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          Última actualización: {new Date().toLocaleDateString('es-MX')}
        </div>
      </div>
    </div>
  );
};

export default PoliticaCookies;
