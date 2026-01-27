"use client";

import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

const CODE_SNIPPET = `curl -X POST https://api.metrix.io/v1/events \\
  -H "Authorization: Bearer sk_live_..." \\
  -d '{
    "transaction_id": "evt_123456789",
    "timestamp": "2024-03-20T10:00:00Z",
    "customer_id": "cus_987654321",
    "event_name": "api_request",
    "properties": {
      "model": "gpt-4",
      "tokens": 150,
      "processing_time_ms": 450
    }
  }'`;

export function CodeDemo() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CODE_SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-void border-t border-zinc-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 lg:order-1">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-[#0d0d0d] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
             >
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono">bash</div>
                </div>
                <div className="p-6 relative group">
                    <button 
                        onClick={copyToClipboard}
                        className="absolute top-4 right-4 p-2 rounded-md hover:bg-zinc-800 transition-colors text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100"
                    >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <pre className="font-mono text-sm leading-relaxed text-zinc-300 overflow-x-auto">
                        <code>
                            <span className="text-purple-400">curl</span> -X POST <span className="text-emerald-400">https://api.metrix.io/v1/events</span> \<br/>
                            &nbsp;&nbsp;-H <span className="text-yellow-200">"Authorization: Bearer sk_live_..."</span> \<br/>
                            &nbsp;&nbsp;-d <span className="text-zinc-500">{"'{"}</span><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"transaction_id"</span>: <span className="text-orange-300">"evt_123456789"</span>,<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"timestamp"</span>: <span className="text-orange-300">"2024-03-20T10:00:00Z"</span>,<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"customer_id"</span>: <span className="text-orange-300">"cus_987654321"</span>,<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"event_name"</span>: <span className="text-orange-300">"api_request"</span>,<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"properties"</span>: <span className="text-zinc-500">{"{"}</span><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"model"</span>: <span className="text-orange-300">"gpt-4"</span>,<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"tokens"</span>: <span className="text-emerald-300">150</span>,<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"processing_time_ms"</span>: <span className="text-emerald-300">450</span><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500">{"}"}</span><br/>
                            &nbsp;&nbsp;<span className="text-zinc-500">{"}'"}</span>
                        </code>
                    </pre>
                </div>
             </motion.div>
        </div>

        <div className="order-1 lg:order-2">
            <h2 className="text-sm font-mono text-zinc-500 mb-6 uppercase tracking-widest">Developer Experience</h2>
            <h3 className="text-3xl md:text-4xl text-white font-medium mb-6">Drop-in metering.</h3>
            <p className="text-zinc-400 leading-relaxed mb-8">
                Metrix is designed to be invisible. Send us raw events from your backend, edge workers, or client-side code. 
                We handle the idempotency, aggregation, and entitlement checks.
            </p>
            <ul className="space-y-4">
                {['99.99% Uptime SLA', 'Sub-15ms Latency', 'Idempotent Ingestion'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                        <div className="w-1.5 h-1.5 bg-accent-system rounded-full" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>

      </div>
    </section>
  );
}
