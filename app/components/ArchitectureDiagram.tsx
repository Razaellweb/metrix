"use client";

import { motion } from "framer-motion";

const flowVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      pathLength: { duration: 2, ease: "easeInOut" as const },
      opacity: { duration: 0.5 }
    }
  }
};

const pulseVariants = {
  idle: { scale: 1, opacity: 0.5 },
  active: { scale: 1.2, opacity: 1, transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" as const } }
};

export function ArchitectureDiagram() {
  return (
    <section className="py-24 px-6 md:px-12 bg-surface/30 border-y border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
           <h2 className="text-sm font-mono text-zinc-500 mb-4 uppercase tracking-widest">The Metrix Architecture</h2>
           <h3 className="text-3xl md:text-4xl text-white font-medium">Single Source of Truth</h3>
        </div>

        <div className="relative h-[200px] md:h-[300px] w-full max-w-5xl mx-auto flex items-center justify-between">
            {/* Connecting Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" overflow="visible">
                <motion.path 
                    d="M 100,150 L 300,150 L 500,150 L 700,150 L 900,150" 
                    stroke="url(#gradient-line)" 
                    strokeWidth="2" 
                    fill="none"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={flowVariants}
                />
                <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Nodes */}
            <Node label="App Event" delay={0} />
            <Node label="Ingestion" delay={0.5} isMain />
            <Node label="Aggregation" delay={1.0} isMain />
            <Node label="Metering" delay={1.5} isMain />
            <Node label="Invoice" delay={2.0} />
        </div>
      </div>
    </section>
  );
}

function Node({ label, delay, isMain = false }: { label: string, delay: number, isMain?: boolean }) {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5, type: "spring", stiffness: 200 }}
            className="flex flex-col items-center gap-4 relative z-10"
        >
            <div className={`
                flex items-center justify-center rounded-full border 
                ${isMain ? 'w-16 h-16 bg-void border-accent-system/50 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'w-12 h-12 bg-surface border-zinc-700'}
            `}>
                <div className={`rounded-full ${isMain ? 'w-3 h-3 bg-accent-system' : 'w-2 h-2 bg-zinc-500'}`} />
            </div>
            <span className={`text-xs font-mono uppercase tracking-wider ${isMain ? 'text-white' : 'text-zinc-500'}`}>
                {label}
            </span>
        </motion.div>
    )
}
