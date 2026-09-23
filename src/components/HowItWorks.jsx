import React, { useState } from 'react';
import {
  Smartphone,
  Zap,
  ShieldCheck,
  QrCode,
  ArrowRight,
  Sparkles,
  MousePointerClick,
  Check,
} from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Acerca tu Teléfono o Escanea el QR',
      highlight: 'Sin descargar nada',
      icon: Smartphone,
      color: '#00d2ff',
      summary:
        'El usuario simplemente aproxima su smartphone (iPhone o Android) a la tarjeta inteligente o sticker NFC de la mesa. En milisegundos se activa la lectura.',
      details: [
        'Tecnología NFC estándar soportada nativamente por más del 95% de teléfonos',
        'Alternativa con código QR de alta resolución grabado en la misma superficie',
        'Cero barreras de entrada: sin necesidad de descargar apps pesadas ni crear cuentas',
      ],
      interactiveTip: '¡Pruébalo en el simulador de arriba!',
    },
    {
      step: '02',
      title: 'Acceso Inmediato a tu Contenido Digital',
      highlight: 'En menos de 0.5s',
      icon: Zap,
      color: '#38bdf8',
      summary:
        'El navegador del smartphone abre instantáneamente tu menú interactivo, catálogo de productos, promociones exclusivas o perfil comercial con un diseño impecable.',
      details: [
        'Carga instantánea con arquitectura moderna y optimización de imágenes',
        'Navegación táctil ultrarrápida, categorización de platos y fotos atractivas',
        'Posibilidad de pedir al camarero o enviar orden directa a WhatsApp',
      ],
      interactiveTip: 'Aumenta un 25% el ticket promedio',
    },
    {
      step: '03',
      title: 'Gestionamos y Alojamos tu Plataforma',
      highlight: 'Tranquilidad 24/7',
      icon: ShieldCheck,
      color: '#10b981',
      summary:
        'Nos encargamos del servidor, seguridad y actualización de tu contenido. Si cambias un precio o agregas un plato, nosotros lo actualizamos al instante en la nube.',
      details: [
        'Servidores de alta velocidad con 99.9% de tiempo de actividad garantizado',
        'Certificados SSL de máxima seguridad incluidos en todos los planes',
        'Soporte técnico directo vía WhatsApp para cambios urgentes en tu carta',
      ],
      interactiveTip: 'Olvídate de reimprimir cartas en papel',
    },
  ];

  return (
    <section id="como-funciona" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={15} />
            <span>Proceso Simple & Eficaz</span>
          </div>
          <h2 className="section-title">
            ¿Cómo funciona <span className="text-cyan-gradient">Tap Solutions?</span>
          </h2>
          <p className="section-description">
            Diseñamos un flujo intuitivo de 3 pasos que elimina cualquier fricción para tus
            clientes y te libera de cualquier complicación técnica.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            position: 'relative',
          }}
          className="steps-grid"
        >
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = activeStep === idx;
            return (
              <div
                key={item.step}
                className="glass-card"
                onMouseEnter={() => setActiveStep(idx)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2.5rem 2rem',
                  position: 'relative',
                  border: isHovered
                    ? `1px solid ${item.color}`
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  transform: isHovered ? 'translateY(-6px)' : 'none',
                  boxShadow: isHovered ? `0 12px 30px ${item.color}25` : 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                {/* Big Step Number in background */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.5rem',
                    fontSize: '4.5rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 900,
                    color: 'rgba(255, 255, 255, 0.04)',
                    lineHeight: 1,
                    pointerEvents: 'none',
                  }}
                >
                  {item.step}
                </div>

                {/* Step Badge & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: `rgba(0, 210, 255, 0.1)`,
                      border: `1px solid ${item.color}66`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.color,
                    }}
                  >
                    <Icon size={26} />
                  </div>

                  <div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: item.color,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      Paso {item.step}
                    </span>
                    <div style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>
                      {item.highlight}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    color: '#ffffff',
                    marginBottom: '1rem',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>

                {/* Summary */}
                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {item.summary}
                </p>

                {/* Bullet Points */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    marginTop: 'auto',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {item.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        fontSize: '0.825rem',
                        color: '#94a3b8',
                      }}
                    >
                      <Check
                        size={15}
                        color={item.color}
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Micro Tip Badge */}
                <div
                  style={{
                    marginTop: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    color: item.color,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <Sparkles size={13} />
                  <span>{item.interactiveTip}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison: Tradicional vs Tap Solutions */}
        <div
          style={{
            marginTop: '4rem',
            background: 'rgba(10, 18, 38, 0.7)',
            borderRadius: '1.5rem',
            border: '1px solid rgba(0, 210, 255, 0.2)',
            padding: '2.5rem',
            backdropFilter: 'blur(16px)',
          }}
        >
          <h3
            style={{
              fontSize: '1.5rem',
              color: '#ffffff',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            La diferencia entre el método tradicional y{' '}
            <span className="text-cyan-gradient">Tap Solutions</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
            }}
            className="comparison-grid"
          >
            {/* Traditional Card */}
            <div
              style={{
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '1rem',
                padding: '1.75rem',
              }}
            >
              <div
                style={{
                  color: '#ef4444',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span>❌</span>
                <span>Cartas de Papel & PDFs Lentos</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                  • Costos altos y recurrentes de imprenta por cada cambio de precio.
                </li>
                <li style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                  • PDFs borrosos que requieren pellizcar la pantalla para leer los platos.
                </li>
                <li style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                  • Cartas deterioradas, manchadas o desgastadas que restan imagen.
                </li>
                <li style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                  • Sin métricas de qué platos son los más consultados.
                </li>
              </ul>
            </div>

            {/* Tap Solutions Card */}
            <div
              style={{
                background: 'rgba(0, 210, 255, 0.06)',
                border: '1px solid rgba(0, 210, 255, 0.3)',
                borderRadius: '1rem',
                padding: '1.75rem',
                boxShadow: '0 0 25px rgba(0, 210, 255, 0.1)',
              }}
            >
              <div
                style={{
                  color: '#00d2ff',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span>⚡</span>
                <span>Ecosistema Tap Solutions NFC + Web</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ color: '#e2e8f0', fontSize: '0.875rem' }}>
                  • <strong style={{ color: '#00d2ff' }}>Cero gastos de reimpresión:</strong> cambia precios en la nube al instante.
                </li>
                <li style={{ color: '#e2e8f0', fontSize: '0.875rem' }}>
                  • <strong style={{ color: '#00d2ff' }}>Carga en 0.5s:</strong> experiencia interactiva fluida adaptada a cada móvil.
                </li>
                <li style={{ color: '#e2e8f0', fontSize: '0.875rem' }}>
                  • <strong style={{ color: '#00d2ff' }}>Soportes de alta gama:</strong> stickers de resina o tarjetas premium duraderas.
                </li>
                <li style={{ color: '#e2e8f0', fontSize: '0.875rem' }}>
                  • <strong style={{ color: '#00d2ff' }}>Soporte técnico total:</strong> nosotros cuidamos tu web y tus servidores.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid, .comparison-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
