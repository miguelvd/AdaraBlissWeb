import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Servicios } from './pages/Servicios';
import { Promociones } from './pages/Promociones';
import { Home } from './pages/Home';
import { Galeria } from './pages/Galeria';
import { Opiniones } from './pages/Opiniones';
import { KeratinaPremium } from './pages/servicios/KeratinaPremium';
import { AlisadoLaser } from './pages/servicios/AlisadoLaser';
import { AlisadoOrganico } from './pages/servicios/AlisadoOrganico';
import { Alisado } from './pages/servicios/Alisado';
import { Botox } from './pages/servicios/Botox';
import { Corte } from './pages/servicios/Corte';
import './styles/swiper.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/alisado" element={<Alisado />} />
        <Route path="/servicios/botox" element={<Botox />} />
        <Route path="/servicios/corte" element={<Corte />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/opiniones" element={<Opiniones />} />
        <Route path="/servicios/keratina-premium" element={<KeratinaPremium />} />
        <Route path="/servicios/alisado-laser" element={<AlisadoLaser />} />
        <Route path="/servicios/alisado-organico" element={<AlisadoOrganico />} />
      </Routes>
      <WhatsAppButton 
        phoneNumber="524492175606" 
        hideInServices={true}
      />
    </Router>
  );
}