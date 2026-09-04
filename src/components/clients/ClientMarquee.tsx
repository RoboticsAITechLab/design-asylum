'use client';

import React from 'react';
import { CLIENTS } from '@/data/clients';
import { useHero } from '@/context/HeroContext';

export const ClientMarquee: React.FC = () => {
  const { currentSlide, setSlideById } = useHero();
  const marqueeItems = [...CLIENTS, ...CLIENTS];

  return (
    <section
      className="section-pure-white"
      style={{
        borderBottom: '1px solid var(--border-light)',
        borderTop: '1px solid var(--border-light)',
        padding: 'clamp(2.2rem, 4.5vw, 3.5rem) 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Edge gradient fades */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: 'clamp(40px, 10vw, 120px)',
          background: 'linear-gradient(to right, #FFFFFF, rgba(255, 255, 255, 0))',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'clamp(40px, 10vw, 120px)',
          background: 'linear-gradient(to left, #FFFFFF, rgba(255, 255, 255, 0))',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />

      {/* Infinite Marquee Track with Interactive Hero Triggering */}
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'infiniteMarquee 38s linear infinite',
          alignItems: 'center',
        }}
        className="marquee-track"
      >
        {marqueeItems.map((client, index) => {
          const isActive = currentSlide.clientName.toLowerCase().includes(client.name.toLowerCase()) ||
                           client.name.toLowerCase().includes(currentSlide.clientName.toLowerCase());

          return (
            <div
              key={`${client.id}-${index}`}
              onClick={() => setSlideById(client.name)}
              onMouseEnter={() => setSlideById(client.name)}
              style={{
                padding: '0.5rem clamp(2rem, 3.8vw, 4rem)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                cursor: 'pointer',
                opacity: isActive ? 1 : 0.65,
                transform: isActive ? 'scale(1.08)' : 'scale(1)',
                transition: 'all 0.3s var(--ease-cinematic)',
              }}
            >
              {/* Active Indicator Dot */}
              {isActive && (
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: currentSlide.themeColor || '#8B5CF6',
                    boxShadow: `0 0 8px ${currentSlide.themeColor || '#8B5CF6'}`,
                    display: 'inline-block',
                  }}
                />
              )}

              {/* Typographic client logo */}
              <span
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                  letterSpacing: client.id === 'puma' ? '0.22em' : '0.12em',
                  color: isActive ? '#0B0B0F' : '#444455',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  borderBottom: isActive ? `2px solid ${currentSlide.themeColor || '#0B0B0F'}` : '2px solid transparent',
                  paddingBottom: '2px',
                  transition: 'border-color 0.3s ease, color 0.3s ease',
                }}
              >
                {client.tickerText}
              </span>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
