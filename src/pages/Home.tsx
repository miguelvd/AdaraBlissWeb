import React from 'react';
import { ParallaxHeader } from '../components/ParallaxHeader';
import { TestimonialSection } from '../components/TestimonialSection';
import { ContactForm } from '../components/ContactForm';
import ServiceHero from '../components/ServiceHero';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ className = '', children, id }) => (
  <section className={`py-5 sm:py-10 md:py-14 mac:py-1 ${className}`} id={id}>
    {children}
  </section>
);

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900">
      {/* Header */}
      <ParallaxHeader />

      {/* Nuestros Servicios */}
      <Section className="bg-white mb-0 pb-0 md:mb-0 md:pb-0 mac:mb-[-1px] mac:pb-0 lg:mb-[-1px] lg:pb-0 relative">
        <ServiceHero />
      </Section>

      {/* Testimonios */}
      <Section id="testimonios" className="bg-gradient-to-b from-neutral-900 to-neutral-950 mt-[-15vh] xs:mt-0 md:mt-0 mac:mt-0 lg:mt-0 pt-0 relative z-10">
        <TestimonialSection />
      </Section>

      {/* Contacto */}
      <Section id="contacto" className="bg-gradient-to-b from-neutral-950 to-neutral-900 mac:py-14">
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