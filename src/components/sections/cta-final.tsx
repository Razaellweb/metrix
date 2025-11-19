import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <Rocket className="size-4 text-blue-400" />
          <span className="text-sm font-medium text-blue-100">Start shipping faster</span>
        </div>
        
        <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white lg:text-6xl mb-6">
          Ready to monetize your API?
        </h2>
        
        <p className="mx-auto max-w-2xl text-xl text-slate-400 mb-10">
          Join thousands of developers building the next generation of usage-based software.
          Start for free, scale as you grow.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="h-14 rounded-md bg-blue-600 px-8 text-lg font-medium text-white shadow-lg hover:bg-blue-500 transition-all">
            Start Building for Free
            <ArrowRight className="ml-2 size-5" />
          </Button>
          <Button variant="outline" className="h-14 rounded-md border-white/10 bg-transparent px-8 text-lg font-medium text-white hover:bg-white/10 hover:text-white transition-all">
            Contact Sales
          </Button>
        </div>
        
        <p className="mt-10 text-sm text-slate-500">
          No credit card required for developer plan • SOC 2 Compliant • 99.99% SLA
        </p>
      </div>
    </section>
  );
}
