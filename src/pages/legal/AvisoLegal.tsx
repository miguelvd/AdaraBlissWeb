import React from 'react';

const AvisoLegal = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Aviso Legal
        </h1>

        <div className="prose prose-pink max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Información General
            </h2>
            <p className="text-gray-600 mb-4">
              Adara Bliss Salon, con domicilio en Petróleos mexicanos #334, Colonia Industrial, 
              Aguascalientes, Aguascalientes, es responsable de la operación de este sitio web y 
              la prestación de servicios de belleza y estética.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Objeto y Ámbito de Aplicación
            </h2>
            <p className="text-gray-600 mb-4">
              El presente Aviso Legal regula el uso del sitio web de Adara Bliss Salon y los 
              servicios que en él se ofrecen. La utilización del sitio web implica la aceptación 
              plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Servicios Ofrecidos
            </h2>
            <p className="text-gray-600 mb-4">
              Adara Bliss Salon ofrece servicios profesionales de belleza y estética, incluyendo:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Alisado Láser</li>
              <li>Keratina Japonesa</li>
              <li>Alisado Orgánico</li>
              <li>Botox Capilar</li>
              <li>Corte de Cabello</li>
              <li>Maquillaje Profesional</li>
              <li>Diseño de Cejas</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Todos nuestros servicios son realizados por profesionales capacitados y certificados 
              en sus respectivas áreas de especialización.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Responsabilidad y Obligaciones
            </h2>
            <p className="text-gray-600 mb-4">
              Adara Bliss Salon se compromete a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Proporcionar servicios de alta calidad</li>
              <li>Mantener estándares de higiene y seguridad</li>
              <li>Utilizar productos de calidad profesional</li>
              <li>Respetar las citas programadas</li>
              <li>Proteger la información personal de los clientes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Limitación de Responsabilidad
            </h2>
            <p className="text-gray-600 mb-4">
              Adara Bliss Salon no se hace responsable de:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Reacciones alérgicas no reportadas previamente</li>
              <li>Resultados no satisfactorios debido a información incorrecta proporcionada por el cliente</li>
              <li>Daños causados por el incumplimiento de las instrucciones de cuidado post-tratamiento</li>
              <li>Interrupciones o errores en el funcionamiento del sitio web</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Legislación Aplicable
            </h2>
            <p className="text-gray-600 mb-4">
              Este Aviso Legal se rige por la legislación mexicana. Cualquier controversia que 
              pudiera derivarse del acceso o uso de este sitio web o nuestros servicios será 
              sometida a la jurisdicción de los tribunales de Aguascalientes, Aguascalientes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Modificaciones
            </h2>
            <p className="text-gray-600 mb-4">
              Adara Bliss Salon se reserva el derecho de modificar en cualquier momento y sin 
              previo aviso el presente Aviso Legal, así como la configuración y los servicios 
              del sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contacto
            </h2>
            <p className="text-gray-600 mb-4">
              Para cualquier consulta relacionada con este Aviso Legal o nuestros servicios, 
              puede contactarnos a través de:
            </p>
            <ul className="list-none text-gray-600 mb-4">
              <li>Teléfono: +52 449 217 5606</li>
              <li>WhatsApp: +52 449 217 5606</li>
              <li>Email: soluciones@adarabliss.com</li>
              <li>Dirección: Petróleos mexicanos #334, Colonia Industrial, Aguascalientes, Ags.</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          Última actualización: {new Date().toLocaleDateString('es-MX')}
        </div>
      </div>
    </div>
  );
};

export default AvisoLegal;
