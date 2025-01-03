import React from 'react';
import { ParallaxHeader } from '../components/ParallaxHeader';
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialSection } from '../components/TestimonialSection';
import { ContactForm } from '../components/ContactForm';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ className = '', children }) => (
  <section className={`py-16 ${className}`}>
    {children}
  </section>
);

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900">
      {/* Header */}
      <ParallaxHeader />

      {/* Tipos de Alaciado */}
      <Section className="bg-white pt-24 md:pt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-glitten text-center mb-12 text-pink-500">
            Tipos de Alaciado
          </h2>
          <ServicesSection />
        </div>
      </Section>

      {/* Testimonios */}
      <Section className="bg-gradient-to-b from-neutral-900 to-neutral-950">
        <TestimonialSection />
      </Section>

      {/* Nuestros Servicios */}
      <Section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-glitten text-center mb-12 text-pink-500">
            Nuestros Servicios
          </h2>
          <div className="flex justify-center">
            <div className="bg-black/90 backdrop-blur-sm rounded-full p-6 flex gap-8 md:gap-12">
              <div className="flex flex-col items-center gap-2">
                <img src="/icons/alisado.png" alt="Alisado" className="w-8 h-8" />
                <span className="text-white text-sm">Alisado</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src="/icons/botox.png" alt="Botox" className="w-8 h-8" />
                <span className="text-white text-sm">Botox</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src="/icons/corte.png" alt="Corte" className="w-8 h-8" />
                <span className="text-white text-sm">Corte</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src="/icons/maquillaje.png" alt="Maquillaje" className="w-8 h-8" />
                <span className="text-white text-sm">Maquillaje</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src="/icons/cejas.png" alt="Cejas" className="w-8 h-8" />
                <span className="text-white text-sm">Cejas</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contacto */}
      <Section className="bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-glitten text-center mb-12 text-white">
            Contáctanos
          </h2>
          <ContactForm />
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Ubicación</h3>
              <p>Aguascalientes, Aguascalientes</p>
              <p>Petróleos mexicanos #334</p>
              <p>Colonia Industrial</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Horario</h3>
              <p>Lunes a Viernes: 11:00 am - 7:00 pm</p>
              <p>Sábado: 11:00 am - 6:00 pm</p>
              <p>Domingo: 9:00 am - 2:00 pm</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <p>Cel: +52 449 217 5606</p>
              <p>WhatsApp: +52 449 217 5606</p>
              <p>Email: soluciones@adarabliss.com
              </p>
            </div>
          </div>
          <div className="mt-8 text-center text-neutral-400">
            <p> 2025 Adara Bliss. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};