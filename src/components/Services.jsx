import React from 'react';
import {
  Globe,
  Radio,
  Server,
  Zap,
  CheckCircle,
  Smartphone,
  ShieldCheck,
  Sparkles,
  Layers,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

export default function Services() {
  const pillars = [
    {
      id: 'web',
      icon: Globe,
      color: '#00d2ff',
      gradient: 'linear-gradient(135deg, rgba(0, 210, 255, 0.15), rgba(2, 132, 199, 0.05))',
      tag: 'Pilar 01',
      title: 'Desarrollo Web a Medida',
      subtitle: 'Plataformas digitales diseñadas para convertir y fascinar a tus clientes.',
      description:
        'Creamos menús interactivos, catálogos digitales y sitios web de alto rendimiento optimizados específicamente para teléfonos inteligentes. Sin plantillas genéricas: cada píxel responde a la identidad de tu marca.',
      features: [
        'Menús digitales dinámicos con fotos HD, alérgenos y filtros',
        'Diseño 100% Mobile-First y navegación táctil intuitiva',
        'Carga instantánea en menos de 0.5 segundos',
        'Integración directa con WhatsApp para pedidos y reservas',
        'Paneles intuitivos o gestión delegada a nuestro equipo',
      ],
      badge: 'Mayor Ticket Promedio',
    },
    {
      id: 'nfc',
      icon: Radio,
      color: '#38bdf8',
      gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(14, 165, 233, 0.05))',
      tag: 'Pilar 02',
      title: 'Tecnología NFC & Códigos QR',
      subtitle: 'La conexión física más rápida del mercado entre tu cliente y tu negocio.',
      description:
        'Suministramos y programamos soportes físicos de máxima calidad: stickers de mesa impermeables para hostelería, tarjetas de presentación inteligentes y expositores acrílicos para tu mostrador.',
      features: [
        'Stickers NFC con protección epoxi impermeable para mesas',
        'Tarjetas inteligentes en PVC mate, bambú o metal grabable',
        'Compatibilidad nativa con iPhone y dispositivos Android',
        'Código QR vectorial dinámico de alta resolución como alternativa',
        'Reprogramación remota: cambia el destino sin cambiar el chip',
      ],
      badge: 'Sin Descargar Apps',
    },
    {
      id: 'cloud',
      icon: Server,
      color: '#818cf8',
      gradient: 'linear-gradient(135deg, rgba(129, 140, 248, 0.15), rgba(99, 102, 241, 0.05))',
      tag: 'Pilar 03',
      title: 'Mantenimiento & Alojamiento Cloud',
      subtitle: 'Olvídate de servidores, caídas y configuraciones técnicas.',
      description:
        'Garantizamos que tu menú o plataforma esté siempre disponible las 24 horas del día. Nos encargamos del alojamiento en la nube, la seguridad SSL y la actualización inmediata de tus precios o platos.',
      features: [
        'Alojamiento en infraestructura Cloud global con 99.9% de uptime',
        'Certificados de seguridad SSL HTTPS incluidos para siempre',
        'Copias de seguridad diarias y protección DDoS avanzada',
        'Actualización continua de precios, promociones y productos',
        'Soporte técnico prioritario y asesoría personalizada',
      ],
      badge: 'Cero Preocupaciones',
    },
  ];

  return (
    <section id="servicios" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={15} />
            <span>Nuestros 3 Pilares Fundamentales</span>
          </div>
          <h2 className="section-title">
            Una solución integral para{' '}
            <span className="text-cyan-gradient">transformar tu negocio</span>
          </h2>
          <p className="section-description">
            En Tap Solutions no solo te entregamos una tarjeta o un sticker NFC; construimos todo el
            ecosistema digital completo para que tu negocio opere a la vanguardia tecnológica.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
          className="services-grid"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2.25rem',
                  borderTop: `3px solid ${pillar.color}`,
                }}
              >
                {/* Header with Icon and Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.75rem',
                  }}
                >
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      background: pillar.gradient,
                      border: `1px solid ${pillar.color}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: pillar.color,
                      boxShadow: `0 8px 20px ${pillar.color}22`,
                    }}
                  >
                    <Icon size={28} />
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: pillar.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                    }}
                  >
                    {pillar.tag}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 style={{ fontSize: '1.45rem', marginBottom: '0.6rem', color: '#ffffff' }}>
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: pillar.color,
                    fontWeight: 600,
                    marginBottom: '1rem',
                  }}
                >
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.925rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.75rem',
                  }}
                >
                  {pillar.description}
                </p>

                {/* Features List */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    marginTop: 'auto',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  {pillar.features.map((feature, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.875rem',
                        color: '#cbd5e1',
                      }}
                    >
                      <CheckCircle
                        size={16}
                        color={pillar.color}
                        style={{ flexShrink: 0, marginTop: '3px' }}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Badge */}
                <div
                  style={{
                    marginTop: '1.75rem',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                    Beneficio clave:
                  </span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>
                    {pillar.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner CTA within Services */}
        <div
          style={{
            marginTop: '3.5rem',
            background: 'linear-gradient(135deg, rgba(9, 23, 49, 0.9) 0%, rgba(5, 9, 20, 0.95) 100%)',
            border: '1px solid rgba(0, 210, 255, 0.25)',
            borderRadius: '1.25rem',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              ¿Tienes un requerimiento especial o diseño propio?
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', maxWidth: '650px' }}>
              Nos adaptamos a cualquier necesidad: tarjetas corporativas para equipos de ventas,
              cartas de cócteles interactivas, integración con sistemas POS o expositores a medida.
            </p>
          </div>
          <a
            href="https://wa.me/50576806028?text=Hola%20Tap%20Solutions,%20tengo%20un%20proyecto%20personalizado%20y%20me%20gustar%C3%ADa%20cotizarlo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.85rem 1.75rem' }}
          >
            <span>Consultar Proyecto a Medida</span>
            <ArrowRight size={17} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
