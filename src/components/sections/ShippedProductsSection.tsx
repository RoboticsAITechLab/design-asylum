'use client';

import React from 'react';

export const ShippedProductsSection: React.FC = () => {
  return (
    <section
      className="section-pure-white"
      style={{
        backgroundColor: '#FFFFFF',
        color: '#0B0B0F',
        padding: 'clamp(4.5rem, 8vw, 7rem) 0 clamp(3.5rem, 6vw, 5rem)',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div className="site-container">
        {/* Section Heading */}
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#0B0B0F',
          }}
        >
          150+ Products Shipped. Here&apos;s How:
        </h2>

        {/* 2-Column Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'flex-start',
          }}
          className="shipped-grid"
        >
          {/* Left Column: Mission Description + Pill Button */}
          <div
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
            }}
            className="shipped-left"
          >
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                lineHeight: 1.6,
                color: '#33333E',
                maxWidth: '620px',
                fontWeight: 400,
              }}
            >
              We deliver end-to-end, from breakthrough strategy to production-ready code. Our proven methodology gets products to market 70% faster with 3x team velocity. Healthcare, fintech, retail, Fortune 500s and startups trust us when speed matters.
            </p>

            <div>
              <a
                href="#contact"
                className="btn-pill-primary"
                style={{
                  padding: '1rem 2.2rem',
                  fontSize: '0.9375rem',
                  backgroundColor: '#111115',
                  color: '#FFFFFF',
                  borderRadius: '9999px',
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column: Solutions Tag + Services List */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
            className="shipped-right"
          >
            <div
              style={{
                display: 'inline-block',
                width: 'fit-content',
                padding: '0.25rem 0.65rem',
                backgroundColor: '#EBEBF0',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-geist-mono)',
                color: '#444452',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              Solutions
            </div>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}
            >
              {[
                'Web and Mobile Apps',
                'Cloud Enterprise Software',
                'AI integration & adoption',
                'Branding and Identity',
                'Performance Marketing',
                'Social Media Strategy'
              ].map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: '1rem',
                    color: '#22222B',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    fontWeight: 500,
                  }}
                >
                  <span style={{ fontSize: '1.1rem', color: '#111115' }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 850px) {
          :global(.shipped-grid) {
            display: flex !important;
            flex-direction: column !important;
            gap: 2.5rem !important;
          }
          :global(.shipped-left), :global(.shipped-right) {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
