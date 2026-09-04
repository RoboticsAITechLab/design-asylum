'use client';

import React from 'react';

export const DarkTransitionSection: React.FC = () => {
  return (
    <section
      className="section-dark"
      style={{
        padding: 'clamp(5rem, 11vw, 9.5rem) 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Background Volumetric Violet Backlight */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 'clamp(320px, 65vw, 750px)',
          height: 'clamp(200px, 40vw, 400px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.28) 0%, rgba(168, 85, 247, 0.1) 45%, transparent 70%)',
          filter: 'blur(70px)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {/* Editorial Monospace Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#A855F7',
                boxShadow: '0 0 10px #A855F7',
                display: 'inline-block',
              }}
            />
            <span className="mono-tag" style={{ color: '#D8B4FE', letterSpacing: '0.12em' }}>
              PHILOSOPHY // 2025 PERSPECTIVE
            </span>
          </div>

          {/* Monumental Kinetic Typography */}
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 5.2vw, 4.6rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.06,
              letterSpacing: '-0.035em',
            }}
          >
            We don’t just design screens — we craft digital obsessions that reshape industries
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.65)',
              maxWidth: '660px',
              lineHeight: 1.6,
            }}
          >
            From seed-stage stealth disrupters to multi-billion dollar publicly listed enterprises, we architect digital ecosystems that are impossible to ignore.
          </p>

          <div style={{ paddingTop: '0.75rem' }}>
            <a href="#contact" className="btn-pill-light">
              <span>Initiate Collaboration</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
