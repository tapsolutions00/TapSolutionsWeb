import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '¿Los comensales o clientes necesitan descargar alguna app para usar el NFC?',
      a: 'Absolutamente no. La tecnología NFC está integrada de fábrica en todos los iPhone modernos y dispositivos Android. Al acercar el teléfono, el sistema operativo despliega de inmediato una notificación nativa que abre el navegador web. Cero fricción, sin registros y sin ocupar memoria del teléfono.',
    },
    {
      q: '¿Qué sucede si un cliente tiene un smartphone antiguo sin lector NFC?',
      a: 'Todos nuestros soportes físicos (stickers para mesas, expositores de mostrador o tarjetas de visita) incluyen un código QR vectorial dinámico de alta definición. Si el usuario no tiene NFC o prefiere escanear, apunta la cámara de su móvil y accede con la misma rapidez.',
    },
    {
      q: '¿Cómo actualizo los precios, platos o productos de mi menú digital?',
      a: '¡Es lo más sencillo del mundo! Nos encargamos de todo nosotros mediante soporte continuo (nos envías los cambios por WhatsApp o correo y los aplicamos en minutos), o si lo prefieres, te facilitamos un panel privado intuitivo para que cambies fotos, precios o platos agotados en tiempo real.',
    },
    {
      q: '¿Dónde se aloja la página web y qué seguridad ofrece?',
      a: 'Alojamos todas las plataformas en servidores Cloud de alta velocidad y máxima redundancia con 99.9% de uptime garantizado. Incluimos certificados de seguridad SSL (HTTPS), protección contra ataques y copias de seguridad automáticas permanentes.',
    },
    {
      q: '¿Qué resistencia tienen los stickers NFC en mesas de restaurantes?',
      a: 'Nuestros stickers están fabricados con una capa de resina epoxi de alta densidad que los hace 100% impermeables, resistentes a derrames de bebidas, grasas y productos de limpieza desinfectantes. No se despegan ni se desgastan con el uso diario.',
    },
  ];

  return (
    <section id="faq" className="section-padding" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={15} />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="section-title">
            Resolvemos todas tus <span className="text-cyan-gradient">dudas</span>
          </h2>
          <p className="section-description">
            Todo lo que necesitas saber antes de dar el salto a la tecnología NFC y web con Tap
            Solutions.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                style={{
                  padding: '1.5rem 1.75rem',
                  cursor: 'pointer',
                  borderColor: isOpen ? 'var(--border-cyan-bright)' : 'var(--border-subtle)',
                  background: isOpen ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                  transition: 'all 0.25s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: isOpen ? '#00d2ff' : '#ffffff',
                      lineHeight: 1.4,
                      transition: 'color 0.2s',
                    }}
                  >
                    {faq.q}
                  </h4>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: isOpen ? '#00d2ff' : 'var(--text-muted)',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </div>

                {isOpen && (
                  <p
                    style={{
                      marginTop: '1rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
