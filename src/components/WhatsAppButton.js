import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="whatsapp://send?phone=376397293" // Enlace de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50" // Ajustado padding para la imagen
      aria-label="Contactar por WhatsApp"
    >
      <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0u66rXhYvblOpQY7AJg0nTmsBhyINFZ6E3XCU" alt="WhatsApp Icon" className="w-8 h-8" /> {/* Imagen de WhatsApp actualizada */}
    </a>
  );
};

export default WhatsAppButton;