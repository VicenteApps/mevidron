import React from 'react';
import { translations } from '../utils/translations';

const HomeServicesSection = ({ setCurrentPage, currentLanguage }) => {
  const t = translations[currentLanguage] || translations['ca']; // Fallback to Catalan

  const services = [
    { id: 'limpieza-vertical', title: t.serviceLimpiezaVertical, description: t.serviceLimpiezaVerticalDesc.split('.')[0] + '.' },
    { id: 'fotogrametria-aerea', title: t.serviceFotogrametriaAerea, description: t.serviceFotogrametriaAereaDesc.split('.')[0] + '.' },
    { id: 'inspecciones-industriales', title: t.serviceInspeccionesIndustriales, description: t.serviceInspeccionesIndustrialesDesc.split('.')[0] + '.' },
    { id: 'vuelo-lidar', title: t.serviceVueloLiDAR, description: t.serviceVueloLiDARDesc.split('.')[0] + '.' },
    { id: 'inspecciones-termicas', title: t.serviceInspeccionesTermicas, description: t.serviceInspeccionesTermicasDesc.split('.')[0] + '.' },
    { id: 'modelado-3d', title: t.service3DModeling, description: t.service3DModelingDesc.split('.')[0] + '.' }, // Añadido el nuevo servicio
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t.ourProfessionalServices}</h2>
        <p className="mt-4 text-lg text-gray-600">{t.heroSubtitle}</p> {/* Reutilizado el subtítulo del héroe */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-3 text-gray-600">{service.description}</p>
              <button
                onClick={() => setCurrentPage(`service-${service.id}`)} // Navegar a la página de servicio específica
                className="mt-4 text-blue-600 hover:underline font-medium"
              >
                {t.moreDetails}
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage('services')}
          className="mt-10 bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg"
        >
          {t.services} {/* Botón para ver todos los servicios */}
        </button>
      </div>
    </section>
  );
};

export default HomeServicesSection;

// DONE