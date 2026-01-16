import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, Sun, Moon, Zap, BarChart3, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';

const Header = () => {
  const [activePage, setActivePage] = useState('features');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);
  
  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled ? "bg-background/80 backdrop-blur-md border-border py-3" : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <Logo />
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" onClick={handleNavClick('features')} className="text-muted-foreground hover:text-foreground">Features</Button>
          <Button variant="ghost" onClick={handleNavClick('pricing')} className="text-muted-foreground hover:text-foreground">Pricing</Button>
          <Button variant="ghost" onClick={handleNavClick('faq')} className="text-muted-foreground hover:text-foreground">FAQ</Button>
          <Button variant="ghost" onClick={handleNavClick('contact')} className="text-muted-foreground hover:text-foreground">Contact</Button>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
           <div className="flex items-center gap-2">
            <Sun size={16} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
            <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
            <Moon size={16} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          <a href="/login">
             <Button variant="ghost" className="font-medium">Sign In</Button>
          </a>
          <a href="/signup">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20">
              Get Started
            </Button>
          </a>
        </div>
      </div>
        
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            <a href="#features" onClick={handleNavClick('features')} className="text-lg font-medium text-foreground py-2 border-b border-border/50">Features</a>
            <a href="#pricing" onClick={handleNavClick('pricing')} className="text-lg font-medium text-foreground py-2 border-b border-border/50">Pricing</a>
            <a href="#faq" onClick={handleNavClick('faq')} className="text-lg font-medium text-foreground py-2 border-b border-border/50">FAQ</a>
            <a href="#contact" onClick={handleNavClick('contact')} className="text-lg font-medium text-foreground py-2 border-b border-border/50">Contact</a>
            
            <div className="flex items-center justify-between py-4">
              <span className="text-muted-foreground">Dark Mode</span>
              <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
            </div>
            
            <div className="flex gap-4 pt-2">
              <Button variant="outline" className="flex-1">Sign In</Button>
              <Button className="flex-1 bg-primary text-primary-foreground">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
