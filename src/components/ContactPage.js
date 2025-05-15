import React, { useState } from 'react';
import { translations } from '../utils/translations';

const ContactPage = ({ currentLanguage }) => {
  const t = translations[currentLanguage] || translations['es']; // Fallback to Spanish

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construir el cuerpo del correo
    const subject = `Mensaje de contacto desde la web - Servicio: ${formData.service || 'No especificado'}`;
    const body = `
      Nombre: ${formData.name}
      Email: ${formData.email}
      Teléfono: ${formData.phone || 'No proporcionado'}
      Tipo de servicio: ${formData.service || 'No especificado'}
      Mensaje:
      ${formData.message}
    `;

    // Crear el enlace mailto
    const mailtoLink = `mailto:mevi@meviserveis.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Abrir el cliente de correo
    window.location.href = mailtoLink;

    // Opcional: Mostrar mensaje de éxito después de intentar abrir el cliente de correo
    setIsSubmitted(true);
    // Resetear formulario después de un tiempo o acción exitosa
    // setTimeout(() => {
    //   setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    //   setIsSubmitted(false);
    // }, 5000);
  };

  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">{t.contactPageTitle}</h1>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {isSubmitted ? (
            <div className="text-center text-green-600 font-semibold text-xl">
              {t.contactFormSuccess}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">{t.contactFormName}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">{t.contactFormEmail}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">{t.contactFormPhone}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 text-sm font-semibold mb-2">{t.contactFormService}</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                >
                  <option value="">{t.selectService}</option>
                  <option value="limpieza">{t.serviceLimpiezaVertical}</option>
                  <option value="fotogrametria">{t.serviceFotogrametriaAerea}</option>
                  <option value="inspecciones">{t.serviceInspeccionesIndustriales}</option>
                  <option value="lidar">{t.serviceVueloLiDAR}</option>
                  <option value="termicas">{t.serviceInspeccionesTermicas}</option>
                  <option value="otro">{t.serviceOther}</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">{t.contactFormMessage}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                {t.contactFormSubmit}
              </button>
            </form>
          )}

          <div className="mt-8 text-center text-gray-700">
            <p className="mb-2">{t.phone} <a href="tel:+376397293" className="text-blue-600 hover:underline">+376 397293</a> / <a href="tel:+376625505" className="text-blue-600 hover:underline">+376 625505</a></p> {/* Números de teléfono actualizados */}
            <p className="mb-2">{t.email} <a href="mailto:mevi@meviserveis.com" className="text-blue-600 hover:underline">mevi@meviserveis.com</a></p> {/* Correo electrónico actualizado */}
            {/* Ubicación eliminada */}
            <div className="flex justify-center mt-4 space-x-4">
              {/* WhatsApp Icon */}
              <a href="whatsapp://send?phone=376397293" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.031 6.172a6.377 6.377 0 00-4.225 1.653c-.955.887-1.606 2.015-1.829 3.217-.224 1.203-.103 2.424.317 3.569l-.002.001-.511 1.978 1.92-.501.001-.002c1.084.593 2.33.912 3.617.913 3.792 0 6.868-3.075 6.868-6.867 0-1.816-.71-3.533-1.98-4.803a6.83 6.83 0 00-4.803-1.98zM12.031 7.61c1.415 0 2.755.55 3.76 1.555s1.555 2.345 1.555 3.76-1.079 3.76-3.76 3.76c-1.15 0-2.3-.394-3.237-1.144l-.1-.062-1.54 1.588 1.62-1.5-.06-.1a4.857 4.857 0 01-1.144-3.237c0-1.415.55-2.755 1.555-3.76s2.345-1.555 3.76-1.555zM17.45 6.59a.9.9 0 01-.636-.264l-1.539-1.54a.9.9 0 011.273-1.273l1.539 1.54a.9.9 0 01-.637 1.537z"></path>
                </svg>
              </a>
              {/* Social Media Icons Placeholder */}
              {/* <a href="#" className="text-gray-600 hover:text-gray-900">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.85-1.691 4.919-4.919 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.85-.07-3.252-.149-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.205.012-3.584.07-4.85 1.691-4.919 4.919-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.78-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98zm0 6.868c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zm0 8.99c-2.405 0-4.352-1.948-4.352-4.352 0-2.405 1.947-4.352 4.352-4.352 2.404 0 4.352 1.947 4.352 4.352 0 2.404-1.948 4.352-4.352 4.352zm6.406-13.956a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"></path>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

// DONE