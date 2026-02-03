'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  speed: number;
  offset: number;
  active: boolean;
}

export default function MeteringVis() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revenue, setRevenue] = useState(124590.00);
  const [events, setEvents] = useState(8432);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height / 2 + (Math.random() - 0.5) * 40,
        speed: 2 + Math.random() * 2,
        offset: (Math.random() - 0.5) * 20,
        active: true
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      const centerY = height / 2;

      // Draw Grid Lines (Subtle)
      ctx.strokeStyle = 'rgba(100, 100, 100, 0.1)';
      ctx.lineWidth = 1;
      
      // Horizontal Guideline
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      // Update and Draw Particles
      particles.forEach(p => {
        p.x += p.speed;
        
        // Reset particle
        if (p.x > width) {
          p.x = 0;
          // Increment counters occasionally for effect
          if (Math.random() > 0.8) {
            setRevenue(prev => prev + (Math.random() * 0.5));
            setEvents(prev => prev + 1);
          }
        }

        // Draw Particle
        ctx.fillStyle = '#635bff';
        ctx.beginPath();
        // Sine wave motion
        const y = centerY + Math.sin(p.x * 0.02) * 10 + p.offset;
        ctx.arc(p.x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Trail
        ctx.fillStyle = 'rgba(99, 91, 255, 0.2)';
        ctx.beginPath();
        ctx.arc(p.x - 4, y, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-[400px] relative rounded-lg border border-border-subtle bg-canvas/50 overflow-hidden swiss-grid">
      <canvas ref={canvasRef} className="w-full h-full absolute inset-0 z-10" />
      
      {/* Structural Overlays */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-12 pointer-events-none">
        <StatusNode label="Ingest" value={`${events.toLocaleString()} /s`} />
        <StatusNode label="Meter" value="Active" active />
        <StatusNode label="Agg" value="Real-time" />
        <div className="flex flex-col items-end">
          <span className="text-xs font-mono text-foreground-muted mb-1 uppercase tracking-wider">Revenue Realized</span>
          <span className="text-2xl font-mono font-bold text-foreground">
            ${revenue.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

function StatusNode({ label, value, active = false }: { label: string, value: string, active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2 bg-canvas/80 backdrop-blur-sm p-3 rounded border border-border-subtle shadow-sm">
      <div className={`w-2 h-2 rounded-full ${active ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`} />
      <span className="text-xs font-semibold text-foreground">{label}</span>
      <span className="text-[10px] font-mono text-foreground-muted">{value}</span>
    </div>
  );
}
