import React from 'react';
import { translations } from '../utils/translations';

const LegalNoticePage = ({ currentLanguage }) => {
  const t = translations[currentLanguage] || translations['es']; // Fallback to Spanish

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">{t.legalNotice}</h1>
        <div className="prose max-w-none text-gray-700">
          <p>
            En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:
          </p>
          <p>
            La presente Política de Privacidad describe cómo  Mevi Serveis S.L recopila, utiliza y protege la información personal que usted nos proporciona a través de este sitio web.
          </p>
          <h2>Datos Identificativos</h2>
          <p>
            Titular: Mevi Serveis S.L <br />
            Domicilio social: Av.Príncep Benlloch,nº30, Planta Baixa, local 3, despatx B23. <br />
            NIF/CIF: 934832 K  <br />
            Correo electrónico: mevi@meviserveis.com <br />
            Teléfono: +376 397293 / +376 625505
          </p>
          <h2>Condiciones Generales de Uso</h2>
          <p>
            El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
          </p>
          <p>
            El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuera necesario para acceder a determinados servicios o contenidos. En dicho registro el USUARIO será responsable de aportar información veraz y lícita.
          </p>
          <h2>Propiedad Intelectual e Industrial</h2>
          <p>
             Mevi Serveis S.L por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad de  Mevi Serveis S.L o bien de sus licenciantes.
          </p>
          <p>
            Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de  Mevi Serveis S.L.
          </p>
          {/* Add more legal text as needed */}
        </div>
      </div>
    </div>
  );
};

export default LegalNoticePage;