'use client';

import React, { useEffect, useRef } from 'react';

export const InteractiveGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * 2);
    let height = (canvas.height = canvas.offsetHeight * 2);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * 2;
      height = canvas.height = canvas.offsetHeight * 2;
    };

    window.addEventListener('resize', handleResize);

    // Generate 3D spherical points
    const points: { x: number; y: number; z: number }[] = [];
    const numPoints = 280;
    const radius = Math.min(width, height) * 0.38;

    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      points.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
      });
    }

    let angleX = 0.002;
    let angleY = 0.003;
    let rotX = 0;
    let rotY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotX += angleX;
      rotY += angleY;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const projectedPoints: { x: number; y: number; z: number; scale: number }[] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotate around Y axis
        let x1 = p.x * cosY + p.z * sinY;
        let y1 = p.y;
        let z1 = -p.x * sinY + p.z * cosY;

        // Rotate around X axis
        let x2 = x1;
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        // Perspective projection
        const fov = 600;
        const scale = fov / (fov + z2);
        const px = width / 2 + x2 * scale;
        const py = height / 2 + y2 * scale;

        projectedPoints.push({ x: px, y: py, z: z2, scale });

        // Draw particle node
        const alpha = Math.max(0.15, (z2 + radius) / (2 * radius));
        ctx.beginPath();
        ctx.arc(px, py, Math.max(1.2, 2.2 * scale), 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(11, 11, 15, ${alpha * 0.75})`;
        ctx.fill();
      }

      // Draw wireframe connecting links between nearby points
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 42) {
            const alpha = (1 - dist / 42) * 0.28;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(11, 11, 15, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse movement interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
      angleX = mouseY * 0.00004;
      angleY = mouseX * 0.00004;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '420px',
        aspectRatio: '1 / 1',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
      {/* Center Coordinate Badge */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          fontFamily: 'var(--font-geist-mono)',
          fontSize: '0.6875rem',
          color: '#8A8A9A',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        GLOBAL REACH // 14 TIMEZONES
      </div>
    </div>
  );
};
