import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initPowerSectionAnimations = () => {
  // Animación para la sección completa
  gsap.from('#power-section', {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: '#power-section',
      start: 'top center',
      end: 'bottom center',
      toggleActions: 'play none none reverse',
    },
  });

  // Animaciones para elementos individuales
  // Puedes agregar más animaciones aquí cuando tengas los elementos específicos
};
