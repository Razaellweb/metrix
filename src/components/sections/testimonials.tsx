import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CTO",
      company: "DataFlow AI",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Metrix allowed us to switch from flat subscription to usage-based pricing in a week. Our revenue increased by 40% in the first month.",
    },
    {
      name: "David Chen",
      role: "Lead Engineer",
      company: "CloudScale",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "The developer experience is unmatched. The SDKs are typed perfectly, and the dashboard gives us visibility we never had before.",
    },
    {
      name: "Elena Rodriguez",
      role: "Product Manager",
      company: "ApiGateway",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "We evaluated three other billing providers. Metrix was the only one that could handle our event volume without latency spikes.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 border-b">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Trusted by engineering teams
          </h2>
          <p className="text-lg text-muted-foreground">
            See why high-growth SaaS companies choose Metrix for their billing infrastructure.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-white p-8 shadow-sm border hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-9xl font-serif text-slate-100 leading-none select-none">
                "
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-base text-slate-700 mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative size-12 overflow-hidden rounded-full border bg-slate-100">
                     {/* Using standard HTML img for reliable external loading if Next/Image is strict about domains */}
                     <img 
                       src={testimonial.image} 
                       alt={testimonial.name}
                       className="h-full w-full object-cover"
                     />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
