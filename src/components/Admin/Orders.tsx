import React, { useState } from 'react';
import './Orders.css';

const Orders = () => {
  const [authorizationRequest, setAuthorizationRequest] = useState(
    JSON.parse(localStorage.getItem('authorizationRequest') || '{}')
  );
  const [status, setStatus] = useState(authorizationRequest.status || 'Pendiente');
  const [rejectionReason, setRejectionReason] = useState('');

  const handleApprove = () => {
    setStatus('Autorizado');
    updateAuthorizationStatus('Autorizado');
  };

  const handleReject = () => {
    setStatus('No Autorizado');
    updateAuthorizationStatus('No Autorizado', rejectionReason);
  };

  const updateAuthorizationStatus = (newStatus: string, reason?: string) => {
    const updatedRequest = { ...authorizationRequest, status: newStatus, reason };
    localStorage.setItem('authorizationRequest', JSON.stringify(updatedRequest));
    setAuthorizationRequest(updatedRequest);
  };

  return (
    <div className="orders-container">
      <h2 className="orders-title">Autorizar Órdenes Médicas</h2>
      {authorizationRequest.documentNumber ? (
        <div className="order-details">
          <p className="order-field"><strong>Documento:</strong> {authorizationRequest.documentNumber}</p>
          <p className="order-field"><strong>Nombre:</strong> {authorizationRequest.patientName}</p>
          <p className="order-field"><strong>Diagnóstico:</strong> {authorizationRequest.diagnosis}</p>
          <p className="order-field"><strong>Fórmula:</strong> {authorizationRequest.prescription}</p>
          <p className="order-status"><strong>Estado:</strong> {status}</p>
          
          {status === 'Pendiente' && (
            <div className="action-buttons">
              <button className="approve-button" onClick={handleApprove}>Aprobar</button>
              <button className="reject-button" onClick={handleReject}>Rechazar</button>
              {status === 'No Autorizado' && (
                <textarea
                  className="rejection-reason"
                  placeholder="Motivo del rechazo"
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                />
              )}
            </div>
          )}
        </div>
      ) : (
        <p className="no-orders">No hay solicitudes de autorización pendientes.</p>
      )}
    </div>
  );
};

export default Orders;
