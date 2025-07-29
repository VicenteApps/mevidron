import React from 'react';
import { translations } from '../utils/translations';

const ServicesPage = ({ setCurrentPage, currentLanguage }) => {
  const t = translations[currentLanguage] || translations['es']; // Fallback to Spanish

  const services = [
    { id: 'limpieza-vertical', title: t.serviceLimpiezaVertical, description: t.serviceLimpiezaVerticalDesc.split('.')[0] + '.', image: 'https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0Yj1Lc5cHLxysUGcrlHAMdQ0Ba6XFOPIJgkW1' }, // Imagen de limpieza vertical actualizada
    { id: 'fotogrametria-aerea', title: t.serviceFotogrametriaAerea, description: t.serviceFotogrametriaAereaDesc.split('.')[0] + '.', image: 'https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0d1iEgWGmOcYyX10bjsZMu7Wi9At5EN3G4gTf' }, // Imagen de fotogrametría/mapeo actualizada
    { id: 'inspecciones-industriales', title: t.serviceInspeccionesIndustriales, description: t.serviceInspeccionesIndustrialesDesc.split('.')[0] + '.', image: 'https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0RkRJLgj6STzbQpvUw3J8g9yKOPeqZ4xiNdIh' }, // Imagen de inspección industrial actualizada
    { id: 'vuelo-lidar', title: t.serviceVueloLiDAR, description: t.serviceVueloLiDARDesc.split('.')[0] + '.', image: 'https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0v7I6evyKJs9OrpDUz2LHG6YaodyTFNfcmRut' }, // Imagen de LiDAR/mapeo 3D actualizada
    { id: 'inspecciones-termicas', title: t.serviceInspeccionesTermicas, description: t.serviceInspeccionesTermicasDesc.split('.')[0] + '.', image: 'https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0lvFMqt8XbcAaSYNqKr0LMw3z9nWTuy4eIjix' }, // Imagen de inspección térmica actualizada
    { id: 'modelado-3d', title: t.service3DModeling, description: t.service3DModelingDesc.split('.')[0] + '.', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' }, // Imagen genérica para modelado 3D
  ];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">{t.ourProfessionalServices} con Drones</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" loading="lazy"/>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h2>
                <p className="text-gray-600 text-base mb-4">{service.description}</p>
                <button
                  onClick={() => setCurrentPage(`service-${service.id}`)}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {t.moreDetails}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;