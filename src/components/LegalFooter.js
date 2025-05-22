import React from 'react';
import { translations } from '../utils/translations';

const LegalFooter = ({ setCurrentPage, currentLanguage }) => {
  const t = translations[currentLanguage] || translations['es']; // Fallback to Spanish

  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center text-sm">
        <div className="mb-4 space-x-4">
          <button onClick={() => setCurrentPage('legal-notice')} className="hover:underline">{t.legalNotice}</button>
          <button onClick={() => setCurrentPage('privacy-policy')} className="hover:underline">{t.privacyPolicy}</button>
          <button onClick={() => setCurrentPage('terms-conditions')} className="hover:underline">{t.termsConditions}</button>
          {/* Placeholder for Cookie Policy - usually a banner */}
          {/* <button onClick={() => setCurrentPage('cookie-policy')} className="hover:underline">Política de Cookies</button> */}
        </div>
        <p>&copy; 2025 MeviDron. {t.allRightsReserved}</p> {/* Actualizado el año a 2025 */}
      </div>
    </footer>
  );
};

export default LegalFooter;

// DONE