import { useEffect } from 'react';

export const useParallaxEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      document.querySelectorAll('.parallax-layer-1').forEach((layer) => {
        (layer as HTMLElement).style.transform = `translateY(${scrolled * 0.3}px)`;
      });
      
      document.querySelectorAll('.parallax-layer-2').forEach((layer) => {
        (layer as HTMLElement).style.transform = `translateY(${scrolled * 0.4}px)`;
      });
      
      document.querySelectorAll('.parallax-layer-3').forEach((layer) => {
        (layer as HTMLElement).style.transform = `translate(-20%, -20%) translateY(${scrolled * 0.5}px)`;
      });
      
      document.querySelectorAll('.parallax-layer-4').forEach((layer) => {
        (layer as HTMLElement).style.transform = `translateY(${scrolled * 0.2}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};