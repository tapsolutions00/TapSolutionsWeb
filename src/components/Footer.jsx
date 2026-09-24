import React from 'react';
import Logo from './Logo';
import {
  MessageCircle,
  Mail,
  Shield,
  Radio,
  Globe,
  Heart,
  ArrowUp,
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#03060f',
        borderTop: '1px solid rgba(0, 210, 255, 0.15)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #00d2ff, transparent)',
          boxShadow: '0 0 20px #00d2ff',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
          className="footer-grid"
        >
          {/* Brand Col */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo size="normal" />
            </div>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.925rem',
                lineHeight: 1.65,
                marginBottom: '1.75rem',
                maxWidth: '360px',
              }}
            >
              Transformamos la interacción con tus clientes combinando tecnología NFC física con
              desarrollo web a medida. Rápido, moderno y sin aplicaciones intermediarias.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://wa.me/50576806028?text=Hola%20Tap%20Solutions"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25d366',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
                title="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:tapsolutions00@gmail.com"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00d2ff',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Inicio', 'Servicios', 'Cómo Funciona', 'Sectores', 'Cotizador', 'FAQ', 'Contacto'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00d2ff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Soluciones
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Menús Digitales para Restaurantes',
                'Tarjetas de Presentación NFC',
                'Stickers de Mesa Impermeables',
                'Expositores de Reseñas Google',
                'Alojamiento Cloud & SSL',
                'Mantenimiento de Contenidos',
              ].map((s) => (
                <li key={s} style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech & Guarantee */}
          <div>
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Garantía & Red
            </h4>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#10b981', marginBottom: '0.5rem' }}>
                <Shield size={18} />
                <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>99.9% Uptime Cloud</span>
              </div>
              <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Infraestructura global optimizada para carga ultra rápida y disponibilidad continua en
                cualquier dispositivo.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong style={{ color: '#ffffff' }}>Tap Solutions</strong>. Todos los
            derechos reservados.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Hecho con innovación y tecnología NFC</span>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                padding: '0.4rem 0.8rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
              }}
            >
              <ArrowUp size={14} />
              <span>Subir</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
