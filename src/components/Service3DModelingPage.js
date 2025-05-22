import React from 'react';
import { translations } from '../utils/translations';

const Service3DModelingPage = ({ currentLanguage }) => {
  const t = translations[currentLanguage] || translations['es']; // Fallback to Spanish

  // Reemplazar con la URL real de tu video
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Ejemplo de URL de video (Rick Astley) - ¡Cámbiala por la tuya!

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">{t.service3DModeling}</h1>
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
            {/* Video Player */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src={videoUrl}
                title="Video de Modelado 3D"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="md:w-1/2 md:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.service3DModeling}</h2>
            <p className="text-gray-700 text-lg mb-6">
              {t.service3DModelingDesc}
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.service3DModelingBenefitsTitle}</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>{t.service3DModelingBenefits1}</li>
                <li>{t.service3DModelingBenefits2}</li>
                <li>{t.service3DModelingBenefits3}</li>
                <li>{t.service3DModelingBenefits4}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.service3DModelingIncludesTitle}</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>{t.service3DModelingIncludes1}</li>
                <li>{t.service3DModelingIncludes2}</li>
                <li>{t.service3DModelingIncludes3}</li>
                <li>{t.service3DModelingIncludes4}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service3DModelingPage;

// DONE