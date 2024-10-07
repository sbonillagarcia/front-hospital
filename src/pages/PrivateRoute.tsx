import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';  // Asegúrate de la ruta correcta

interface PrivateRouteProps {
  children: React.ReactNode;
  role: 'user' | 'doctor' | 'admin';
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, role }) => {
  const { user, role: userRole } = useAuth();

  // Si no hay usuario autenticado o el rol no es el adecuado, redirige al login
  if (!user || userRole !== role) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;

