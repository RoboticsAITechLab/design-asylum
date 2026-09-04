'use client';

import React, { useState } from 'react';
import { FAQS } from '@/data/faq';
import { FAQAccordion } from './FAQAccordion';

export const FAQSection: React.FC = () => {
  // First item open by default
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="section-pure-white"
      style={{
        padding: 'var(--section-pad-y) 0',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div className="site-container">
        {/* Section Heading */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '780px' }}>
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
              TRANSPARENCY // COMMONLY ASKED
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
            Frequently Answered Questions
          </h2>
        </div>

        {/* Accordion Rows */}
        <div style={{ maxWidth: '980px' }}>
          {FAQS.map((item, index) => (
            <FAQAccordion
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
