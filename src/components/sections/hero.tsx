"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Terminal, Zap, Activity, Globe, Lock, Cpu, Database } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [activeCodeTab, setActiveCodeTab] = useState("track");

  const CodeWindow = () => (
    <div className="relative w-full overflow-hidden rounded-xl border bg-[#0f172a] shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="size-3 rounded-full bg-red-500/80"></div>
        <div className="size-3 rounded-full bg-yellow-500/80"></div>
        <div className="size-3 rounded-full bg-green-500/80"></div>
        <div className="ml-4 flex gap-4 text-xs font-medium text-slate-400">
          <button 
            onClick={() => setActiveCodeTab('track')}
            className={`${activeCodeTab === 'track' ? 'text-white' : 'hover:text-slate-300'}`}
          >
            metering.ts
          </button>
          <button 
            onClick={() => setActiveCodeTab('bill')}
            className={`${activeCodeTab === 'bill' ? 'text-white' : 'hover:text-slate-300'}`}
          >
            invoice.ts
          </button>
        </div>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed text-slate-300 overflow-x-auto">
        {activeCodeTab === 'track' ? (
          <>
            <p><span className="text-purple-400">await</span> <span className="text-blue-400">metrix</span>.<span className="text-yellow-300">track</span>({'{'}</p>
            <p className="pl-4"><span className="text-sky-300">customerId</span>: <span className="text-green-400">'cus_123abc'</span>,</p>
            <p className="pl-4"><span className="text-sky-300">event</span>: <span className="text-green-400">'api_request'</span>,</p>
            <p className="pl-4"><span className="text-sky-300">properties</span>: {'{'}</p>
            <p className="pl-8"><span className="text-sky-300">tokens</span>: <span className="text-orange-400">1500</span>,</p>
            <p className="pl-8"><span className="text-sky-300">model</span>: <span className="text-green-400">'gpt-4-turbo'</span></p>
            <p className="pl-4">{'}'}</p>
            <p>{'})'};</p>
            <p className="mt-2 text-slate-500">// Usage tracked in real-time</p>
          </>
        ) : (
           <>
            <p><span className="text-purple-400">const</span> <span className="text-blue-400">invoice</span> = <span className="text-purple-400">await</span> <span className="text-blue-400">metrix</span>.<span className="text-yellow-300">generateInvoice</span>({'{'}</p>
            <p className="pl-4"><span className="text-sky-300">customerId</span>: <span className="text-green-400">'cus_123abc'</span>,</p>
            <p className="pl-4"><span className="text-sky-300">month</span>: <span className="text-green-400">'2023-11'</span></p>
            <p>{'})'};</p>
            <p className="mt-4"><span className="text-slate-500">// Result:</span></p>
            <p><span className="text-sky-300">console</span>.<span className="text-yellow-300">log</span>(<span className="text-blue-400">invoice</span>.<span className="text-sky-300">total</span>); <span className="text-slate-500">// 45.20</span></p>
          </>
        )}
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground mb-6">
              <span className="flex size-2 rounded-full bg-green-500 animate-pulse"></span>
              v2.0 API is now live
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight lg:text-6xl mb-6">
              Billing infrastructure for <span className="text-primary">modern platforms</span>.
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Metrix is the usage-based billing engine for SaaS, AI, and API companies. 
              Track millions of events, automate complex entitlements, and scale revenue without the headache.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-12 px-8 rounded-md text-base font-medium shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Building
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline" className="h-12 px-8 rounded-md text-base font-medium">
                Read Documentation
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Activity className="size-5 text-primary" />
                <span className="text-sm font-medium">99.99% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="size-5 text-primary" />
                <span className="text-sm font-medium">&lt;50ms Latency</span>
              </div>
            </div>
          </div>

          {/* Visual / Code */}
          <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
             {/* Decorative background elements */}
            <div className="absolute -top-12 -right-12 size-72 rounded-full bg-primary/10 blur-3xl filter"></div>
            <div className="absolute -bottom-12 -left-12 size-72 rounded-full bg-purple-500/10 blur-3xl filter"></div>
            
            <CodeWindow />

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 hidden lg:flex items-center gap-3 rounded-lg border bg-background p-4 shadow-xl">
               <div className="flex size-10 items-center justify-center rounded-full bg-green-100">
                 <Database className="size-5 text-green-600" />
               </div>
               <div>
                 <p className="text-sm font-bold text-foreground">Event Stream</p>
                 <p className="text-xs text-muted-foreground">12.4k events/sec</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
