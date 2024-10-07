import React, { useState } from 'react';
import './RequestAppointment.css';
const RequestAppointment: React.FC = () => {
  const [diagnosis, setDiagnosis] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = () => {
    if (!diagnosis) {
      alert('Por favor selecciona un diagnóstico.');
      return;
    }

    // Asignar especialista según el diagnóstico
    if (diagnosis === 'diabetes') {
      setSpecialist('internista');
    } else if (diagnosis === 'hipertensión') {
      setSpecialist('cardiólogo');
    } else if (diagnosis === 'cáncer') {
      setSpecialist('oncólogo');
    }

    // Validar que la cita tenga fecha y hora válidas
    if (!appointmentDate || !appointmentTime) {
      alert('Por favor selecciona una fecha y hora válida.');
      return;
    }

    alert(`Cita solicitada con el especialista: ${specialist} el ${appointmentDate} a las ${appointmentTime}`);
    
    // Aquí podrías hacer una llamada a la API para registrar la cita con el especialista
  };

  // Función para limitar la fecha solo al mes actual
  const getCurrentMonth = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Obtener el mes actual con formato MM
    const day = '01';
    return `${year}-${month}-${day}`;
  };

  const getEndOfMonth = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const lastDay = new Date(year, month, 0).getDate(); // Obtener el último día del mes
    return `${year}-${month.toString().padStart(2, '0')}-${lastDay}`;
  };

  return (
    <div className='citas'>
      <h2 className='titulo-cita'>Solicitar Cita Médica</h2>

      <label className='label-punto' >Selecciona el diagnóstico:</label>
      <select onChange={(e) => setDiagnosis(e.target.value)}>
        <option value="">Selecciona el diagnóstico</option>
        <option value="diabetes">Diabetes</option>
        <option value="hipertensión">Hipertensión</option>
        <option value="cáncer">Cáncer</option>
      </select>

      <label className='label-punto'>Selecciona la fecha:</label>
      <input
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        min={getCurrentMonth()}
        max={getEndOfMonth()}
      />

      <label className='label-punto'>Selecciona la hora:</label>
      <input
        type="time"
        value={appointmentTime}
        onChange={(e) => setAppointmentTime(e.target.value)}
        min="08:00"
        max="17:00"
      />

      <button onClick={handleSubmit}>Solicitar Cita</button>
    </div>
  );
};

export default RequestAppointment;


