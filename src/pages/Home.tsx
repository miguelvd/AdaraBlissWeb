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

      {/* Servicios */}
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
              <p>Ciudad de México</p>
              <p>Calle Principal #123</p>
              <p>Colonia Centro</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Horario</h3>
              <p>Lunes a Viernes: 9:00 - 19:00</p>
              <p>Sábado: 9:00 - 17:00</p>
              <p>Domingo: Cerrado</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <p>Tel: (55) 1234-5678</p>
              <p>WhatsApp: +52 55 1234 5678</p>
              <p>Email: info@adarabliss.com</p>
            </div>
          </div>
          <div className="mt-8 text-center text-neutral-400">
            <p> 2023 Adara Bliss. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};