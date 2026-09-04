'use client';

import React, { useState, useEffect } from 'react';

interface HeroProject {
  id: string;
  name: string;
  image: string;
}

const HERO_PROJECTS: HeroProject[] = [
  {
    id: 'hob',
    name: 'House of Believe',
    image: '/exact_ref/bg_hob.jpg',
  },
  {
    id: 'abso',
    name: 'Abso Essentials',
    image: '/exact_ref/bg_abso.jpg',
  },
  {
    id: 'kor',
    name: 'Kōr Klub',
    image: '/exact_ref/bg_kor.jpg',
  },
  {
    id: 'snobs',
    name: 'Snobs',
    image: '/exact_ref/bg_snobs.jpg',
  },
];

export const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Abso Essentials as shown in video

  // Auto-rotation matching video behavior
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_PROJECTS.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
      }}
      id="hero-reference"
    >
      {/* 1. Full-Screen Visual Background with smooth crossfade */}
      {HERO_PROJECTS.map((project, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={project.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'scale(1)' : 'scale(1.03)',
              transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
        );
      })}

      {/* Subtle overlay to keep typography perfectly readable and high-contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(255, 255, 255, 0.25) 0%, transparent 40%, rgba(255, 255, 255, 0.15) 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* 2. Lower-Left Project/Client List (Matching exact position, font & hierarchy) */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(3.5rem, 8vh, 6.5rem)',
          left: 'clamp(2rem, 5vw, 5.5rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          zIndex: 10,
          userSelect: 'none',
        }}
      >
        {HERO_PROJECTS.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.15rem 0',
                textAlign: 'left',
                fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: 'clamp(0.85rem, 1.1vw, 1.05rem)',
                fontWeight: isActive ? 700 : 400,
                color: isActive ? '#0B0B0F' : '#6A6A75',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {project.name}
            </button>
          );
        })}
      </div>

      {/* 3. Main Hero Headline & Subtext (Matching exact line-breaks, font size, weight and position) */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(3.5rem, 8.5vh, 7rem)',
          left: 'clamp(48%, 51vw, 53%)',
          maxWidth: 'clamp(440px, 44vw, 840px)',
          zIndex: 10,
          textAlign: 'left',
        }}
        className="hero-headline-container"
      >
        <h1
          style={{
            fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSize: 'clamp(2.4rem, 4.4vw, 4.75rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            color: '#0B0B0F',
            margin: '0 0 1.25rem 0',
          }}
        >
          Design Partner for scaling companies in India and the Middle East
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSize: 'clamp(0.95rem, 1.2vw, 1.2rem)',
            fontWeight: 400,
            lineHeight: 1.5,
            color: '#2A2A35',
            margin: 0,
            maxWidth: '680px',
          }}
        >
          Founding growth through strategic branding, UX/UI, development, and marketing for 10+ years.
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.hero-headline-container) {
            left: clamp(1.5rem, 4vw, 3rem) !important;
            bottom: clamp(7rem, 14vh, 10rem) !important;
            max-width: 90% !important;
          }
        }
      `}</style>
    </section>
  );
};
