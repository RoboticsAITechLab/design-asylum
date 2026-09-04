'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/projects';
import { ProjectGrid } from './ProjectGrid';
import { ProjectModal } from './ProjectModal';

const CATEGORIES = ['All', 'E-Commerce', 'Fintech', 'HealthTech', 'Automotive', 'Spatial'];

export const WorkSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase())) || p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section
      id="work"
      className="section-light"
      style={{
        padding: 'var(--section-pad-y) 0',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div className="site-container">
        {/* Section Header with Category Filters */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
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
                  marginBottom: '0.75rem',
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
                  PORTFOLIO // SELECTED WORK
                </span>
              </div>

              <h2
                className="font-display"
                style={{
                  fontSize: 'var(--font-section)',
                  color: '#0B0B0F',
                  fontWeight: 600,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.08,
                }}
              >
                Featured Case Studies
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '0.45rem 1rem',
                      borderRadius: '9999px',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      backgroundColor: isSelected ? '#0B0B0F' : 'rgba(0, 0, 0, 0.04)',
                      color: isSelected ? '#FFFFFF' : '#555565',
                      border: `1px solid ${isSelected ? '#0B0B0F' : 'rgba(0, 0, 0, 0.06)'}`,
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2-Column Editorial Grid */}
        <ProjectGrid projects={filteredProjects} onSelectProject={(p) => setActiveProject(p)} />

        {/* Bottom Actions & Trust Signals */}
        <div
          style={{
            marginTop: 'clamp(4rem, 7vw, 6rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            textAlign: 'center',
          }}
        >
          <a href="#contact" className="btn-pill-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
            <span>Explore All 150+ Archive Works</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Studio Recognition Badges matching the reference screenshot */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(1.5rem, 3vw, 3.5rem)',
              flexWrap: 'wrap',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-light)',
              width: '100%',
              maxWidth: '800px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B0B0F' }}>Clutch</span>
              <span style={{ fontSize: '0.8125rem', color: '#656575', fontWeight: 600 }}>5.0 ★ Top Agency</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B0B0F' }}>awwwards.</span>
              <span style={{ fontSize: '0.8125rem', color: '#656575', fontWeight: 600 }}>Site of the Day</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0B0B0F' }}>Bēhance</span>
              <span style={{ fontSize: '0.8125rem', color: '#656575', fontWeight: 600 }}>Curated in Interaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
