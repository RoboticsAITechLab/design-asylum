import React from 'react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(1.75rem, 3vw, 2.5rem)',
        borderRadius: '20px',
        backgroundColor: '#F8F8FA',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        transition: 'all 0.35s var(--ease-cinematic)',
        height: '100%',
      }}
      className="testimonial-card"
    >
      <div>
        {/* Brand Monogram / Name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 800,
              fontSize: '1.125rem',
              letterSpacing: '0.12em',
              color: '#0B0B0F',
              textTransform: 'uppercase',
            }}
          >
            {testimonial.companyLogoText}
          </span>

          <div style={{ display: 'flex', gap: '2px', color: '#8B5CF6' }}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Quote */}
        <p
          style={{
            fontSize: 'clamp(0.9375rem, 1.2vw, 1.05rem)',
            color: '#222230',
            lineHeight: 1.65,
            fontWeight: 400,
            marginBottom: '2rem',
          }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Author Details */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <strong
            style={{
              fontSize: '0.9375rem',
              fontWeight: 700,
              color: '#0B0B0F',
            }}
          >
            {testimonial.author}
          </strong>
          <span
            style={{
              fontSize: '0.8125rem',
              color: '#656575',
              lineHeight: 1.3,
            }}
          >
            {testimonial.role} • {testimonial.company}
          </span>
        </div>
      </div>
    </div>
  );
};
