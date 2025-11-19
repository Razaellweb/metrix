import { Scale, Zap, ShieldCheck, Code2, Globe2, CreditCard } from "lucide-react";

const FeaturesShowcase = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-time Metering",
      description: "Ingest millions of usage events with exactly-once processing. Our high-throughput event stream ensures 100% accuracy for every billable action.",
    },
    {
      icon: Scale,
      title: "Dynamic Pricing Models",
      description: "Deploy tiered, package-based, or complex formula pricing instantly. A/B test pricing models without changing a single line of code.",
    },
    {
      icon: ShieldCheck,
      title: "Entitlement Management",
      description: "Gate features based on plan limits automatically. Check entitlements in under 50ms to ensure a seamless user experience.",
    },
    {
      icon: CreditCard,
      title: "Stripe Integration",
      description: "Native sync with Stripe for billing and invoicing. We handle the calculation; Stripe handles the collection. Multi-currency support included.",
    },
    {
      icon: Code2,
      title: "Developer-First SDKs",
      description: "Drop-in libraries for Node.js, Python, and Go. Type-safe APIs designed by developers, for developers.",
    },
    {
      icon: Globe2,
      title: "Global Tax Compliance",
      description: "Automated VAT, GST, and sales tax calculation based on customer location. Stay compliant without the administrative burden.",
    },
  ];

  return (
    <section className="bg-white py-24 border-b">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything you need to scale usage-based billing
          </h2>
          <p className="text-lg text-muted-foreground">
            Metrix handles the heavy lifting of metering, rating, and invoicing so you can focus on shipping features.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex flex-col items-start">
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
