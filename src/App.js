import React, { useState, useEffect } from 'react'; // Importar useEffect
import LayoutHeader from './components/LayoutHeader';
import HomeHero from './components/HomeHero';
import HomeServicesSection from './components/HomeServicesSection';
import HomeTechnologySection from './components/TechnologyPage'; // Corregido el nombre del componente
import HomeContactSection from './components/HomeContactSection';
import ServicesPage from './components/ServicesPage';
import TechnologyPage from './components/TechnologyPage';
import ContactPage from './components/ContactPage';
import LegalNoticePage from './components/LegalNoticePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsConditionsPage from './components/TermsConditionsPage';
import LegalFooter from './components/LegalFooter';
import WhatsAppButton from './components/WhatsAppButton';
import ServiceLimpiezaVerticalPage from './components/ServiceLimpiezaVerticalPage';
import ServiceFotogrametriaAereaPage from './components/ServiceFotogrametriaAereaPage';
import ServiceInspeccionesIndustrialesPage from './components/ServiceInspeccionesIndustrialesPage';
import ServiceVueloLiDARPage from './components/ServiceVueloLiDARPage';
import ServiceInspeccionesTermicasPage from './components/ServiceInspeccionesTermicasPage';
import Service3DModelingPage from './components/Service3DModelingPage';
import { translations } from './utils/translations'; // Importar traducciones

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLanguage, setCurrentLanguage] = useState('ca'); // Default language set to Catalan

  // Efecto para actualizar el título de la página
  useEffect(() => {
    const t = translations[currentLanguage] || translations['ca']; // Fallback to Catalan
    let pageTitle = 'MeviDron'; // Título base

    switch (currentPage) {
      case 'home':
        pageTitle = `MeviDron - ${t.home}`;
        break;
      case 'services':
        pageTitle = `MeviDron - ${t.services}`;
        break;
      case 'technology':
        pageTitle = `MeviDron - ${t.technology}`;
        break;
      case 'contact':
        pageTitle = `MeviDron - ${t.contact}`;
        break;
      case 'legal-notice':
        pageTitle = `MeviDron - ${t.legalNotice}`;
        break;
      case 'privacy-policy':
        pageTitle = `MeviDron - ${t.privacyPolicy}`;
        break;
      case 'terms-conditions':
        pageTitle = `MeviDron - ${t.termsConditions}`;
        break;
      case 'service-limpieza-vertical':
        pageTitle = `MeviDron - ${t.serviceLimpiezaVertical}`;
        break;
      case 'service-fotogrametria-aerea':
        pageTitle = `MeviDron - ${t.serviceFotogrametriaAerea}`;
        break;
      case 'service-inspecciones-industriales':
        pageTitle = `MeviDron - ${t.serviceInspeccionesIndustriales}`;
        break;
      case 'service-vuelo-lidar':
        pageTitle = `MeviDron - ${t.serviceVueloLiDAR}`;
        break;
      case 'service-inspecciones-termicas':
        pageTitle = `MeviDron - ${t.serviceInspeccionesTermicas}`;
        break;
      case 'service-modelado-3d':
        pageTitle = `MeviDron - ${t.service3DModeling}`;
        break;
      default:
        pageTitle = 'MeviDron - Página no encontrada';
        break;
    }

    document.title = pageTitle;
  }, [currentPage, currentLanguage]); // Dependencias del efecto

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HomeHero setCurrentPage={setCurrentPage} currentLanguage={currentLanguage} />
            <HomeServicesSection setCurrentPage={setCurrentPage} currentLanguage={currentLanguage} />
            <TechnologyPage currentLanguage={currentLanguage} /> {/* Usar TechnologyPage directamente */}
            <HomeContactSection setCurrentPage={setCurrentPage} currentLanguage={currentLanguage} />
          </>
        );
      case 'services':
        return <ServicesPage setCurrentPage={setCurrentPage} currentLanguage={currentLanguage} />;
      case 'technology':
        return <TechnologyPage currentLanguage={currentLanguage} />;
      case 'contact':
        return <ContactPage currentLanguage={currentLanguage} />;
      case 'legal-notice':
        return <LegalNoticePage currentLanguage={currentLanguage} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage currentLanguage={currentLanguage} />;
      case 'terms-conditions':
        return <TermsConditionsPage currentLanguage={currentLanguage} />;
      case 'service-limpieza-vertical':
        return <ServiceLimpiezaVerticalPage currentLanguage={currentLanguage} />;
      case 'service-fotogrametria-aerea':
        return <ServiceFotogrametriaAereaPage currentLanguage={currentLanguage} />;
      case 'service-inspecciones-industriales':
        return <ServiceInspeccionesIndustrialesPage currentLanguage={currentLanguage} />;
      case 'service-vuelo-lidar':
        return <ServiceVueloLiDARPage currentLanguage={currentLanguage} />;
      case 'service-inspecciones-termicas':
        return <ServiceInspeccionesTermicasPage currentLanguage={currentLanguage} />;
      case 'service-modelado-3d':
        return <Service3DModelingPage currentLanguage={currentLanguage} />;
      default:
        return (
          <div className="pt-20 text-center text-red-600">
            Página no encontrada.
          </div>
        );
    }
  };

  return (
    <div className="font-sans antialiased">
      <LayoutHeader setCurrentPage={setCurrentPage} currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
      <main>
        {renderPage()}
      </main>
      <LegalFooter setCurrentPage={setCurrentPage} currentLanguage={currentLanguage} />
      <WhatsAppButton />
    </div>
  );
};

export default App;

// DONE