import { motion } from 'framer-motion';
import { Scissors, Star, Sparkles, Heart, ChevronDown } from 'lucide-react';

const beneficios = [
  {
    icon: <Star className="w-6 h-6" />,
    titulo: "Corte Personalizado",
    descripcion: "Adaptamos el estilo a tu tipo de rostro y personalidad"
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    titulo: "Técnicas Modernas",
    descripcion: "Utilizamos las últimas técnicas y tendencias en corte"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    titulo: "Cuidado Experto",
    descripcion: "Protegemos la salud de tu cabello durante todo el proceso"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    titulo: "Acabado Perfecto",
    descripcion: "Resultados profesionales que realzan tu belleza natural"
  }
];

const Corte = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header con diseño moderno */}
      <div className="relative h-[100svh] xs:h-screen">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/services/corte.png"
            alt="Corte de Cabello"
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
              Corte de Cabello
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-200 leading-relaxed mb-8 px-4"
            >
              Transforma tu estilo con un corte personalizado
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={() => {
                  const beneficiosSection = document.getElementById('beneficios-corte');
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
      <div id="beneficios-corte" className="py-20 px-4">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-pink-100/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-pink-100/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Descripción Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-glitten text-[#F25AA3] mb-6">
              El Arte del Corte
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              En Adara Bliss, cada corte es una obra de arte única. Nuestras estilistas 
              expertas combinan técnicas tradicionales con las últimas tendencias para 
              crear un estilo que realce tu belleza natural y se adapte a tu estilo de vida.
            </p>
          </motion.div>

          {/* Grid de Beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={beneficio.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start space-x-4">
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

      {/* CTA Final */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-400" />
        
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-pink-300/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-pink-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-glitten text-white">
              Renueva tu imagen
            </h2>
            <p className="text-xl text-pink-100">
              Déjanos crear el estilo perfecto para ti
            </p>
            <a
              href="https://wa.me/524492175606?text=Hola%2C%20vi%20en%20su%20página%20web%20el%20servicio%20de%20Corte%20de%20Cabello%20y%20me%20gustaría%20obtener%20más%20información."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            >
              Agenda tu Corte
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export { Corte };
