import React, { useState } from 'react';
import './MedicalForm.css';

interface FormData {
  documentNumber: string;
  patientName: string;
  diagnosis: string;
  prescription: string;
}

const MedicalForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    documentNumber: '',
    patientName: '',
    diagnosis: '',
    prescription: '',
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('patientData', JSON.stringify(formData)); // Guardar datos localmente
    console.log("Datos guardados", formData);
    // Limpiar el formulario después de guardar
    setFormData({
      documentNumber: '',
      patientName: '',
      diagnosis: '',
      prescription: '',
    });
  };

  return (
    <form className="medical-form" onSubmit={handleSubmit}>
      <h2 className="medical-form-title">Historia clinica del paciente</h2>
      
      <label className="medical-form-label">Número de Documento:</label>
      <input
        type="text"
        value={formData.documentNumber}
        onChange={(e) => setFormData({ ...formData, documentNumber: e.target.value })}
        required
        className="medical-form-input"
      />

      <label className="medical-form-label">Nombre del Paciente:</label>
      <input
        type="text"
        value={formData.patientName}
        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
        required
        className="medical-form-input"
      />

      <label className="medical-form-label">Diagnóstico:</label>
      <input
        type="text"
        value={formData.diagnosis}
        onChange={(e) => setFormData({ ...formData, diagnosis: e.target.value })}
        required
        className="medical-form-input"
      />

      <label className="medical-form-label">Fórmula Médica:</label>
      <textarea
        value={formData.prescription}
        onChange={(e) => setFormData({ ...formData, prescription: e.target.value })}
        required
        className="medical-form-textarea"
      />

      <button className="medical-form-button" type="submit">Guardar</button>
    </form>
  );
};

export default MedicalForm;

