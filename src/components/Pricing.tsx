import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { animate, stagger } from 'animejs';

interface PricingTier {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    description: 'For early-stage products validating pricing models.',
    price: '$0',
    period: 'up to 10k events/mo',
    features: [
      'Core metering API',
      'Basic entitlements',
      'Single pricing model',
      'Email support'
    ],
    cta: 'Get Started'
  },
  {
    name: 'Growth',
    description: 'For teams shipping to production.',
    price: '$499',
    period: '/month',
    features: [
      'Unlimited events',
      'Multiple pricing models',
      'Advanced entitlements',
      'Webhooks & integrations',
      'Priority support'
    ],
    cta: 'Start Trial',
    featured: true
  },
  {
    name: 'Enterprise',
    description: 'For organizations at scale.',
    price: 'Custom',
    period: 'tailored to needs',
    features: [
      'Dedicated infrastructure',
      'Custom SLA',
      'SSO & RBAC',
      'Audit logging',
      'Dedicated success manager'
    ],
    cta: 'Contact Sales'
  }
];

const Pricing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (prefersReducedMotion) return;

          animate(
            '.pricing-item',
            {
              opacity: [0, 1],
              translateY: [24, 0],
              duration: 800,
              delay: stagger(150),
              easing: 'cubicBezier(0.4, 0, 0.2, 1)'
            }
          );
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="pricing" 
      className="relative w-full bg-muted/30 section-padding overflow-hidden"
    >
      <div className="container-wide">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <h2 className="heading-lg text-foreground">
            Predictable pricing
          </h2>
          <p className="body-lg">
            Start free, scale as you grow. No hidden fees.
          </p>
        </div>

        {/* Pricing tiers */}
        <div 
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-item p-8 rounded-lg border transition-all duration-500 ${
                tier.featured 
                  ? 'bg-card border-primary/30 shadow-lg' 
                  : 'bg-card/50 border-border hover:border-primary/20'
              }`}
              style={{ opacity: 0 }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {tier.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={tier.name === 'Enterprise' ? '/contact' : '/signup'}
                  className="block"
                >
                  <Button 
                    className={`w-full ${
                      tier.featured 
                        ? 'btn-primary' 
                        : 'btn-secondary'
                    }`}
                  >
                    {tier.cta}
                    {tier.featured && <ArrowRight className="ml-2 w-4 h-4" />}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise callout */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Need volume pricing or custom terms?{' '}
            <a href="/contact" className="text-primary hover:underline font-medium">
              Talk to our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
