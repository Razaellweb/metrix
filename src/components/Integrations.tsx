import React from 'react';
import { 
  CreditCard, 
  Slack, 
  Database, 
  Cloud, 
  Workflow, 
  Shield, 
  Globe, 
  MessageSquare 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Integrations = () => {
  const categories = [
    {
      title: "Payment Gateways",
      description: "Sync invoices and collect payments globally.",
      icon: CreditCard,
      items: ["Stripe", "PayPal", "Adyen", "Paddle"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      text: "text-blue-500"
    },
    {
      title: "Cloud Infrastructure",
      description: "Ingest usage metrics directly from your infra.",
      icon: Cloud,
      items: ["AWS", "Google Cloud", "Azure", "Kubernetes"],
      gradient: "from-orange-500/20 to-yellow-500/20",
      text: "text-orange-500"
    },
    {
      title: "CRM & Support",
      description: "Keep sales and support teams in the loop.",
      icon: MessageSquare,
      items: ["Salesforce", "HubSpot", "Zendesk", "Intercom"],
      gradient: "from-green-500/20 to-emerald-500/20",
      text: "text-green-500"
    },
    {
      title: "Data Warehouses",
      description: "Export billing data for deeper analysis.",
      icon: Database,
      items: ["Snowflake", "BigQuery", "Redshift", "Databricks"],
      gradient: "from-purple-500/20 to-pink-500/20",
      text: "text-purple-500"
    }
  ];

  return (
    <section className="w-full py-24 bg-background relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 data-grid opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              Connected to your <span className="text-primary">entire stack</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Native integrations with the tools you use every day. Push and pull data in real-time.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">View all 50+ integrations</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10`} />
              
              <div className={`w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <cat.icon className={`w-6 h-6 ${cat.text}`} />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{cat.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary-foreground border border-secondary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Animation / Visual */}
        <div className="mt-20 relative p-8 md:p-12 rounded-3xl bg-card/30 border border-border overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
          <div className="flex items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 animate-scroll">
            {/* Just a visual representation of flow */}
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <div className="h-px w-20 bg-gradient-to-r from-red-500/50 to-transparent" />
            </div>
            <div className="p-4 rounded-xl bg-background border border-border shadow-lg z-20">
              <span className="font-mono font-bold text-foreground">METRIX API</span>
            </div>
            <div className="flex items-center gap-4">
               <div className="h-px w-20 bg-gradient-to-r from-transparent to-green-500/50" />
               <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-[90%] md:max-w-none flex justify-center">
             <div className="px-6 py-2 bg-background/80 backdrop-blur-md border border-border rounded-full shadow-lg">
                <p className="text-xs md:text-sm font-mono font-medium text-foreground text-center whitespace-nowrap overflow-hidden text-ellipsis">
                  WEBHOOKS • EVENTS • API • SDK
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
