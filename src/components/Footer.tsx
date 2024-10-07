// src/components/Footer.tsx
import React from 'react';
import './Footer.css'; // Importar el CSS

const Footer: React.FC = () => {
  return (
    <footer>
      <p className='parrafo-pie'>&copy; {new Date().getFullYear()} EPS. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
