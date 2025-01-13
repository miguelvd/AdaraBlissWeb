import { motion } from 'framer-motion';
import { Shield, Star, Sparkles, ArrowDownWideNarrow, Wand2, Clock } from 'lucide-react';
import { WhatsAppButton } from '../../components/WhatsAppButton';

const KeratinaJaponesa = () => {
  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-[url('/images/services/japonesa.png')] bg-cover bg-center transform scale-110" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Keratina Japonesa
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            Transforma tu cabello con la tecnología más avanzada en alisado
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => handleScrollTo('beneficios')}
              className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white border-2 border-pink-300/30 rounded-full px-8 py-3 text-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/30 backdrop-blur-sm transform hover:scale-105 active:scale-95"
            >
              Descubre Más
            </button>
          </motion.div>
        </div>
      </div>

      {/* Beneficios y Resultados */}
      <section id="beneficios" className="py-24 px-4 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
            <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 relative"
          >
            <span className="bg-black text-white px-4 py-2 rounded-lg">Beneficios de la</span>
            <br />
            <span className="text-pink-500 mt-4 block text-6xl md:text-7xl">Keratina</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
            {[
              {
                icon: <Star className="w-16 h-16 text-white" />,
                title: "Brillo Espectacular",
                description: "Sella las cutículas capilares para lograr un brillo intenso y natural que refleja la luz de manera deslumbrante.",
                gradient: "from-pink-600 to-pink-500"
              },
              {
                icon: <Sparkles className="w-16 h-16 text-white" />,
                title: "Suavidad",
                description: "Restaura y sella la fibra capilar con keratina, transformando tu cabello en una cascada de suavidad incomparable.",
                gradient: "from-pink-500 to-pink-400"
              },
              {
                icon: <Shield className="w-16 h-16 text-white" />,
                title: "Fortalecimiento Profundo",
                description: "Repone los aminoácidos perdidos, mejorando la estructura del cabello desde el interior para un cabello más fuerte y saludable.",
                gradient: "from-pink-500 to-pink-600"
              },
              {
                icon: <ArrowDownWideNarrow className="w-16 h-16 text-white" />,
                title: "Control de Volumen",
                description: "Reduce el exceso de volumen al actuar sobre la fibra capilar, logrando un cabello más manejable y controlado.",
                gradient: "from-pink-600 to-pink-500"
              },
              {
                icon: <Wand2 className="w-16 h-16 text-white" />,
                title: "Lacio Impactante",
                description: "Consigue hasta un 80% de alaciado, transformando desde cabello vaporoso hasta rizos en un lacio natural y duradero.",
                gradient: "from-pink-500 to-pink-600"
              },
              {
                icon: <Clock className="w-16 h-16 text-white" />,
                title: "Duración Premium",
                description: "Disfruta de resultados excepcionales que se mantienen hasta por 6 meses con los cuidados adecuados.",
                gradient: "from-pink-600 to-pink-500"
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
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
                <div className="relative h-full bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl ring-1 ring-pink-200/50">
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
      <div className="relative h-8 bg-gradient-to-b from-pink-50 to-white overflow-hidden">
        <div className="absolute inset-x-0 -bottom-1 h-4 bg-[url('/images/separator-wave.svg')] bg-repeat-x opacity-20" />
      </div>

      {/* Sección de Cuidados */}
      <section className="py-12 px-4 bg-pink-50/30 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-pink-500 mb-16"
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
                  "Usa los productos de tu preferencia",
                  "Puedes usar cremas para peinar, aceites o siliconas",
                  "Disfruta de actividades acuáticas sin preocupaciones"
                ]
              },
              {
                title: "Cuidados Especiales",
                items: [
                  "Usa protector térmico con herramientas de calor",
                  "Espera 2 días antes de teñir tu cabello",
                  "Programa retoques cada 4-6 meses"
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-white"
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
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
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
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-pink-500 to-pink-700">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            ¿Lista para transformar tu cabello?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Agenda tu cita hoy y descubre la experiencia de la keratina japonesa
          </p>
          <a
            href="https://wa.me/524492175606?text=Hola%2C%20vi%20en%20su%20página%20web%20el%20servicio%20de%20Keratina%20Japonesa%20y%20me%20gustaría%20obtener%20más%20información."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Agenda tu Cita
          </a>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="+524492175606" />
    </div>
  );
}

export { KeratinaJaponesa };
