
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="relative w-8 h-8 flex items-center justify-center bg-primary rounded-lg shadow-lg shadow-primary/30 transition-transform group-hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-5 h-5 text-primary-foreground"
        >
          <path d="M3 3v18h18" />
          <path d="M18 9l-5 5-4-4-3 3" />
        </svg>
      </div>
      <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
        Metrix
      </span>
    </div>
  );
};

export default Logo;
