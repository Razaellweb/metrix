import { CheckCircle2, Terminal, Code, Laptop, Box } from "lucide-react";

export default function CompanyProfile() {
  const features = [
    "Node.js SDK",
    "Python SDK",
    "Go SDK",
    "Ruby SDK",
    "React Components",
    "REST API"
  ];

  return (
    <section className="border-b bg-white py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 mb-6">
              <Terminal className="size-3" />
              Developer Experience
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Integrate in minutes, not months
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We provide first-class SDKs for every major language. Our typed libraries ensure you catch errors at compile time, not runtime.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg border bg-slate-50/50">
                  <Code className="size-4 text-slate-500" />
                  <span className="text-sm font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
            
             <div className="mt-8 p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
               <p className="text-sm text-blue-900 italic">
                 "Metrix's SDKs are the best we've worked with. Dropped it in, and we were metering events in production the same afternoon."
               </p>
               <p className="mt-2 text-xs font-bold text-blue-700">— CTO, SaaS Unicorn</p>
             </div>
          </div>

          {/* Right: Code Snippet Visual */}
          <div className="order-1 lg:order-2 rounded-xl border bg-[#1e1e1e] shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between bg-[#252526] px-4 py-2 border-b border-[#3e3e42]">
              <span className="text-xs text-slate-400">install.sh</span>
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="size-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="size-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
            </div>
            <div className="p-6 font-mono text-sm">
               <div className="flex gap-2 text-emerald-400 mb-4">
                 <span>$</span>
                 <span className="text-white">npm install @metrix/node</span>
               </div>
               
               <div className="text-slate-500 mb-2">// In your API route</div>
               <div className="text-blue-400">import</div> <span className="text-white">{'{'} Metrix {'}'}</span> <div className="text-blue-400 inline">from</div> <span className="text-orange-300">'@metrix/node'</span>;
               <br/><br/>
               <div className="text-purple-400">const</div> <span className="text-white">client</span> = <div className="text-purple-400 inline">new</div> <span className="text-yellow-300">Metrix</span>(<span className="text-orange-300">'api_key_...'</span>);
               <br/><br/>
               <div className="text-purple-400">await</div> <span className="text-white">client.ingest</span>({'{'}
               <br/>
               &nbsp;&nbsp;<span className="text-sky-300">event</span>: <span className="text-orange-300">'ai_generation'</span>,
               <br/>
               &nbsp;&nbsp;<span className="text-sky-300">properties</span>: {'{'} <span className="text-sky-300">tokens</span>: <span className="text-green-300">450</span> {'}'}
               <br/>
               {'}'});
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
