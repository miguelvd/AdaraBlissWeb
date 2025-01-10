import { motion } from 'framer-motion';
import { Sparkles, Star, Heart, Brush } from 'lucide-react';

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
    icon: <Brush className="w-6 h-6" />,
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
      <div className="relative min-h-[100vh]">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/services/maquillaje.png"
            alt="Maquillaje Profesional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-950/70 via-pink-900/50 to-transparent" />
        </div>

        {/* Contenido del Header con diseño elegante */}
        <div className="relative min-h-screen flex flex-col justify-between pt-20 pb-10 px-4">
          {/* Título y descripción con animación */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-auto"
          >
            <h1 className="text-7xl md:text-8xl font-glitten text-white mb-6 drop-shadow-lg tracking-wider">
              Maquillaje
            </h1>
            <p className="text-xl text-white/90 max-w-xl mx-auto leading-relaxed mb-8 font-light tracking-wide">
              Arte que realza tu belleza natural
            </p>
            
            {/* Botón CTA */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={() => {
                document.getElementById('beneficios')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full
                hover:bg-white/20 transition-all duration-300 font-light"
            >
              Descubre Más
            </motion.button>
          </motion.div>

          {/* Scroll indicator con animación */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-white/80"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sección de Beneficios con diseño moderno */}
      <div id="beneficios" className="relative py-20 px-4">
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
              href="https://wa.me/tu-numero?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20para%20maquillaje"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-pink-600 px-8 py-4 rounded-full font-medium
                hover:bg-pink-50 transition-all transform hover:scale-105 duration-300 shadow-lg"
              whileHover={{ y: -2 }}
            >
              Agenda tu Sesión
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Maquillaje;
