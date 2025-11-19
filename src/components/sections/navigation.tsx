"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, BarChart3 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BarChart3 className="size-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Metrix
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Developers
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Log In
          </Link>
          <Button className="h-9 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
            Start Building
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex size-9 items-center justify-center rounded-md hover:bg-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full border-b bg-background shadow-lg lg:hidden">
          <nav className="container flex flex-col gap-4 py-6">
            <Link href="#" className="text-base font-medium text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="#" className="text-base font-medium text-muted-foreground hover:text-foreground">
              Developers
            </Link>
            <Link href="#" className="text-base font-medium text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link href="#" className="text-base font-medium text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <div className="mt-4 flex flex-col gap-3 pt-4 border-t">
              <Button variant="outline" className="w-full justify-center rounded-md">
                Log In
              </Button>
              <Button className="w-full justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                Start Building
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
