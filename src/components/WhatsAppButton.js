import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="whatsapp://send?phone=376397293" // Enlace de WhatsApp actualizado a formato directo
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Contactar por WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.031 6.172a6.377 6.377 0 00-4.225 1.653c-.955.887-1.606 2.015-1.829 3.217-.224 1.203-.103 2.424.317 3.569l-.002.001-.511 1.978 1.92-.501.001-.002c1.084.593 2.33.912 3.617.913 3.792 0 6.868-3.075 6.868-6.867 0-1.816-.71-3.533-1.98-4.803a6.83 6.83 0 00-4.803-1.98zM12.031 7.61c1.415 0 2.755.55 3.76 1.555s1.555 2.345 1.555 3.76-1.079 3.76-3.76 3.76c-1.15 0-2.3-.394-3.237-1.144l-.1-.062-1.54 1.588 1.62-1.5-.06-.1a4.857 4.857 0 01-1.144-3.237c0-1.415.55-2.755 1.555-3.76s2.345-1.555 3.76-1.555zM17.45 6.59a.9.9 0 01-.636-.264l-1.539-1.54a.9.9 0 011.273-1.273l1.539 1.54a.9.9 0 01-.637 1.537z"></path>
      </svg>
    </a>
  );
};

export default WhatsAppButton;

// DONE