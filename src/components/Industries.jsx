import React, { useState } from 'react';
import {
  Utensils,
  Store,
  Briefcase,
  Hotel,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

export default function Industries() {
  const [activeSector, setActiveSector] = useState(0);

  const sectors = [
    {
      id: 'restaurantes',
      title: 'Restaurantes, Bares & Cafés',
      icon: Utensils,
      tagline: 'Acelera la rotación de mesas y deleita a tus comensales.',
      badgeColor: '#00d2ff',
      description:
        'Elimina el caos de las cartas tradicionales. Con un sticker NFC en cada mesa o soporte acrílico, tus clientes ven la carta con fotos apetitosas, alérgenos y precios actualizados en segundos.',
      benefits: [
        'Stickers NFC impermeables resistentes a derrames y limpieza constante',
        'Filtros para celíacos, veganos e intolerancias alimentarias',
        'Actualización inmediata de fuera de carta o platos agotados',
        'Opción de integrar botón directo para pedir la cuenta o llamar al camarero',
      ],
      metric: '+28%',
      metricLabel: 'Mayor velocidad en servicio de mesas',
    },
    {
      id: 'retail',
      title: 'Comercio & Retail',
      icon: Store,
      tagline: 'Multiplica tus reseñas de Google y presenta catálogos dinámicos.',
      badgeColor: '#38bdf8',
      description:
        'Coloca placas Tap Solutions en el mostrador o escaparate para captar reseñas positivas de 5 estrellas en Google Maps con solo un toque del cliente mientras paga.',
      benefits: [
        'Multiplica las reseñas de Google Maps en un 300% de manera orgánica',
        'Expositores acrílicos elegantes con tecnología NFC y QR para el mostrador',
        'Enlace a ofertas de temporada, catálogo WhatsApp o programa de fidelización',
        'Fácil acceso a tus redes sociales (Instagram, TikTok) en un tap',
      ],
      metric: '3x',
      metricLabel: 'Más reseñas positivas en Google Maps',
    },
    {
      id: 'profesionales',
      title: 'Profesionales & Networking',
      icon: Briefcase,
      tagline: 'La tarjeta de presentación que nunca se agota ni se tira a la basura.',
      badgeColor: '#818cf8',
      description:
        'Causa una primera impresión inolvidable en reuniones, ferias y eventos comerciales. Una sola tarjeta de PVC mate o metal transmite tu contacto completo al móvil del cliente.',
      benefits: [
        'Guarda tu teléfono, email y empresa directamente en la agenda del cliente',
        'Comparte enlace a tu portafolio, web, LinkedIn y calendario de citas',
        'Sostenible y ecológica: una sola tarjeta te dura años',
        'Actualiza tus datos de contacto en la nube sin volver a imprimir',
      ],
      metric: '100%',
      metricLabel: 'Efectividad en traspaso de contactos',
    },
    {
      id: 'hoteles',
      title: 'Hoteles & Hospedajes',
      icon: Hotel,
      tagline: 'Check-in rápido, conexión Wi-Fi sin contraseñas y room service.',
      badgeColor: '#10b981',
      description:
        'Ofrece una experiencia cinco estrellas en cada habitación. Tus huéspedes acercan su teléfono al llavero o soporte de la mesita de noche para consultar servicios y normas.',
      benefits: [
        'Conexión automática a la red Wi-Fi de huéspedes en 1 solo tap',
        'Carta de Room Service y reservas de spa o piscina',
        'Guía interactiva de atracciones turísticas y recomendaciones locales',
        'Atención por conserjería digital vía WhatsApp 24/7',
      ],
      metric: '9.8/10',
      metricLabel: 'Satisfacción promedio de los huéspedes',
    },
  ];

  const current = sectors[activeSector];
  const CurrentIcon = current.icon;

  return (
    <section id="sectores" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={15} />
            <span>Casos de Éxito & Aplicaciones</span>
          </div>
          <h2 className="section-title">
            Diseñado para los sectores más{' '}
            <span className="text-cyan-gradient">exigentes y dinámicos</span>
          </h2>
          <p className="section-description">
            Descubre cómo adaptamos nuestra tecnología NFC y desarrollo web a las necesidades
            específicas de tu industria.
          </p>
        </div>

        {/* Sector Tabs Selector */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            const isSelected = activeSector === idx;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSector(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 1.4rem',
                  borderRadius: '9999px',
                  border: isSelected
                    ? `1.5px solid ${sec.badgeColor}`
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isSelected
                    ? `rgba(0, 210, 255, 0.15)`
                    : 'rgba(10, 18, 38, 0.6)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: '0.925rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? `0 0 20px ${sec.badgeColor}33` : 'none',
                }}
              >
                <Icon size={18} color={isSelected ? sec.badgeColor : '#64748b'} />
                <span>{sec.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Feature Showcase */}
        <div
          className="glass-card"
          style={{
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3rem',
            alignItems: 'center',
            border: `1px solid ${current.badgeColor}44`,
            boxShadow: `0 15px 45px rgba(0,0,0,0.6), 0 0 30px ${current.badgeColor}15`,
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: current.badgeColor,
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1rem',
              }}
            >
              <CurrentIcon size={18} />
              <span>Solución Especializada</span>
            </div>

            <h3 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              {current.title}
            </h3>

            <p style={{ fontSize: '1.05rem', color: current.badgeColor, fontWeight: 600, marginBottom: '1.25rem' }}>
              {current.tagline}
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              {current.description}
            </p>

            {/* List of benefits */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
              {current.benefits.map((ben, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle
                    size={17}
                    color={current.badgeColor}
                    style={{ flexShrink: 0, marginTop: '3px' }}
                  />
                  <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{ben}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/50576806028?text=Hola%20Tap%20Solutions,%20me%20interesa%20la%20soluci%C3%B3n%20para%20${encodeURIComponent(
                current.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.8rem 1.75rem', fontSize: '0.925rem' }}
            >
              <span>Cotizar para mi negocio</span>
              <ArrowRight size={17} />
            </a>
          </div>

          {/* Metric Highlight Box */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(16, 29, 58, 0.8), rgba(6, 12, 28, 0.95))',
              borderRadius: '1.25rem',
              padding: '2.5rem',
              border: `1px solid ${current.badgeColor}33`,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: `${current.badgeColor}18`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: current.badgeColor,
                marginBottom: '1.5rem',
              }}
            >
              <TrendingUp size={32} />
            </div>

            <div
              style={{
                fontSize: '3.75rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                color: current.badgeColor,
                lineHeight: 1,
                marginBottom: '0.75rem',
                textShadow: `0 0 25px ${current.badgeColor}66`,
              }}
            >
              {current.metric}
            </div>

            <div
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '0.5rem',
              }}
            >
              Impacto Demostrado
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', maxWidth: '280px' }}>
              {current.metricLabel}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .glass-card[style*="grid-template-columns: 1.2fr 0.8fr"] {
            grid-template-columns: 1fr !important;
            padding: 1.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
