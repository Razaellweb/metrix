
import React from 'react';
import { Users, Building2, Wallet } from 'lucide-react';

const Testimonials = () => {
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
    }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by modern SaaS companies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col justify-between p-8 rounded-2xl bg-muted/20 border border-border/50 hover:bg-card hover:shadow-lg transition-all duration-300">
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <div key={s} className="w-4 h-4 text-warning fill-current">★</div>
                  ))}
                </div>
                <blockquote className="text-lg text-foreground font-medium leading-relaxed">
                  "{t.quote}"
                </blockquote>
              </div>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/30">
                <img 
                  src={t.avatarUrl} 
                  alt={t.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-background"
                />
                <div>
                  <div className="font-semibold text-foreground">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center justify-center gap-2 text-xl font-bold text-foreground">
             <Building2 className="w-6 h-6" /> CorpTech
          </div>
          <div className="flex items-center justify-center gap-2 text-xl font-bold text-foreground">
             <Users className="w-6 h-6" /> TeamSync
          </div>
          <div className="flex items-center justify-center gap-2 text-xl font-bold text-foreground">
             <Wallet className="w-6 h-6" /> FinStack
          </div>
          <div className="flex items-center justify-center gap-2 text-xl font-bold text-foreground">
             <Users className="w-6 h-6" /> CrowdSource
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
