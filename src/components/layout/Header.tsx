'use client';

import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/data/navigation';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 900,
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: '0.85rem clamp(1rem, 3.5vw, 3rem)',
          backgroundColor: isScrolled ? 'rgba(248, 248, 250, 0.88)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.06)' : '1px solid transparent',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1800px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          {/* Logo on Left matching reference: d Design_ Asylum */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              color: '#0B0B0F',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-geist-sans), sans-serif',
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span style={{ fontSize: '1.35rem', fontWeight: 800 }}>d</span>
              <span>Design_ Asylum</span>
            </span>
          </a>

          {/* Desktop Navigation Links in Center */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(1.5rem, 2.5vw, 2.5rem)',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: '#22222B',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  transition: 'color 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#000000')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#22222B')}
              >
                {link.label}
                {link.label === 'Services' && (
                  <span style={{ fontSize: '0.75rem', opacity: 0.65 }}>▾</span>
                )}
              </a>
            ))}
          </nav>

          {/* Dark Pill CTA on Right: "Get In Touch" */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="#contact"
              className="desktop-nav"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.65rem 1.45rem',
                backgroundColor: '#111115',
                color: '#FFFFFF',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                transition: 'all 0.25s ease',
              }}
            >
              Get In Touch
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                padding: '8px',
                cursor: 'pointer',
              }}
              className="mobile-menu-btn"
            >
              <span style={{ width: '22px', height: '2px', backgroundColor: '#0B0B0F' }} />
              <span style={{ width: '22px', height: '2px', backgroundColor: '#0B0B0F' }} />
              <span style={{ width: '22px', height: '2px', backgroundColor: '#0B0B0F' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            padding: '1.5rem',
            zIndex: 899,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#0B0B0F',
                fontSize: '1.1rem',
                fontWeight: 600,
                padding: '0.5rem 0',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              marginTop: '0.5rem',
              padding: '0.85rem',
              backgroundColor: '#111115',
              color: '#FFFFFF',
              borderRadius: '9999px',
              textAlign: 'center',
              fontWeight: 600,
            }}
          >
            Get In Touch
          </a>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 820px) {
          :global(.mobile-menu-btn) {
            display: none !important;
          }
        }
        @media (max-width: 819px) {
          :global(.desktop-nav) {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
