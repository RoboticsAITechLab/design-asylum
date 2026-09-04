'use client';

import React, { useState } from 'react';

const SERVICE_OPTIONS = [
  'Brand Strategy & Identity',
  'UI/UX & Product Design',
  'Web & Mobile Engineering',
  'Custom Motion Systems',
  'AI Integration',
  'Quarterly Design Retainer'
];

const BUDGET_OPTIONS = [
  '$15k – $30k',
  '$30k – $60k',
  '$60k – $120k',
  '$120k+'
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    selectedServices: [] as string[],
    budget: '$30k – $60k',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== service)
          : [...prev.selectedServices, service],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate realistic asynchronous network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <div
        style={{
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          borderRadius: '24px',
          backgroundColor: '#F8F8FA',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#0B0B0F',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h3
          className="font-display"
          style={{
            fontSize: '1.75rem',
            color: '#0B0B0F',
            fontWeight: 700,
          }}
        >
          Inquiry Received
        </h3>

        <p style={{ color: '#555566', maxWidth: '440px', lineHeight: 1.6 }}>
          Thank you, <strong>{formData.name || 'friend'}</strong>. One of our founding partners will review your requirements and reach out within 24 hours.
        </p>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              selectedServices: [],
              budget: '$30k – $60k',
              message: '',
            });
          }}
          className="btn-pill-primary"
          style={{ marginTop: '1rem' }}
        >
          <span>Submit Another Project</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.75rem',
      }}
    >
      {/* 2-Column Fields: Name & Email */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
        }}
        className="form-row-2"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#0B0B0F' }}>
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Maya Chen"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              backgroundColor: '#FFFFFF',
              fontSize: '0.9375rem',
              color: '#0B0B0F',
              outline: 'none',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#8B5CF6';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.15)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.12)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#0B0B0F' }}>
            Work Email *
          </label>
          <input
            type="email"
            required
            placeholder="maya@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              backgroundColor: '#FFFFFF',
              fontSize: '0.9375rem',
              color: '#0B0B0F',
              outline: 'none',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#8B5CF6';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.15)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.12)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>
      </div>

      {/* 2-Column Fields: Phone & Company */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
        }}
        className="form-row-2"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#0B0B0F' }}>
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              backgroundColor: '#FFFFFF',
              fontSize: '0.9375rem',
              color: '#0B0B0F',
              outline: 'none',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#0B0B0F' }}>
            Company / Organization
          </label>
          <input
            type="text"
            placeholder="Acme Mobility Inc."
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              backgroundColor: '#FFFFFF',
              fontSize: '0.9375rem',
              color: '#0B0B0F',
              outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Services Multi-Select Chips */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <label style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#0B0B0F' }}>
          Services Needed
        </label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {SERVICE_OPTIONS.map((service) => {
            const isSelected = formData.selectedServices.includes(service);
            return (
              <button
                type="button"
                key={service}
                onClick={() => toggleService(service)}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '9999px',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  backgroundColor: isSelected ? '#0B0B0F' : '#F4F4F8',
                  color: isSelected ? '#FFFFFF' : '#333340',
                  border: `1px solid ${isSelected ? '#0B0B0F' : 'rgba(0, 0, 0, 0.08)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {isSelected ? '✓ ' : '+ '}
                {service}
              </button>
            );
          })}
        </div>
      </div>

      {/* Budget Selector */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <label style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#0B0B0F' }}>
          Anticipated Budget Scope
        </label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {BUDGET_OPTIONS.map((b) => {
            const isSelected = formData.budget === b;
            return (
              <button
                type="button"
                key={b}
                onClick={() => setFormData({ ...formData, budget: b })}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  backgroundColor: isSelected ? 'rgba(139, 92, 246, 0.12)' : '#FFFFFF',
                  color: isSelected ? '#7C3AED' : '#555562',
                  border: `1px solid ${isSelected ? '#8B5CF6' : 'rgba(0, 0, 0, 0.12)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>

      {/* Message Area */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <label style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#0B0B0F' }}>
          Project Overview & Goals *
        </label>
        <textarea
          required
          rows={4}
          placeholder="Tell us about what you're building, target timeline, and the key problem you need solved..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{
            width: '100%',
            padding: '0.85rem 1rem',
            borderRadius: '12px',
            border: '1px solid rgba(0, 0, 0, 0.12)',
            backgroundColor: '#FFFFFF',
            fontSize: '0.9375rem',
            color: '#0B0B0F',
            outline: 'none',
            resize: 'vertical',
            fontFamily: 'inherit',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#8B5CF6';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.15)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.12)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-pill-primary"
          style={{
            width: '100%',
            padding: '1.1rem',
            fontSize: '1rem',
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          {isSubmitting ? (
            <span>Processing Inquiry...</span>
          ) : (
            <>
              <span>Send Project Inquiry</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </>
          )}
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 600px) {
          :global(.form-row-2) {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </form>
  );
};
