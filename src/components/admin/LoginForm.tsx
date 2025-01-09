import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Por ahora, hardcodeamos las credenciales. En producción, esto debería validarse contra un backend seguro
    if (username === 'admin' && password === 'adara2024') {
      localStorage.setItem('isAuthenticated', 'true');
      const from = location.state?.from?.pathname || '/panel/dashboard';
      navigate(from);
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-pink-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#F25AA3] mb-6 text-center">Panel de Control</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Usuario
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F25AA3] text-white py-2 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};
