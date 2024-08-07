// src/components/Footer/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
