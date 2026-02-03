import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-border-subtle py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-5 h-5 bg-foreground text-canvas flex items-center justify-center font-mono text-xs font-bold rounded-sm">
              M
            </div>
            <span className="font-semibold text-foreground">Metrix</span>
          </div>
          <p className="text-sm text-foreground-muted mb-6">
            © {new Date().getFullYear()} Metrix Inc.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-foreground-muted hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-foreground-muted hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Product</h4>
          <ul className="space-y-3 text-sm text-foreground-muted">
            <li><Link href="#features" className="hover:text-foreground transition-colors">Features</Link></li>
            <li><Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">Changelog</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">Integrations</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Developers</h4>
          <ul className="space-y-3 text-sm text-foreground-muted">
            <li><Link href="#" className="hover:text-foreground transition-colors">Documentation</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">API Reference</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">SDKs</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">Status</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-foreground-muted">
            <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">Legal</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
