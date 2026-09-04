'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/testimonials';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="section-light"
      style={{
        padding: 'var(--section-pad-y) 0',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div className="site-container">
        {/* Section Heading */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#8B5CF6',
                display: 'inline-block',
              }}
            />
            <span className="mono-tag" style={{ color: '#555562', fontWeight: 600 }}>
              TESTIMONIALS // WORDS FROM FOUNDERS
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
              maxWidth: '820px',
            }}
          >
            Trusted by Visionary Founders & Global Brands
          </h2>
        </div>

        {/* 3 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(1.5rem, 2.5vw, 2.5rem)',
          }}
          className="testimonials-grid"
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.testimonials-grid) {
            grid-template-columns: 1fr !important;
            row-gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
