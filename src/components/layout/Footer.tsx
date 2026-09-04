'use client';

import React, { useState, useEffect } from 'react';
import { NAV_LINKS, STUDIO_LOCATIONS, SOCIAL_LINKS } from '@/data/navigation';
import { SERVICES } from '@/data/services';

export const Footer: React.FC = () => {
  const [bengaluruTime, setBengaluruTime] = useState('');
  const [dubaiTime, setDubaiTime] = useState('');
  const [londonTime, setLondonTime] = useState('');

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setBengaluruTime(
        now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false })
      );
      setDubaiTime(
        now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit', hour12: false })
      );
      setLondonTime(
        now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false })
      );
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="section-pure-white"
      style={{
        borderTop: '1px solid var(--border-light)',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: '2.5rem',
        position: 'relative',
      }}
    >
      <div className="site-container">
        {/* Grand CTA Banner */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingBottom: 'clamp(3rem, 6vw, 5rem)',
            borderBottom: '1px solid var(--border-light)',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span
              className="mono-tag"
              style={{
                color: '#8B5CF6',
                fontWeight: 700,
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              READY TO ELEVATE YOUR STANDARD?
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
                fontWeight: 700,
                color: '#0B0B0F',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              Have an ambitious vision in mind? Let’s build it.
            </h2>
          </div>

          <div>
            <a
              href="#contact"
              className="btn-pill-primary"
              style={{
                padding: '1.1rem 2.4rem',
                fontSize: '1rem',
              }}
            >
              <span>Book an Intro Call</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            padding: 'clamp(3rem, 6vw, 5rem) 0',
            borderBottom: '1px solid var(--border-light)',
          }}
          className="footer-columns-grid"
        >
          {/* Col 1: Brand & Status */}
          <div
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
            className="footer-brand-col"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '6px',
                  backgroundColor: '#0B0B0F',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '1rem',
                }}
              >
                a
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0B0B0F', letterSpacing: '-0.02em' }}>
                Design Asylum
              </span>
            </div>

            <p style={{ fontSize: '0.9375rem', color: '#656575', lineHeight: 1.6, maxWidth: '300px' }}>
              Global creative digital studio crafting iconic brands, high-velocity UX/UI systems, and custom motion architectures.
            </p>

            {/* Live Operations Indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(52, 211, 153, 0.1)',
                border: '1px solid rgba(52, 211, 153, 0.25)',
                width: 'fit-content',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  boxShadow: '0 0 6px #10B981',
                }}
              />
              <span className="mono-tag" style={{ color: '#059669', fontSize: '0.6875rem' }}>
                STUDIO STATUS // OPERATIONAL
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Directory */}
          <div style={{ gridColumn: 'span 2' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-geist-mono)',
                textTransform: 'uppercase',
                color: '#8A8A9A',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '1.25rem',
              }}
            >
              Navigation
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.9375rem',
                      color: '#2A2A38',
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#8B5CF6')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#2A2A38')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Capabilities */}
          <div style={{ gridColumn: 'span 3' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-geist-mono)',
                textTransform: 'uppercase',
                color: '#8A8A9A',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '1.25rem',
              }}
            >
              Core Capabilities
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    style={{
                      fontSize: '0.9375rem',
                      color: '#2A2A38',
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#8B5CF6')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#2A2A38')}
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Studios & Live World Clocks */}
          <div style={{ gridColumn: 'span 3' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-geist-mono)',
                textTransform: 'uppercase',
                color: '#8A8A9A',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '1.25rem',
              }}
            >
              Studio Desks
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <strong style={{ color: '#0B0B0F' }}>Bengaluru (HQ)</strong>
                  <span className="mono-tag" style={{ color: '#8B5CF6' }}>{bengaluruTime || '12:00'} IST</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#707080' }}>Indiranagar Creative Quarters</span>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <strong style={{ color: '#0B0B0F' }}>Dubai (MENA)</strong>
                  <span className="mono-tag" style={{ color: '#8B5CF6' }}>{dubaiTime || '10:30'} GST</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#707080' }}>D3 Dubai Design District</span>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <strong style={{ color: '#0B0B0F' }}>London (EU)</strong>
                  <span className="mono-tag" style={{ color: '#8B5CF6' }}>{londonTime || '07:30'} GMT</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#707080' }}>Shoreditch Tech Yards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Metadata */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingTop: '2.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: '#4A4A58',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0B0B0F')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#4A4A58')}
              >
                {s.name}
              </a>
            ))}
          </div>

          <div style={{ fontSize: '0.8125rem', color: '#8A8A9A' }}>
            © {new Date().getFullYear()} Design Asylum Studio LLP. All rights reserved.
          </div>
        </div>

        {/* Giant Typographic Studio Signature Mark at bottom of footer */}
        <div
          style={{
            marginTop: '3.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              opacity: 0.9,
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                backgroundColor: '#0B0B0F',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.5rem',
              }}
            >
              a
            </div>
            <span
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: 800,
                color: '#0B0B0F',
                letterSpacing: '-0.04em',
              }}
            >
              Design Asylum
            </span>
          </div>
        </div>
      </div>

      {/* Floating Action WhatsApp / Chat Button (matching screenshot corner icon) */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        aria-label="Direct studio WhatsApp chat"
        style={{
          position: 'fixed',
          bottom: '1.75rem',
          right: '1.75rem',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.45)',
          zIndex: 800,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12) translateY(-2px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) translateY(0)')}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-10.416c-4.418 0-8 3.582-8 8 0 1.411.366 2.738 1.006 3.89l-1.07 3.914 4.024-1.055c1.111.606 2.385.951 3.74.951 4.418 0 8-3.582 8-8s-3.582-8-8-8z" />
        </svg>
      </a>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.footer-columns-grid) {
            display: flex !important;
            flex-direction: column !important;
            gap: 2.5rem !important;
          }
          :global(.footer-brand-col) {
            width: 100% !important;
          }
        }
      `}</style>
    </footer>
  );
};
