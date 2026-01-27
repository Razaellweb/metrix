"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { HeroIllustration } from "./HeroIllustration";

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const STAGGER = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

export function Hero() {
  return (
    <section className="relative min-h-[110vh] flex flex-col justify-center px-6 md:px-12 pt-32 overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-accent-system/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
       <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none translate-y-1/4 -translate-x-1/4" />

       <div className="max-w-[1400px] mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Text */}
        <motion.div initial="hidden" animate="visible" variants={STAGGER} className="order-2 lg:order-1">
          
          {/* Status Indicator */}
          <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-8 border border-zinc-800 w-fit px-3 py-1.5 rounded-full bg-surface/50 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
              System Operational
            </span>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[0.95] -ml-1">
            Coordinate <span className="text-zinc-600">value</span><br />
            at <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-system to-white">infrastructure</span> scale.
          </motion.h1>

          <motion.p variants={FADE_UP} className="text-lg text-zinc-400 max-w-lg leading-relaxed mb-10">
            Metrix provides the immutable coordination layer for usage-based billing. 
            Decouple your architecture from your pricing strategy.
          </motion.p>

          {/* CTA Group */}
          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-zinc-200 transition-all">
                  Start Integration
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center justify-center gap-3 px-8 py-4 text-sm font-medium uppercase tracking-wider text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all">
                  <Terminal className="w-4 h-4" />
                  Read the Spec
              </button>
          </motion.div>

        </motion.div>

        {/* Right Column: Illustration */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
        >
            <HeroIllustration />
        </motion.div>

       </div>
    </section>
  );
}
