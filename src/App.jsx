import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Industries from './components/Industries';
import PricingCalculator from './components/PricingCalculator';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero />
        <Services />
        <HowItWorks />
        <Industries />
        <PricingCalculator />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent WhatsApp Floating Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
