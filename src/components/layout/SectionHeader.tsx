import React from 'react';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
  badge?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  badge
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      style={{
        textAlign: align,
        marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
        maxWidth: align === 'center' ? '860px' : '980px',
        marginLeft: align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0,
      }}
    >
      {/* Kicker badge */}
      {(kicker || badge) && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.3rem 0.85rem',
            borderRadius: '9999px',
            backgroundColor: isDark ? 'rgba(139, 92, 246, 0.12)' : 'rgba(0, 0, 0, 0.04)',
            border: `1px solid ${isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(0, 0, 0, 0.08)'}`,
            marginBottom: '1rem',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: isDark ? '#A855F7' : '#0B0B0F',
              display: 'inline-block',
            }}
          />
          <span
            className="mono-tag"
            style={{
              color: isDark ? '#D8B4FE' : '#555562',
              fontWeight: 600,
              letterSpacing: '0.1em',
            }}
          >
            {kicker || badge}
          </span>
        </div>
      )}

      {/* Main Title */}
      <h2
        className="font-display"
        style={{
          fontSize: 'var(--font-section)',
          color: isDark ? '#FFFFFF' : '#0B0B0F',
          fontWeight: 600,
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          marginBottom: subtitle ? '1rem' : '0',
        }}
      >
        {title}
      </h2>

      {/* Subtitle / Paragraph */}
      {subtitle && (
        <p
          style={{
            fontSize: 'var(--font-sub)',
            color: isDark ? '#A1A1B5' : '#595968',
            fontWeight: 400,
            lineHeight: 1.5,
            maxWidth: '680px',
            marginLeft: align === 'center' ? 'auto' : 0,
            marginRight: align === 'center' ? 'auto' : 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
