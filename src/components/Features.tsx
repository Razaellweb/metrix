import React from 'react';
import { 
  BarChart4, 
  Zap, 
  Globe2, 
  Lock, 
  Layers, 
  CreditCard,
  ArrowRight,
  Check
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-Time Metering",
      description: "Idempotent event ingestion that scales to millions of events per second with zero latency.",
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      icon: Layers,
      title: "Dynamic Pricing Models",
      description: "Configure hybrid models: flat fees, tiered usage, graduated pricing, and overage rates.",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: Globe2,
      title: "Global Tax & Compliance",
      description: "Automated VAT/GST calculation and invoicing compliant with EU, UK, and US regulations.",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    },
    {
      icon: CreditCard,
      title: "Seamless Payments",
      description: "Native Stripe integration for hosted checkout, embedded billing, and dunning management.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      icon: Lock,
      title: "Feature Entitlements",
      description: "Gate features automatically based on plan limits and real-time usage thresholds.",
      color: "text-rose-500",
      bg: "bg-rose-500/10"
    },
    {
      icon: BarChart4,
      title: "Revenue Analytics",
      description: "Deep insights into MRR, churn, and usage trends per customer and per feature.",
      color: "text-violet-500",
      bg: "bg-violet-500/10"
    }
  ];

  return (
    <section id="features" className="w-full py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Complete billing infrastructure
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to monetize modern software products, from first API call to IPO.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-transparent to-primary/5 pointer-events-none`} />
              
              <div className={`w-12 h-12 rounded-lg ${f.bg} flex items-center justify-center mb-6`}>
                <f.icon className={`w-6 h-6 ${f.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {f.description}
              </p>

              <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Feature Deep Dive / "How it Works" Hybrid */}
        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-40" />
             <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
               <div className="bg-muted/30 border-b border-border p-4 flex items-center justify-between">
                 <span className="font-mono text-sm text-muted-foreground">metering.ts</span>
                 <div className="flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                 </div>
               </div>
               <div className="p-6 overflow-x-auto">
                 <pre className="font-mono text-sm leading-relaxed text-blue-300">
{`await metrix.ingest({
  customerId: "cus_123",
  eventName: "api_call",
  properties: {
    model: "gpt-4",
    tokens: 450
  }
});`}
                 </pre>
                 <div className="mt-4 pt-4 border-t border-border/50">
                   <div className="flex items-center gap-2 text-sm text-green-400">
                     <Check className="w-4 h-4" /> 
                     <span>Event processed in 12ms</span>
                   </div>
                 </div>
               </div>
             </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Developer-first integration</h3>
            <p className="text-lg text-muted-foreground">
              Drop in our SDK and start tracking usage immediately. We handle aggregation, deduplication, and entitlement checks so you don't have to build billing logic.
            </p>
            <ul className="space-y-3">
              {[
                "Idempotent ingestion API",
                "Typescript & Python SDKs",
                "Webhooks for limit alerts",
                "Usage query API"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
