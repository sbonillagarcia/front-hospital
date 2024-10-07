import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importar el CSS

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'user' | 'doctor' | 'admin'>('user'); // Valor predeterminado
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password, role); // Pasamos el rol seleccionado

    // Navegar según el rol del usuario
    if (role === 'user') {
      navigate('/user/dashboard');
    } else if (role === 'doctor') {
      navigate('/doctor/dashboard');
    } else if (role === 'admin') {
      navigate('/admin/orders');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>TU EPS DE CONFIANZA</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value as 'user' | 'doctor' | 'admin')}>
            <option value="user">Usuario</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;

