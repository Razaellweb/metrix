import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, CheckCircle2, Globe, Database, TrendingUp, Zap } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-background pt-20 lg:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 data-grid opacity-[0.15] pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-40 animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Content */}
        <div className={`space-y-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium animate-[fade-in_1s_ease-out]">
            <Zap className="w-4 h-4 fill-primary/20" />
            <span>Usage-Based Entitlements 2.0</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground text-balance leading-[1.1]">
            Scale revenue with <br />
            <span className="metrix-gradient-text relative">
              intelligent billing
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
            The complete infrastructure for metering, pricing, and invoicing. Designed for high-growth SaaS and AI platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-2">
            <a href="/signup" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                Start Building Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="#demo" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-base bg-transparent border-primary/20 hover:bg-primary/5 hover:border-primary/50 text-foreground transition-all">
                <Play className="mr-2 w-4 h-4 fill-current" />
                Live Demo
              </Button>
            </a>
          </div>

          <div className="pt-6 border-t border-border/40 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>SOC2 Type II Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>99.99% Uptime SLA</span>
            </div>
             <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Stripe Compatible</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Dashboard Preview */}
        <div className={`relative perspective-[2000px] group transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          
          {/* Main Dashboard Card */}
          <div className="relative z-20 metrix-glass rounded-xl overflow-hidden shadow-2xl border border-white/10 dark:border-white/5 transform transition-transform duration-500 hover:rotate-y-[-2deg] hover:rotate-x-[2deg]">
            
            {/* Window Controls */}
            <div className="h-12 border-b border-border/50 bg-muted/30 flex items-center justify-between px-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs text-muted-foreground font-mono">metrix_dashboard.tsx</div>
              <div className="w-16" />
            </div>

            {/* Dashboard Content */}
            <div className="p-6 md:p-8 bg-card/60 backdrop-blur-sm">
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Monthly Revenue</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-3xl font-mono font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">$1,248,592</span>
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20 gap-1 px-2">
                      <TrendingUp className="w-3 h-3" /> +24%
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                   <div className="text-sm text-muted-foreground mb-1">Active Meters</div>
                   <div className="text-xl font-bold font-mono">14,205</div>
                </div>
              </div>

              {/* Interactive Chart Area */}
              <div className="relative h-48 w-full mt-4 flex items-end justify-between gap-1 sm:gap-2 px-1">
                 {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                  <div className="w-full h-px bg-border border-dashed" />
                  <div className="w-full h-px bg-border border-dashed" />
                  <div className="w-full h-px bg-border border-dashed" />
                </div>

                {[35, 50, 45, 60, 55, 75, 65, 85, 70, 90, 80, 100].map((h, i) => (
                  <div 
                    key={i} 
                    className="relative w-full group/bar cursor-pointer" 
                    style={{ height: `${h}%` }}
                  >
                     <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary/20 to-primary rounded-t-sm transition-all duration-300 group-hover/bar:to-accent group-hover/bar:from-accent/30 h-full" />
                     {/* Tooltip on hover */}
                     <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded border border-border opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap shadow-lg z-10">
                       ${(h * 12400).toLocaleString()}
                     </div>
                  </div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-xl bg-background/40 border border-white/5 hover:bg-background/60 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-medium text-muted-foreground">API Events</span>
                  </div>
                  <div className="text-lg font-bold font-mono">842M</div>
                </div>
                <div className="p-4 rounded-xl bg-background/40 border border-white/5 hover:bg-background/60 transition-colors">
                   <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-accent" />
                    <span className="text-xs font-medium text-muted-foreground">Regions</span>
                  </div>
                  <div className="text-lg font-bold font-mono">Global (24)</div>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Element 1 (Top Right) */}
          <div className="absolute -top-6 -right-6 md:-right-12 p-4 metrix-glass rounded-xl border border-white/10 shadow-xl animate-[float-subtle_7s_ease-in-out_infinite] z-30 hidden sm:block">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center text-success border border-success/20">
                 <CheckCircle2 className="w-5 h-5" />
               </div>
               <div>
                 <div className="text-sm font-bold text-foreground">Usage Limit Updated</div>
                 <div className="text-xs text-muted-foreground">Enterprise Plan • Auto-scaled</div>
               </div>
             </div>
          </div>

          {/* Floating Element 2 (Bottom Left) */}
          <div className="absolute -bottom-8 -left-8 p-4 metrix-glass rounded-xl border border-white/10 shadow-xl animate-[float-subtle_5s_ease-in-out_infinite_reverse] z-30 hidden sm:block">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary border border-primary/20">
                 <Zap className="w-5 h-5 fill-current" />
               </div>
               <div>
                 <div className="text-sm font-bold text-foreground">Real-time Sync</div>
                 <div className="text-xs text-muted-foreground">12ms latency • 99.9% success</div>
               </div>
             </div>
          </div>

           {/* Glow Effect behind dashboard */}
           <div className="absolute inset-0 bg-primary/20 blur-[80px] -z-10 rounded-full opacity-40" />

        </div>

      </div>
    </section>
  );
};
export default HeroSection;
