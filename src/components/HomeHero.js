import React from 'react';
import { translations } from '../utils/translations';

const HomeHero = ({ setCurrentPage, currentLanguage }) => {
  const t = translations[currentLanguage] || translations['es']; // Fallback to Spanish

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-32 mt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {t.slogan.split(': ')[0]}: <br /> {t.slogan.split(': ')[1]}
        </h1>
        <p className="mt-6 text-xl opacity-90">
          {t.heroSubtitle}
        </p>
        <div className="mt-10 space-x-4">
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors shadow-lg"
          >
            {t.requestQuote}
          </button>
          <a
            href="whatsapp://send?phone=376397293" // Enlace de WhatsApp actualizado a formato directo
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg inline-flex items-center"
          >
            <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0u66rXhYvblOpQY7AJg0nTmsBhyINFZ6E3XCU" alt="WhatsApp Icon" className="w-6 h-6 mr-2" /> {/* Imagen de WhatsApp actualizada */}
            {t.whatsappContact}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;