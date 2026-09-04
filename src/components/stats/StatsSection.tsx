'use client';

import React from 'react';
import { STATS } from '@/data/stats';
import { StatCounter } from './StatCounter';

export const StatsSection: React.FC = () => {
  return (
    <section
      id="impact"
      className="section-pure-white"
      style={{
        padding: 'var(--section-pad-y) 0',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative',
      }}
    >
      <div className="site-container">
        {/* Centered Editorial Header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '780px',
            margin: '0 auto clamp(3.5rem, 6vw, 5.5rem) auto',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              marginBottom: '1.25rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#0B0B0F',
                display: 'inline-block',
              }}
            />
            <span className="mono-tag" style={{ color: '#555562', fontWeight: 600 }}>
              DECADE OF PROVEN IMPACT
            </span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'var(--font-section)',
              color: '#0B0B0F',
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
            }}
          >
            A Track Record that Speaks: High Impact, Proven Results
          </h2>
        </div>

        {/* 4 Stat Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(1.5rem, 3vw, 3rem)',
            marginBottom: 'clamp(3rem, 5vw, 4.5rem)',
          }}
          className="stats-grid"
        >
          {STATS.map((stat, index) => (
            <div
              key={stat.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                borderLeft: index > 0 ? '1px solid var(--border-light)' : 'none',
                paddingLeft: index > 0 ? 'clamp(1rem, 2.5vw, 2.5rem)' : 0,
              }}
              className="stat-card"
            >
              <div
                className="font-display"
                style={{
                  fontSize: 'clamp(3.2rem, 5.5vw, 5.2rem)',
                  fontWeight: 700,
                  color: '#0B0B0F',
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                }}
              >
                <StatCounter target={stat.value} suffix={stat.suffix} />
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                  fontWeight: 600,
                  color: '#1A1A24',
                  letterSpacing: '-0.01em',
                }}
              >
                {stat.label}
              </h3>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#707080',
                  lineHeight: 1.45,
                }}
              >
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Centered CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <a href="#contact" className="btn-pill-primary">
            <span>Collaborate with Us</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.stats-grid) {
            grid-template-columns: repeat(2, 1fr) !important;
            row-gap: 2.5rem !important;
          }
          :global(.stat-card) {
            border-left: none !important;
            padding-left: 0 !important;
          }
        }
        @media (max-width: 540px) {
          :global(.stats-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
