'use client';

import React, { useState } from 'react';
import { Insight } from '@/data/insights';

interface InsightCardProps {
  insight: Insight;
}

export const InsightCard: React.FC<InsightCardProps> = ({ insight }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'pointer',
        transition: 'transform 0.35s var(--ease-cinematic)',
        transform: isHovered ? 'translateY(-4px)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Thumbnail */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(220px, 26vw, 300px)',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#1E1E26',
        }}
      >
        <img
          src={insight.image}
          alt={insight.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Ambient Dark Gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 50%)',
          }}
        />

        {/* Top-Right Read Time Badge */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(7, 7, 9, 0.7)',
            backdropFilter: 'blur(8px)',
            borderRadius: '9999px',
            padding: '0.25rem 0.7rem',
            color: '#FFFFFF',
            fontSize: '0.6875rem',
            fontFamily: 'var(--font-geist-mono)',
          }}
        >
          {insight.readTime}
        </div>
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#8B5CF6',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {insight.category}
          </span>
          <span style={{ color: '#A0A0B0', fontSize: '0.75rem' }}>•</span>
          <span style={{ fontSize: '0.75rem', color: '#707080' }}>{insight.date}</span>
        </div>

        <h3
          style={{
            fontSize: 'clamp(1.15rem, 1.5vw, 1.35rem)',
            fontWeight: 700,
            color: '#0B0B0F',
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            transition: 'color 0.2s ease',
          }}
        >
          {insight.title}
        </h3>

        <p
          style={{
            fontSize: '0.875rem',
            color: '#656575',
            lineHeight: 1.55,
          }}
        >
          {insight.excerpt}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#0B0B0F',
            fontSize: '0.8125rem',
            fontWeight: 600,
            marginTop: '0.5rem',
          }}
        >
          <span>Read Article</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{
              transform: isHovered ? 'translateX(4px)' : 'none',
              transition: 'transform 0.25s ease',
            }}
          >
            <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </article>
  );
};
