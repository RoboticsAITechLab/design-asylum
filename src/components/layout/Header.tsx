'use client';

import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/data/navigation';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: isScrolled ? 'rgba(7, 7, 9, 0.82)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          padding: isScrolled ? '0.85rem 0' : '1.4rem 0',
        }}
      >
        <div className="site-container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {/* Logo */}
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                textDecoration: 'none',
              }}
            >
              {/* Geometric studio mark icon */}
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#070709',
                  fontWeight: 900,
                  fontSize: '1rem',
                  letterSpacing: '-0.05em',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.25)',
                }}
              >
                a
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem' }}>
                <span
                  style={{
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Design Asylum
                </span>
                <span
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: '#A855F7',
                    display: 'inline-block',
                    marginLeft: '2px',
                  }}
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2.2rem',
              }}
              className="desktop-nav"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <a
                href="#contact"
                className="btn-pill-light"
                style={{
                  padding: '0.65rem 1.4rem',
                  fontSize: '0.875rem',
                  display: 'none',
                }}
                id="headerPrimaryCta"
              >
                <span>Get in Touch</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                }}
                className="mobile-toggle-btn"
              >
                {mobileMenuOpen ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="4" y1="8" x2="20" y2="8"></line>
                    <line x1="4" y1="16" x2="20" y2="16"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (min-width: 860px) {
            .mobile-toggle-btn {
              display: none !important;
            }
            #headerPrimaryCta {
              display: inline-flex !important;
            }
          }
          @media (max-width: 859px) {
            .desktop-nav {
              display: none !important;
            }
          }
        `}</style>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 890,
            backgroundColor: 'rgba(7, 7, 9, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#FFFFFF',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-pill-light"
              style={{
                marginTop: '1.5rem',
                padding: '1rem 2.2rem',
                fontSize: '1rem',
              }}
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
