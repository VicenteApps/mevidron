import React from 'react';
import { translations } from '../utils/translations';

const ServiceFotogrametriaAereaPage = ({ currentLanguage }) => {
  const t = translations[currentLanguage] || translations['es']; // Fallback to Spanish

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">{t.serviceFotogrametriaAereaTitle}</h1>
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
            <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0d1iEgWGmOcYyX10bjsZMu7Wi9At5EN3G4gTf" alt={t.serviceFotogrametriaAereaTitle} className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2 md:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.serviceFotogrametriaAereaTitle}</h2>
            <p className="text-gray-700 text-lg mb-6">
              {t.serviceFotogrametriaAereaDesc}
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.serviceFotogrametriaAereaUsesTitle}</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>{t.serviceFotogrametriaAereaUses1}</li>
                <li>{t.serviceFotogrametriaAereaUses2}</li>
                <li>{t.serviceFotogrametriaAereaUses3}</li>
                <li>{t.serviceFotogrametriaAereaUses4}</li>
                <li>{t.serviceFotogrametriaAereaUses5}</li>
                <li>{t.serviceFotogrametriaAereaUses6}</li>
                <li>{t.serviceFotogrametriaAereaUses7}</li>
              </ul>
            </div>
            {/* Add more sections */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFotogrametriaAereaPage;