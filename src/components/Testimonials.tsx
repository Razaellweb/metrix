import React, { useRef, useState } from 'react';
import { Users, Building2, Wallet, Quote, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Metrix allowed us to shift from seat-based to usage-based pricing in two weeks. Our NRR increased by 140% in the first quarter.",
      author: "Elena Rodriguez",
      position: "VP of Product, CloudScale AI",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      logo: "CloudScale"
    },
    {
      quote: "The entitlement engine is a lifesaver. We no longer write custom code to gate features—Metrix handles it all automatically.",
      author: "James Chen",
      position: "CTO, DevFlow",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      logo: "DevFlow"
    },
    {
      quote: "Billing infrastructure used to be our biggest headache. Now it's our competitive advantage. The Stripe integration is flawless.",
      author: "Sarah O'Connor",
      position: "Founder, ApiStream",
      avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg",
      logo: "ApiStream"
    },
     {
      quote: "We scaled to 10M events per day without a single hiccup. The real-time visibility into usage is unprecedented.",
      author: "David Kim",
      position: "Lead Engineer, DataMesh",
      avatarUrl: "https://randomuser.me/api/portraits/men/85.jpg",
      logo: "DataMesh"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -340 : 340; // Adjusted scroll amount
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-24 bg-background relative overflow-hidden border-t border-border/50">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              Trusted by engineering leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              See how modern SaaS companies are scaling with usage-based billing.
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('left')}
              className="rounded-full border-border hover:bg-muted"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('right')}
              className="rounded-full border-border hover:bg-muted"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Scrolling Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 w-[calc(100%+3rem)] md:w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] flex-shrink-0 snap-center group relative p-8 rounded-3xl bg-card/40 border border-border/60 hover:border-primary/30 hover:bg-card/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <Quote className="w-10 h-10 text-primary/20 mb-6 group-hover:text-primary/40 transition-colors" />
                  <blockquote className="text-lg md:text-xl text-foreground font-medium leading-relaxed tracking-tight mb-8">
                    "{t.quote}"
                  </blockquote>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img 
                      src={t.avatarUrl} 
                      alt={t.author} 
                      className="relative w-12 h-12 rounded-full object-cover border-2 border-background ring-2 ring-border group-hover:ring-primary/50 transition-all"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{t.author}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{t.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer to ensure last item is fully visible when scrolled to end on mobile */}
          <div className="w-1 md:hidden flex-shrink-0" />
        </div>

        {/* Logos Section */}
        <div className="mt-20 pt-10 border-t border-border/50">
           <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">Powering Next-Gen Companies</p>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="flex items-center gap-2 text-xl font-bold text-foreground hover:scale-105 transition-transform cursor-default">
               <Building2 className="w-6 h-6 text-primary" /> CorpTech
             </div>
             <div className="flex items-center gap-2 text-xl font-bold text-foreground hover:scale-105 transition-transform cursor-default">
               <Users className="w-6 h-6 text-secondary" /> TeamSync
             </div>
             <div className="flex items-center gap-2 text-xl font-bold text-foreground hover:scale-105 transition-transform cursor-default">
               <Wallet className="w-6 h-6 text-accent" /> FinStack
             </div>
             <div className="flex items-center gap-2 text-xl font-bold text-foreground hover:scale-105 transition-transform cursor-default">
               <Database className="w-6 h-6 text-success" /> DataFlow
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

// Add custom scrollbar hiding styles
const styles = `
  .scrollbar-hide::-webkit-scrollbar {
      display: none;
  }
`;

export default Testimonials;
