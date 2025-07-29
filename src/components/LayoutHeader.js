import React, { useState } from 'react';
import { translations } from '../utils/translations';

const LayoutHeader = ({ currentPage, setCurrentPage, currentLanguage, setCurrentLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (e) => {
    setCurrentLanguage(e.target.value);
  };

  const t = translations[currentLanguage] || translations['ca']; // Fallback to Catalan

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" onClick={() => navigateTo('home')} className="flex items-center">
            <img
              src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc01E0JVNcZ9EqsBCgLaIcfUlJ8T30Vwty5SXnr" // Logo de la empresa
              alt="Logo MeviDron"
              className="h-12 md:h-14 transition-transform hover:scale-105" // Aumentado el tamaño del logo
              loading="lazy"
            />
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => navigateTo('home')} className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            {t.home}
          </button>
          <button onClick={() => navigateTo('services')} className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            {t.services}
          </button>
          <button onClick={() => navigateTo('technology')} className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            {t.technology}
          </button>
          <button onClick={() => navigateTo('contact')} className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            {t.contact}
          </button>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <select
            className="border rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={currentLanguage}
            onChange={handleLanguageChange}
          >
            <option value="ca">Català</option>
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <button onClick={() => navigateTo('home')} className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 border-b">
            {t.home}
          </button>
          <button onClick={() => navigateTo('services')} className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 border-b">
            {t.services}
          </button>
          <button onClick={() => navigateTo('technology')} className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 border-b">
            {t.technology}
          </button>
          <button onClick={() => navigateTo('contact')} className="block w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100 border-b">
            {t.contact}
          </button>
          <div className="px-4 py-3 border-t">
            <select
              className="w-full border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={currentLanguage}
              onChange={handleLanguageChange}
            >
              <option value="ca">Català</option>
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};

export default LayoutHeader;