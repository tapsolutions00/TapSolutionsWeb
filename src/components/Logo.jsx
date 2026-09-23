import React from 'react';

export default function Logo({ size = 'normal', showText = true, className = '' }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';
  
  const iconHeight = isSmall ? 32 : isLarge ? 52 : 40;
  const iconWidth = Math.round(iconHeight * 0.95);

  return (
    <div className={`logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
      {/* High-definition vector SVG representation of the official Tap Solutions logo */}
      <svg
        width={iconWidth}
        height={iconHeight}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, filter: 'drop-shadow(0 0 12px rgba(0, 210, 255, 0.45))' }}
      >
        {/* Smartphone outer body */}
        <rect
          x="14"
          y="12"
          width="48"
          height="76"
          rx="10"
          stroke="#00d2ff"
          strokeWidth="4.5"
          fill="rgba(7, 13, 30, 0.9)"
        />
        {/* Smartphone notch / speaker */}
        <rect x="29" y="18" width="18" height="3" rx="1.5" fill="#38bdf8" />
        {/* Smartphone bottom home bar */}
        <line x1="28" y1="81" x2="48" y2="81" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
        
        {/* The Bold 'T' Icon */}
        {/* Horizontal cyan crossbar */}
        <path
          d="M 20 30 H 68 C 70.2 30 72 31.8 72 34 V 39 C 72 41.2 70.2 43 68 43 H 20 C 17.8 43 16 41.2 16 39 V 34 C 16 31.8 17.8 30 20 30 Z"
          fill="#00d2ff"
        />
        {/* Vertical navy/blue stem */}
        <path
          d="M 37 43 H 51 V 70 C 51 72 47 74 41 72 Z"
          fill="#0284c7"
        />

        {/* Radiating NFC Waves */}
        <path
          d="M 66 22 A 16 16 0 0 1 78 34"
          stroke="#00d2ff"
          strokeWidth="4.5"
          strokeLinecap="round"
          className="nfc-wave-1"
        />
        <path
          d="M 72 15 A 25 25 0 0 1 88 34"
          stroke="#38bdf8"
          strokeWidth="4.5"
          strokeLinecap="round"
          className="nfc-wave-2"
        />
        <path
          d="M 78 8 A 34 34 0 0 1 97 34"
          stroke="#70e2ff"
          strokeWidth="4.5"
          strokeLinecap="round"
          className="nfc-wave-3"
        />
      </svg>

      {showText && (
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: isSmall ? '1.25rem' : isLarge ? '1.85rem' : '1.5rem',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            display: 'flex',
            alignItems: 'baseline',
            userSelect: 'none',
          }}
        >
          <span style={{ color: '#00d2ff' }}>Tap</span>
          <span style={{ color: '#ffffff', marginLeft: '0.15rem' }}>Solutions</span>
        </span>
      )}
    </div>
  );
}
