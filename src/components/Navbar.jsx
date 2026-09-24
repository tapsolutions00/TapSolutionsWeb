import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Cómo Funciona', href: '#como-funciona' },
    { name: 'Simulador NFC', href: '#simulador' },
    { name: 'Sectores', href: '#sectores' },
    { name: 'Cotizador', href: '#cotizador' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(5, 9, 20, 0.88)'
          : 'rgba(5, 9, 20, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(0, 210, 255, 0.15)'
          : '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
        }}
      >
        {/* Brand Logo */}
        <a href="#inicio" style={{ textDecoration: 'none' }}>
          <Logo size="normal" />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.925rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00d2ff')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--text-secondary)')
              }
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="desktop-actions">
          <a
            href="https://wa.me/50576806028?text=Hola%20Tap%20Solutions,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20tecnolog%C3%ADa%20NFC%20y%20desarrollo%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}
          >
            <MessageCircle size={17} />
            <span>Digitaliza tu negocio</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'none',
          }}
          className="mobile-toggle"
          aria-label="Abrir Menú"
        >
          {mobileMenuOpen ? <X size={26} color="#00d2ff" /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(5, 9, 20, 0.98)',
            borderBottom: '1px solid rgba(0, 210, 255, 0.2)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/50576806028?text=Hola%20Tap%20Solutions,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <MessageCircle size={18} />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
