import { FC } from 'react';
import SEO from '../../components/SEO';

const PoliticaPrivacidad: FC = () => {
  return (
    <>
      <SEO
        title="Política de Privacidad"
        description="Conoce nuestra política de privacidad y cómo protegemos tus datos personales en Adara Bliss Salon & Spa."
        keywords={[
          'política privacidad',
          'protección datos',
          'privacidad salon belleza',
          'datos personales spa',
          'seguridad información'
        ]}
      />
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Política de Privacidad
          </h1>

          <div className="prose prose-pink max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Introducción
              </h2>
              <p className="text-gray-600 mb-4">
                En Adara Bliss Salon, valoramos y respetamos su privacidad. Esta Política de Privacidad 
                explica cómo recopilamos, utilizamos, divulgamos y protegemos su información personal 
                cuando utiliza nuestro sitio web y nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Información que Recopilamos
              </h2>
              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Información Personal
              </h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Nombre y apellidos</li>
                <li>Información de contacto (correo electrónico, número de teléfono)</li>
                <li>Dirección postal</li>
                <li>Historial de servicios y preferencias</li>
                <li>Fotografías de los resultados de los servicios (con su consentimiento)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Información Automática
              </h3>
              <p className="text-gray-600 mb-4">
                Cuando visita nuestro sitio web, podemos recopilar automáticamente cierta información, 
                incluyendo:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Dirección IP</li>
                <li>Tipo de navegador</li>
                <li>Páginas visitadas</li>
                <li>Tiempo de permanencia en el sitio</li>
                <li>Referencias y enlaces de salida</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Uso de la Información
              </h2>
              <p className="text-gray-600 mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                <li>Procesar y gestionar sus citas</li>
                <li>Enviar confirmaciones y recordatorios de citas</li>
                <li>Comunicar promociones y ofertas especiales (con su consentimiento)</li>
                <li>Responder a sus preguntas y comentarios</li>
                <li>Analizar y mejorar la eficacia de nuestro sitio web</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Protección de la Información
              </h2>
              <p className="text-gray-600 mb-4">
                Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas para:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Proteger la información personal contra pérdida, robo y uso indebido</li>
                <li>Salvaguardar la confidencialidad de su información personal</li>
                <li>Prevenir el acceso no autorizado a sus datos</li>
                <li>Garantizar el uso apropiado de la información</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Compartir Información
              </h2>
              <p className="text-gray-600 mb-4">
                No vendemos ni alquilamos su información personal a terceros. Podemos compartir su 
                información en las siguientes circunstancias:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Con su consentimiento explícito</li>
                <li>Para cumplir con obligaciones legales</li>
                <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                <li>En caso de fusión, venta o transferencia de activos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Sus Derechos
              </h2>
              <p className="text-gray-600 mb-4">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Acceder a su información personal</li>
                <li>Corregir datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Cambios en la Política de Privacidad
              </h2>
              <p className="text-gray-600 mb-4">
                Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. 
                Le notificaremos sobre cualquier cambio material publicando la nueva política de 
                privacidad en esta página.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contacto
              </h2>
              <p className="text-gray-600 mb-4">
                Si tiene preguntas sobre esta Política de Privacidad, por favor contáctenos a través 
                de nuestros canales oficiales de comunicación.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center text-gray-500 text-sm">
            Última actualización: {new Date().toLocaleDateString('es-MX')}
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliticaPrivacidad;
