"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden bg-void border-t border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight"
            >
                Ready for <span className="text-zinc-600">scale</span>?
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto"
            >
                Join the engineering teams moving the world's GDP. 
                Start integrating Metrix today and never worry about billing infrastructure again.
            </motion.p>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
                <button className="group relative px-8 py-4 bg-white text-black font-semibold text-sm uppercase tracking-wider overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                        Get API Keys <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-zinc-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                <button className="text-zinc-500 hover:text-white text-sm uppercase tracking-wider transition-colors">
                    Talk to Sales
                </button>
            </motion.div>
        </div>
    </section>
  );
}
