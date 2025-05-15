import React from 'react';
import { translations } from '../utils/translations';

const ServiceInspeccionesTermicasPage = ({ currentLanguage }) => {
  const t = translations[currentLanguage] || translations['es']; // Fallback to Spanish

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">{t.serviceInspeccionesTermicasTitle}</h1>
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
            <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0lvFMqt8XbcAaSYNqKr0LMw3z9nWTuy4eIjix" alt={t.serviceInspeccionesTermicasTitle} className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2 md:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.serviceInspeccionesTermicasTitle}</h2>
            <p className="text-gray-700 text-lg mb-6">
              {t.serviceInspeccionesTermicasDesc}
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.serviceInspeccionesTermicasApplicationsTitle}</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>{t.serviceInspeccionesTermicasApplications1}</li>
                <li>{t.serviceInspeccionesTermicasApplications2}</li>
                <li>{t.serviceInspeccionesTermicasApplications3}</li>
                <li>{t.serviceInspeccionesTermicasApplications4}</li>
              </ul>
            </div>
            {/* Add more sections */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInspeccionesTermicasPage;

// DONE