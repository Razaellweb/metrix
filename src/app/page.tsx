import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import TrustedBy from "@/components/sections/trusted-by";
import ProblemsSection from "@/components/sections/problems";
import FeaturesShowcase from "@/components/sections/features-showcase";
import CompanyProfile from "@/components/sections/company-profile";
import Stats from "@/components/sections/stats";
import Testimonials from "@/components/sections/testimonials";
import FaqSection from "@/components/sections/faq";
import CtaFinal from "@/components/sections/cta-final";
import Footer from "@/components/sections/footer";
import CookieBanner from "@/components/sections/cookie-banner";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <TrustedBy />
        <FeaturesShowcase />
        {/* ProblemsSection reused as Architecture Diagram */}
        <ProblemsSection /> 
        {/* CompanyProfile reused as Developer Experience */}
        <CompanyProfile />
        <Stats />
        <Testimonials />
        <FaqSection />
        <CtaFinal />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
