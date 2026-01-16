import React, { useRef, useEffect, useState, useCallback } from 'react';
import { animate, stagger } from 'animejs';

interface Point {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  screenX: number;
  screenY: number;
  connections: number[];
}

interface WireframeHemisphereProps {
  className?: string;
}

const WireframeHemisphere: React.FC<WireframeHemisphereProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const animationRef = useRef<any>(null);
  const rafRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const scrollProgressRef = useRef<number>(0);
  const [isDark, setIsDark] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Track theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => observer.disconnect();
  }, []);

  // Track scroll for density shift
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgressRef.current = Math.min(window.scrollY / scrollHeight, 1);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate geodesic hemisphere points
  const generatePoints = useCallback((width: number, height: number) => {
    const points: Point[] = [];
    const centerX = width * 0.65;
    const centerY = height * 0.5;
    const radius = Math.min(width, height) * 0.4;
    
    // Geodesic subdivision parameters
    const rings = 12;
    const basePointsPerRing = 16;
    
    for (let ring = 0; ring <= rings; ring++) {
      const phi = (ring / rings) * (Math.PI / 2); // 0 to 90 degrees (hemisphere)
      const ringRadius = Math.sin(phi);
      const z = Math.cos(phi);
      const pointsInRing = Math.max(1, Math.floor(basePointsPerRing * ringRadius));
      
      for (let p = 0; p < pointsInRing; p++) {
        const theta = (p / pointsInRing) * Math.PI * 2;
        const x = ringRadius * Math.cos(theta);
        const y = ringRadius * Math.sin(theta);
        
        points.push({
          x, y, z,
          baseX: x,
          baseY: y,
          baseZ: z,
          screenX: 0,
          screenY: 0,
          connections: []
        });
      }
    }
    
    // Build connections (nearest neighbors for mesh effect)
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dz = points[i].z - points[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        // Connect points that are close enough
        if (dist < 0.35) {
          points[i].connections.push(j);
          points[j].connections.push(i);
        }
      }
    }
    
    return { points, centerX, centerY, radius };
  }, []);

  // Project 3D point to 2D screen
  const project = useCallback((point: Point, centerX: number, centerY: number, radius: number, time: number) => {
    // Very slow rotation (structural rebalancing)
    const rotationSpeed = prefersReducedMotion ? 0 : 0.00003;
    const angle = time * rotationSpeed;
    
    // Rotate around Y axis (subtle)
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const rotatedX = point.x * cosA - point.z * sinA;
    const rotatedZ = point.x * sinA + point.z * cosA;
    
    // Perspective projection
    const perspective = 2.5;
    const scale = perspective / (perspective + rotatedZ * 0.5);
    
    return {
      x: centerX + rotatedX * radius * scale,
      y: centerY + point.y * radius * scale,
      z: rotatedZ,
      scale
    };
  }, [prefersReducedMotion]);

  // Draw the wireframe
  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const { points, centerX, centerY, radius } = generatePoints(width, height);
    
    // Calculate scroll-based density
    const scrollDensity = 1 + scrollProgressRef.current * 0.3;
    const adjustedRadius = radius * scrollDensity;
    
    // Update screen positions
    points.forEach(point => {
      const projected = project(point, centerX, centerY, adjustedRadius, time);
      point.screenX = projected.x;
      point.screenY = projected.y;
    });
    
    // Color based on theme
    const lineColor = isDark 
      ? 'rgba(120, 120, 130, 0.25)' // Soft gray for dark mode
      : 'rgba(180, 185, 190, 0.35)'; // Cool neutral gray for light mode
    
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = isDark ? 0.6 : 0.5;
    ctx.lineCap = 'round';
    
    // Draw connections with edge fade
    points.forEach((point, i) => {
      point.connections.forEach(j => {
        if (j > i) { // Avoid drawing twice
          const other = points[j];
          
          // Edge fade based on distance from center
          const midX = (point.screenX + other.screenX) / 2;
          const midY = (point.screenY + other.screenY) / 2;
          const distFromCenter = Math.sqrt(
            Math.pow(midX - centerX, 2) + 
            Math.pow(midY - centerY, 2)
          );
          const maxDist = adjustedRadius * 1.2;
          const fade = Math.max(0, 1 - (distFromCenter / maxDist) * 0.7);
          
          if (fade > 0.1) {
            ctx.beginPath();
            ctx.globalAlpha = fade;
            ctx.moveTo(point.screenX, point.screenY);
            ctx.lineTo(other.screenX, other.screenY);
            ctx.stroke();
          }
        }
      });
    });
    
    ctx.globalAlpha = 1;
  }, [isDark, generatePoints, project]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    
    resize();
    window.addEventListener('resize', resize);
    
    const animate = () => {
      if (!prefersReducedMotion) {
        timeRef.current += 16; // ~60fps timing
      }
      
      const rect = canvas.getBoundingClientRect();
      draw(ctx, rect.width, rect.height, timeRef.current);
      
      rafRef.current = requestAnimationFrame(animate);
    };
    
    if (prefersReducedMotion) {
      // Draw once for reduced motion
      const rect = canvas.getBoundingClientRect();
      draw(ctx, rect.width, rect.height, 0);
    } else {
      animate();
    }
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [draw, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ 
        zIndex: 0,
        opacity: isDark ? 0.8 : 0.6
      }}
      aria-hidden="true"
    />
  );
};

export default WireframeHemisphere;
