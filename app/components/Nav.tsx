"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-void/80 backdrop-blur-md border-zinc-800/50" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full" />
        <div className="text-sm font-semibold tracking-tight text-white/90 font-mono">
          METRIX
        </div>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">
            Protocol
            </a>
            <a href="#" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">
            Pricing
            </a>
            <a href="#" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">
            Documentation
            </a>
        </div>
        
        <div className="flex items-center gap-4">
            <a href="#" className="hidden md:block text-xs font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">
            Sign In
            </a>
            <button className="bg-white text-black px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-colors">
            Deploy Node
            </button>
        </div>
      </div>
    </motion.nav>
  );
}
