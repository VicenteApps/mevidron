import React from 'react';

const HomeTechnologySection = ({ setCurrentPage }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Tecnología de Vanguardia</h2>
        <p className="mt-4 text-lg text-gray-600">Utilizamos equipos de última generación para garantizar resultados precisos y eficientes.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Drones DJI Profesionales</h3>
            <p className="mt-3 text-gray-600">Flotas de drones de alta gama para cada tipo de misión.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Sensores Avanzados</h3>
            <p className="mt-3 text-gray-600">LiDAR, RGB y térmicos para capturar datos detallados.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Software Especializado</h3>
            <p className="mt-3 text-gray-600">Análisis de datos y generación de informes precisos.</p>
          </div>
        </div>
        <button
          onClick={() => setCurrentPage('technology')}
          className="mt-10 bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg"
        >
          Conoce nuestra tecnología
        </button>
      </div>
    </section>
  );
};

export default HomeTechnologySection;