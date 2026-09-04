'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface HeroProject {
  id: string;
  name: string;
  category: string;
  image: string;
  href: string;
  isDark?: boolean;
}

const HERO_PROJECTS: HeroProject[] = [
  {
    id: 'hob',
    name: 'House of Believe',
    category: 'D2C Fashion & Commerce',
    image: '/hero/house-of-believe.webp',
    href: '/work',
  },
  {
    id: 'abso',
    name: 'Abso Essentials',
    category: 'Clean Botanical Skincare',
    image: '/hero/abso-essentials.png',
    href: '/work',
  },
  {
    id: 'kor',
    name: 'Kōr Klub',
    category: 'Pilates & Movement Culture',
    image: '/hero/kor-klub.png',
    href: '/work',
  },
  {
    id: 'snobs',
    name: 'Snobs',
    category: 'Music Culture & App',
    image: '/hero/snobs.png',
    href: '/work',
    isDark: true,
  },
];

const ROTATION_INTERVAL = 6000; // 6 seconds per slide

export const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Abso Essentials as in reference
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressStartTimeRef = useRef<number>(Date.now());

  // Dynamic progress bar & smooth auto-rotation
  useEffect(() => {
    if (isPaused) return;

    progressStartTimeRef.current = Date.now();
    setProgress(0);

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - progressStartTimeRef.current;
      const pct = Math.min((elapsed / ROTATION_INTERVAL) * 100, 100);
      setProgress(pct);

      if (elapsed >= ROTATION_INTERVAL) {
        setActiveIndex((prev) => (prev + 1) % HERO_PROJECTS.length);
        progressStartTimeRef.current = Date.now();
        setProgress(0);
      }
    }, 50);

    return () => clearInterval(progressTimer);
  }, [activeIndex, isPaused]);

  const activeProject = HERO_PROJECTS[activeIndex];

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
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Full-Screen Visual Background with smooth cinematic Ken-Burns crossfade */}
      {HERO_PROJECTS.map((project, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={project.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'scale(1)' : 'scale(1.04)',
              transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 2.2s cubic-bezier(0.16, 1, 0.3, 1)',
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
                filter: isActive ? 'none' : 'blur(4px)',
                transition: 'filter 1.4s ease',
              }}
            />
          </div>
        );
      })}

      {/* 2. Bespoke Editorial Lighting Gradient Mask for Ultra-Crisp Typography */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: activeProject.isDark
            ? 'radial-gradient(ellipse at 75% 85%, rgba(0,0,0,0.55) 0%, transparent 60%), linear-gradient(to right, rgba(0,0,0,0.45) 0%, transparent 45%, rgba(0,0,0,0.4) 100%)'
            : 'radial-gradient(ellipse at 75% 85%, rgba(255,255,255,0.75) 0%, transparent 55%), linear-gradient(to right, rgba(255,255,255,0.4) 0%, transparent 40%, rgba(255,255,255,0.2) 100%)',
          pointerEvents: 'none',
          transition: 'background 1.2s ease',
          zIndex: 2,
        }}
      />

      {/* 3. Lower-Left Project/Client Interactive List */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(3.5rem, 8vh, 6.5rem)',
          left: 'clamp(2rem, 5vw, 5.5rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem',
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
              onClick={() => {
                setActiveIndex(index);
                setProgress(0);
                progressStartTimeRef.current = Date.now();
              }}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.2rem 0',
                textAlign: 'left',
                fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: 'clamp(0.9rem, 1.15vw, 1.1rem)',
                fontWeight: isActive ? 700 : 400,
                color: activeProject.isDark
                  ? isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.55)'
                  : isActive ? '#0B0B0F' : '#6A6A75',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transform: isActive ? 'translateX(4px)' : 'none',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Active Progress Line */}
              <div
                style={{
                  width: isActive ? '24px' : '0px',
                  height: '2px',
                  backgroundColor: activeProject.isDark ? '#FFFFFF' : '#0B0B0F',
                  opacity: isActive ? 1 : 0,
                  transition: 'width 0.35s ease, opacity 0.35s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '2px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: `${progress}%`,
                    backgroundColor: activeProject.isDark ? '#7C3AED' : '#0B0B0F',
                    transition: 'width 0.05s linear',
                  }}
                />
              </div>

              <span>{project.name}</span>

              {isActive && (
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '100px',
                    backgroundColor: activeProject.isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)',
                    color: activeProject.isDark ? '#E2E8F0' : '#4B5563',
                    backdropFilter: 'blur(8px)',
                    marginLeft: '0.25rem',
                    animation: 'fadeInTag 0.4s ease forwards',
                  }}
                >
                  {project.category}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* 4. Main Hero Headline & Subtext (Pixel-accurate layout & rich typography) */}
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
            lineHeight: 1.04,
            letterSpacing: '-0.04em',
            color: activeProject.isDark ? '#FFFFFF' : '#0B0B0F',
            margin: '0 0 1.25rem 0',
            transition: 'color 0.8s ease',
            textShadow: activeProject.isDark ? '0 2px 20px rgba(0,0,0,0.6)' : 'none',
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
            color: activeProject.isDark ? 'rgba(255, 255, 255, 0.85)' : '#2A2A35',
            margin: '0 0 1.5rem 0',
            maxWidth: '680px',
            transition: 'color 0.8s ease',
          }}
        >
          Fueling growth through strategic branding, UX/UI, development, and marketing for 10+ years.
        </p>

        {/* Subtle Interactive Micro-CTA */}
        <Link
          href={activeProject.href}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-geist-sans), sans-serif',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: activeProject.isDark ? '#FFFFFF' : '#0B0B0F',
            textDecoration: 'none',
            padding: '0.4rem 0.9rem',
            borderRadius: '100px',
            backgroundColor: activeProject.isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.05)',
            border: activeProject.isDark ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.08)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.25s ease',
          }}
          className="hero-case-link"
        >
          <span>View {activeProject.name} Case Study</span>
          <span style={{ transition: 'transform 0.2s ease' }} className="hero-link-arrow">→</span>
        </Link>
      </div>

      <style jsx>{`
        @keyframes fadeInTag {
          from {
            opacity: 0;
            transform: translateX(-6px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        :global(.hero-case-link:hover .hero-link-arrow) {
          transform: translateX(4px);
        }

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
