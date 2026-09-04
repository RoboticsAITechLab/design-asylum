'use client';

import React from 'react';

export const FloatingControls: React.FC = () => {
  return (
    <>
      {/* Lower-left floating browser / media control pill (from reference video) */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 800,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px 16px',
          backgroundColor: '#FFFFFF',
          borderRadius: '9999px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          fontFamily: 'var(--font-geist-mono), monospace',
          fontSize: '0.78rem',
          color: '#33333E',
          userSelect: 'none',
        }}
        id="floating-screenity-control"
      >
        {/* Drag handle dots */}
        <span style={{ opacity: 0.45, fontSize: '0.9rem', cursor: 'grab' }}>:::</span>

        {/* Record dot and time counter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#EF4444',
              display: 'inline-block',
            }}
          />
          <span style={{ fontWeight: 600 }}>00:40</span>
        </div>

        {/* Action icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.75 }}>
          <span title="Restart" style={{ cursor: 'pointer' }}>↺</span>
          <span title="Pause" style={{ cursor: 'pointer' }}>⏸</span>
          <span title="Delete" style={{ cursor: 'pointer' }}>🗑</span>
          <span style={{ width: '1px', height: '14px', backgroundColor: 'rgba(0,0,0,0.15)' }} />
          <span title="Draw" style={{ cursor: 'pointer' }}>✏</span>
          <span title="Cursor" style={{ cursor: 'pointer' }}>⌖</span>
          <span title="Microphone" style={{ cursor: 'pointer' }}>🎙</span>
          <span title="Camera" style={{ cursor: 'pointer' }}>🎥</span>
        </div>
      </div>

      {/* Small green circular WhatsApp button at bottom-right (from reference video) */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 800,
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
          transition: 'transform 0.2s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.54 1.861.855 2.796.855 3.18 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.742-5.768-5.742zm3.385 8.131c-.141.396-.713.727-1.028.775-.316.048-.71.077-2.296-.583-1.898-.79-3.125-2.735-3.22-2.86-.095-.127-.768-1.021-.768-1.947 0-.926.486-1.381.66-1.571.174-.19.38-.238.506-.238.127 0 .253.001.364.007.118.006.276-.045.431.328.158.38.538 1.314.585 1.41.048.095.079.206.016.333-.063.127-.095.206-.19.317-.095.111-.2.247-.285.333-.095.095-.194.198-.083.388.111.19.493.813 1.058 1.316.727.648 1.34.849 1.53.944.19.095.301.079.412-.048.111-.127.475-.555.602-.745.127-.19.253-.158.428-.095.174.063 1.109.523 1.3.618.19.095.316.143.364.222.048.079.048.46-.095.856zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.438 5.169L2 22l4.981-1.307A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
        </svg>
      </a>
    </>
  );
};
