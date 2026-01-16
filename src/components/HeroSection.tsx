import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';
import { animate, stagger } from 'animejs';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // Entrance animation with anime.js
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      if (contentRef.current) {
        animate(
          contentRef.current.querySelectorAll('.animate-item'),
          {
            opacity: [0, 1],
            translateY: [24, 0],
            duration: 800,
            delay: stagger(120),
            easing: 'cubicBezier(0.4, 0, 0.2, 1)'
          }
        );
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 subtle-grid opacity-50 pointer-events-none" />
      
      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 container-wide section-padding text-center"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Eyebrow */}
          <div className="animate-item">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Monetization Infrastructure for AI
            </span>
          </div>

          {/* Main headline */}
          <h1 className="animate-item heading-xl text-foreground text-balance">
            The precise billing layer for{' '}
            <span className="text-primary">usage-based</span> businesses
          </h1>

          {/* Subheadline */}
          <p className="animate-item body-lg max-w-2xl mx-auto text-balance">
            A unified API and platform that empowers engineering, product, growth, and finance teams 
            to launch any pricing model — subscriptions, usage-based, credits, hybrid, outcome-based — 
            without building complex internal systems.
          </p>

          {/* CTAs - 2 only, professional */}
          <div className="animate-item flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="/demo">
              <Button 
                size="lg" 
                className="btn-primary h-12 px-8 text-base font-medium group"
              >
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="https://docs.metrifox.com" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-secondary h-12 px-8 text-base font-medium"
              >
                <BookOpen className="mr-2 w-4 h-4" />
                Documentation
              </Button>
            </a>
          </div>

          {/* Trust indicators - minimal, not salesy */}
          <div className="animate-item pt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              SOC2 Type II
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              99.99% Uptime SLA
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              GDPR Compliant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
