import React from 'react';

const HomeContactSection = ({ setCurrentPage }) => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">¿Listo para empezar?</h2>
        <p className="mt-4 text-lg text-gray-600">Contáctanos hoy mismo para solicitar un presupuesto o resolver tus dudas.</p>
        <button
          onClick={() => setCurrentPage('contact')}
          className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          Contáctanos
        </button>
      </div>
    </section>
  );
};

export default HomeContactSection;