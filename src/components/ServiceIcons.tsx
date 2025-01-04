import React from 'react';

interface IconProps {
  color: string;
}

export const ServiceIcons = {
  alisado: ({ color }: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Aquí irá el SVG de alisado */}
    </svg>
  ),
  botox: ({ color }: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Aquí irá el SVG de botox */}
    </svg>
  ),
  corte: ({ color }: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Aquí irá el SVG de corte */}
    </svg>
  ),
  maquillaje: ({ color }: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Aquí irá el SVG de maquillaje */}
    </svg>
  ),
  cejas: ({ color }: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Aquí irá el SVG de cejas */}
    </svg>
  ),
};
