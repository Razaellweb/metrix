
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const DashboardPreview = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-background to-muted/20 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
          Ready to monetize your product?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Join 2,000+ SaaS companies using Metrix to power their billing infrastructure.
          Start for free, scale indefinitely.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/signup">
            <Button size="lg" className="px-8 h-12 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
              Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <a href="#contact">
             <Button variant="outline" size="lg" className="px-8 h-12 text-lg rounded-full border-border bg-background hover:bg-muted">
               Talk to Sales
             </Button>
          </a>
        </div>
        
        {/* Simple visual footer or decorative element */}
        <div className="mt-20 relative h-px w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default DashboardPreview;
