'use client';

import React, { useState, useEffect } from 'react';
import { useHero } from '@/context/HeroContext';

export const HeroVisual: React.FC = () => {
  const { currentSlide, currentSlideIndex, allSlides } = useHero();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 18;
      const y = (e.clientY / innerHeight - 0.5) * 18;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isDark = currentSlide.isDarkTheme;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1020px',
        height: 'clamp(380px, 52vh, 580px)',
        margin: '0 auto',
        perspective: '1200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
      }}
    >
      {/* 3D Left Floating Perspective Card */}
      <div
        style={{
          position: 'absolute',
          left: 'clamp(-4%, 3%, 8%)',
          top: '18%',
          width: 'clamp(160px, 20vw, 250px)',
          height: 'clamp(240px, 32vw, 380px)',
          borderRadius: '16px',
          border: `1.5px solid ${currentSlide.themeColor}`,
          background: isDark
            ? `linear-gradient(135deg, ${currentSlide.glowColor} 0%, rgba(7, 7, 9, 0.4) 100%)`
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(200, 176, 151, 0.35) 100%)',
          boxShadow: `0 0 35px ${currentSlide.glowColor}, inset 0 0 20px ${currentSlide.glowColor}`,
          transform: `perspective(1000px) rotateY(${24 + mousePos.x * 0.4}deg) rotateX(${-6 - mousePos.y * 0.3}deg) translateZ(30px)`,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s ease, box-shadow 0.6s ease, background 0.6s ease',
          backdropFilter: 'blur(8px)',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 20% 20%, ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'} 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${currentSlide.accentColor}, transparent)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '0.6875rem',
            color: isDark ? currentSlide.accentColor : '#554433',
            letterSpacing: '0.1em',
            fontWeight: 600,
            transition: 'color 0.4s ease',
          }}
        >
          {currentSlide.clientName} // 01L
        </div>
      </div>

      {/* Centerpiece Visual: Pre-stacked slides for butter-smooth auto crossfading */}
      <div
        style={{
          position: 'relative',
          width: 'clamp(280px, 36vw, 450px)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          transform: `translate3d(${mousePos.x * 0.25}px, ${mousePos.y * 0.25}px, 0)`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Dynamic Halo Light behind figure */}
        <div
          style={{
            position: 'absolute',
            width: '105%',
            height: '95%',
            borderRadius: '50%',
            background: `radial-gradient(ellipse, ${currentSlide.glowColor} 0%, transparent 75%)`,
            filter: 'blur(45px)',
            zIndex: 0,
            transition: 'background 0.8s ease',
          }}
        />

        {/* Stacked Images Container for Seamless Instant Crossfading */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: '24px',
            maskImage: 'linear-gradient(to bottom, black 72%, transparent 98%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 72%, transparent 98%)',
            zIndex: 1,
          }}
        >
          {allSlides.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;

            return (
              <div
                key={slide.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'scale(1)' : 'scale(1.04)',
                  transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                <img
                  src={slide.image}
                  alt={`${slide.clientName} - ${slide.category}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: slide.isDarkTheme
                      ? 'contrast(1.15) brightness(1.05) saturate(1.1)'
                      : 'contrast(1.05) brightness(1.02) saturate(1.05)',
                  }}
                />

                {/* Atmospheric Lighting Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: slide.isDarkTheme
                      ? `radial-gradient(circle at 50% 25%, ${slide.glowColor} 0%, transparent 60%), linear-gradient(to top, rgba(7, 7, 9, 0.8) 0%, transparent 50%)`
                      : `radial-gradient(circle at 50% 25%, rgba(255, 255, 255, 0.4) 0%, transparent 60%), linear-gradient(to top, rgba(235, 226, 215, 0.7) 0%, transparent 50%)`,
                    mixBlendMode: slide.isDarkTheme ? 'screen' : 'overlay',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* 3D Right Floating Perspective Card */}
      <div
        style={{
          position: 'absolute',
          right: 'clamp(-4%, 3%, 8%)',
          top: '22%',
          width: 'clamp(160px, 20vw, 250px)',
          height: 'clamp(240px, 32vw, 380px)',
          borderRadius: '16px',
          border: `1.5px solid ${currentSlide.themeColor}`,
          background: isDark
            ? `linear-gradient(135deg, rgba(7, 7, 9, 0.4) 0%, ${currentSlide.glowColor} 100%)`
            : 'linear-gradient(135deg, rgba(200, 176, 151, 0.35) 0%, rgba(255, 255, 255, 0.75) 100%)',
          boxShadow: `0 0 35px ${currentSlide.glowColor}, inset 0 0 20px ${currentSlide.glowColor}`,
          transform: `perspective(1000px) rotateY(${-24 + mousePos.x * 0.4}deg) rotateX(${-6 - mousePos.y * 0.3}deg) translateZ(30px)`,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s ease, box-shadow 0.6s ease, background 0.6s ease',
          backdropFilter: 'blur(8px)',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 80% 80%, ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'} 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${currentSlide.accentColor}, transparent)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '0.6875rem',
            color: isDark ? currentSlide.accentColor : '#554433',
            letterSpacing: '0.1em',
            fontWeight: 600,
            transition: 'color 0.4s ease',
          }}
        >
          {currentSlide.metric} // {currentSlide.metricLabel}
        </div>
      </div>
    </div>
  );
};
