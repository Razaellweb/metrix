"use client";

import { motion } from "framer-motion";

export function ProblemStatement() {
  return (
    <section className="py-32 px-6 md:px-12 bg-void relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-sm font-mono text-zinc-500 mb-8 uppercase tracking-widest">The Problem: Entropy</h2>
                
                <p className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-12">
                    Billing logic is <span className="text-zinc-600">chaos</span>.<br/>
                    It starts simple, then metastasizes across your codebase.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-white text-lg font-medium mb-4">The "Spaghetti" Reality</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Entitlements in middleware, metering in backgrounds jobs, pricing in config files. 
                            When you need to change a plan, you have to refactor your entire stack.
                        </p>
                    </div>
                    <div>
                         <h3 className="text-white text-lg font-medium mb-4">The Leakage</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Without a centralized ledger, usage is dropped, overages are missed, and customers are billed incorrectly. 
                            Trust erodes silently.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
}
