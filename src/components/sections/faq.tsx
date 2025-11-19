"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  const faqs = [
    {
      question: "How does Metrix handle high-volume event ingestion?",
      answer: "Metrix uses a distributed Kafka-based architecture to ingest events. We support millions of events per second with exactly-once processing guarantees, ensuring your billing data is always accurate.",
    },
    {
      question: "Can I migrate my existing Stripe subscriptions?",
      answer: "Yes. Metrix integrates natively with Stripe. You can import existing customers and subscriptions, then switch them to usage-based plans without disrupting their service.",
    },
    {
      question: "What SDKs do you offer?",
      answer: "We currently offer official SDKs for Node.js, Python, Go, and Ruby. For other languages, you can use our REST API directly. All our libraries are fully typed and open source.",
    },
    {
      question: "Do you handle tax calculation?",
      answer: "Yes, we integrate with major tax providers to automatically calculate and add VAT, GST, and sales tax to invoices based on your customer's location.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We are SOC 2 Type II compliant. All data is encrypted at rest and in transit. We never store raw credit card information; that remains with your payment processor.",
    },
  ];

  return (
    <section className="bg-white py-24 border-b">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the Metrix platform.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
              <AccordionTrigger className="text-left text-base font-medium hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
