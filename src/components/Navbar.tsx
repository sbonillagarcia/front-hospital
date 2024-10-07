// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css'; // Importar el CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';  // Importar ícono


const Navbar: React.FC = () => {
  const { user, role, logout } = useAuth();

  return (
    <nav>
        <div className="navbar-logo">
        <FontAwesomeIcon icon={faStethoscope} /> {/* Usar ícono */}
        <h1>HOSPITAL</h1>
      </div>
      
      <ul>
        <li><Link to="/login">Iniciar sesion</Link></li>
        {user && role === 'user' && <li><Link to="/user/dashboard">Usuario</Link></li>}
        {user && role === 'doctor' && <li><Link to="/doctor/dashboard">Doctor</Link></li>}
        {user && role === 'admin' && <li><Link to="/admin/orders">Órdenes Admin</Link></li>}
        {user && <li><button onClick={logout}>Salir</button></li>}
      </ul>
    </nav>
  );
};

export default Navbar;


