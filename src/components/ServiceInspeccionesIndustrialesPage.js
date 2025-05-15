import React from 'react';
import { translations } from '../utils/translations';

const ServiceInspeccionesIndustrialesPage = ({ currentLanguage }) => {
  const t = translations[currentLanguage] || translations['es']; // Fallback to Spanish

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">{t.serviceInspeccionesIndustrialesTitle}</h1>
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
            <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0RkRJLgj6STzbQpvUw3J8g9yKOPeqZ4xiNdIh" alt={t.serviceInspeccionesIndustrialesTitle} className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2 md:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.serviceInspeccionesIndustrialesTitle}</h2>
            <p className="text-gray-700 text-lg mb-6">
              {t.serviceInspeccionesIndustrialesDesc}
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.serviceInspeccionesIndustrialesApplicationsTitle}</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>{t.serviceInspeccionesIndustrialesApplications1}</li>
                <li>{t.serviceInspeccionesIndustrialesApplications2}</li>
                <li>{t.serviceInspeccionesIndustrialesApplications3}</li>
                <li>{t.serviceInspeccionesIndustrialesApplications4}</li>
                <li>{t.serviceInspeccionesIndustrialesApplications5}</li>
                <li>{t.serviceInspeccionesIndustrialesApplications6}</li>
              </ul>
            </div>
            {/* Add more sections */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInspeccionesIndustrialesPage;