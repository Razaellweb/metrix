import { CheckCircle2, Server, Database, BarChart, Zap } from "lucide-react";

export default function ProblemsSection() {
  // "Problems" section repurposed as "Technical Architecture" / "How it works" deep dive
  // This fits the "Technical and precise" tone.

  const steps = [
    {
      icon: Zap,
      title: "1. Ingest Events",
      description: "Send usage events via API or SDK. We handle high-throughput ingestion with idempotency guarantees.",
    },
    {
      icon: Database,
      title: "2. Aggregation",
      description: "Metrix aggregates raw events into billable metrics (sum, max, unique count) in real-time.",
    },
    {
      icon: Server,
      title: "3. Rating & Pricing",
      description: "Apply pricing logic dynamically. Handle tiers, minimums, and complex formulas automatically.",
    },
    {
      icon: BarChart,
      title: "4. Invoicing",
      description: "Sync final amounts to Stripe for invoicing, or trigger webhooks for custom billing flows.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 border-b">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Left: Diagram / Visual */}
          <div className="relative rounded-2xl border bg-white p-8 shadow-sm">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-2xl"></div>
             <h3 className="font-mono text-sm font-semibold text-slate-500 mb-6">SYSTEM ARCHITECTURE</h3>
             
             <div className="space-y-4">
                {/* Diagram Step 1 */}
                <div className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                  <div className="size-8 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-mono text-xs">API</div>
                  <div className="h-px flex-1 bg-slate-300 relative">
                     <div className="absolute right-0 -top-1 size-2 rounded-full bg-slate-300"></div>
                  </div>
                  <div className="px-3 py-1 rounded bg-white border text-xs font-mono text-slate-600">Kafka Buffer</div>
                </div>

                {/* Diagram Step 2 */}
                <div className="flex justify-center">
                   <div className="h-6 w-px bg-slate-300"></div>
                </div>

                <div className="p-4 rounded-lg border border-blue-100 bg-blue-50/30 text-center">
                   <p className="text-xs font-bold text-blue-700 mb-2">CORE ENGINE</p>
                   <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white border p-2 rounded text-xs text-slate-600">Aggregation</div>
                      <div className="bg-white border p-2 rounded text-xs text-slate-600">Rate Limiting</div>
                   </div>
                </div>

                 {/* Diagram Step 3 */}
                <div className="flex justify-center">
                   <div className="h-6 w-px bg-slate-300"></div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                  <div className="px-3 py-1 rounded bg-white border text-xs font-mono text-slate-600">PostgreSQL</div>
                  <div className="h-px flex-1 bg-slate-300"></div>
                  <div className="size-8 rounded bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-xs">Web</div>
                </div>
             </div>
          </div>

          {/* Right: Steps Text */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Built for scale from day one
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Our architecture is designed to handle billions of events without missing a beat. Low latency, high availability, and perfect accuracy.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-white border shadow-sm">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
