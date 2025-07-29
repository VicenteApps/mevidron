import React, { useState } from 'react';
import { translations } from '../utils/translations';
import Captcha from './Captcha'; // Importar el componente Captcha

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
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false); // Estado para el captcha

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaVerify = (verified) => {
    setIsCaptchaVerified(verified);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isCaptchaVerified) {
      alert(t.captchaNotVerified); // Mostrar mensaje si el captcha no está verificado
      return;
    }

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
                  <option value="modelado-3d">{t.service3DModeling}</option> {/* Añadido el nuevo servicio */}
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

              <Captcha onVerify={handleCaptchaVerify} /> {/* Integrar el componente Captcha */}

              <button
                type="submit"
                className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors shadow-lg ${!isCaptchaVerified ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                disabled={!isCaptchaVerified} // Deshabilitar el botón si el captcha no está verificado
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
                <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0u66rXhYvblOpQY7AJg0nTmsBhyINFZ6E3XCU" alt="WhatsApp Icon" className="w-8 h-8" loading="lazy" /> {/* Imagen de WhatsApp actualizada */}
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