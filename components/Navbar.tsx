'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-canvas/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 bg-foreground text-canvas flex items-center justify-center font-mono text-xs font-bold rounded-sm group-hover:bg-brand-primary transition-colors">
              M
            </div>
            <span className="font-semibold tracking-tight text-lg">Metrix</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground-muted">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link href="#docs" className="hover:text-foreground transition-colors">Docs</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors hidden sm:block">
            Sign In
          </Link>
          <Link href="/register" className="h-9 px-4 bg-foreground text-canvas text-sm font-medium rounded-sm flex items-center hover:bg-foreground/90 transition-colors">
            Start Building
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
