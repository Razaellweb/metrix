import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import PricingConfigurator from '../components/PricingConfigurator';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas swiss-grid relative selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* Global Gradient Overlay for subtle depth */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent z-0" />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FeatureGrid />
        <PricingConfigurator />
        
        {/* Pre-footer CTA */}
        <section className="py-24 border-t border-border-subtle bg-canvas">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
              Ready to <span className="text-brand-primary">monetize</span>?
            </h2>
            <p className="text-lg text-foreground-muted mb-8 max-w-xl mx-auto">
              Get your API key and start metering usage in less than 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/register" className="h-12 px-8 bg-foreground text-canvas font-medium rounded-sm flex items-center justify-center hover:bg-foreground/90 transition-colors w-full sm:w-auto">
                Get API Keys
              </a>
              <a href="/contact" className="h-12 px-8 bg-transparent border border-border-strong text-foreground font-medium rounded-sm flex items-center justify-center hover:bg-foreground/5 transition-colors w-full sm:w-auto">
                Talk to Sales
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
