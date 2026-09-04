'use client';

import React, { useState, useEffect } from 'react';
import { useHero } from '@/context/HeroContext';

export const HeroVisual: React.FC = () => {
  const { currentSlide, currentSlideIndex, allSlides, prevSlide, nextSlide } = useHero();
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

  const totalSlides = allSlides.length;
  const prevIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
  const nextIndex = (currentSlideIndex + 1) % totalSlides;

  const prevSlideData = allSlides[prevIndex];
  const nextSlideData = allSlides[nextIndex];

  const isDark = currentSlide.isDarkTheme;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1240px',
        height: 'clamp(380px, 52vh, 580px)',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        padding: '0 20px',
      }}
    >
      {/* Left Card (PREVIOUS CLIENT SLIDE) - Clean, Flat, Balanced Elevation with Subtle Blur */}
      <div
        onClick={prevSlide}
        role="button"
        tabIndex={0}
        aria-label={`Previous project: ${prevSlideData.clientName}`}
        style={{
          position: 'absolute',
          left: 'clamp(24px, 7vw, 90px)',
          width: 'clamp(180px, 21vw, 270px)',
          height: 'clamp(270px, 34vw, 410px)',
          borderRadius: '20px',
          border: `1.5px solid ${prevSlideData.themeColor || currentSlide.themeColor}`,
          boxShadow: `0 16px 45px rgba(0, 0, 0, 0.4), 0 0 35px ${prevSlideData.glowColor || currentSlide.glowColor}`,
          transform: `translate3d(${mousePos.x * 0.15}px, ${mousePos.y * 0.15 + 16}px, 0) scale(0.92)`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s ease, box-shadow 0.6s ease, filter 0.3s ease',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
          zIndex: 1,
          cursor: 'pointer',
        }}
      >
        {/* Pre-stacked visual images for left card to eliminate flicker */}
        {allSlides.map((slide, idx) => {
          const isCurrentPrev = idx === prevIndex;
          return (
            <div
              key={`prev-${slide.id}`}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: isCurrentPrev ? 1 : 0,
                transform: isCurrentPrev ? 'scale(1)' : 'scale(1.05)',
                transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: 'none',
              }}
            >
              <img
                src={slide.image}
                alt={slide.clientName}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  filter: 'contrast(1.05) brightness(0.8) saturate(1.1) blur(4px)',
                  transform: 'scale(1.08)',
                }}
              />
            </div>
          );
        })}

        {/* Brand Overlay Tint */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: prevSlideData.isDarkTheme
              ? `linear-gradient(135deg, ${prevSlideData.glowColor} 0%, rgba(7, 7, 9, 0.7) 100%)`
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(200, 176, 151, 0.45) 100%)',
            mixBlendMode: prevSlideData.isDarkTheme ? 'color-burn' : 'multiply',
            pointerEvents: 'none',
            transition: 'background 0.6s ease',
          }}
        />

        {/* Grid Texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 20% 20%, ${prevSlideData.isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.12)'} 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            opacity: 0.7,
            pointerEvents: 'none',
          }}
        />

        {/* Top Accent Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${prevSlideData.accentColor}, transparent)`,
            zIndex: 2,
          }}
        />

        {/* Top Badge: Previous Indicator */}
        <div
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            borderRadius: '999px',
            background: 'rgba(0, 0, 0, 0.55)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '0.625rem',
            color: '#fff',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            zIndex: 2,
          }}
        >
          <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>←</span> PREV
        </div>

        {/* Bottom Label: Client Name */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '28px 16px 14px',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 100%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-geist-sans)',
              fontSize: '0.9375rem',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.01em',
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            }}
          >
            {prevSlideData.clientName}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '0.625rem',
              color: prevSlideData.accentColor,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {prevSlideData.category}
          </span>
        </div>
      </div>

      {/* Centerpiece Visual: Hero Active Artwork with Cinematic Entrance Animation */}
      <div
        style={{
          position: 'relative',
          width: 'clamp(280px, 36vw, 450px)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
          transform: `translate3d(${mousePos.x * 0.25}px, ${mousePos.y * 0.25}px, 0)`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Dynamic Halo Light behind figure with ambient pulsing */}
        <div
          key={`halo-${currentSlideIndex}`}
          style={{
            position: 'absolute',
            width: '110%',
            height: '100%',
            borderRadius: '50%',
            background: `radial-gradient(ellipse, ${currentSlide.glowColor} 0%, transparent 75%)`,
            filter: 'blur(45px)',
            zIndex: 0,
            animation: 'heroPulseHalo 4s ease-in-out infinite',
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
            maskImage: 'linear-gradient(to bottom, black 75%, transparent 98%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 98%)',
            boxShadow: `0 25px 60px -15px rgba(0, 0, 0, 0.65), 0 0 30px ${currentSlide.glowColor}`,
            transition: 'box-shadow 0.8s ease',
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
                  pointerEvents: isActive ? 'auto' : 'none',
                  animation: isActive ? 'heroCenterEnter 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                  transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
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

                {/* Cinematic Specular Glint Sweep on slide enter */}
                {isActive && (
                  <div
                    key={`glint-${currentSlideIndex}`}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(105deg, transparent 35%, rgba(255, 255, 255, 0.4) 50%, transparent 65%)',
                      animation: 'heroGlintSweep 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                      pointerEvents: 'none',
                    }}
                  />
                )}

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

      {/* Right Card (NEXT CLIENT SLIDE) - Clean, Flat, Balanced Elevation with Subtle Blur */}
      <div
        onClick={nextSlide}
        role="button"
        tabIndex={0}
        aria-label={`Next project: ${nextSlideData.clientName}`}
        style={{
          position: 'absolute',
          right: 'clamp(24px, 7vw, 90px)',
          width: 'clamp(180px, 21vw, 270px)',
          height: 'clamp(270px, 34vw, 410px)',
          borderRadius: '20px',
          border: `1.5px solid ${nextSlideData.themeColor || currentSlide.themeColor}`,
          boxShadow: `0 16px 45px rgba(0, 0, 0, 0.4), 0 0 35px ${nextSlideData.glowColor || currentSlide.glowColor}`,
          transform: `translate3d(${mousePos.x * 0.15}px, ${mousePos.y * 0.15 + 16}px, 0) scale(0.92)`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s ease, box-shadow 0.6s ease, filter 0.3s ease',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
          zIndex: 1,
          cursor: 'pointer',
        }}
      >
        {/* Pre-stacked visual images for right card to eliminate flicker */}
        {allSlides.map((slide, idx) => {
          const isCurrentNext = idx === nextIndex;
          return (
            <div
              key={`next-${slide.id}`}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: isCurrentNext ? 1 : 0,
                transform: isCurrentNext ? 'scale(1)' : 'scale(1.05)',
                transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: 'none',
              }}
            >
              <img
                src={slide.image}
                alt={slide.clientName}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  filter: 'contrast(1.05) brightness(0.8) saturate(1.1) blur(4px)',
                  transform: 'scale(1.08)',
                }}
              />
            </div>
          );
        })}

        {/* Brand Overlay Tint */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: nextSlideData.isDarkTheme
              ? `linear-gradient(135deg, rgba(7, 7, 9, 0.7) 0%, ${nextSlideData.glowColor} 100%)`
              : 'linear-gradient(135deg, rgba(200, 176, 151, 0.45) 0%, rgba(255, 255, 255, 0.6) 100%)',
            mixBlendMode: nextSlideData.isDarkTheme ? 'color-burn' : 'multiply',
            pointerEvents: 'none',
            transition: 'background 0.6s ease',
          }}
        />

        {/* Grid Texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 80% 80%, ${nextSlideData.isDarkTheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.12)'} 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            opacity: 0.7,
            pointerEvents: 'none',
          }}
        />

        {/* Top Accent Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${nextSlideData.accentColor}, transparent)`,
            zIndex: 2,
          }}
        />

        {/* Top Badge: Next Indicator */}
        <div
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            borderRadius: '999px',
            background: 'rgba(0, 0, 0, 0.55)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '0.625rem',
            color: '#fff',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            zIndex: 2,
          }}
        >
          NEXT <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>→</span>
        </div>

        {/* Bottom Label: Client Name */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '28px 16px 14px',
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '2px',
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-geist-sans)',
              fontSize: '0.9375rem',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.01em',
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            }}
          >
            {nextSlideData.clientName}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '0.625rem',
              color: nextSlideData.accentColor,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {nextSlideData.category}
          </span>
        </div>
      </div>
    </div>
  );
};
