import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How does Metrix handle high-volume event ingestion?',
    a: 'We use a highly scalable, idempotent ingestion pipeline capable of handling millions of events per second. Events are aggregated in real-time for immediate billing visibility.'
  },
  {
    q: 'Can I combine subscription and usage-based pricing?',
    a: 'Absolutely. Our hybrid pricing engine allows you to charge a base recurring fee plus overage, tiered usage, or per-unit costs on the same invoice.'
  },
  {
    q: 'Do you support multi-currency and tax?',
    a: 'Yes, we support billing in 135+ currencies and automatically calculate VAT, GST, and sales tax based on the customer’s location.'
  },
  {
    q: 'How does the entitlement engine work?',
    a: 'You define limits (e.g., "500 API calls/mo") in your plan. Our SDK checks these limits in real-time before your app executes an action, blocking or warning users automatically.'
  },
  {
    q: 'Is my data secure?',
    a: 'We are SOC 2 Type II compliant and GDPR ready. All data is encrypted at rest and in transit, and we offer private instances for enterprise requirements.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full py-24 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Frequently asked questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div 
              key={i} 
              className={`border rounded-lg transition-all duration-200 ${
                openIndex === i 
                  ? 'bg-card border-primary/30 shadow-md' 
                  : 'bg-transparent border-border hover:border-border/80'
              }`}
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-medium text-lg ${openIndex === i ? 'text-primary' : 'text-foreground'}`}>
                  {item.q}
                </span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-primary shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
