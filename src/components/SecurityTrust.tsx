import React from 'react';
import { ShieldCheck, Lock, Globe, Server, CheckCircle } from 'lucide-react';

const SecurityTrust = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-muted/20 to-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" /> Enterprise Grade
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Security at the core
          </h2>
          <p className="text-xl text-muted-foreground">
            Built to meet the rigorous compliance and security standards of Fortune 500 companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Large Card: Global Infrastructure */}
          <div className="col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-card border border-border p-8 flex flex-col justify-between hover:border-primary/40 transition-colors">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Global Low-Latency Edge</h3>
              <p className="text-muted-foreground max-w-md">
                Our distributed ingestion network ensures event data is captured with sub-15ms latency from anywhere in the world.
              </p>
            </div>

            {/* Decorative Map/Network Visual */}
            <div className="absolute right-0 bottom-0 w-full h-1/2 md:h-2/3 md:w-2/3 opacity-30 group-hover:opacity-50 transition-opacity">
               <svg viewBox="0 0 400 300" className="w-full h-full text-primary fill-current">
                 <circle cx="50" cy="150" r="2" className="animate-pulse" />
                 <circle cx="200" cy="100" r="2" className="animate-pulse delay-75" />
                 <circle cx="300" cy="200" r="2" className="animate-pulse delay-150" />
                 <circle cx="150" cy="250" r="2" className="animate-pulse delay-300" />
                 {/* Connecting lines */}
                 <path d="M50 150 L200 100 L300 200 L150 250 Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
               </svg>
            </div>
          </div>

          {/* Top Right: SOC2 */}
          <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-card border border-border p-8 hover:border-primary/40 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="h-full flex flex-col justify-center items-start">
               <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 text-green-500">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-muted-foreground">
                Audited annually to ensure your data is managed with the highest standard of care.
              </p>
            </div>
          </div>

          {/* Bottom Right: Encryption */}
          <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-card border border-border p-8 hover:border-primary/40 transition-colors">
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="h-full flex flex-col justify-center items-start">
               <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-500">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">End-to-End Encrypted</h3>
              <p className="text-sm text-muted-foreground">
                Data is encrypted at rest (AES-256) and in transit (TLS 1.3) at all times.
              </p>
            </div>
          </div>

        </div>
        
        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
           {['GDPR Ready', 'HIPAA Compliant', 'ISO 27001', 'PCI DSS Level 1'].map((badge, i) => (
             <div key={i} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
               <CheckCircle className="w-4 h-4 text-primary" />
               {badge}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityTrust;
