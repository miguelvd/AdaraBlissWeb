import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, Shield, Sparkles } from 'lucide-react';

const beneficios = [
  {
    icon: <Clock className="w-6 h-6" />,
    titulo: "Duración",
    descripcion: "Resultados duraderos hasta por 4 meses"
  },
  {
    icon: <Star className="w-6 h-6" />,
    titulo: "Calidad Premium",
    descripcion: "Productos de la más alta calidad"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    titulo: "Protección",
    descripcion: "Sella y protege cada fibra capilar"
  }
];

const pasos = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descripcion: "Evaluación personalizada de tu tipo de cabello"
  },
  {
    numero: "02",
    titulo: "Limpieza",
    descripcion: "Preparación profunda del cabello"
  },
  {
    numero: "03",
    titulo: "Aplicación",
    descripcion: "Tratamiento con botox capilar premium"
  },
  {
    numero: "04",
    titulo: "Sellado",
    descripcion: "Sellado térmico para máxima duración"
  }
];

export const Botox = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header con imagen de fondo */}
      <div className="relative min-h-screen">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          {/* Versión móvil - imagen centrada */}
          <img
            src="/images/services/botox.png"
            alt="Botox Capilar"
            className="w-full h-full object-cover block md:hidden"
          />
          {/* Versión desktop - imagen posicionada más abajo */}
          <img
            src="/images/services/botox.png"
            alt="Botox Capilar"
            className="hidden md:block w-full h-full object-cover object-[center_25%]"
          />
        </div>

        {/* Capa de color con opacidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-950/40 via-pink-900/50 to-pink-950/60" />
        
        {/* Contenido del Header */}
        <div className="relative h-screen flex flex-col items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Elemento decorativo superior */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-1 bg-pink-300 mx-auto mb-8"
            />
            
            <h1 className="text-6xl md:text-8xl font-glitten mb-6 text-white">
              Botox Capilar
            </h1>
            
            {/* Línea decorativa con animación */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4 }}
              className="w-32 h-1 bg-pink-300 mx-auto mb-8"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Rejuvenece y revitaliza tu cabello con nuestro tratamiento premium
            </motion.p>

            {/* Botón con scroll suave */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              onClick={() => {
                document.getElementById('descripcion')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-pink-950 transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-pink-200 rounded-full group-hover:bg-pink-300 transition-all duration-300"></div>
              <span className="relative">Descubre Más</span>
              <motion.span
                className="relative ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Indicador de scroll responsivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut" 
              }}
              className="text-pink-200"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Descripción Principal con diseño mejorado */}
      <div id="descripcion" className="relative bg-white py-20">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto px-4"
        >
          {/* Ícono central con animación */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-300 rounded-full flex items-center justify-center mx-auto mb-12 shadow-lg"
          >
            <Sparkles className="w-12 h-12 text-white" />
          </motion.div>

          {/* Texto principal con efecto de aparición */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Nuestro tratamiento de botox capilar es una terapia intensiva que 
              rellena y repara la fibra capilar desde el interior, devolviendo 
              la juventud y vitalidad a tu cabello.
            </p>
            <p className="text-lg text-gray-600">
              Con una fórmula rica en proteínas y vitaminas, este tratamiento reduce 
              el frizz, aumenta el brillo y mejora significativamente la textura del cabello.
            </p>

            {/* Línea decorativa inferior */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-300 mx-auto mt-12"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Beneficios */}
      <div className="bg-pink-50 py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-center font-glitten text-pink-800 mb-12"
          >
            Beneficios
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <div className="text-pink-600">
                    {beneficio.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-pink-900 text-center mb-2">
                  {beneficio.titulo}
                </h3>
                <p className="text-gray-600 text-center">
                  {beneficio.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Proceso */}
      <div className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-center font-glitten text-pink-800 mb-12"
          >
            Proceso del Tratamiento
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasos.map((paso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-white p-6 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                {/* Número de paso con efecto de hover */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform">
                  <span className="text-3xl font-bold text-pink-600">
                    {paso.numero}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-pink-900 mb-2 relative z-10">
                  {paso.titulo}
                </h3>
                <p className="text-gray-600 relative z-10">
                  {paso.descripcion}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-pink-500 to-pink-400 py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-glitten mb-6"
          >
            ¿Lista para renovar tu cabello?
          </motion.h2>
          <p className="text-lg md:text-xl mb-8 text-pink-100">
            Agenda tu cita hoy y descubre la transformación que el botox capilar puede hacer en tu cabello
          </p>
          <a
            href="https://wa.me/524492175606"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
          >
            Agendar Cita
          </a>
        </div>
      </div>
    </div>
  );
};
