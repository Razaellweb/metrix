
import React from 'react';

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2.5 group focus-ring rounded-sm">
      <div className="relative w-8 h-8 flex items-center justify-center bg-primary rounded-md transition-transform duration-300 group-hover:scale-[1.02]">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-5 h-5 text-primary-foreground"
        >
          <path d="M3 3v18h18" />
          <path d="M18 9l-5 5-4-4-3 3" />
        </svg>
      </div>
      <span className="font-semibold text-lg tracking-tight text-foreground">
        Metrifox
      </span>
    </a>
  );
};

export default Logo;
