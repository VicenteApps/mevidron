import React from 'react';
import { translations } from '../utils/translations';

const TechnologyPage = ({ currentLanguage }) => {
  const t = translations[currentLanguage] || translations['es']; // Fallback to Spanish

  const technologies = [
    {
      title: t.djiDrones,
      description: t.djiDronesDesc,
      image: 'https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0JQgsXwipYIkKhaEN0eCX7zGogwrU3sn8TcHm' // Imagen de drones DJI actualizada
    },
    {
      title: t.advancedSensors,
      description: t.advancedSensorsDesc,
      image: 'https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0v7I6evyKJs9OrpDUz2LHG6YaodyTFNfcmRut' // Imagen de sensores/tecnología actualizada
    },
    {
      title: t.specializedSoftware,
      description: t.specializedSoftwareDesc,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' // Imagen de software/análisis
    },
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">{t.vanguardTechnology}</h1>
        {technologies.map((tech, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
              <img src={tech.image} alt={tech.title} className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2 md:px-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{tech.title}</h2>
              <p className="text-gray-700 text-lg">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyPage;