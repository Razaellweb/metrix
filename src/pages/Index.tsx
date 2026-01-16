
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import DashboardPreview from '@/components/DashboardPreview'; // Acting as CTA
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* SocialProof removed or merged into Hero/Testimonials to reduce clutter per new spec intent */}
        <Features />
        {/* Entitlement Engine or "How it works" is handled inside Features "Deep Dive" */}
        <Pricing />
        <Testimonials />
        <FAQ />
        <DashboardPreview /> {/* This is now the "Ready to monetize?" CTA section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
