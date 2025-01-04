import React from 'react';

const DerechosReservados = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Aviso de Derechos Reservados
        </h1>
        
        <div className="prose prose-pink max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Derechos de Propiedad Intelectual
            </h2>
            <p className="text-gray-600 mb-4">
              © {new Date().getFullYear()} Adara Bliss Salon. Todos los derechos reservados.
            </p>
            <p className="text-gray-600 mb-4">
              Todo el contenido presente en este sitio web, incluyendo pero no limitado a textos, gráficos, 
              logotipos, iconos, imágenes, clips de audio, descargas digitales y recopilaciones de datos, 
              es propiedad exclusiva de Adara Bliss Salon o de sus proveedores de contenido y está protegido 
              por las leyes nacionales e internacionales de derechos de autor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Uso del Contenido
            </h2>
            <p className="text-gray-600 mb-4">
              Queda estrictamente prohibida la reproducción total o parcial de este contenido, 
              su traducción, inclusión, transmisión, almacenamiento o acceso a través de medios 
              analógicos, digitales o de cualquier otro sistema o tecnología creada o por crearse, 
              sin autorización previa y por escrito de Adara Bliss Salon.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Marcas Registradas
            </h2>
            <p className="text-gray-600 mb-4">
              El nombre "Adara Bliss Salon", nuestro logotipo, y todos los nombres relacionados, 
              logotipos, nombres de productos y servicios, diseños y eslóganes son marcas comerciales 
              de Adara Bliss Salon o sus afiliados o licenciantes. No puede usar tales marcas sin el 
              permiso previo por escrito de Adara Bliss Salon.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contenido de Usuarios
            </h2>
            <p className="text-gray-600 mb-4">
              Al compartir cualquier contribución (incluyendo cualquier texto, fotografías, gráficos, 
              video o audio) con Adara Bliss Salon, usted otorga a Adara Bliss Salon el derecho de 
              usar dicha contribución de acuerdo con nuestra política de privacidad.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Acciones Legales
            </h2>
            <p className="text-gray-600 mb-4">
              Adara Bliss Salon se reserva el derecho de ejercer las acciones legales que correspondan 
              contra cualquier violación a los derechos de propiedad intelectual, incluyendo el derecho 
              de autor y marcas registradas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contacto
            </h2>
            <p className="text-gray-600 mb-4">
              Para cualquier consulta relacionada con los derechos de propiedad intelectual o el uso 
              del contenido de nuestro sitio web, por favor contáctenos a través de nuestros canales 
              oficiales de comunicación.
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

export default DerechosReservados;
