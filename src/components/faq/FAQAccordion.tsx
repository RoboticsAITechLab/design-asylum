'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/data/faq';

interface FAQAccordionProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ item, isOpen, onToggle, index }) => {
  return (
    <div
      style={{
        borderBottom: '1px solid var(--border-light)',
        paddingBottom: isOpen ? '1.5rem' : '1.25rem',
        paddingTop: '1.25rem',
        transition: 'all 0.3s ease',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'left',
          gap: '1.5rem',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <span
            className="mono-tag"
            style={{
              fontSize: '0.8125rem',
              color: isOpen ? '#8B5CF6' : '#9999AA',
              fontWeight: 700,
            }}
          >
            {(index + 1).toString().padStart(2, '0')}
          </span>
          <h3
            style={{
              fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
              fontWeight: 600,
              color: '#0B0B0F',
              letterSpacing: '-0.02em',
              transition: 'color 0.2s ease',
            }}
          >
            {item.question}
          </h3>
        </div>

        {/* Plus / Minus Indicator */}
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: isOpen ? '#0B0B0F' : 'rgba(0, 0, 0, 0.04)',
            color: isOpen ? '#FFFFFF' : '#0B0B0F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.3s var(--ease-cinematic)',
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            style={{
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          >
            <line x1="7" y1="2" x2="7" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
      </button>

      {/* Accordion Answer */}
      {isOpen && (
        <div
          style={{
            paddingLeft: 'clamp(1.5rem, 3vw, 2.75rem)',
            paddingTop: '1rem',
            paddingRight: 'clamp(1rem, 3vw, 2.5rem)',
            color: '#555566',
            fontSize: '0.9375rem',
            lineHeight: 1.65,
          }}
        >
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};
