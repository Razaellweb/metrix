import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How does usage-based pricing work with Metrifox?',
    answer: 'You send us usage events via our API or SDKs. We aggregate, deduplicate, and apply your pricing rules in real-time. At the end of each billing period, we generate accurate invoices automatically.'
  },
  {
    question: 'What pricing models do you support?',
    answer: 'Subscriptions, usage-based (per-unit, tiered, graduated), credit systems, hybrid models combining fixed and variable, and outcome-based pricing. You can switch or combine models as your business evolves.'
  },
  {
    question: 'How do entitlement checks work?',
    answer: 'Our entitlement API provides sub-millisecond responses. You can gate features based on plan limits, usage thresholds, credit balances, or custom rules. All checks happen at the edge for minimal latency.'
  },
  {
    question: 'What happens if I exceed my event quota?',
    answer: 'On Starter, we will notify you before you hit limits. On Growth and Enterprise, events are unlimited. We never drop or delay events regardless of volume.'
  },
  {
    question: 'Do you integrate with existing payment providers?',
    answer: 'Yes. We integrate natively with Stripe for payment processing. We handle the billing logic while Stripe handles payment collection, giving you the best of both worlds.'
  },
  {
    question: 'Is Metrifox SOC2 compliant?',
    answer: 'Yes, we maintain SOC2 Type II certification. We also support GDPR compliance requirements and can sign DPAs for enterprise customers.'
  }
];

const FAQ = () => {
  return (
    <section 
      id="faq" 
      className="relative w-full bg-background section-padding overflow-hidden"
    >
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg text-foreground">
            Frequently asked questions
          </h2>
          <p className="body-lg">
            Common questions about implementation and capabilities.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 data-[state=open]:bg-card/50 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Have more questions?{' '}
            <a 
              href="mailto:support@metrifox.com" 
              className="text-primary hover:underline font-medium"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
