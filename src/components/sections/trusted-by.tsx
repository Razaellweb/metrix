import React from 'react';

export default function TrustedBy() {
  return (
    <section className="border-b bg-muted/30 py-10">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground mb-6">
          TRUSTED BY INNOVATIVE TEAMS AT
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-75 grayscale transition-all hover:grayscale-0">
          {/* Replaced Logos with Text/Generic representations for safety, styled professionally */}
           <div className="flex items-center gap-2 text-xl font-bold text-slate-600">
            <div className="size-6 bg-slate-800 rounded-full"></div>
            Acme Corp
           </div>
           <div className="flex items-center gap-2 text-xl font-bold text-slate-600">
            <div className="size-6 bg-blue-600 rounded-sm"></div>
            Starlight
           </div>
           <div className="flex items-center gap-2 text-xl font-bold text-slate-600">
            <div className="size-6 bg-indigo-600 rounded-tr-lg"></div>
            Nebula AI
           </div>
           <div className="flex items-center gap-2 text-xl font-bold text-slate-600">
            <div className="size-6 bg-emerald-600 rounded-full"></div>
            Vertex
           </div>
           <div className="flex items-center gap-2 text-xl font-bold text-slate-600">
            <div className="size-6 bg-orange-500 rounded-lg"></div>
            FlowStack
           </div>
        </div>
      </div>
    </section>
  );
}
