import React, { useState } from 'react';
import InstagramIcon from './InstagramIcon';
import {
  MessageCircle,
  Mail,
  Send,
  Phone,
  Clock,
  Sparkles,
  CheckCircle2,
  Building,
  User,
  HelpCircle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    service: 'menu_nfc',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Also construct WhatsApp prefill message if they want to send directly
    const text = `Hola Tap Solutions! Me gustaría solicitar información:
- Nombre: ${formData.name}
- Negocio: ${formData.business}
- Teléfono: ${formData.phone}
- Email: ${formData.email}
- Servicio: ${formData.service}
- Mensaje: ${formData.message || 'Quiero digitalizar mi negocio con ustedes.'}`;

    const waUrl = `https://wa.me/50576806028?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contacto" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={15} />
            <span>Hablemos de tu Proyecto</span>
          </div>
          <h2 className="section-title">
            ¿Listo para llevar tu negocio al{' '}
            <span className="text-cyan-gradient">siguiente nivel?</span>
          </h2>
          <p className="section-description">
            Escríbenos directamente o déjanos tus datos. Te asesoraremos sin compromiso sobre la
            mejor solución NFC y web para tu establecimiento.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Contact Details & Direct Channels */}
          <div>
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                border: '1px solid rgba(0, 210, 255, 0.2)',
                marginBottom: '1.5rem',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '1rem' }}>
                Contacto Inmediato
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  marginBottom: '2rem',
                }}
              >
                ¿Prefieres una respuesta inmediata? Haz clic en nuestro canal de WhatsApp oficial y
                conversa al instante con nuestro equipo de especialistas.
              </p>

              {/* Direct WhatsApp & Instagram Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <a
                  href="https://wa.me/50576806028?text=Hola%20Tap%20Solutions,%20deseo%20asesor%C3%ADa%20personalizada%20para%20mi%20negocio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', padding: '0.95rem', fontSize: '1rem' }}
                >
                  <MessageCircle size={21} />
                  <span>Escríbenos por WhatsApp</span>
                </a>

                <a
                  href="https://www.instagram.com/tapsolutionsni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    fontSize: '0.95rem',
                    background: 'linear-gradient(135deg, rgba(225, 48, 108, 0.15) 0%, rgba(131, 58, 180, 0.15) 100%)',
                    border: '1px solid rgba(225, 48, 108, 0.4)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.65rem',
                    borderRadius: '0.75rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#e1306c';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(225, 48, 108, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(225, 48, 108, 0.4)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <InstagramIcon size={20} color="#e1306c" />
                  <span>Visitar Instagram @tapsolutionsni</span>
                </a>
              </div>

              {/* Contact Info Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(225, 48, 108, 0.1)',
                      border: '1px solid rgba(225, 48, 108, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#e1306c',
                    }}
                  >
                    <InstagramIcon size={20} color="#e1306c" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Instagram Oficial
                    </div>
                    <a
                      href="https://www.instagram.com/tapsolutionsni/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#e1306c')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                    >
                      @tapsolutionsni
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(0, 210, 255, 0.1)',
                      border: '1px solid rgba(0, 210, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00d2ff',
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Correo Electrónico
                    </div>
                    <a
                      href="mailto:tapsolutions00@gmail.com"
                      style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                    >
                      tapsolutions00@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981',
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Atención Directa
                    </div>
                    <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                      +505 76806028
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38bdf8',
                    }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Horario de Soporte
                    </div>
                    <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                      Lunes a Sábado: 8:00 AM - 8:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              border: '1px solid rgba(0, 210, 255, 0.25)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid #10b981',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}
                >
                  <CheckCircle2 size={38} />
                </div>
                <h3 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Hemos recibido tu consulta. Nos pondremos en contacto contigo a la brevedad para
                  organizar una demostración personalizada.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ padding: '0.75rem 1.5rem' }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.45rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                  Solicitar Cotización Personalizada
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Tu Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ej: Carlos Mendoza"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        background: 'rgba(5, 9, 20, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#00d2ff')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Nombre de tu Negocio *
                    </label>
                    <input
                      type="text"
                      name="business"
                      required
                      placeholder="Ej: Café Bistro / Hotel Sol"
                      value={formData.business}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        background: 'rgba(5, 9, 20, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#00d2ff')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+505 76806028"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        background: 'rgba(5, 9, 20, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#00d2ff')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="nombre@tudominio.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        background: 'rgba(5, 9, 20, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#00d2ff')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Servicio Principal que Buscas
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: '#070f20',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="menu_nfc">Menú Digital NFC & QR para Restaurante</option>
                    <option value="tarjetas_personales">Tarjetas de Presentación Inteligentes (Networking)</option>
                    <option value="expositores_retail">Expositores de Reseñas Google NFC para Tienda</option>
                    <option value="web_completa">Desarrollo Web Completo + Integración NFC</option>
                    <option value="otro">Proyecto a Medida / Otra consulta</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Detalles Adicionales o Preguntas
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Cuéntanos cuántas mesas o tarjetas necesitas, o qué te gustaría incluir..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: 'rgba(5, 9, 20, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#00d2ff')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.95rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  <Send size={18} />
                  <span>Enviar Consulta y Abrir WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
