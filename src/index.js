import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ConfigProvider } from 'antd';
import { Analytics } from "@vercel/analytics/react"
import './index.css';

// Import your existing components
import HeroSection from './components/Hero/HeroSection.jsx';
import AboutSection from './components/AboutSection/AboutSection.jsx';
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection.jsx';
import OurWorkSection from './components/OurWorkSection/OurWorkSection.jsx';
import CtaSection from './components/CtaButton/CtaButton.jsx';
import FooterSection from './components/FooterSection/FooterSection.jsx';
import BackToTopButton from './components/BackToTopButton/BackToTopButton.js';
import ServicesGallery from './components/ServicesGallery/ServicesGallery.jsx';


// New SEO components
const SeoMetadata = () => {
  return (
    <Helmet>
      <title>Professional Garden & Landscape Design Services | Leafline Garden Design</title>
      <meta name="description" content="Transform your outdoor space with expert garden design, pruning, and landscape architecture services. We create sustainable, beautiful gardens that last." />
      <meta name="keywords" content="garden design, landscape design, pruning, outdoor transformation, professional landscaping, sustainable gardens" />
      
      {/* Schema.org data for rich snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "mainEntity": {
            "@type": "ProfessionalService",
            "name": "Leafline Garden Design",
            "@id": "https://www.leaflinegarden.design//#about",
            "url": "https://www.leaflinegarden.design/",
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "North King County and Snohomish County",
              "addressRegion": "WA",
              "addressCountry": "US"
            },
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "WA", 
              "postalCode": "98037",
              "addressCountry": "US"
            },
            "serviceArea": {
              "@type": "GeoShape",
              "description": "Serving North King County and Snohomish County in Washington State"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Garden Design Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Garden Design",
                    "description": "Professional garden design and planning services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Landscape Design",
                    "description": "Complete landscape architecture and design services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Professional Pruning",
                    "description": "Expert pruning and plant maintenance services"
                  }
                }
              ]
            }
          }
        })}
      </script>
    </Helmet>
  );
};

// Enhanced main component with semantic sections
const App = () => {
  return (
    <main id="main-content" role="main">
      <SeoMetadata />
      
      <section id="hero" role="banner" aria-labelledby="hero-title">
        <HeroSection />
      </section>
      
      <section id="about" aria-labelledby="about-title">
        <AboutSection />
      </section>
      
      <section id="services" aria-labelledby="services-title">
        <ServicesGallery />
      </section>
      
      <section id="portfolio" aria-labelledby="portfolio-title">
        <OurWorkSection />
      </section>
      
      <section id="process" aria-labelledby="process-title">
        <HowItWorksSection />
      </section>
      
      <section id="contact" aria-labelledby="contact-title">
        <CtaSection />
      </section>
      
      <footer role="contentinfo">
        <FooterSection />
      </footer>
      
      <BackToTopButton />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 10,
        },
      }}
    >
      <React.StrictMode>
        <App />
        <Analytics/>
      </React.StrictMode>
    </ConfigProvider>
  </HelmetProvider>
);

export default App;
