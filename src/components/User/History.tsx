// src/components/User/History.tsx
import React from 'react';
import './History.css';

const History: React.FC = () => {
  const patientData = JSON.parse(localStorage.getItem('patientData') || '{}'); // Cargar datos desde localStorage

  if (!patientData.documentNumber) {
    return <p>No se encontraron datos de la historia clínica.</p>;
  }

  return (
    <div className="history-container">
  <h2>Historia Clínica</h2>
  <p><strong>Número de Documento:</strong> {patientData.documentNumber}</p>
  <p><strong>Nombre del Paciente:</strong> {patientData.patientName}</p>
  <p><strong>Diagnóstico:</strong> {patientData.diagnosis}</p>
  <button onClick={() => window.print()}>Imprimir</button>
</div>
  );
};

export default History;
