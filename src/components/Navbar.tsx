import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isMobileMoreMenuOpen, setIsMobileMoreMenuOpen] = useState(false);
  const location = useLocation();
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const opacity = Math.min((window.scrollY / 100), 0.95);
      setBgOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/opiniones', label: 'Tu Opinión' },
    { path: '/galeria', label: 'Galería' },
    { path: '/promociones', label: 'Promociones' }
  ];

  const moreItems = [
    { path: '/derechos', label: 'Aviso de derechos reservados' },
    { path: '/privacidad', label: 'Política de privacidad' },
    { path: '/terminos', label: 'Términos y condiciones' },
    { path: '/cookies', label: 'Política de cookies' },
    { path: '/legal', label: 'Aviso legal' },
    { path: '/faq', label: 'Preguntas frecuentes (FAQ)' }
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : `bg-black/${Math.floor(bgOpacity * 100)}`
    } ${isMenuOpen ? 'bg-black/95' : ''} ${!isHome ? 'bg-white/90 backdrop-blur-md shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="text-2xl font-bold">
            <img 
              src="/images/logo/Logo Adara.svg" 
              alt="Adara Logo" 
              className="h-10 md:h-12"
            />
          </Link>
          <div className="hidden md:flex space-x-8 animate-fade-in">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 transition-colors duration-300 ${
                  isHome && !isScrolled ? 'text-white hover:text-pink-300' : 'text-gray-800 hover:text-[#F25AA3]'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  isHome && !isScrolled ? 'bg-pink-300' : 'bg-[#F25AA3]'
                } transform scale-x-0 transition-transform duration-300 ${
                  location.pathname === item.path ? 'scale-x-100' : ''
                }`} />
              </Link>
            ))}
            {/* Menú Más - Escritorio */}
            <div className="relative">
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className={`flex items-center gap-1 py-2 transition-colors duration-300 ${
                  isHome && !isScrolled ? 'text-white hover:text-pink-300' : 'text-gray-800 hover:text-[#F25AA3]'
                }`}
              >
                Más
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {/* Submenú Más */}
              <div className={`absolute top-full right-0 w-64 bg-white shadow-lg rounded-lg py-2 transition-all duration-300 ${
                isMoreMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {moreItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMoreMenuOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#F25AA3] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors z-50 ${
              isHome && !isScrolled ? 'text-white hover:bg-white/20' : 'text-gray-800 hover:bg-[#F25AA3]/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden fixed right-0 top-16 h-[calc(100vh-4rem)] w-64 bg-black/95 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'
        } z-40`}>
          <div className="py-6 px-4 space-y-4 h-full text-white overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium border-r-4 ${
                  location.pathname === item.path
                    ? 'bg-white/10 border-[#F25AA3]'
                    : 'hover:bg-white/5 border-transparent transition-colors'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Menú Más - Móvil */}
            <div>
              <button
                onClick={() => setIsMobileMoreMenuOpen(!isMobileMoreMenuOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-base font-medium border-r-4 border-transparent hover:bg-white/5"
              >
                <span>Más</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileMoreMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`space-y-1 transition-all duration-300 ${isMobileMoreMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                {moreItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setIsMobileMoreMenuOpen(false);
                      setIsMenuOpen(false);
                    }}
                    className="block px-8 py-2 text-sm text-gray-300 hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};