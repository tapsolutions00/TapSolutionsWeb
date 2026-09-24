import React, { useState } from 'react';
import {
  Calculator,
  Check,
  Sparkles,
  MessageCircle,
  HelpCircle,
  Shield,
  Layers,
} from 'lucide-react';

export default function PricingCalculator() {
  const [businessType, setBusinessType] = useState('restaurante');
  const [pointsCount, setPointsCount] = useState(15);
  const [needsCustomWeb, setNeedsCustomWeb] = useState(true);

  const getRecommendedPlan = () => {
    if (pointsCount <= 5 && !needsCustomWeb) {
      return {
        name: 'Starter NFC',
        description: 'Ideal para pequeños locales, cafeterías o profesionales independientes.',
        badge: 'Básico',
        features: [
          `${pointsCount} Stickers o Tarjetas NFC grabadas`,
          'Menú o perfil digital estándar optimizado',
          'Alojamiento cloud de alta velocidad',
          'Códigos QR dinámicos incluidos',
          'Soporte estándar',
        ],
      };
    } else if (pointsCount <= 30) {
      return {
        name: 'Negocio Pro (Recomendado)',
        description: 'El paquete preferido por restaurantes, bares y tiendas consolidadas.',
        badge: 'Más Popular',
        features: [
          `${pointsCount} Stickers de resina impermeable o Tarjetas premium`,
          'Desarrollo web a medida con diseño exclusivo de marca',
          'Categorías ilimitadas de platos, fotos y alérgenos',
          'Alojamiento cloud premium con SSL y 99.9% uptime',
          'Actualizaciones de menú gestionadas por nuestro equipo',
          'Integración con WhatsApp para pedidos y reservas',
        ],
      };
    } else {
      return {
        name: 'Cadena & Enterprise',
        description: 'Para negocios de gran volumen, franquicias, hoteles o eventos masivos.',
        badge: 'Personalizado',
        features: [
          `${pointsCount}+ Puntos NFC con acabado personalizado a elegir`,
          'Plataforma web avanzada multi-sucursal',
          'Panel de administración propio + soporte 24/7',
          'Alojamiento dedicado y soporte técnico prioritario VIP',
          'Integración personalizada con POS o software de restaurante',
          'Garantía extendida de reemplazo físico',
        ],
      };
    }
  };

  const plan = getRecommendedPlan();

  const generateWhatsAppMessage = () => {
    const text = `Hola Tap Solutions! Quiero cotizar la solución para mi negocio:
- Tipo de Negocio: ${businessType.toUpperCase()}
- Cantidad de Puntos/Mesas NFC: ${pointsCount}
- Diseño Web a Medida: ${needsCustomWeb ? 'Sí' : 'No'}
- Plan Sugerido: ${plan.name}

¿Podrían brindarme información sobre precios y plazos de entrega?`;
    return `https://wa.me/50576806028?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="cotizador" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Calculator size={15} />
            <span>Configurador Inteligente</span>
          </div>
          <h2 className="section-title">
            Calcula la solución ideal para{' '}
            <span className="text-cyan-gradient">tu establecimiento</span>
          </h2>
          <p className="section-description">
            Selecciona el tamaño de tu negocio y recibe una recomendación a tu medida con
            desglose completo de equipamiento físico y desarrollo digital.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '2.5rem',
            background: 'var(--bg-card)',
            borderRadius: '1.5rem',
            border: '1px solid rgba(0, 210, 255, 0.25)',
            padding: '3rem',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          }}
          className="calc-container"
        >
          {/* Controls Column */}
          <div>
            {/* Step 1: Business Type */}
            <div style={{ marginBottom: '2.25rem' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.85rem',
                }}
              >
                1. Selecciona tu tipo de negocio:
              </label>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.75rem',
                }}
              >
                {[
                  { id: 'restaurante', label: 'Restaurante / Bar / Café' },
                  { id: 'comercio', label: 'Comercio / Tienda Retail' },
                  { id: 'profesional', label: 'Profesional / Ventas' },
                  { id: 'hotel', label: 'Hotel / Alojamiento' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBusinessType(item.id)}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background:
                        businessType === item.id
                          ? 'rgba(0, 210, 255, 0.15)'
                          : 'rgba(255, 255, 255, 0.03)',
                      border:
                        businessType === item.id
                          ? '1.5px solid #00d2ff'
                          : '1px solid rgba(255, 255, 255, 0.08)',
                      color: businessType === item.id ? '#00d2ff' : '#94a3b8',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Slider for Points */}
            <div style={{ marginBottom: '2.25rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '0.85rem',
                }}
              >
                <label style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                  2. Cantidad de mesas o puntos de contacto NFC:
                </label>
                <span
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#00d2ff',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {pointsCount} puntos
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="60"
                value={pointsCount}
                onChange={(e) => setPointsCount(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#00d2ff',
                  height: '6px',
                  cursor: 'pointer',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.5rem',
                }}
              >
                <span>1 tarjeta individual</span>
                <span>15 mesas</span>
                <span>30 mesas</span>
                <span>60+ establecimientos</span>
              </div>
            </div>

            {/* Step 3: Custom Design Toggle */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#ffffff' }}>
                  Desarrollo web exclusivo con tu identidad gráfica
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  Adaptación 100% de logotipo, tipografías corporativas y fotos
                </div>
              </div>

              <input
                type="checkbox"
                checked={needsCustomWeb}
                onChange={(e) => setNeedsCustomWeb(e.target.checked)}
                style={{
                  width: '20px',
                  height: '20px',
                  accentColor: '#00d2ff',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>

          {/* Results Column */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(14, 25, 52, 0.95), rgba(7, 13, 28, 0.98))',
              borderRadius: '1.25rem',
              border: '1.5px solid rgba(0, 210, 255, 0.4)',
              padding: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 0 35px rgba(0, 210, 255, 0.15)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span
                style={{
                  background: 'rgba(0, 210, 255, 0.2)',
                  color: '#00d2ff',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {plan.badge}
              </span>
              <Shield size={20} color="#00d2ff" />
            </div>

            <h3 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              {plan.name}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.75rem', lineHeight: 1.5 }}>
              {plan.description}
            </p>

            {/* Included in this configuration */}
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Qué incluye tu paquete:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem', flex: 1 }}>
              {plan.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.85rem' }}>
                  <Check size={16} color="#00d2ff" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#e2e8f0' }}>{feat}</span>
                </div>
              ))}
            </div>

            {/* Direct Quote WhatsApp Button */}
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem' }}
            >
              <MessageCircle size={19} />
              <span>Cotizar en WhatsApp al Instante</span>
            </a>

            <div style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              ⚡ Respuesta inmediata por uno de nuestros asesores técnicos
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .calc-container {
            grid-template-columns: 1fr !important;
            padding: 1.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
