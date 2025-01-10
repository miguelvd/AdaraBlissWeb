import React from 'react';

const DerechosReservados = () => {
  return (
    <div className="flex-1 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Aviso de Derechos Reservados
        </h1>
        
        <div className="prose prose-pink max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Derechos de Propiedad Intelectual
            </h2>
            <p className="text-gray-600 mb-4">
              {new Date().getFullYear()} Adara Bliss Salon. Todos los derechos reservados.
            </p>
            <p className="text-gray-600 mb-4">
              Todo el contenido presente en este sitio web, incluyendo pero no limitado a textos, gráficos, 
              logotipos, iconos, imágenes, clips de audio, descargas digitales y recopilaciones de datos, 
              es propiedad de Adara Bliss Salon o de sus proveedores de contenido y está protegido por las 
              leyes mexicanas e internacionales de derechos de autor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Uso del Contenido
            </h2>
            <p className="text-gray-600 mb-4">
              Queda estrictamente prohibida la reproducción total o parcial de los contenidos de este sitio 
              web sin el consentimiento expreso y por escrito de Adara Bliss Salon.
            </p>
            <p className="text-gray-600 mb-4">
              El uso no autorizado de este sitio web o de los materiales contenidos en el mismo puede violar 
              las leyes de derechos de autor, marcas registradas, privacidad y publicidad y/o otras leyes y 
              regulaciones.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Marcas Registradas
            </h2>
            <p className="text-gray-600 mb-4">
              Adara Bliss y el logotipo de Adara Bliss son marcas registradas propiedad de Adara Bliss Salon. 
              Otras marcas comerciales, nombres comerciales, logotipos y diseños que aparecen en este sitio 
              web pueden ser marcas registradas o no registradas de sus respectivos propietarios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contenido de Usuarios
            </h2>
            <p className="text-gray-600 mb-4">
              Al enviar, publicar o mostrar contenido en o a través de nuestro sitio web (incluyendo pero no 
              limitado a reseñas, comentarios y fotografías), usted otorga a Adara Bliss Salon una licencia 
              mundial, no exclusiva, libre de regalías para usar, reproducir, adaptar y publicar dicho contenido.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contacto
            </h2>
            <p className="text-gray-600 mb-4">
              Si tiene alguna pregunta sobre estos derechos reservados o cree que algún contenido viola sus 
              derechos de propiedad intelectual, por favor contáctenos a través de:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Correo electrónico: adarabliss@gmail.com</li>
              <li>Teléfono: +52 449 217 5606</li>
              <li>Dirección: Petróleos mexicanos #334, Colonia Industrial, Aguascalientes, Aguascalientes</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DerechosReservados;
