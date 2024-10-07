import React, { useState, useEffect } from 'react';
import './Prescription.css';

interface PrescriptionProps {
  patientData: {
    documentNumber: string;
    patientName: string;
    diagnosis: string;
    prescription: string;
  };
}

const Prescription: React.FC<PrescriptionProps> = ({ patientData }) => {
  const [authorizationStatus, setAuthorizationStatus] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const storedRequest = JSON.parse(localStorage.getItem('authorizationRequest') || '{}');
    if (storedRequest.documentNumber === patientData.documentNumber) {
      setAuthorizationStatus(storedRequest.status);
    }
  }, [patientData.documentNumber]);

  const handleRequestAuthorization = () => {
    // Guardar la solicitud en localStorage
    const request = {
      documentNumber: patientData.documentNumber,
      patientName: patientData.patientName,
      diagnosis: patientData.diagnosis,
      prescription: patientData.prescription,
      status: 'Pendiente',
    };
    localStorage.setItem('authorizationRequest', JSON.stringify(request));

    // Mostrar notificación
    setNotification('Solicitud enviada al administrador');
    setTimeout(() => setNotification(''), 3000); // Desaparece después de 3 segundos
  };

  return (
    <div className="prescription-container">
      <h2>Fórmula Médica</h2>
      <p>Nombre del paciente: {patientData.patientName}</p>
      <p>Diagnóstico: {patientData.diagnosis}</p>
      <p>Fórmula Médica: {patientData.prescription}</p>

      {authorizationStatus ? (
        <p>Estado de Autorización: {authorizationStatus}</p>
      ) : (
        <>
          <button onClick={handleRequestAuthorization}>Solicitar Autorización</button>
          {notification && <p className="notification">{notification}</p>}
        </>
      )}
    </div>
  );
};

export default Prescription;
