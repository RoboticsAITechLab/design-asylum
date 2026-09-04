'use client';

import React, { useState } from 'react';
import { SERVICES } from '@/data/services';

export const ProcessSection: React.FC = () => {
  const [activeService, setActiveService] = useState<string>(SERVICES[0].id);

  return (
    <section
      id="services"
      className="section-pure-white"
      style={{
        padding: 'var(--section-pad-y) 0',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div className="site-container">
        {/* Section Heading */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
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
                backgroundColor: '#0B0B0F',
                display: 'inline-block',
              }}
            />
            <span className="mono-tag" style={{ color: '#555562', fontWeight: 600 }}>
              OUR METHODOLOGY & PRACTICES
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
              maxWidth: '850px',
            }}
          >
            We engineer high-conviction digital products and iconic brands built for velocity
          </h2>
        </div>

        {/* 2-Column Asymmetrical Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
            alignItems: 'start',
          }}
          className="process-grid"
        >
          {/* Left Column: Narrative Manifesto + Primary Pill Button */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
              position: 'sticky',
              top: '120px',
            }}
            className="process-left"
          >
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
                color: '#2A2A38',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Every pixel we craft is engineered to solve two distinct challenges: emotional desire and friction-free commercial conversion.
            </p>

            <p
              style={{
                fontSize: '0.9375rem',
                color: '#656578',
                lineHeight: 1.65,
              }}
            >
              We don&apos;t build generic SaaS templates or cookie-cutter portfolios. We operate as embedded creative partners, guiding founders through naming, multi-platform design systems, 60fps interaction engineering, and category dominance.
            </p>

            <div style={{ paddingTop: '0.5rem' }}>
              <a href="#contact" className="btn-pill-primary">
                <span>Start a Project</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Capabilities Stack with Active Detail Panel */}
          <div
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
            className="process-right"
          >
            {SERVICES.map((service) => {
              const isActive = activeService === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  style={{
                    padding: 'clamp(1.4rem, 2.5vw, 2rem)',
                    borderRadius: '16px',
                    backgroundColor: isActive ? '#F8F8FA' : '#FFFFFF',
                    border: `1px solid ${isActive ? 'rgba(0, 0, 0, 0.18)' : 'rgba(0, 0, 0, 0.06)'}`,
                    boxShadow: isActive ? '0 12px 30px -10px rgba(0, 0, 0, 0.08)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s var(--ease-cinematic)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: isActive ? '1rem' : 0,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                      <span
                        className="mono-tag"
                        style={{
                          fontSize: '0.8125rem',
                          color: isActive ? '#8B5CF6' : '#9999A8',
                          fontWeight: 700,
                        }}
                      >
                        {service.number}
                      </span>
                      <h3
                        style={{
                          fontSize: 'clamp(1.15rem, 1.9vw, 1.45rem)',
                          fontWeight: 600,
                          color: '#0B0B0F',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: isActive ? '#0B0B0F' : 'rgba(0, 0, 0, 0.04)',
                        color: isActive ? '#FFFFFF' : '#0B0B0F',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        style={{
                          transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isActive && (
                    <div style={{ paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <p style={{ color: '#555566', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        {service.description}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {service.deliverables.map((item) => (
                          <span
                            key={item}
                            style={{
                              padding: '0.35rem 0.75rem',
                              borderRadius: '8px',
                              backgroundColor: '#FFFFFF',
                              border: '1px solid rgba(0, 0, 0, 0.08)',
                              fontSize: '0.78125rem',
                              fontWeight: 500,
                              color: '#2A2A38',
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.process-grid) {
            display: flex !important;
            flex-direction: column !important;
          }
          :global(.process-left) {
            position: static !important;
            width: 100% !important;
          }
          :global(.process-right) {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
