import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/263774603865?text=Hi_Nobytechy_Systems"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
    >
      <FaWhatsapp size={25} />
    </a>
  );
};

export default FloatingWhatsAppButton;
