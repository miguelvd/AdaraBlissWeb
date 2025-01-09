import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/panel" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};
