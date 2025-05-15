import React from 'react';

const HomeServicesSection = ({ setCurrentPage }) => {
  const services = [
    { id: 'limpieza-vertical', title: 'Limpieza vertical', description: 'Segura, rápida y sin andamios.' },
    { id: 'fotogrametria-aerea', title: 'Fotogrametría aérea', description: 'Modelos 3D y mapas precisos.' },
    { id: 'inspecciones-industriales', title: 'Inspecciones industriales', description: 'Detecta fallos sin parar operaciones.' },
    { id: 'vuelo-lidar', title: 'Vuelo LiDAR', description: 'Escaneos topográficos de alta precisión.' },
    { id: 'inspecciones-termicas', title: 'Inspecciones térmicas', description: 'Localiza pérdidas de energía.' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Nuestros Servicios Profesionales</h2>
        <p className="mt-4 text-lg text-gray-600">Explora cómo la tecnología drone puede transformar tu negocio.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-3 text-gray-600">{service.description}</p>
              <button
                onClick={() => setCurrentPage(`service-${service.id}`)} // Navegar a la página de servicio específica
                className="mt-4 text-blue-600 hover:underline font-medium"
              >
                Más detalles
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage('services')}
          className="mt-10 bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg"
        >
          Ver todos los servicios
        </button>
      </div>
    </section>
  );
};

export default HomeServicesSection;