import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import UserDashboard from './pages/Dashboard';
import DoctorDashboard from './components/Doctor/MedicalForm';
import AdminOrders from './components/Admin/Orders';
import PrivateRoute from './pages/PrivateRoute';
import History from './components/User/History';
import Prescription from './components/User/Prescription';
import RequestAppointment from './components/User/RequestAppointment';

const App: React.FC = () => {
  // Ejemplo de datos de paciente
  const [patientData] = useState({
    documentNumber: '12345678',
    patientName: 'John Doe',
    diagnosis: 'Diabetes',
    prescription: 'Insulina cada 8 horas'
  });

  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 60px)' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/user/dashboard" element={<PrivateRoute role="user"><UserDashboard /></PrivateRoute>} />
          <Route path="/doctor/dashboard" element={<PrivateRoute role="doctor"><DoctorDashboard /></PrivateRoute>} />
          <Route path="/admin/orders" element={<PrivateRoute role="admin"><AdminOrders /></PrivateRoute>} />
          <Route path="/user/history" element={<PrivateRoute role="user"><History /></PrivateRoute>} />
          
          {/* Aquí pasamos la propiedad patientData a Prescription */}
          <Route
            path="/user/prescription"
            element={<PrivateRoute role="user"><Prescription patientData={patientData} /></PrivateRoute>}
          />
          
          <Route path="/user/request-appointment" element={<PrivateRoute role="user"><RequestAppointment /></PrivateRoute>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;


