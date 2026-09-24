import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px',
      }}
    >
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div
          style={{
            background: 'rgba(9, 18, 38, 0.95)',
            border: '1px solid rgba(0, 210, 255, 0.3)',
            borderRadius: '14px',
            padding: '0.85rem 1.1rem',
            boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
            backdropFilter: 'blur(16px)',
            maxWidth: '240px',
            position: 'relative',
            animation: 'floatSlow 4s ease-in-out infinite',
          }}
        >
          <button
            onClick={() => setShowTooltip(false)}
            style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '2px',
            }}
            aria-label="Cerrar mensaje"
          >
            <X size={14} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#25d366',
                boxShadow: '0 0 8px #25d366',
              }}
            />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ffffff' }}>
              Asesor Tap Solutions
            </span>
          </div>

          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
            ¿Tienes dudas sobre cómo digitalizar tu restaurante o negocio? ¡Chatea con nosotros!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/50576806028?text=Hola%20Tap%20Solutions,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25d366, #128c7e)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
          position: 'relative',
          transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={30} />
        {/* Red notification dot */}
        <span
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '18px',
            height: '18px',
            background: '#ef4444',
            borderRadius: '50%',
            color: '#ffffff',
            fontSize: '0.7rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #03060f',
          }}
        >
          1
        </span>
      </a>
    </div>
  );
}
