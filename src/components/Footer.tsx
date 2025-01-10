import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ubicación */}
          <div className="space-y-4">
            <h3 className="text-2xl font-glitten flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Ubicación
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>Aguascalientes, Aguascalientes</p>
              <p>Petróleos mexicanos #334</p>
              <p>Colonia Industrial</p>
            </div>
          </div>

          {/* Horario */}
          <div className="space-y-4">
            <h3 className="text-2xl font-glitten flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Horario
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>Lunes a Viernes: 11:00 am - 7:00 pm</p>
              <p>Sábado: 11:00 am - 6:00 pm</p>
              <p>Domingo: 9:00 am - 2:00 pm</p>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-2xl font-glitten flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contacto
            </h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +52 449 217 5606
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                WhatsApp: +52 449 217 5606
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                adarabliss@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Enlaces legales */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-400">
            <Link to="/aviso-legal" className="hover:text-white transition-colors">
              Aviso legal
            </Link>
            <Link to="/derechos" className="hover:text-white transition-colors">
              Derechos reservados
            </Link>
            <Link to="/privacidad" className="hover:text-white transition-colors">
              Política de privacidad
            </Link>
            <Link to="/terminos" className="hover:text-white transition-colors">
              Términos y condiciones
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Política de cookies
            </Link>
            <Link to="/faq" className="hover:text-white transition-colors">
              Preguntas frecuentes
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p> 2025 Adara Bliss. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
