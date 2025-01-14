import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleries } from '../data/galleries';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { trackGalleryInteraction } from '../utils/facebookPixel';

export const Galeria = () => {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof galleries>('keratinaJaponesa');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Add beforeunload event listener
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [selectedCategory]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = 100;
      setIsSticky(offset > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      trackGalleryInteraction('view', selectedCategory);
    }
  }, [selectedCategory]);

  const handleImageClick = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setCurrentImageIndex(index);
    trackGalleryInteraction('zoom', selectedCategory);
  };

  const handleCategoryChange = (category: keyof typeof galleries) => {
    setSelectedCategory(category);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const images = galleries[selectedCategory].images;
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex].url);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const images = galleries[selectedCategory].images;
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex].url);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50/30" ref={galleryRef}>
      {/* Header con título */}
      <div className="pt-20 md:pt-28 pb-4 md:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F25AA3] to-pink-400 text-transparent bg-clip-text">
            Nuestra Galería
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Explora nuestros trabajos y descubre la magia de la transformación
          </p>
        </motion.div>
      </div>

      {/* Barra de categorías sticky */}
      <div className={`gallery-categories ${isSticky ? 'is-sticky' : ''}`}>
        <div className="scrollable-container">
          <div className="container mx-auto">
            <div className="flex gap-3 py-2 px-4 md:flex-wrap md:justify-center">
              {Object.entries(galleries).map(([key, gallery]) => (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key as keyof typeof galleries)}
                  className={`flex-none snap-start px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === key
                      ? 'bg-[#F25AA3] text-white shadow-lg scale-105 shadow-pink-200'
                      : 'bg-pink-50 text-[#F25AA3] hover:bg-pink-100'
                  }`}
                >
                  {gallery.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-categories-spacer"></div>

      {/* Grid de imágenes con animación */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleries[selectedCategory].images.map((image, index) => (
              <motion.div
                key={image.url}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleImageClick(image.url, index)}
                className="relative aspect-[4/5] cursor-pointer overflow-hidden rounded-xl bg-white/5 group shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-full">
                  <img
                    src={image.thumbnail || image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium text-center">
                      Ver imagen
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal mejorado con diseño espectacular */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md touch-none"
          >
            <motion.div
              className="relative w-full h-full md:h-auto md:max-w-4xl flex items-center justify-center p-2 md:p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del modal con título */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-0 inset-x-0 z-20"
              >
                <div className="bg-gradient-to-b from-black/90 via-black/70 to-transparent pt-safe pb-12">
                  <div className="px-4 pt-6 md:pt-8 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#F25AA3] drop-shadow-lg">
                      {galleries[selectedCategory].title}
                    </h2>
                  </div>
                </div>
              </motion.div>

              {/* Contenedor de la imagen con efectos */}
              <motion.div 
                className="relative w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative max-w-full max-h-[85vh] overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src={selectedImage}
                    alt={`${galleries[selectedCategory].title} - Imagen ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 shadow-inner pointer-events-none bg-gradient-to-t from-black/20 to-transparent opacity-60" />
                </div>

                {/* Controles de navegación centrados */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center z-20 px-2 md:px-8">
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={handlePrevImage}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md text-[#F25AA3] hover:bg-white/20 transition-all duration-300 shadow-lg"
                  >
                    <ChevronLeft size={32} />
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={handleNextImage}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md text-[#F25AA3] hover:bg-white/20 transition-all duration-300 shadow-lg"
                  >
                    <ChevronRight size={32} />
                  </motion.button>
                </div>
              </motion.div>

              {/* Contador de imágenes en la parte inferior */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 inset-x-0 flex justify-center z-20"
              >
                <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#F25AA3] text-base font-medium shadow-lg">
                  {currentImageIndex + 1} de {galleries[selectedCategory].images.length}
                </span>
              </motion.div>

              {/* Botón de cerrar en la esquina superior */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-3 text-[#F25AA3] rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 z-30 shadow-lg"
              >
                <X size={28} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galeria;