'use client';

import React from 'react';
import { useHero } from '@/context/HeroContext';

export const HeroVisual: React.FC = () => {
  const { currentSlide, currentSlideIndex, allSlides, setSlideIndex } = useHero();

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1360px',
        height: 'clamp(460px, 58vh, 640px)',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '24px',
        backgroundColor: '#EBEBEF',
        boxShadow: '0 20px 60px -20px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Background Architectural Studio Stage */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero_hob.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Pre-stacked smooth crossfading for each slide artwork */}
      {allSlides.map((slide, idx) => {
        const isActive = idx === currentSlideIndex;

        return (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'scale(1)' : 'scale(1.03)',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            <img
              src={slide.image}
              alt={slide.clientName}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />

            {/* Subtle atmospheric vignette */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(235, 235, 239, 0.2) 0%, transparent 40%, rgba(235, 235, 239, 0.3) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        );
      })}

      {/* Interactive Left Vertical Client List (Matching reference site) */}
      <div
        style={{
          position: 'absolute',
          left: 'clamp(24px, 4.5vw, 60px)',
          bottom: 'clamp(32px, 5.5vh, 60px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.45rem',
          zIndex: 10,
        }}
      >
        {allSlides.slice(0, 5).map((slide, index) => {
          const isActive = index === currentSlideIndex;

          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => setSlideIndex(index)}
              style={{
                textAlign: 'left',
                padding: '0.2rem 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-geist-sans), -apple-system, sans-serif',
                fontSize: 'clamp(0.875rem, 1.1vw, 1.05rem)',
                fontWeight: isActive ? 700 : 400,
                color: isActive ? '#0B0B0F' : '#737380',
                transform: isActive ? 'translateX(4px)' : 'none',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {isActive && (
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#0B0B0F',
                    display: 'inline-block',
                  }}
                />
              )}
              <span>{slide.clientName}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
