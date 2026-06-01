"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeSpeed: number;
}

export const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 60;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createParticle = (initY = false): Particle => {
      const parentWidth = canvas.width;
      const parentHeight = canvas.height;
      return {
        x: Math.random() * parentWidth,
        y: initY ? Math.random() * parentHeight : parentHeight + 10,
        size: Math.random() * 2 + 1, // 1px to 3px
        speedY: -(Math.random() * 0.4 + 0.1), // Slow upward movement
        speedX: (Math.random() - 0.5) * 0.15, // Slight drift
        opacity: Math.random() * 0.3 + 0.1, // Soft opacity
        fadeSpeed: 0.001 + Math.random() * 0.002,
      };
    };

    // Initialize particles across the screen
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, idx) => {
        p.y += p.speedY;
        p.x += p.speedX;

        // Draw soft glow particle
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, `rgba(219, 180, 255, ${p.opacity})`); // Pale purple
        gradient.addColorStop(0.5, `rgba(255, 180, 225, ${p.opacity * 0.5})`); // Pale pink
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Respawn if off-screen
        if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10) {
          particles[idx] = createParticle(false);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 mix-blend-screen"
      style={{ opacity: 0.8 }}
    />
  );
};
