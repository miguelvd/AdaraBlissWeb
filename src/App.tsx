import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { Servicios } from './pages/Servicios';
import { Promociones } from './pages/Promociones';
import { Home } from './pages/Home';
import { Galeria } from './pages/Galeria';
import { Opiniones } from './pages/Opiniones';
import { KeratinaJaponesa } from './pages/servicios/KeratinaJaponesa';
import { AlisadoLaser } from './pages/servicios/AlisadoLaser';
import { AlisadoOrganico } from './pages/servicios/AlisadoOrganico';
import { Alisado } from './pages/servicios/Alisado';
import { Botox } from './pages/servicios/Botox';
import { Corte } from './pages/servicios/Corte';
import { Maquillaje } from './pages/servicios/Maquillaje';
import { Cejas } from './pages/servicios/Cejas';
import DerechosReservados from './pages/legal/DerechosReservados';
import PoliticaPrivacidad from './pages/legal/PoliticaPrivacidad';
import TerminosCondiciones from './pages/legal/TerminosCondiciones';
import PoliticaCookies from './pages/legal/PoliticaCookies';
import AvisoLegal from './pages/legal/AvisoLegal';
import FAQ from './pages/legal/FAQ';
import ScrollToTop from './components/ScrollToTop';
import { Panel } from './pages/Panel';
import './styles/swiper.css';

export default function App() {
  console.log('Renderizando App component');
  
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/alisado" element={<Alisado />} />
          <Route path="/servicios/botox" element={<Botox />} />
          <Route path="/servicios/corte" element={<Corte />} />
          <Route path="/servicios/maquillaje" element={<Maquillaje />} />
          <Route path="/servicios/cejas" element={<Cejas />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/opiniones" element={<Opiniones />} />
          <Route path="/servicios/keratina-japonesa" element={<KeratinaJaponesa />} />
          <Route path="/servicios/alisado-laser" element={<AlisadoLaser />} />
          <Route path="/servicios/alisado-organico" element={<AlisadoOrganico />} />
          <Route path="/panel/*" element={<Panel />} />
          
          {/* Rutas legales */}
<<<<<<< HEAD
          <Route path="/derechos" element={<DerechosReservados />} />
          <Route path="/derechos-reservados" element={<DerechosReservados />} />
          <Route path="/privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/terminos" element={<TerminosCondiciones />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route path="/cookies" element={<PoliticaCookies />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
          <Route path="/legal" element={<AvisoLegal />} />
=======
          <Route path="/derechos-reservados" element={<DerechosReservados />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
>>>>>>> 5ebded82630c63792283071ccfb60ba370800e6d
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <WhatsAppButton 
          phoneNumber="524492175606" 
          hideInServices={true}
        />
        <Footer />
      </div>
    </Router>
  );
}