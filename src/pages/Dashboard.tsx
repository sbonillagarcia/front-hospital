// src/pages/Dashboard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Panel de Usuario</h2>
      <p>Bienvenido al sistema. Aquí puedes ver y gestionar:</p>
      
      <button className="dashboard-boton" onClick={() => navigate('/user/history')}>
        Historia clínica
      </button>
      
      <button className="dashboard-boton" onClick={() => navigate('/user/prescription')}>
        Fórmula médica
      </button>
      
      <button className="dashboard-boton" onClick={() => navigate('/user/request-appointment')}>
        Cita Médica
      </button>
    </div>
  );
};

export default Dashboard;
