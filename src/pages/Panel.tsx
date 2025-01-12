import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from '../components/admin/LoginForm';
import { AdminLayout } from '../components/admin/AdminLayout';
import PromocionesEditor from '../components/admin/PromocionesEditor';
import { ProtectedRoute } from '../components/admin/ProtectedRoute';

export const Panel = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Routes>
                <Route index element={<Navigate to="promociones" replace />} />
                <Route path="promociones" element={<PromocionesEditor />} />
                <Route path="configuracion" element={
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-[#F25AA3] mb-6">Configuración</h2>
                    <p className="text-gray-600">Esta sección está en desarrollo.</p>
                  </div>
                } />
              </Routes>
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
