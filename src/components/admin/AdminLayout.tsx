import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogOut, Tag, Settings } from 'lucide-react';

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/panel');
  };

  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/panel/dashboard" className="text-2xl font-bold text-[#F25AA3]">
                  Panel de Control
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setShowLogoutConfirm(true)}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal de confirmación de cierre de sesión */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              ¿Cerrar sesión?
            </h3>
            <p className="text-gray-600 mb-6">
              ¿Estás seguro de que quieres cerrar sesión? Necesitarás volver a iniciar sesión para acceder al panel de control.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-[#F25AA3] text-white rounded-lg hover:bg-pink-600 transition-colors"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar y Contenido */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md min-h-screen">
          <nav className="mt-5 px-2">
            <Link
              to="/panel/dashboard/promociones"
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md mb-2 ${
                isActive('promociones')
                  ? 'bg-pink-100 text-[#F25AA3]'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Tag className="mr-3 h-5 w-5" />
              Promociones
            </Link>
            <Link
              to="/panel/dashboard/configuracion"
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                isActive('configuracion')
                  ? 'bg-pink-100 text-[#F25AA3]'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Settings className="mr-3 h-5 w-5" />
              Configuración
            </Link>
          </nav>
        </div>

        {/* Contenido Principal */}
        <main className="flex-1 p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};
