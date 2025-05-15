import React from 'react';
import { translations } from '../utils/translations';

const ServiceLimpiezaVerticalPage = ({ currentLanguage }) => {
  const t = translations[currentLanguage] || translations['es']; // Fallback to Spanish

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">{t.serviceLimpiezaVerticalTitle}</h1>
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
            <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0Yj1Lc5cHLxysUGcrlHAMdQ0Ba6XFOPIJgkW1" alt={t.serviceLimpiezaVerticalTitle} className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2 md:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.serviceLimpiezaVerticalTitle}</h2>
            <p className="text-gray-700 text-lg mb-6">
              {t.serviceLimpiezaVerticalDesc}
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.serviceLimpiezaVerticalBenefitsTitle}</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>{t.serviceLimpiezaVerticalBenefits1}</li>
                <li>{t.serviceLimpiezaVerticalBenefits2}</li>
                <li>{t.serviceLimpiezaVerticalBenefits3}</li>
                <li>{t.serviceLimpiezaVerticalBenefits4}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.serviceLimpiezaVerticalExamplesTitle}</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>{t.serviceLimpiezaVerticalExamples1}</li>
                <li>{t.serviceLimpiezaVerticalExamples2}</li>
                <li>{t.serviceLimpiezaVerticalExamples3}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Add more sections like "Cómo trabajamos", "Casos de éxito", etc. */}
      </div>
    </div>
  );
};

export default ServiceLimpiezaVerticalPage;