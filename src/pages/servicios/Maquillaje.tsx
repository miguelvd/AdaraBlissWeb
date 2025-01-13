import { motion } from 'framer-motion';
import { Sparkles, Star, Heart, Palette, ChevronDown } from 'lucide-react';
import { getWhatsAppLink } from '../../constants/whatsapp';

const beneficios = [
  {
    icon: <Star className="w-6 h-6" />,
    titulo: "Productos Premium",
    descripcion: "Utilizamos marcas de alta gama para resultados excepcionales"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    titulo: "Personalización Total",
    descripcion: "Adaptamos el maquillaje a tu estilo y ocasión"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    titulo: "Técnicas Profesionales",
    descripcion: "Aplicamos las últimas tendencias en maquillaje"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    titulo: "Larga Duración",
    descripcion: "Maquillaje que perdura todo el evento"
  }
];

export const Maquillaje = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header con diseño moderno */}
      <div className="relative h-[100svh] xs:h-screen">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/services/maquillaje.png"
            alt="Maquillaje Profesional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-950/70 via-pink-900/30 to-transparent" />
        </div>

        {/* Contenido del Header */}
        <div className="relative h-full flex flex-col justify-end items-center px-4 pb-20">
          {/* Texto Principal */}
          <div className="text-center max-w-xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[2.5rem] xs:text-5xl sm:text-6xl font-glitten text-white mb-4 px-4"
            >
              Maquillaje Profesional
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-200 leading-relaxed mb-8 px-4"
            >
              Resalta tu belleza natural con nuestro maquillaje profesional
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={() => {
                  const beneficiosSection = document.getElementById('beneficios-maquillaje');
                  if (beneficiosSection) {
                    beneficiosSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full
                  hover:bg-white/30 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <span>Descubre Más</span>
                <ChevronDown className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sección de Beneficios con diseño moderno */}
      <div id="beneficios-maquillaje" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Grid de beneficios con animación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={beneficio.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-pink-50 rounded-2xl 
                  transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center">
                      <div className="text-pink-500">
                        {beneficio.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-pink-900 mb-2">
                      {beneficio.titulo}
                    </h3>
                    <p className="text-gray-600">
                      {beneficio.descripcion}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final con diseño impactante */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600">
          <div className="absolute inset-0 backdrop-blur-3xl" />
        </div>

        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/30 rounded-full filter blur-3xl 
            transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-600/30 rounded-full filter blur-3xl 
            transform translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Contenido del CTA */}
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              Realza tu Belleza Natural
            </h2>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto font-light">
              Déjanos crear un look único que refleje tu verdadera esencia
            </p>
            <motion.a
              href="https://wa.me/524492175606?text=Hola%2C%20vi%20en%20su%20página%20web%20el%20servicio%20de%20Maquillaje%20Profesional%20y%20me%20gustaría%20obtener%20más%20información."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            >
              Agenda tu Maquillaje
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Maquillaje;
