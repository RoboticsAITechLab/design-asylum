'use client';

import React from 'react';
import { INSIGHTS } from '@/data/insights';
import { InsightCard } from './InsightCard';

export const InsightsSection: React.FC = () => {
  return (
    <section
      id="insights"
      className="section-pure-white"
      style={{
        padding: 'var(--section-pad-y) 0',
        borderBottom: '1px solid var(--border-light)',
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
              THOUGHT LEADERSHIP // ESSAYS
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
            Latest Insights & Studio Thinking
          </h2>
        </div>

        {/* 3 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
          className="insights-grid"
        >
          {INSIGHTS.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.insights-grid) {
            grid-template-columns: 1fr !important;
            row-gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
