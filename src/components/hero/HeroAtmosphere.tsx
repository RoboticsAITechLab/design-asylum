'use client';

import React from 'react';
import { useHero } from '@/context/HeroContext';

export const HeroAtmosphere: React.FC = () => {
  const { currentSlide } = useHero();
  const isDark = currentSlide.isDarkTheme;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'background 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        background: isDark
          ? '#070709'
          : 'linear-gradient(135deg, #F5EFE6 0%, #EADBCC 50%, #DFCEBC 100%)',
      }}
    >
      {/* Central Volumetric Glow matching Active Client */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          width: 'clamp(380px, 65vw, 900px)',
          height: 'clamp(380px, 65vw, 800px)',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${currentSlide.glowColor} 0%, rgba(7, 7, 9, 0) 70%)`,
          filter: 'blur(70px)',
          animation: 'violetPulse 8s ease-in-out infinite',
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Secondary Ambient Corner Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '10%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${currentSlide.glowColor} 0%, transparent 65%)`,
          filter: 'blur(90px)',
          opacity: 0.6,
          transition: 'all 0.8s ease',
        }}
      />

      {/* Decorative Geometric Mandala Pattern for KorKlub (matching screenshot) */}
      {!isDark && (
        <div
          style={{
            position: 'absolute',
            top: '32%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(300px, 45vw, 550px)',
            height: 'clamp(300px, 45vw, 550px)',
            borderRadius: '50%',
            border: '2px dashed rgba(140, 109, 88, 0.25)',
            boxShadow: '0 0 80px rgba(200, 176, 151, 0.4), inset 0 0 80px rgba(200, 176, 151, 0.2)',
            animation: 'radarSpin 40s linear infinite',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '20px',
              borderRadius: '50%',
              border: '1px solid rgba(140, 109, 88, 0.15)',
            }}
          />
        </div>
      )}

      {/* Coordinate grid lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, ${isDark ? 'rgba(255, 255, 255, 0.025)' : 'rgba(0, 0, 0, 0.03)'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? 'rgba(255, 255, 255, 0.025)' : 'rgba(0, 0, 0, 0.03)'} 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse at 50% 40%, rgba(0, 0, 0, 0.7) 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, rgba(0, 0, 0, 0.7) 0%, transparent 80%)',
        }}
      />
    </div>
  );
};
