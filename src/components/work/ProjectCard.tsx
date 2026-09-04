'use client';

import React, { useState } from 'react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Render bespoke visual graphics matching every single card in the reference screenshot
  const renderCardGraphic = () => {
    switch (project.id) {
      case 'sunroof':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#E6A825',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <img
              src={project.image}
              alt="Sunroof"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s var(--ease-cinematic)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                left: '1.25rem',
                color: '#111',
                fontSize: '0.6875rem',
                fontFamily: 'var(--font-geist-mono)',
                fontWeight: 700,
                textTransform: 'uppercase',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: '0.25rem 0.6rem',
                borderRadius: '4px',
                zIndex: 2,
              }}
            >
              01 // SUNROOF
            </div>
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                padding: '1.5rem',
                background: 'linear-gradient(to top, rgba(17, 17, 17, 0.85) 0%, transparent 100%)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
                  color: '#FFD147',
                  letterSpacing: '0.08em',
                  lineHeight: 0.9,
                  display: 'block',
                  textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                }}
              >
                SUNROOOF
              </span>
            </div>
          </div>
        );

      case 'direct-meds':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#4A7C6C',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt="Direct Meds"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s var(--ease-cinematic)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                left: '1.5rem',
                right: '1.5rem',
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: 'serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                  textShadow: '0 2px 15px rgba(0,0,0,0.4)',
                }}
              >
                direct meds
              </span>
              <span
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#1A4D3E',
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-geist-mono)',
                  fontWeight: 700,
                  padding: '0.25rem 0.6rem',
                  borderRadius: '9999px',
                }}
              >
                TELEHEALTH 2.0
              </span>
            </div>
          </div>
        );

      case 'puma-legacy':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#E01E26',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt="PUMA"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s var(--ease-cinematic)',
                filter: 'contrast(1.2) brightness(0.95)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '0.5rem',
                left: '1.5rem',
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
                  color: '#E01E26',
                  letterSpacing: '-0.03em',
                  lineHeight: 0.85,
                  display: 'block',
                  textShadow: '0 0 30px rgba(0,0,0,0.8), -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF',
                }}
              >
                PUMA
              </span>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                zIndex: 2,
                backgroundColor: 'rgba(224, 30, 38, 0.92)',
                padding: '0.4rem 0.9rem',
                borderRadius: '4px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 800,
                  fontSize: '0.875rem',
                  color: '#FFFFFF',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                THE LEGACY PORTAL
              </span>
            </div>
          </div>
        );

      case 'creativity-for-life':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#6B21A8',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt="Google Creative"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s var(--ease-cinematic)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                backgroundColor: 'rgba(124, 58, 237, 0.88)',
                backdropFilter: 'blur(10px)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                  color: '#FFFFFF',
                  display: 'block',
                  lineHeight: 1.1,
                }}
              >
                Creativity is for life.
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: '0.6875rem',
                  color: '#DDD6FE',
                  letterSpacing: '0.06em',
                }}
              >
                GOOGLE SPATIAL OOH // CAMPAIGN
              </span>
            </div>
          </div>
        );

      case 'magppie':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#6E7A60',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt="Magppie"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s var(--ease-cinematic)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                left: '1.5rem',
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
                  color: '#FFFFFF',
                  letterSpacing: '0.04em',
                  lineHeight: 0.9,
                  textShadow: '0 2px 20px rgba(0,0,0,0.6)',
                }}
              >
                MAGPPIE
              </span>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                display: 'flex',
                gap: '0.5rem',
                zIndex: 2,
              }}
            >
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid #FFFFFF', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }} />
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid #FFFFFF', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }} />
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid #FFFFFF', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }} />
            </div>
          </div>
        );

      case 'aura-spatial':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#4A154B',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt="Aura Audio"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s var(--ease-cinematic)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                left: '1.5rem',
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                  color: '#FFFFFF',
                  letterSpacing: '0.04em',
                }}
              >
                AURA
              </span>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                color: '#E9D5FF',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-geist-mono)',
                textAlign: 'right',
                zIndex: 2,
              }}
            >
              SPATIAL AUDIO OS<br />FOR NEXT-GEN SOUND
            </div>
          </div>
        );

      case 'vital-labs':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#1B3B2B',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt="Vital Labs"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s var(--ease-cinematic)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  color: '#6EE7B7',
                  display: 'block',
                }}
              >
                BOTANICAL CELLULAR
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)',
                  color: '#FFFFFF',
                }}
              >
                VITAL LABS
              </span>
            </div>
          </div>
        );

      case 'kor-klub':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#D6C5B3',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt="KorKlub"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s var(--ease-cinematic)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
                textAlign: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 4.8vw, 4.2rem)',
                  color: 'rgba(74, 56, 44, 0.95)',
                  letterSpacing: '0.02em',
                  lineHeight: 0.95,
                  textShadow: '0 0 25px rgba(255, 255, 255, 0.8)',
                }}
              >
                KorKlub
              </span>
            </div>
          </div>
        );

      case 'nexus-vault':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#1E1035',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt="Nexus"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s var(--ease-cinematic)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 30% 40%, rgba(168, 85, 247, 0.35) 0%, transparent 60%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  color: '#FFFFFF',
                  textShadow: '0 0 20px rgba(168, 85, 247, 0.8)',
                }}
              >
                NEXUS
              </span>
            </div>
          </div>
        );

      case 'strata-streetwear':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#262A33',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt="Strata"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s var(--ease-cinematic)',
              }}
            />
            {/* Signature Cross Yellow Caution Tape Motif */}
            <div
              style={{
                position: 'absolute',
                top: '40%',
                left: '-10%',
                right: '-10%',
                height: '24px',
                backgroundColor: 'rgba(234, 179, 8, 0.95)',
                color: '#111',
                fontSize: '0.6875rem',
                fontFamily: 'var(--font-geist-mono)',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                transform: 'rotate(-12deg)',
                letterSpacing: '0.1em',
                zIndex: 2,
              }}
            >
              STRATA // TECHNICAL RUNWAY // SS25 // ARCHIVAL SYSTEM
            </div>
          </div>
        );

      case 'radar-gear':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#334155',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt="Radar Packs"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s var(--ease-cinematic)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                zIndex: 2,
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(56, 189, 248, 0.3)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: '0.72rem',
                  color: '#38BDF8',
                  display: 'block',
                }}
              >
                HUD TELEMETRY // 4200m
              </span>
              <strong style={{ color: '#FFFFFF', fontSize: '1.1rem' }}>RADAR PACKS</strong>
            </div>
          </div>
        );

      case 'hyper-carrier':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#F3D5C5',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt="Hyper Carrier"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s var(--ease-cinematic)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                backgroundColor: '#E25E3E',
                color: '#FFFFFF',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-outfit)',
                fontWeight: 700,
                fontSize: '0.75rem',
                zIndex: 2,
              }}
            >
              SUB-15 MIN
            </div>
          </div>
        );

      case 'neo-urban':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#1E2824',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt="Neo Urban"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s var(--ease-cinematic)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                zIndex: 2,
                backgroundColor: 'rgba(6, 78, 59, 0.9)',
                color: '#6EE7B7',
                padding: '0.4rem 0.9rem',
                borderRadius: '6px',
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
              }}
            >
              NEO URBAN // RETAIL GRID
            </div>
          </div>
        );

      case 'valo-ev':
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: '#0F172A',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt="Valo EV"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s var(--ease-cinematic)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  color: '#FFFFFF',
                  letterSpacing: '0.05em',
                }}
              >
                VALO MOBILITY
              </span>
              <span
                style={{
                  display: 'block',
                  color: '#38BDF8',
                  fontSize: '0.6875rem',
                  fontFamily: 'var(--font-geist-mono)',
                }}
              >
                IN-COCKPIT OS
              </span>
            </div>
          </div>
        );

      default:
        return (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: project.bgColor,
              overflow: 'hidden',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.6s var(--ease-cinematic)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.55) 0%, transparent 45%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                  color: '#FFFFFF',
                  letterSpacing: '0.02em',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                }}
              >
                {project.title}
              </span>
            </div>
          </div>
        );
    }
  };

  const isTall = index % 3 === 1;

  return (
    <article
      onClick={() => onSelect(project)}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
        transition: 'transform 0.4s var(--ease-cinematic)',
        transform: isHovered ? 'translateY(-6px)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Card Graphic Canvas */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: isTall ? 'clamp(360px, 42vw, 500px)' : 'clamp(300px, 34vw, 420px)',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: project.bgColor,
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.08)'
            : '0 4px 20px -4px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.4s var(--ease-cinematic)',
        }}
      >
        {renderCardGraphic()}

        {/* Top-Right Quick Badge */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(7, 7, 9, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: '9999px',
            padding: '0.3rem 0.75rem',
            color: '#FFFFFF',
            fontSize: '0.6875rem',
            fontFamily: 'var(--font-geist-mono)',
            letterSpacing: '0.06em',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            zIndex: 3,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
        >
          {project.year}
        </div>

        {/* Floating View Button on Hover */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.25rem',
            right: '1.25rem',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            color: '#0B0B0F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.8)',
            transition: 'all 0.3s var(--ease-cinematic)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
            zIndex: 4,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Metadata Below Card */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', padding: '0 0.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <h3
            style={{
              fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)',
              fontWeight: 700,
              color: '#0B0B0F',
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}
          </h3>
          {project.metrics && (
            <span
              style={{
                fontFamily: 'var(--font-geist-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#8B5CF6',
              }}
            >
              {project.metrics.value}
            </span>
          )}
        </div>

        <p
          style={{
            fontSize: '0.875rem',
            color: '#656575',
            fontWeight: 400,
          }}
        >
          {project.category}
        </p>
      </div>
    </article>
  );
};
