'use client';

import React from 'react';
import { InteractiveGlobe } from './InteractiveGlobe';
import { ContactForm } from './ContactForm';
import { STUDIO_LOCATIONS } from '@/data/navigation';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="section-light"
      style={{
        padding: 'var(--section-pad-y) 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column: 3D Globe + Studio Contact Info */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
            }}
            className="contact-left"
          >
            <div>
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
                  CONSULTATION // INITIATE SPRINT
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
                  marginBottom: '1rem',
                }}
              >
                Let’s build the future together
              </h2>

              <p style={{ color: '#656575', fontSize: '1rem', lineHeight: 1.6 }}>
                Have an ambitious new brand, digital product, or complex design system? Tell us about your goals.
              </p>
            </div>

            {/* 3D Wireframe Canvas Mesh Globe */}
            <InteractiveGlobe />

            {/* Studio Contact Coordinates */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-light)',
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: '#888899', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Direct Inquiries
                </span>
                <a
                  href="mailto:hello@designasylum.studio"
                  style={{
                    display: 'block',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#0B0B0F',
                    marginTop: '0.2rem',
                  }}
                >
                  hello@designasylum.studio
                </a>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {STUDIO_LOCATIONS.slice(0, 2).map((loc) => (
                  <div key={loc.city}>
                    <strong style={{ fontSize: '0.875rem', color: '#0B0B0F', display: 'block' }}>
                      {loc.city}, {loc.country}
                    </strong>
                    <span style={{ fontSize: '0.75rem', color: '#656575', lineHeight: 1.4, display: 'block' }}>
                      {loc.address}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Consultation Form */}
          <div
            style={{
              gridColumn: 'span 7',
              backgroundColor: '#F8F8FA',
              padding: 'clamp(1.75rem, 3.5vw, 3rem)',
              borderRadius: '24px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
            }}
            className="contact-right"
          >
            <ContactForm />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.contact-grid) {
            display: flex !important;
            flex-direction: column !important;
            gap: 3rem !important;
          }
          :global(.contact-left), :global(.contact-right) {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
