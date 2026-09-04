'use client';

import React, { useEffect } from 'react';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(7, 7, 9, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2.5rem)',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(7, 7, 9, 0.7)',
            backdropFilter: 'blur(8px)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            cursor: 'pointer',
            transition: 'transform 0.2s ease, background-color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal Hero Cover Image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(280px, 40vh, 420px)',
            overflow: 'hidden',
            backgroundColor: project.bgColor,
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 60%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '1.75rem',
              left: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: '#FFFFFF',
            }}
          >
            <span
              className="mono-tag"
              style={{
                color: '#D8B4FE',
                backgroundColor: 'rgba(7, 7, 9, 0.6)',
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                border: '1px solid rgba(216, 180, 254, 0.3)',
              }}
            >
              {project.category}
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                marginTop: '0.6rem',
                letterSpacing: '-0.03em',
              }}
            >
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body Content */}
        <div
          style={{
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {/* Summary */}
          <div>
            <h4
              style={{
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-geist-mono)',
                textTransform: 'uppercase',
                color: '#8B5CF6',
                marginBottom: '0.5rem',
                letterSpacing: '0.08em',
              }}
            >
              The Vision & Impact
            </h4>
            <p style={{ fontSize: '1.125rem', color: '#1A1824', lineHeight: 1.6 }}>
              {project.summary}
            </p>
          </div>

          {/* Metrics & Year */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              padding: '1.25rem',
              backgroundColor: '#F8F8FA',
              borderRadius: '16px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', color: '#777788', display: 'block', textTransform: 'uppercase' }}>
                Client
              </span>
              <strong style={{ fontSize: '1rem', color: '#0B0B0F' }}>{project.client}</strong>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', color: '#777788', display: 'block', textTransform: 'uppercase' }}>
                Timeline / Year
              </span>
              <strong style={{ fontSize: '1rem', color: '#0B0B0F' }}>{project.year}</strong>
            </div>

            {project.metrics && (
              <div>
                <span style={{ fontSize: '0.75rem', color: '#777788', display: 'block', textTransform: 'uppercase' }}>
                  {project.metrics.label}
                </span>
                <strong style={{ fontSize: '1.15rem', color: '#8B5CF6' }}>{project.metrics.value}</strong>
              </div>
            )}
          </div>

          {/* Deliverables */}
          <div>
            <h4
              style={{
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-geist-mono)',
                textTransform: 'uppercase',
                color: '#777788',
                marginBottom: '0.75rem',
                letterSpacing: '0.08em',
              }}
            >
              Key Deliverables
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.deliverables.map((item) => (
                <span
                  key={item}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '8px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    color: '#0B0B0F',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer Action */}
          <div
            style={{
              paddingTop: '1rem',
              borderTop: '1px solid rgba(0, 0, 0, 0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <span style={{ fontSize: '0.875rem', color: '#656578' }}>
              Want to build something similar for your company?
            </span>
            <a href="#contact" onClick={onClose} className="btn-pill-primary">
              <span>Discuss Similar Scope</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
