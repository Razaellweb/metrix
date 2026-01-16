import React, { useRef, useState, useEffect } from 'react';
import { animate, stagger } from 'animejs';

interface Feature {
  id: string;
  title: string;
  description: string;
  detail: string;
}

const features: Feature[] = [
  {
    id: 'price-modeling',
    title: 'Price Modeling',
    description: 'Define any pricing model with precision.',
    detail: 'Configure subscriptions, usage-based tiers, credit systems, hybrid models, and outcome-based pricing. Dynamic rules adapt as your business evolves.'
  },
  {
    id: 'entitlements',
    title: 'Entitlement Checks',
    description: 'Real-time access control at the API level.',
    detail: 'Gate features based on plans, usage thresholds, and credit balances. Sub-millisecond checks that scale with your infrastructure.'
  },
  {
    id: 'metering',
    title: 'Metering & Rating',
    description: 'Track usage and apply pricing dynamically.',
    detail: 'Ingest API calls, tokens, data processed, or any custom metric. Idempotent event processing with automatic aggregation and deduplication.'
  },
  {
    id: 'billing',
    title: 'Billing Automation',
    description: 'Generate invoices on autopilot.',
    detail: 'Manage subscription lifecycles, handle renewals, prorate changes, and automate billing cycles. Integrated dunning and payment recovery.'
  },
  {
    id: 'analytics',
    title: 'Analysis & Reporting',
    description: 'Revenue visibility without the complexity.',
    detail: 'Understand MRR, churn, margins, and customer behavior. All metrics derived from your billing data, no additional instrumentation required.'
  },
  {
    id: 'credits',
    title: 'Credit Systems',
    description: 'Prepaid balances with flexible accounting.',
    detail: 'Support prepaid credits, top-ups, rollover conditions, and expiration policies. Real-time balance queries and automated drawdowns.'
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          
          // Check for reduced motion
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (prefersReducedMotion) return;

          // Staggered entrance animation
          animate(
            '.feature-item',
            {
              opacity: [0, 1],
              translateY: [32, 0],
              duration: 800,
              delay: stagger(100, { start: 200 }),
              easing: 'cubicBezier(0.4, 0, 0.2, 1)'
            }
          );
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleFeatureClick = (featureId: string) => {
    setActiveFeature(activeFeature === featureId ? null : featureId);
  };

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="relative w-full bg-background section-padding overflow-hidden"
    >
      <div className="container-wide">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <h2 className="heading-lg text-foreground">
            Complete monetization infrastructure
          </h2>
          <p className="body-lg">
            Everything you need to price, meter, and bill modern software products.
          </p>
        </div>

        {/* Feature list - progressive reveal, one concept at a time */}
        <div 
          className="max-w-3xl mx-auto space-y-4"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-item"
              style={{ opacity: 0 }}
            >
              <button
                onClick={() => handleFeatureClick(feature.id)}
                className="w-full text-left p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-all duration-500 focus-ring group"
                aria-expanded={activeFeature === feature.id}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="heading-md text-foreground group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="body-base pl-8">
                      {feature.description}
                    </p>
                  </div>
                  <div 
                    className={`w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                      activeFeature === feature.id 
                        ? 'bg-primary border-primary rotate-45' 
                        : 'bg-transparent group-hover:border-primary'
                    }`}
                  >
                    <svg 
                      className={`w-4 h-4 transition-colors duration-300 ${
                        activeFeature === feature.id ? 'text-primary-foreground' : 'text-muted-foreground'
                      }`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                    </svg>
                  </div>
                </div>

                {/* Expanded detail */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-precision ${
                    activeFeature === feature.id ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pl-8 text-foreground leading-relaxed border-l-2 border-primary/30 ml-0.5">
                    {feature.detail}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Developer-first callout */}
        <div className="max-w-3xl mx-auto mt-20 p-8 rounded-lg bg-muted/50 border border-border">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="heading-md text-foreground mb-2">Developer-first integration</h3>
              <p className="body-base mb-4">
                Drop in our SDK and start tracking usage immediately. TypeScript and Python SDKs with 
                full type safety.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <span className="text-foreground">Idempotent ingestion API</span>
                <span className="text-foreground">Webhooks for alerts</span>
                <span className="text-foreground">Usage query API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
