import React from 'react';

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Política de Privacidad
          </h1>

          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Introducción
              </h2>
              <p className="mb-4">
                En Adara Bliss Salon, valoramos y respetamos su privacidad. Esta Política de Privacidad 
                explica cómo recopilamos, utilizamos, divulgamos y protegemos su información personal 
                cuando utiliza nuestro sitio web y nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Información que Recopilamos
              </h2>
              <p className="mb-4">
                Recopilamos información que usted nos proporciona directamente, incluyendo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre completo</li>
                <li>Información de contacto (teléfono, correo electrónico)</li>
                <li>Historial de servicios</li>
                <li>Preferencias de tratamiento</li>
                <li>Fotografías de antes y después (con su consentimiento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Uso de la Información
              </h2>
              <p className="mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Comunicarnos con usted sobre citas y promociones</li>
                <li>Personalizar su experiencia</li>
                <li>Mantener registros de tratamientos</li>
                <li>Cumplir con requisitos legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Protección de la Información
              </h2>
              <p className="mb-4">
                Implementamos medidas de seguridad diseñadas para proteger su información personal 
                contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, 
                ningún método de transmisión por Internet es 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Compartir Información
              </h2>
              <p className="mb-4">
                No vendemos ni compartimos su información personal con terceros, excepto cuando:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Usted nos da su consentimiento explícito</li>
                <li>Es necesario para proporcionar nuestros servicios</li>
                <li>Lo requiere la ley</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Sus Derechos
              </h2>
              <p className="mb-4">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acceder a su información personal</li>
                <li>Corregir información inexacta</li>
                <li>Solicitar la eliminación de su información</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contacto
              </h2>
              <p className="mb-4">
                Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos a través de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Correo electrónico: adarabliss@gmail.com</li>
                <li>Teléfono: +52 449 217 5606</li>
                <li>Dirección: Petróleos mexicanos #334, Colonia Industrial, Aguascalientes, Aguascalientes</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
