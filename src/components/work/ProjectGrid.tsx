'use client';

import React from 'react';
import { Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onSelectProject }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: 'clamp(1.5rem, 3.5vw, 3rem)',
        rowGap: 'clamp(2.5rem, 5vw, 4.5rem)',
        width: '100%',
      }}
      className="editorial-project-grid"
    >
      {projects.map((project, index) => (
        <div
          key={project.id}
          style={{
            // Stagger odd items slightly to reproduce the bespoke editorial cadence
            transform: index % 2 === 1 ? 'translateY(clamp(0px, 2vw, 24px))' : 'none',
          }}
          className="project-grid-item"
        >
          <ProjectCard project={project} onSelect={onSelectProject} index={index} />
        </div>
      ))}

      <style jsx>{`
        @media (max-width: 820px) {
          :global(.editorial-project-grid) {
            grid-template-columns: 1fr !important;
            row-gap: 2.5rem !important;
          }
          :global(.project-grid-item) {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};
