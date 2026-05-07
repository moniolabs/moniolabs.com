import React, { useEffect, useRef } from 'react';

interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  shockRadius?: number;
  shockStrength?: number;
  resistance?: number;
  returnDuration?: number;
  hoverEffect?: boolean;
}

interface Particle {
  bx: number;
  by: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  scale: number;
  colorMix: number;
}

export default function DotGrid({
  dotSize = 3,
  gap = 15,
  baseColor = "#001222",
  activeColor = "#00D661",
  proximity = 120,
  shockRadius = 250,
  shockStrength = 5,
  resistance = 750,
  returnDuration = 1.5,
  hoverEffect = true
}: DotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Parse colors
    const parseColor = (hex: string) => {
      hex = hex.replace('#', '');
      return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
      };
    };
    const cBase = parseColor(baseColor);
    const cActive = parseColor(activeColor);

    let pointer = { x: -1000, y: -1000 };
    let prevPointer = { x: -1000, y: -1000 };
    let mouseVelocity = { x: 0, y: 0 };
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      pointer = { x: -1000, y: -1000 };
      prevPointer = { x: -1000, y: -1000 };
      mouseVelocity = { x: 0, y: 0 };
    };

    if (hoverEffect) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const cols = Math.ceil(canvas.width / gap) + 2;
      const rows = Math.ceil(canvas.height / gap) + 2;
      
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * gap;
          const y = row * gap;
          particles.push({
            bx: x,
            by: y,
            x,
            y,
            vx: 0,
            vy: 0,
            scale: 1,
            colorMix: 0
          });
        }
      }

      if (!hoverEffect) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = `rgb(${cBase.r}, ${cBase.g}, ${cBase.b})`;
        const r = dotSize / 2;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          ctx.fillRect(p.x - r, p.y - r, r * 2, r * 2);
        }
      }
    };

    window.addEventListener('resize', resize);
    resize();

    if (!hoverEffect) {
      return () => {
        window.removeEventListener('resize', resize);
      };
    }

    let lastTime = performance.now();
    let isVisible = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { rootMargin: '100px' }
    );
    observer.observe(canvas);

    const render = (time: number) => {
      if (!isVisible) {
        lastTime = time;
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const delta = Math.min(time - lastTime, 50); // cap delta
      lastTime = time;

      // Calculate mouse velocity
      mouseVelocity.x = (pointer.x - prevPointer.x) / (delta || 16);
      mouseVelocity.y = (pointer.y - prevPointer.y) / (delta || 16);
      const mouseSpeed = Math.sqrt(mouseVelocity.x ** 2 + mouseVelocity.y ** 2);
      const isFastMove = mouseSpeed > 0.5;

      prevPointer.x = pointer.x;
      prevPointer.y = pointer.y;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        const dx = p.bx - pointer.x;
        const dy = p.by - pointer.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let targetX = p.bx;
        let targetY = p.by;
        let scaleTarget = 1.0;
        let mixTarget = 0;

        // Proximity (Hover)
        if (dist < proximity) {
          const force = Math.pow((proximity - dist) / proximity, 2);
          if (dist > 0.1) {
            targetX = p.bx + (dx / dist) * force * gap * 0.5;
            targetY = p.by + (dy / dist) * force * gap * 0.5;
          }
          scaleTarget = 1 + force * 1.5;
          mixTarget = force;
        }

        // Shockwave (Fast Move)
        if (isFastMove && dist < shockRadius) {
          const force = Math.pow((shockRadius - dist) / shockRadius, 3);
          const impulse = force * shockStrength * mouseSpeed * 0.1;
          if (dist > 0.1) {
            p.vx += (dx / dist) * impulse;
            p.vy += (dy / dist) * impulse;
          }
          scaleTarget = Math.max(scaleTarget, 1 + force * 2);
          mixTarget = Math.max(mixTarget, force * 0.8);
        }

        // Physics
        const springK = 1 / (returnDuration * 60);
        const damp = 0.85;

        // Spring acceleration
        const ax = (targetX - p.x) * springK;
        const ay = (targetY - p.y) * springK;
        
        p.vx = (p.vx + ax) * damp;
        p.vy = (p.vy + ay) * damp;

        // Resistance to base
        const rForce = resistance * delta * 0.0001;
        p.vx -= (p.x - p.bx) * rForce;
        p.vy -= (p.y - p.by) * rForce;

        p.x += p.vx;
        p.y += p.vy;
        
        p.scale += (scaleTarget - p.scale) * 0.1;
        p.colorMix += (mixTarget - p.colorMix) * 0.1;

        // Draw
        const r = Math.max(0.5, (dotSize / 2) * p.scale);
        const cr = Math.round(cBase.r + (cActive.r - cBase.r) * p.colorMix);
        const cg = Math.round(cBase.g + (cActive.g - cBase.g) * p.colorMix);
        const cb = Math.round(cBase.b + (cActive.b - cBase.b) * p.colorMix);
        
        ctx.fillStyle = `rgb(${cr}, ${cg}, ${cb})`;
        // Use fillRect instead of arc for massive performance boost
        ctx.fillRect(p.x - r, p.y - r, r * 2, r * 2);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [dotSize, gap, baseColor, activeColor, proximity, shockRadius, shockStrength, resistance, returnDuration, hoverEffect]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        pointerEvents: 'auto',
        display: 'block'
      }} 
    />
  );
}