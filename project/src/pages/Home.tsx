import React, { useEffect } from 'react';
import { Sparkles, Scissors, Heart, Phone, Instagram, Facebook, MapPin } from 'lucide-react';
import { treatments } from '../data/treatments';
import { testimonials } from '../data/testimonials';
import { Link } from 'react-router-dom';
import { WaveDivider } from '../components/WaveDivider';
import { SparkleGroup } from '../components/SparkleGroup';
import { ContactForm } from '../components/ContactForm';
import ParallaxHeader from '../components/ParallaxHeader';

export const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <ParallaxHeader />
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white section-container">
        <WaveDivider position="top" />
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-center mb-16 text-[#F25AA3] fade-in">Tipos de Alaciado</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-lg shadow-lg fade-in group transition-all duration-300 transform hover:-translate-y-2 hover:bg-[#F25AA3]" 
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <treatment.icon className="w-12 h-12 mx-auto mb-4 text-[#F25AA3] group-hover:text-white transition-colors duration-300" />
                <h3 className="text-2xl mb-4 group-hover:text-white transition-colors duration-300">{treatment.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">{treatment.description}</p>
                <Link 
                  to={treatment.path}
                  className="inline-block mt-6 px-6 py-2 bg-[#F25AA3] text-white rounded-full group-hover:bg-black group-hover:scale-105 transition-all duration-300"
                >
                  Más información
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50 section-container">
        <WaveDivider position="top" color="#f9fafb" />
        <h2 className="text-5xl text-center mb-16 text-[#F25AA3] fade-in">Galería</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 max-w-6xl mx-auto">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg fade-in" style={{transitionDelay: `${i * 100}ms`}}>
              <img 
                src={`https://images.unsplash.com/photo-${[
                  '1519699047748-de8e457a634e',
                  '1492106087820-71f1a00d2b11',
                  '1523263685509-57c81f9b1283',
                  '1500840716872-4b7ebc1fff6a',
                  '1502823403499-6ccfcf4fb453',
                  '1526047932273-341f2a7631f9',
                  '1522336284037-91f7da42042f',
                  '1519699047748-de8e457a634e'
                ][i]}?auto=format&fit=crop&q=80&w=400&h=400`}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white section-container">
        <WaveDivider position="top" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl text-center mb-16 text-[#F25AA3] fade-in">Testimonios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg fade-in" style={{transitionDelay: `${index * 200}ms`}}>
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                  <h3 className="text-xl">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative">
        <WaveDivider position="top" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-center mb-12 text-[#F25AA3] font-glitten">
              Contáctanos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-[#F25AA3]" />
                  <a href="tel:+524492175606" className="text-gray-600 hover:text-[#F25AA3]">
                    +52 449 217 5606
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-[#F25AA3]" />
                  <span className="text-gray-600">
                    Aguascalientes, Ags. México
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/adarablisssalon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#F25AA3] hover:text-[#d14589] transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a 
                    href="https://www.instagram.com/adarablisssalon/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#F25AA3] hover:text-[#d14589] transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Beauty Hair Salon. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};