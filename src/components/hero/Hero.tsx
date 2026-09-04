'use client';

import React, { useState, useEffect } from 'react';
import { HeroAtmosphere } from './HeroAtmosphere';
import { HeroVisual } from './HeroVisual';
import { useHero } from '@/context/HeroContext';

export const Hero: React.FC = () => {
  const {
    currentSlide,
    currentSlideIndex,
    allSlides,
    setSlideIndex,
    nextSlide,
    prevSlide,
    isAutoPlaying,
    toggleAutoPlay,
  } = useHero();

  const isDark = currentSlide.isDarkTheme;

  // Real-time progress bar reflecting the 3.8s auto-play countdown
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }

    setProgress(0);
    const intervalTime = 38; // ms
    const step = (intervalTime / 3800) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [currentSlideIndex, isAutoPlaying]);

  return (
    <section
      className={isDark ? 'section-dark' : 'section-light'}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 'clamp(5.5rem, 9vh, 7rem)',
        paddingBottom: 'clamp(2rem, 4vh, 3.5rem)',
        position: 'relative',
        transition: 'background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1), color 0.8s ease',
      }}
    >
      <HeroAtmosphere />

      {/* Dynamic Hero Visual Area */}
      <div className="site-container" style={{ position: 'relative', zIndex: 10 }}>
        <HeroVisual />

        {/* Interactive Client Slide Switcher Bar + Auto-play Progress */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
            marginTop: '1.25rem',
          }}
        >
          {/* Manual Switcher Chips */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              flexWrap: 'wrap',
            }}
          >
            {allSlides.map((slide, index) => {
              const isActive = index === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setSlideIndex(index)}
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.6875rem',
                    fontFamily: 'var(--font-geist-mono)',
                    letterSpacing: '0.06em',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s var(--ease-cinematic)',
                    backgroundColor: isActive
                      ? (isDark ? '#FFFFFF' : '#0B0B0F')
                      : (isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'),
                    color: isActive
                      ? (isDark ? '#0B0B0F' : '#FFFFFF')
                      : (isDark ? 'rgba(255, 255, 255, 0.65)' : 'rgba(0, 0, 0, 0.6)'),
                    border: `1px solid ${
                      isActive
                        ? (isDark ? '#FFFFFF' : '#0B0B0F')
                        : (isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)')
                    }`,
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  {slide.clientName}
                </button>
              );
            })}
          </div>

          {/* Auto-Rotation Progress Bar with Play/Pause Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <div
              style={{
                width: '160px',
                height: '2px',
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)',
                borderRadius: '2px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: '100%',
                  backgroundColor: currentSlide.themeColor || (isDark ? '#FFFFFF' : '#0B0B0F'),
                  boxShadow: `0 0 8px ${currentSlide.themeColor || '#8B5CF6'}`,
                  transition: 'width 0.038s linear',
                }}
              />
            </div>

            <button
              type="button"
              onClick={toggleAutoPlay}
              aria-label="Toggle hero auto rotation"
              style={{
                fontSize: '0.625rem',
                fontFamily: 'var(--font-geist-mono)',
                color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#554433',
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                padding: '0.2rem 0.6rem',
                borderRadius: '9999px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: isAutoPlaying ? '#10B981' : '#F59E0B',
                  display: 'inline-block',
                }}
              />
              {isAutoPlaying ? 'AUTO-CHANGING' : 'PAUSED'}
            </button>
          </div>
        </div>
      </div>

      {/* Lower Hero Content: Left metadata + Right monumental headline */}
      <div className="site-container" style={{ position: 'relative', zIndex: 10, marginTop: '1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
            alignItems: 'flex-end',
          }}
          className="hero-bottom-grid"
        >
          {/* Left: Studio coordinate info & status badge */}
          <div
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
            className="hero-left-meta"
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)'}`,
                width: 'fit-content',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: currentSlide.accentColor || '#34D399',
                  boxShadow: `0 0 8px ${currentSlide.accentColor || '#34D399'}`,
                  display: 'inline-block',
                }}
              />
              <span
                className="mono-tag"
                style={{
                  color: isDark ? '#E2E8F0' : '#1A1A24',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                }}
              >
                {currentSlide.clientName} // {currentSlide.category}
              </span>
            </div>

            <p
              style={{
                fontSize: '0.875rem',
                color: isDark ? 'rgba(255, 255, 255, 0.65)' : '#443A30',
                maxWidth: '300px',
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              Studio based in Bengaluru, Dubai & London. Delivering category-defining UI/UX, brand identity, and custom motion systems.
            </p>

            {/* Slider navigation arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous case study hero"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'}`,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                  color: isDark ? '#FFFFFF' : '#0B0B0F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                ←
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next case study hero"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'}`,
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                  color: isDark ? '#FFFFFF' : '#0B0B0F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                →
              </button>
              <span
                className="mono-tag"
                style={{
                  marginLeft: '0.5rem',
                  fontSize: '0.72rem',
                  color: isDark ? 'rgba(255, 255, 255, 0.5)' : '#665544',
                }}
              >
                {currentSlideIndex + 1} / {allSlides.length}
              </span>
            </div>
          </div>

          {/* Right: Massive Editorial Headline */}
          <div
            style={{
              gridColumn: 'span 8',
              textAlign: 'left',
            }}
            className="hero-right-title"
          >
            <h1
              className="font-display"
              style={{
                fontSize: 'var(--font-hero)',
                color: isDark ? '#FFFFFF' : '#0B0B0F',
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: '1.75rem',
                transition: 'color 0.6s ease',
              }}
            >
              Design Partners for scaling companies in India and the Middle East
            </h1>

            {/* Quick Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="#work"
                className={isDark ? 'btn-pill-light' : 'btn-pill-primary'}
              >
                <span>Explore Selected Work</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 2.5V9.5M6 9.5L9.5 6M6 9.5L2.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a
                href="#contact"
                className={isDark ? 'btn-pill-ghost-dark' : 'btn-pill-primary'}
                style={!isDark ? { backgroundColor: 'transparent', color: '#0B0B0F', border: '1px solid rgba(0, 0, 0, 0.2)' } : {}}
              >
                <span>Book Discovery Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.hero-bottom-grid) {
            display: flex !important;
            flex-direction: column-reverse !important;
            gap: 1.75rem !important;
          }
          :global(.hero-left-meta), :global(.hero-right-title) {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
