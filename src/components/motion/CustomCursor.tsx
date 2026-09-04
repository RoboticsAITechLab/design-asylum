'use client';

import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    // Interactive target detection
    const handleTargetHover = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    handleTargetHover();

    // Smooth trailing animation loop
    let animationFrameId: number;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y, isVisible]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
      }}
      className="custom-cursor-container"
    >
      {/* Outer Halo Ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          borderRadius: '50%',
          border: `1.5px solid ${isHovered ? 'rgba(168, 85, 247, 0.75)' : 'rgba(139, 92, 246, 0.45)'}`,
          backgroundColor: isHovered ? 'rgba(168, 85, 247, 0.08)' : 'transparent',
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background-color 0.25s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Center Precision Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '8px' : '5px',
          height: isHovered ? '8px' : '5px',
          borderRadius: '50%',
          backgroundColor: '#A855F7',
          boxShadow: '0 0 10px #A855F7',
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          transition: 'width 0.2s ease, height 0.2s ease',
          pointerEvents: 'none',
        }}
      />

      <style jsx global>{`
        @media (pointer: coarse) {
          .custom-cursor-container {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
