import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Sparkles, ArrowDownWideNarrow, Wand2, Clock } from 'lucide-react';
import { useRef } from 'react';
import { WhatsAppButton } from '../../components/WhatsAppButton';
import { trackScheduleAppointment } from '../../utils/facebookPixel';

export const AlisadoOrganico = () => {
  const beneficiosRef = useRef<HTMLDivElement>(null);

  const scrollToBeneficios = () => {
    beneficiosRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105"
            style={{
              backgroundImage: "url('/images/services/Alisado Organico.png')",
              animation: "subtle-zoom 20s infinite alternate"
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Alisado Orgánico
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 max-w-2xl"
          >
            Descubre la belleza natural con nuestro tratamiento orgánico para un cabello suave y saludable
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToBeneficios}
            className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
          >
            Descubre Más
          </motion.button>
        </div>
      </div>

      {/* Beneficios y Resultados */}
      <section ref={beneficiosRef} id="beneficios" className="py-24 px-4 bg-gradient-to-b from-white to-green-50 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
            <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 relative"
          >
            <span className="bg-black text-white px-4 py-2 rounded-lg">Beneficios del</span>
            <br />
            <span className="text-green-500 mt-4 block text-6xl md:text-7xl">Alisado Orgánico</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
            {[
              {
                icon: <Star className="w-16 h-16 text-white" />,
                title: "100% Natural",
                description: "Tratamiento completamente orgánico, libre de químicos agresivos para tu cabello.",
                gradient: "from-green-600 to-green-500"
              },
              {
                icon: <Shield className="w-16 h-16 text-white" />,
                title: "Protección Total",
                description: "Protege y nutre tu cabello con ingredientes naturales certificados.",
                gradient: "from-green-500 to-green-400"
              },
              {
                icon: <Sparkles className="w-16 h-16 text-white" />,
                title: "Brillo Natural",
                description: "Realza el brillo natural de tu cabello sin utilizar químicos dañinos.",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: <ArrowDownWideNarrow className="w-16 h-16 text-white" />,
                title: "Control de Frizz",
                description: "Reduce el frizz y el encrespamiento de forma natural y duradera.",
                gradient: "from-green-600 to-green-500"
              },
              {
                icon: <Wand2 className="w-16 h-16 text-white" />,
                title: "Alisado Suave",
                description: "Consigue un alisado natural que respeta la estructura de tu cabello.",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: <Clock className="w-16 h-16 text-white" />,
                title: "Duración Natural",
                description: "Resultados duraderos que se mantienen hasta por 4 meses.",
                gradient: "from-green-600 to-green-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
                <div className="relative h-full bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl ring-1 ring-green-200/50">
                  <div className={`w-24 h-24 mb-8 rounded-xl bg-gradient-to-r ${benefit.gradient} p-4 shadow-lg transform -translate-y-12 group-hover:-translate-y-14 transition-transform duration-500`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Separador decorativo */}
      <div className="relative h-8 bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="absolute inset-x-0 -bottom-1 h-4 bg-[url('/images/separator-wave.svg')] bg-repeat-x opacity-20" />
      </div>

      {/* Sección de Cuidados */}
      <section className="py-12 px-4 bg-green-50/30 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-green-500 mb-16"
        >
          Guía de Cuidados
        </motion.h2>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Primeras 24 Horas",
                items: [
                  "No laves tu cabello durante las primeras 24 horas",
                  "Evita recogidos o accesorios que marquen el cabello",
                  "Mantén el cabello lo más liso posible"
                ]
              },
              {
                title: "Mantenimiento Diario",
                items: [
                  "Usa productos orgánicos específicos",
                  "Aplica aceites naturales para mantener la hidratación",
                  "Cepilla suavemente para mantener el liso natural"
                ]
              },
              {
                title: "Cuidados Especiales",
                items: [
                  "Realiza mascarillas naturales semanalmente",
                  "Evita el exceso de calor en el cabello",
                  "Programa retoques cada 3-4 meses"
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-white"
              >
                <h3 className="text-xl font-semibold mb-6 text-center">{section.title}</h3>
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Banner de Agenda tu Cita */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-green-600 to-green-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            ¿Lista para transformar tu cabello naturalmente?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Agenda tu cita hoy y descubre la experiencia de un cabello naturalmente hermoso
          </p>
          <a
            href="https://wa.me/524492175606?text=Hola,%20me%20interesa%20el%20servicio%20de%20alisado%20orgánico,%20¿podrías%20darme%20más%20información?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            onClick={() => trackScheduleAppointment('Alisado Orgánico')}
          >
            Agendar Cita
          </a>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="+524492175606" />
    </div>
  );
};