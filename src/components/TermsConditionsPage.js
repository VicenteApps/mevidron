import React from 'react';
import { translations } from '../utils/translations';

const TermsConditionsPage = ({ currentLanguage }) => {
  const t = translations[currentLanguage] || translations['es']; // Fallback to Spanish

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">{t.termsConditions}</h1>
        <div className="prose max-w-none text-gray-700">
          <p>
            Bienvenido a nuestro sitio web. Si continúa navegando y utilizando este sitio web, acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso, que junto con nuestra política de privacidad rigen la relación de  Mevi Serveis S.L con usted en relación con este sitio web.
          </p>
          <h2>Uso del Sitio Web</h2>
          <p>
            El contenido de las páginas de este sitio web es para su información general y uso exclusivo. Está sujeto a cambios sin previo aviso.
          </p>
          <p>
            Ni nosotros ni terceros ofrecemos garantía alguna en cuanto a la exactitud, puntualidad, rendimiento, integridad o idoneidad de la información y los materiales encontrados u ofrecidos en este sitio web para un propósito particular. Usted reconoce que dicha información y materiales pueden contener inexactitudes o errores y excluimos expresamente la responsabilidad por tales inexactitudes o errores en la máxima medida permitida por la ley.
          </p>
          <h2>Propiedad Intelectual</h2>
          <p>
            Este sitio web contiene material que es propiedad nuestra o está licenciado para nosotros. Este material incluye, pero no se limita a, el diseño, el diseño, el aspecto, la apariencia y los gráficos. La reproducción está prohibida salvo de conformidad con el aviso de derechos de autor, que forma parte de estos términos y condiciones.
          </p>
          <h2>Enlaces a Otros Sitios Web</h2>
          <p>
            De vez en cuando, este sitio web también puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para su conveniencia para proporcionar más información. No significan que respaldamos el(los) sitio(s) web. No tenemos responsabilidad por el contenido del(los) sitio(s) web enlazado(s).
          </p>
          <h2>Limitación de Responsabilidad</h2>
          <p>
            En ningún caso  Mevi Serveis S.L será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso o la imposibilidad de usar este sitio web.
          </p>
          {/* Add more terms and conditions text as needed */}
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;