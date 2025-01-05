import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

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
                soluciones@adarabliss.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-400">
          <p>2025 Adara Bliss. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
