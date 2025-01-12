import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

console.warn(' Iniciando la aplicación...');

const rootElement = document.getElementById('root');
console.warn(' Elemento root encontrado:', rootElement);

if (!rootElement) {
  console.error('No se encontró el elemento root en el DOM');
} else {
  try {
    const root = createRoot(rootElement);
    console.warn('Root creado correctamente');
    
    root.render(
      <StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </StrictMode>
    );
    console.warn('Renderizado completado');
  } catch (error) {
    console.error('Error al renderizar la aplicación:', error);
  }
}
