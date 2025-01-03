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

      {/* Testimonios */}
      <Section className="bg-gradient-to-b from-neutral-900 to-neutral-950">
        <TestimonialSection />
      </Section>

      {/* Servicios */}
      <Section className="bg-white pt-24 md:pt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-glitten text-center mb-12 text-pink-500">
            Tipos de Alaciado
          </h2>
          <ServicesSection />
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