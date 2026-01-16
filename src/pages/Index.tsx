
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Integrations from '@/components/Integrations'; // New Section
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import SecurityTrust from '@/components/SecurityTrust'; // New Section
import DashboardPreview from '@/components/DashboardPreview';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Features />
        <Integrations /> {/* Placed after Features to show ecosystem fit */}
        <Pricing />
        <Testimonials />
        <SecurityTrust /> {/* Placed before CTA to build final trust layer */}
        <FAQ />
        <DashboardPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
