import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/mo",
      description: "Perfect for validating your MVP.",
      features: [
        "Up to $10k processed/mo",
        "10,000 metered events",
        "Standard monthly invoicing",
        "Stripe integration",
        "Email support"
      ],
      cta: "Start for free",
      variant: "outline",
      popular: false
    },
    {
      name: "Growth",
      price: "$299",
      period: "/mo",
      description: "Scale your revenue operations.",
      features: [
        "Up to $100k processed/mo",
        "1M metered events",
        "Dynamic & tiered pricing",
        "Entitlement gating",
        "Slack connect support"
      ],
      cta: "Start 14-day trial",
      variant: "default",
      popular: true
    },
    {
      name: "Scale",
      price: "Custom",
      period: "",
      description: "For high-volume platforms.",
      features: [
        "Unlimited processing",
        "Unlimited events",
        "Custom contracts & SLAs",
        "Dedicated solutions engineer",
        "On-prem deployment option"
      ],
      cta: "Contact Sales",
      variant: "outline",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="w-full py-24 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Pricing that scales with you
          </h2>
          <p className="text-xl text-muted-foreground">
            No hidden fees. No per-seat pricing. Just pay for the volume you process.
          </p>
          
          <div className="flex items-center justify-center gap-4 pt-4">
             <Badge variant="secondary" className="text-sm py-1">Monthly</Badge>
             <span className="text-sm text-muted-foreground">Annually (-20%)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col p-8 rounded-2xl bg-card border ${plan.popular ? 'border-primary shadow-2xl shadow-primary/10' : 'border-border'} transition-all hover:translate-y-[-4px]`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-medium text-muted-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? 'default' : 'outline'} 
                className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-card border border-border flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="space-y-2">
             <h3 className="text-lg font-bold text-foreground">Startups get $50k in credits</h3>
             <p className="text-muted-foreground">Backed by YC, Techstars, or Sequoia? Apply for our startup program.</p>
           </div>
           <Button variant="secondary">Apply for Credits</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
