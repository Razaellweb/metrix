'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Terminal } from 'lucide-react';
import MeteringVis from './MeteringVis';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-medium font-mono mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              v2.0 Now Available
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Billing infrastructure <br />
              for the <span className="text-brand-primary">usage economy</span>.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-foreground-muted max-w-2xl leading-relaxed"
            >
              Metrix abstracts the complexity of metering user activity, managing entitlements, and generating accurate global invoices.
            </motion.p>
          </div>
          
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
             <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <Link href="/register" className="h-12 px-6 bg-foreground text-canvas font-medium rounded-sm flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all group w-full sm:w-auto">
                Start Building
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/docs" className="h-12 px-6 bg-canvas border border-border-strong text-foreground font-medium rounded-sm flex items-center justify-center gap-2 hover:bg-canvas/80 transition-all w-full sm:w-auto">
                <Terminal className="w-4 h-4" />
                Read the Docs
              </Link>
            </motion.div>
            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.5, delay: 0.4 }}
               className="text-xs text-foreground-muted font-mono"
            >
              Free for up to $10k processed volume.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="relative"
        >
            <MeteringVis />
            
            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-foreground/20" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-foreground/20" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-foreground/20" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-foreground/20" />
        </motion.div>
      </div>
    </section>
  );
}
