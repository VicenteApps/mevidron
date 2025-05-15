import React from 'react';
import { translations } from '../utils/translations';

const PrivacyPolicyPage = ({ currentLanguage }) => {
  const t = translations[currentLanguage] || translations['es']; // Fallback to Spanish

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">{t.privacyPolicy}</h1>
        <div className="prose max-w-none text-gray-700">
          <p>
            La presente Política de Privacidad describe cómo [Nombre de la Empresa] recopila, utiliza y protege la información personal que usted nos proporciona a través de este sitio web.
          </p>
          <h2>Recopilación de Información Personal</h2>
          <p>
            Recopilamos información personal que usted nos proporciona voluntariamente al utilizar nuestro formulario de contacto, suscribirse a nuestro boletín informativo o interactuar con nuestros servicios. Esta información puede incluir su nombre, dirección de correo electrónico, número de teléfono y cualquier otra información que decida compartir con nosotros.
          </p>
          <h2>Uso de la Información Personal</h2>
          <p>
            La información personal recopilada se utiliza para los siguientes fines:
          </p>
          <ul>
            <li>Responder a sus consultas y proporcionarle la información solicitada.</li>
            <li>Enviar comunicaciones relacionadas con nuestros servicios, promociones o noticias (si ha dado su consentimiento).</li>
            <li>Mejorar nuestros servicios y la experiencia del usuario en nuestro sitio web.</li>
            <li>Cumplir con nuestras obligaciones legales.</li>
          </ul>
          <h2>Protección de la Información Personal</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger su información personal contra el acceso no autorizado, la divulgación, la alteración o la destrucción.
          </p>
          <h2>Compartir Información Personal</h2>
          <p>
            No vendemos, comercializamos ni alquilamos su información personal a terceros. Podemos compartir su información con proveedores de servicios de confianza que nos ayudan a operar nuestro sitio web o prestar nuestros servicios, siempre y cuando estas partes acuerden mantener la confidencialidad de su información.
          </p>
          <h2>Sus Derechos</h2>
          <p>
            De acuerdo con el Reglamento General de Protección de Datos (RGPD), usted tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, por favor contáctenos a través de los datos proporcionados en nuestro Aviso Legal.
          </p>
          <h2>Cambios a esta Política de Privacidad</h2>
          <p>
            Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Le notificaremos sobre cualquier cambio publicando la nueva política en esta página.
          </p>
          {/* Add more privacy policy text as needed */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;