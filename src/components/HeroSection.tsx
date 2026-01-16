import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, CheckCircle2, BarChart3, Globe, Zap, Database } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 data-grid opacity-20 pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Content */}
        <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
            <Zap className="w-4 h-4 fill-primary/20" />
            <span>New: Usage-Based Entitlements</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance leading-[1.1]">
            Precision billing for <span className="metrix-gradient-text">SaaS and AI</span> growth.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Handle real-time metering, dynamic pricing, and global invoicing with a developer-first platform designed for scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="/signup">
              <Button size="lg" className="rounded-md px-8 h-14 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 w-full sm:w-auto">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button variant="outline" size="lg" className="rounded-md px-8 h-14 text-base bg-background/50 backdrop-blur border-border hover:bg-muted/50 w-full sm:w-auto">
                <Play className="mr-2 w-5 h-5" />
                View Demo
              </Button>
            </a>
          </div>

          <div className="pt-8 flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span>Real-time Metering</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span>Global Tax Handling</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual/Dashboard Preview */}
        <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="metrix-glass rounded-xl overflow-hidden shadow-2xl border border-border/50 relative">
            {/* Window Controls */}
            <div className="h-10 border-b border-border/50 bg-muted/20 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
            </div>

            {/* Dashboard Content */}
            <div className="p-6 bg-card/40 min-h-[400px]">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Revenue Overview</h3>
                  <p className="text-sm text-muted-foreground">Last 30 days</p>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                  Live Sync
                </Badge>
              </div>

              {/* Chart Placeholder Area - CSS Only */}
              <div className="relative h-48 w-full mt-4 flex items-end justify-between gap-2 px-2">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                  <div key={i} className="w-full bg-gradient-to-t from-primary/10 to-primary/60 rounded-t-sm transition-all duration-500 hover:to-primary" style={{ height: `${h}%` }} />
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-medium text-muted-foreground">API Requests</span>
                  </div>
                  <div className="text-2xl font-bold font-mono">24.5M</div>
                  <div className="text-xs text-success flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 -rotate-45" /> +12%
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-background/50 border border-border/50">
                   <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-accent" />
                    <span className="text-xs font-medium text-muted-foreground">Active Regions</span>
                  </div>
                  <div className="text-2xl font-bold font-mono">14</div>
                  <div className="text-xs text-muted-foreground">Global Availability</div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Decorative floating elements */}
          <div className="absolute -right-6 -bottom-6 p-4 metrix-glass rounded-lg border border-border/50 shadow-xl animate-[float-subtle_6s_ease-in-out_infinite]">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-success">
                 <CheckCircle2 className="w-6 h-6" />
               </div>
               <div>
                 <div className="text-sm font-semibold text-foreground">Invoice Paid</div>
                 <div className="text-xs text-muted-foreground">$1,240.00 • Stripe</div>
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default HeroSection;
