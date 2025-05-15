import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HomeHero from './components/HomeHero';
import HomeServicesSection from './components/HomeServicesSection';
import HomeTechnologySection from './components/HomeTechnologySection';
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


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLanguage, setCurrentLanguage] = useState('es'); // Default language

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HomeHero setCurrentPage={setCurrentPage} currentLanguage={currentLanguage} />
            <HomeServicesSection setCurrentPage={setCurrentPage} currentLanguage={currentLanguage} />
            <HomeTechnologySection setCurrentPage={setCurrentPage} currentLanguage={currentLanguage} />
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