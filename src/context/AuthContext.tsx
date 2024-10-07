// src/context/AuthContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';

export type AuthContextType = {
  user: string | null;
  role: 'user' | 'doctor' | 'admin' | null;
  login: (username: string, password: string, role: 'user' | 'doctor' | 'admin') => void; // Asegúrate de que el rol sea parte de los parámetros
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [role, setRole] = useState<'user' | 'doctor' | 'admin' | null>(null);

  const login = (username: string, password: string, role: 'user' | 'doctor' | 'admin') => {
    // Aquí implementas la lógica de autenticación
    setUser(username);
    setRole(role); // Cambiar según el rol
  };

  const logout = () => {
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
