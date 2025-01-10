import { motion } from 'framer-motion';

const features = [
  {
    title: "Transformación Total",
    description: "Experimenta una transformación completa con nuestro tratamiento de alisado permanente.",
    image: "/images/features/transformation.png"
  },
  {
    title: "Cuidado Profesional",
    description: "Utilizamos productos de la más alta calidad para proteger tu cabello durante el proceso.",
    image: "/images/features/professional.png"
  },
  {
    title: "Resultados Duraderos",
    description: "Disfruta de un cabello perfectamente liso por meses con el mantenimiento adecuado.",
    image: "/images/features/lasting.png"
  }
];

export const PowerSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
      {/* Elementos decorativos orgánicos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/30 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/30 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#F25AA3]">
          El Poder del Alisado
        </h2>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto rounded-lg shadow-xl"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-lg text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};