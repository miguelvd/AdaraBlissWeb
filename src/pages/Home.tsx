import React from 'react';
import { ParallaxHeader } from '../components/ParallaxHeader';
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialSection } from '../components/TestimonialSection';
import { ContactForm } from '../components/ContactForm';
import ServiceHero from '../components/ServiceHero';

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

      {/* Nuestros Servicios */}
      <Section className="bg-white pb-0">
        <ServiceHero />
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
    </main>
  );
};