import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isMobileMoreMenuOpen, setIsMobileMoreMenuOpen] = useState(false);
  const location = useLocation();
  const [bgOpacity, setBgOpacity] = useState(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const opacity = Math.min((window.scrollY / 100), 0.95);
      setBgOpacity(opacity);
    };

    const handleClickOutside = (event: MouseEvent) => {
      // Cerrar menú "Más" de escritorio
      const moreMenu = document.querySelector('.more-menu-container');
      if (moreMenu && !moreMenu.contains(event.target as Node)) {
        setIsMoreMenuOpen(false);
      }

      // Cerrar menú móvil cuando se hace clic fuera
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setIsMobileMoreMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/galeria', label: 'Galería' },
    { path: '/promociones', label: 'Promociones' },
    { path: '/opiniones', label: 'Tu Opinión' }
  ];

  const moreItems = [
    { path: '/faq', label: 'Preguntas frecuentes (FAQ)' },
    { path: '/derechos', label: 'Aviso de derechos reservados' },
    { path: '/privacidad', label: 'Política de privacidad' },
    { path: '/terminos', label: 'Términos y condiciones' },
    { path: '/cookies', label: 'Política de cookies' },
    { path: '/legal', label: 'Aviso legal' }
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

          {/* Menú de escritorio */}
          <div className="hidden md:flex space-x-8 animate-fade-in">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  setIsMoreMenuOpen(false);
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
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
            <div className="relative more-menu-container">
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className={`flex items-center gap-1 py-2 transition-colors duration-300 ${
                  isHome && !isScrolled ? 'text-white hover:text-pink-300' : 'text-gray-800 hover:text-[#F25AA3]'
                }`}
              >
                Más
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Submenú Más - Escritorio */}
              {isMoreMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg py-2 animate-fade-in-down">
                  {moreItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => {
                        setIsMoreMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="block px-4 py-2 text-gray-800 hover:bg-pink-50 hover:text-[#F25AA3] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Botón de menú móvil */}
          <button
            ref={mobileMenuButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className={isHome && !isScrolled ? 'text-white' : 'text-gray-800'} />
            ) : (
              <Menu className={isHome && !isScrolled ? 'text-white' : 'text-gray-800'} />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg animate-fade-in-down"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsMobileMoreMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="block py-2 text-gray-800 hover:text-[#F25AA3] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}

              {/* Menú Más - Móvil */}
              <div>
                <button
                  onClick={() => setIsMobileMoreMenuOpen(!isMobileMoreMenuOpen)}
                  className="flex items-center justify-between w-full py-2 text-gray-800"
                >
                  <span>Más</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileMoreMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Submenú Más - Móvil */}
                {isMobileMoreMenuOpen && (
                  <div className="pl-4 space-y-2 animate-fade-in-down">
                    {moreItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileMoreMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="block py-2 text-gray-600 hover:text-[#F25AA3] transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};