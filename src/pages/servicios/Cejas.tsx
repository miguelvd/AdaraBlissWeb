import { motion } from 'framer-motion';
import { Brush, Star, Sparkles, Heart, Palette } from 'lucide-react';

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
      <div className="relative min-h-screen">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/services/cejas.png"
            alt="Diseño de Cejas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-800/50 to-transparent" />
        </div>

        {/* Contenido del Header */}
        <div className="relative h-screen flex flex-col">
          {/* Texto Principal - Posicionado en la parte inferior */}
          <div className="mt-auto px-4 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl mx-auto text-center"
            >
              <motion.h1 
                className="text-6xl md:text-7xl font-glitten text-white mb-4 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Diseño de Cejas
              </motion.h1>
              <motion.p
                className="text-xl text-white/90 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Arte y precisión para enmarcar tu mirada
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sección de Servicios */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-glitten text-pink-900 mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-pink-700/80 max-w-2xl mx-auto">
              Combinamos técnicas modernas con productos naturales para resultados excepcionales
            </p>
          </motion.div>

          {/* Grid de Servicios */}
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
              href="https://wa.me/tu-numero?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20para%20diseño%20de%20cejas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 text-white px-8 py-4 rounded-full font-medium
                hover:bg-pink-700 transition-all transform hover:scale-105 duration-300 shadow-lg"
              whileHover={{ y: -2 }}
            >
              Agenda tu Cita
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cejas;
