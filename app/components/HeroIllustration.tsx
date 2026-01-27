"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Activity, Server, Shield, Zap, Globe } from "lucide-react";

// Simulated data stream for the graph
const generateData = () => {
  return Array.from({ length: 40 }).map((_, i) => ({
    value: 30 + Math.random() * 40 + Math.sin(i * 0.2) * 20,
  }));
};

function LiveGraph() {
  const [data, setData] = useState<{ value: number }[]>([]);

  useEffect(() => {
    setData(generateData());
  }, []);

  return (
    <div className="h-32 w-full flex items-end gap-1 px-4 py-4 pb-0 opacity-50">
        {data.map((d, i) => (
            <motion.div
                key={i}
                initial={{ height: "10%" }}
                animate={{ height: `${d.value}%` }}
                transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    delay: i * 0.05,
                    ease: "easeInOut"
                }}
                className="flex-1 bg-accent-system/60 rounded-t-sm"
            />
        ))}
    </div>
  )
}

function StatusRow({ label, value, status }: { label: string, value: string, status: "good" | "warn" }) {
    return (
        <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
            <span className="text-xs text-zinc-400">{label}</span>
            <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-white">{value}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${status === "good" ? "bg-emerald-500" : "bg-yellow-500"} animate-pulse`} />
            </div>
        </div>
    )
}

export function HeroIllustration() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    // Smooth mouse movement
    const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const textRect = containerRef.current.getBoundingClientRect();
            // Calculate normalized mouse position (-1 to 1) relative to center of screen
            const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
            const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
            mouseX.set(x);
            mouseY.set(y);
        }
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const rotateX = useTransform(mouseY, [-1, 1], [5, -5]);
    const rotateY = useTransform(mouseX, [-1, 1], [-5, 5]);

    return (
        <div ref={containerRef} className="relative w-full h-[600px] perspective-1000 flex items-center justify-center pointer-events-none select-none">
            
            {/* Glow backing */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-system/20 blur-[100px] rounded-full opacity-50" />

            <motion.div 
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, rotateX: 20, y: 100 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative w-[90%] md:w-[600px] bg-[#0A0A0B]/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
            >
                {/* Header */}
                <div className="h-10 border-b border-white/10 flex items-center justify-between px-4 bg-white/5">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        Metrix Live Activity
                    </div>
                </div>

                {/* Main Content Info */}
                <div className="p-6 grid grid-cols-3 gap-6">
                    {/* Main Metric */}
                    <div className="col-span-2">
                        <div className="mb-4">
                            <h3 className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Ingestion Rate</h3>
                            <div className="text-3xl font-medium text-white font-mono">142,893 <span className="text-zinc-500 text-sm">/ sec</span></div>
                        </div>
                        <div className="h-[120px] bg-black/40 rounded-lg border border-white/5 overflow-hidden relative">
                             <LiveGraph />
                        </div>
                    </div>

                    {/* Side Metrics */}
                    <div className="col-span-1 space-y-4">
                         <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                            <h4 className="text-[10px] text-zinc-400 mb-1 flex items-center gap-2"><Globe className="w-3 h-3" /> Regions</h4>
                            <div className="text-lg font-medium text-white">24</div>
                         </div>
                         <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                            <h4 className="text-[10px] text-zinc-400 mb-1 flex items-center gap-2"><Zap className="w-3 h-3" /> Latency</h4>
                            <div className="text-lg font-medium text-emerald-400">14ms</div>
                         </div>
                         <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                            <h4 className="text-[10px] text-zinc-400 mb-1 flex items-center gap-2"><Shield className="w-3 h-3" /> Auth</h4>
                            <div className="text-lg font-medium text-white">100%</div>
                         </div>
                    </div>
                </div>

                {/* Bottom List */}
                <div className="border-t border-white/10 p-4">
                    <h4 className="text-[10px] text-zinc-500 uppercase tracking-wider mb-2">Active Pipelines</h4>
                    <div className="space-y-1">
                        <StatusRow label="us-east-1-ingest" value="Operational" status="good" />
                        <StatusRow label="eu-west-2-billing" value="Operational" status="good" />
                        <StatusRow label="ap-northeast-1-sync" value="Syncing..." status="warn" />
                    </div>
                </div>
            </motion.div>

            {/* Floating Elements (Parallax) */}
            <motion.div 
                style={{ x: mouseX, y: mouseY, z: 50 }}
                className="absolute top-1/4 -right-12 p-4 bg-[#111] border border-zinc-800 rounded-lg shadow-xl"
            >
                <div className="flex items-center gap-3">
                    <Server className="w-4 h-4 text-accent-system" />
                    <div>
                        <div className="text-[10px] text-zinc-400">Auto-Scaling</div>
                        <div className="text-xs font-bold text-white">+4 Nodes</div>
                    </div>
                </div>
            </motion.div>

             <motion.div 
                style={{ x: useTransform(mouseX, (v) => v * -20), y: useTransform(mouseY, (v) => v * -20), z: 80 }}
                className="absolute bottom-1/4 -left-12 p-4 bg-[#111] border border-zinc-800 rounded-lg shadow-xl"
            >
                <div className="flex items-center gap-3">
                    <Activity className="w-4 h-4 text-emerald-500" />
                    <div>
                        <div className="text-[10px] text-zinc-400">Throughput</div>
                        <div className="text-xs font-bold text-white">99.9%</div>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}
