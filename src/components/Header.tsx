import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize theme from system preference or saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };
  
  const handleNavClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-precision",
        scrolled 
          ? "bg-background/90 backdrop-blur-md border-b border-border py-4" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        <Logo />
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-foreground focus-ring rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleNavClick(link.id)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium focus-ring rounded-sm px-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://docs.metrifox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium focus-ring rounded-sm px-1"
          >
            Docs
          </a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          {/* Theme toggle - minimal, instant */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300 focus-ring"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <a href="/login">
            <Button 
              variant="ghost" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Sign In
            </Button>
          </a>
          
          <a href="/demo">
            <Button className="btn-primary text-sm">
              Request Demo
            </Button>
          </a>
        </div>
      </div>
        
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-slide-up"
        >
          <nav className="container-wide py-6 flex flex-col gap-1">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleNavClick(link.id)}
                className="py-3 text-foreground font-medium border-b border-border/50 last:border-0 focus-ring"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://docs.metrifox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 text-foreground font-medium border-b border-border/50 focus-ring"
            >
              Docs
            </a>
            
            <div className="flex items-center justify-between py-4 mt-2">
              <span className="text-muted-foreground text-sm">Theme</span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md bg-muted text-foreground focus-ring"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
            
            <div className="flex gap-3 pt-4">
              <a href="/login" className="flex-1">
                <Button variant="outline" className="w-full">Sign In</Button>
              </a>
              <a href="/demo" className="flex-1">
                <Button className="w-full btn-primary">Request Demo</Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
