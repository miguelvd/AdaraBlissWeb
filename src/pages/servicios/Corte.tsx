import { motion } from 'framer-motion';
import { Scissors, Star, Sparkles, Heart } from 'lucide-react';

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
    <div className="min-h-screen bg-white pt-20">
      {/* Header con diseño moderno */}
      <div className="relative min-h-screen">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/services/corte.png"
            alt="Corte de Cabello"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-950/70 via-pink-900/50 to-transparent" />
        </div>

        {/* Contenido del Header */}
        <div className="relative h-screen flex flex-col">
          {/* Texto Principal - Posicionado en la parte inferior */}
          <div className="mt-auto px-4 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl mx-auto"
            >
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-7xl md:text-8xl font-glitten text-white mb-4"
              >
                Corte
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-pink-100 mb-8"
              >
                Transforma tu imagen con un corte que refleje tu verdadera esencia
              </motion.p>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => {
                  document.getElementById('info')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="group flex items-center space-x-2 text-pink-200 hover:text-pink-100 transition-colors"
              >
                <span>Descubre Más</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sección de Información */}
      <div id="info" className="relative py-16 overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-glitten text-pink-900 mb-6">
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
              href="https://wa.me/tu-numero?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20para%20un%20corte"
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
