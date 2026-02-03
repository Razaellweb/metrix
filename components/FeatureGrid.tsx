'use client';

import { motion } from 'framer-motion';
import CodeBlock from './CodeBlock';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    id: 'metering',
    title: 'Real-time Metering',
    description: 'Ingest millions of usage events per second with sub-10ms latency. Metrix deduplicates, aggregates, and stores usage data instantly.',
    icon: Zap,
    codeTitle: 'POST /v1/events',
    code: `{
  "transaction_id": "evt_123456789",
  "customer_id": "cus_987654321",
  "timestamp": "2023-10-27T10:00:00Z",
  "event_type": "api_request",
  "properties": {
    "model": "gpt-4",
    "tokens": 420,
    "duration_ms": 145
  }
}`
  },
  {
    id: 'entitlements',
    title: 'Entitlement Management',
    description: 'Control access programmatically. Check if a customer has access to a feature or has exceeded their usage limits in real-time.',
    icon: ShieldCheck,
    codeTitle: 'sdk.entitlements.check()',
    code: `const hasAccess = await metrix.entitlements.check(
  'cus_987654321', 
  'feature_fine_tuning'
);

if (!hasAccess) {
  throw new Error('Upgrade required');
}`
  },
  {
    id: 'pricing',
    title: 'Flexible Pricing Engine',
    description: 'Deploy tiered, volume-based, or stair-step pricing models without changing your code. Iterate on pricing by updating configuration.',
    icon: Activity,
    codeTitle: 'pricing_model.json',
    code: `{
  "model_type": "graduated_tier",
  "currency": "usd",
  "tiers": [
    {
      "up_to": 10000,
      "unit_amount": "0.00"
    },
    {
      "up_to": "inf",
      "unit_amount": "0.002"
    }
  ]
}`
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Engineered for <span className="text-brand-primary">high-throughput</span> scale.
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl">
            Metrix handles the complexity of metering and billing so you can focus on shipping your product.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="w-12 h-12 rounded bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-foreground-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    Idempotent event ingestion
                  </li>
                  <li className="flex items-center gap-2 text-sm text-foreground-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    Real-time balance updates
                  </li>
                </ul>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <CodeBlock code={feature.code} title={feature.codeTitle} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
