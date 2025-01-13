import { motion } from 'framer-motion';
import { Brush, Star, Sparkles, Heart, Palette, Scissors, ChevronDown } from 'lucide-react';
import { getWhatsAppLink } from '../../constants/whatsapp';

const beneficios = [
  {
    icon: <Star className="w-6 h-6" />,
    titulo: "Diseño Personalizado",
    descripcion: "Creamos el diseño perfecto según tu rostro y estilo"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    titulo: "Tinte Natural con Henna",
    descripcion: "Pigmentación duradera y resultados naturales"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    titulo: "Planchado Profesional",
    descripcion: "Cejas perfectamente definidas y disciplinadas"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    titulo: "Acabado Impecable",
    descripcion: "Resultados que realzan tu mirada naturalmente"
  }
];

export const Cejas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/50 to-white">
      {/* Header con diseño moderno */}
      <div className="relative h-[100svh] xs:h-screen">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/services/cejas.png"
            alt="Diseño de Cejas"
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
              Diseño de Cejas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-200 leading-relaxed mb-8 px-4"
            >
              Arte y precisión para enmarcar tu mirada
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={() => {
                  const beneficiosSection = document.getElementById('beneficios-cejas');
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

      {/* Sección de Beneficios */}
      <div id="beneficios-cejas" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-glitten text-pink-900 mb-6">
              Nuestros Beneficios
            </h2>
            <p className="text-lg text-pink-700/80 max-w-2xl mx-auto">
              Combinamos técnicas modernas con productos naturales para resultados excepcionales
            </p>
          </motion.div>

          {/* Grid de Beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={beneficio.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-white rounded-2xl 
                  transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative p-8 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <div className="text-pink-600">
                        {beneficio.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-pink-900 mb-2">
                      {beneficio.titulo}
                    </h3>
                    <p className="text-pink-700/70">
                      {beneficio.descripcion}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección CTA */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-50">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-300 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-glitten text-pink-900">
              Transforma tu Mirada
            </h2>
            <p className="text-xl text-pink-700/90 max-w-2xl mx-auto">
              Descubre el poder de unas cejas perfectamente diseñadas
            </p>
            <motion.a
              href="https://wa.me/524492175606?text=Hola%2C%20vi%20en%20su%20página%20web%20el%20servicio%20de%20Diseño%20de%20Cejas%20y%20me%20gustaría%20obtener%20más%20información."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            >
              Agenda tu Diseño de Cejas
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cejas;
