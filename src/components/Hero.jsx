import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Wifi,
  Smartphone,
  CheckCircle2,
  QrCode,
  Flame,
  Star,
  ExternalLink,
  RefreshCw,
  ShoppingBag,
  Zap,
} from 'lucide-react';

export default function Hero() {
  const [hasTapped, setHasTapped] = useState(false);
  const [activeTab, setActiveTab] = useState('menu'); // 'menu' | 'card' | 'qr'
  const [menuCat, setMenuCat] = useState('platos');
  const [isRippling, setIsRippling] = useState(false);

  // Play a soft futuristic chime using Web Audio API
  const playChime = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch (e) {
      // AudioContext fallback
    }
  };

  const handleSimulateTap = () => {
    setIsRippling(true);
    playChime();
    setHasTapped(true);
    setTimeout(() => setIsRippling(false), 800);
  };

  const handleResetPhone = () => {
    setHasTapped(false);
  };

  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.14) 0%, transparent 70%)',
          filter: 'blur(70px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Value Proposition & Copy */}
          <div>
            {/* Pill Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1.1rem',
                borderRadius: '9999px',
                background: 'rgba(0, 210, 255, 0.1)',
                border: '1px solid rgba(0, 210, 255, 0.3)',
                color: 'var(--brand-cyan)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                marginBottom: '1.5rem',
                boxShadow: '0 0 20px rgba(0, 210, 255, 0.2)',
              }}
            >
              <Sparkles size={16} />
              <span>TECNOLOGÍA NFC & DESARROLLO WEB</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
              }}
            >
              Conecta el mundo físico con tu universo digital en un{' '}
              <span className="text-cyan-gradient" style={{ position: 'relative' }}>
                solo Tap.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2.25rem',
                maxWidth: '600px',
              }}
            >
              Desarrollamos soluciones web de alto impacto combinadas con tarjetas y stickers NFC.
              Tus clientes acercan su teléfono y acceden al instante a tu menú digital, catálogo o
              perfil de contacto <strong style={{ color: '#ffffff' }}>sin descargar ninguna aplicación</strong>.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2.75rem',
              }}
            >
              <a
                href="#contacto"
                className="btn btn-primary"
                style={{ padding: '0.95rem 2rem', fontSize: '1.05rem' }}
              >
                <span>Digitaliza tu negocio</span>
                <ArrowRight size={19} />
              </a>

              <button
                onClick={handleSimulateTap}
                className="btn btn-secondary"
                style={{ padding: '0.95rem 1.75rem', fontSize: '1rem', cursor: 'pointer' }}
              >
                <Wifi size={18} color="#00d2ff" />
                <span>Simular Toque NFC</span>
              </button>
            </div>

            {/* Key Benefits Pills */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              className="hero-metrics"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(0, 210, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00d2ff',
                  }}
                >
                  <Zap size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>
                    0.4s de Carga
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Acceso instantáneo
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                  }}
                >
                  <Smartphone size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>
                    100% Sin Apps
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Nativo iOS & Android
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                  }}
                >
                  <QrCode size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>
                    NFC + QR Dinámico
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Compatibilidad total
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8b5cf6',
                  }}
                >
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>
                    Todo Incluido
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Hosting & Mantenimiento
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Phone & NFC Tap Simulator */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Simulator Interactive Control Toolbar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(10, 17, 36, 0.8)',
                padding: '0.4rem',
                borderRadius: '9999px',
                border: '1px solid rgba(0, 210, 255, 0.25)',
                marginBottom: '1.25rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <button
                onClick={() => {
                  setActiveTab('menu');
                  setHasTapped(true);
                  playChime();
                }}
                style={{
                  background: activeTab === 'menu' ? 'var(--grad-cyan)' : 'transparent',
                  color: activeTab === 'menu' ? '#040b17' : '#94a3b8',
                  border: 'none',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                Menú Restaurante
              </button>

              <button
                onClick={() => {
                  setActiveTab('card');
                  setHasTapped(true);
                  playChime();
                }}
                style={{
                  background: activeTab === 'card' ? 'var(--grad-cyan)' : 'transparent',
                  color: activeTab === 'card' ? '#040b17' : '#94a3b8',
                  border: 'none',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                Tarjeta Contacto
              </button>

              <button
                onClick={() => {
                  setActiveTab('qr');
                  setHasTapped(true);
                }}
                style={{
                  background: activeTab === 'qr' ? 'var(--grad-cyan)' : 'transparent',
                  color: activeTab === 'qr' ? '#040b17' : '#94a3b8',
                  border: 'none',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                Alternativa QR
              </button>
            </div>

            {/* Phone Wrapper with Ripple Waves */}
            <div style={{ position: 'relative' }}>
              {/* Ripple Effect Animation */}
              {isRippling && (
                <>
                  <div
                    style={{
                      position: 'absolute',
                      top: '12%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '240px',
                      height: '240px',
                      borderRadius: '50%',
                      border: '3px solid #00d2ff',
                      boxShadow: '0 0 35px #00d2ff',
                      animation: 'nfcRipples 0.8s ease-out forwards',
                      pointerEvents: 'none',
                      zIndex: 30,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      border: '2px solid #70e2ff',
                      animation: 'nfcRipples 0.8s ease-out 0.15s forwards',
                      pointerEvents: 'none',
                      zIndex: 30,
                    }}
                  />
                </>
              )}

              {/* Realistic Smartphone Mockup */}
              <div
                style={{
                  width: '310px',
                  height: '620px',
                  background: '#040711',
                  borderRadius: '42px',
                  border: '7px solid #1e293b',
                  boxShadow: hasTapped
                    ? '0 0 50px rgba(0, 210, 255, 0.35), 0 25px 60px rgba(0, 0, 0, 0.8)'
                    : '0 25px 60px rgba(0, 0, 0, 0.7)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s ease',
                }}
              >
                {/* Speaker Notch */}
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80px',
                    height: '18px',
                    background: '#111827',
                    borderRadius: '12px',
                    zIndex: 25,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#1e293b' }} />
                  <div style={{ width: '32px', height: '3px', borderRadius: '2px', background: '#334155' }} />
                </div>

                {/* Status Bar */}
                <div
                  style={{
                    height: '38px',
                    padding: '8px 18px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.7rem',
                    color: '#94a3b8',
                    fontWeight: 600,
                    zIndex: 20,
                  }}
                >
                  <span>19:42</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Wifi size={11} color="#00d2ff" />
                    <span>5G</span>
                    <div
                      style={{
                        width: '18px',
                        height: '9px',
                        border: '1px solid #94a3b8',
                        borderRadius: '2px',
                        padding: '1px',
                      }}
                    >
                      <div style={{ width: '80%', height: '100%', background: '#00d2ff', borderRadius: '1px' }} />
                    </div>
                  </div>
                </div>

                {/* Screen Content */}
                {!hasTapped ? (
                  /* Standby / Tap to Discover Screen */
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1.5rem',
                      textAlign: 'center',
                      background: 'radial-gradient(circle at 50% 30%, #0d1e3d 0%, #040815 100%)',
                    }}
                  >
                    <div
                      onClick={handleSimulateTap}
                      style={{
                        width: '86px',
                        height: '86px',
                        borderRadius: '50%',
                        background: 'rgba(0, 210, 255, 0.1)',
                        border: '2px dashed #00d2ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.5rem',
                        cursor: 'pointer',
                        animation: 'pulseGlow 2.5s infinite',
                      }}
                    >
                      <Wifi size={40} color="#00d2ff" />
                    </div>

                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#ffffff' }}>
                      Listo para el Tap
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                      Acerca la tarjeta inteligente o haz click en el botón inferior para ver la magia de Tap Solutions.
                    </p>

                    <button
                      onClick={handleSimulateTap}
                      className="btn btn-primary"
                      style={{ fontSize: '0.825rem', padding: '0.6rem 1.25rem' }}
                    >
                      <Sparkles size={15} />
                      <span>Tocar Tarjeta NFC</span>
                    </button>
                  </div>
                ) : activeTab === 'menu' ? (
                  /* Simulated Restaurant Digital Menu */
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      overflowY: 'auto',
                      padding: '0.75rem',
                      fontSize: '0.8rem',
                      background: '#090f1e',
                    }}
                  >
                    {/* Restaurant Header */}
                    <div
                      style={{
                        background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                        padding: '0.85rem',
                        borderRadius: '14px',
                        marginBottom: '0.75rem',
                        border: '1px solid rgba(0, 210, 255, 0.2)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <div style={{ fontSize: '0.65rem', color: '#00d2ff', fontWeight: 700, textTransform: 'uppercase' }}>
                            Mesa #08 • NFC Activo
                          </div>
                          <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>
                            La Terraza Gourmet
                          </div>
                        </div>
                        <span
                          style={{
                            background: 'rgba(16, 185, 129, 0.2)',
                            color: '#10b981',
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            padding: '2px 8px',
                            borderRadius: '9999px',
                          }}
                        >
                          Abierto
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px', color: '#f59e0b', fontSize: '0.7rem' }}>
                        <Star size={11} fill="#f59e0b" />
                        <span style={{ fontWeight: 700 }}>4.9</span>
                        <span style={{ color: '#94a3b8' }}>(240 valoraciones)</span>
                      </div>
                    </div>

                    {/* Category Selector */}
                    <div style={{ display: 'flex', gap: '0.35rem', marginBottom: '0.75rem' }}>
                      {['platos', 'bebidas', 'postres'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setMenuCat(cat)}
                          style={{
                            flex: 1,
                            padding: '0.35rem 0',
                            borderRadius: '8px',
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            border: 'none',
                            cursor: 'pointer',
                            textTransform: 'capitalize',
                            background: menuCat === cat ? '#00d2ff' : 'rgba(255, 255, 255, 0.06)',
                            color: menuCat === cat ? '#030816' : '#94a3b8',
                          }}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Menu Items List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
                      {menuCat === 'platos' && (
                        <>
                          <div
                            style={{
                              background: 'rgba(255, 255, 255, 0.03)',
                              padding: '0.65rem',
                              borderRadius: '10px',
                              border: '1px solid rgba(255, 255, 255, 0.05)',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <div>
                              <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.8rem' }}>
                                Smash Burger Trufada
                              </div>
                              <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '2px' }}>
                                Doble carne angus, queso cheddar fundido y mayonesa trufa.
                              </div>
                            </div>
                            <span style={{ fontWeight: 800, color: '#00d2ff', fontSize: '0.85rem' }}>
                              $12.50
                            </span>
                          </div>

                          <div
                            style={{
                              background: 'rgba(255, 255, 255, 0.03)',
                              padding: '0.65rem',
                              borderRadius: '10px',
                              border: '1px solid rgba(255, 255, 255, 0.05)',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <div>
                              <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.8rem' }}>
                                Tacos de Costilla BBQ
                              </div>
                              <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '2px' }}>
                                3 piezas en tortilla artesanal con guacamole fresco.
                              </div>
                            </div>
                            <span style={{ fontWeight: 800, color: '#00d2ff', fontSize: '0.85rem' }}>
                              $9.80
                            </span>
                          </div>
                        </>
                      )}

                      {menuCat === 'bebidas' && (
                        <>
                          <div
                            style={{
                              background: 'rgba(255, 255, 255, 0.03)',
                              padding: '0.65rem',
                              borderRadius: '10px',
                              border: '1px solid rgba(255, 255, 255, 0.05)',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <div>
                              <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.8rem' }}>
                                Limonada Eléctrica Tap
                              </div>
                              <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '2px' }}>
                                Cítricos naturales, menta y toque de curaçao azul.
                              </div>
                            </div>
                            <span style={{ fontWeight: 800, color: '#00d2ff', fontSize: '0.85rem' }}>
                              $4.50
                            </span>
                          </div>

                          <div
                            style={{
                              background: 'rgba(255, 255, 255, 0.03)',
                              padding: '0.65rem',
                              borderRadius: '10px',
                              border: '1px solid rgba(255, 255, 255, 0.05)',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <div>
                              <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.8rem' }}>
                                Cerveza Artesanal IPA
                              </div>
                              <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '2px' }}>
                                Elaboración local, cuerpo medio y notas a mango.
                              </div>
                            </div>
                            <span style={{ fontWeight: 800, color: '#00d2ff', fontSize: '0.85rem' }}>
                              $5.00
                            </span>
                          </div>
                        </>
                      )}

                      {menuCat === 'postres' && (
                        <div
                          style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            padding: '0.65rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <div>
                            <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.8rem' }}>
                              Volcán de Dulce de Leche
                            </div>
                            <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '2px' }}>
                              Con helado artesanal de vainilla bourbon.
                            </div>
                          </div>
                          <span style={{ fontWeight: 800, color: '#00d2ff', fontSize: '0.85rem' }}>
                            $6.00
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Bottom Action inside phone */}
                    <div style={{ marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                      <div
                        style={{
                          background: '#10b981',
                          color: '#ffffff',
                          padding: '0.55rem',
                          borderRadius: '8px',
                          textAlign: 'center',
                          fontWeight: 700,
                          fontSize: '0.725rem',
                          cursor: 'pointer',
                        }}
                      >
                        Pedir a la Mesa / Mozo
                      </div>
                    </div>
                  </div>
                ) : activeTab === 'card' ? (
                  /* Simulated Smart NFC Business Card */
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '1.25rem',
                      background: '#090f1e',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '68px',
                        height: '68px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #00d2ff, #2563eb)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        marginBottom: '0.75rem',
                        border: '3px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      TS
                    </div>

                    <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 800, marginBottom: '2px' }}>
                      Rafael Steel
                    </h4>
                    <p style={{ fontSize: '0.75rem', color: '#00d2ff', fontWeight: 600, marginBottom: '1.25rem' }}>
                      Director de Tecnología • Tap Solutions
                    </p>

                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          padding: '0.55rem',
                          borderRadius: '8px',
                          fontSize: '0.725rem',
                          color: '#ffffff',
                          fontWeight: 600,
                        }}
                      >
                        📲 Guardar Contacto en Agenda (.vcf)
                      </div>
                      <div
                        style={{
                          background: 'rgba(37, 211, 102, 0.15)',
                          border: '1px solid rgba(37, 211, 102, 0.3)',
                          padding: '0.55rem',
                          borderRadius: '8px',
                          fontSize: '0.725rem',
                          color: '#25d366',
                          fontWeight: 700,
                        }}
                      >
                        💬 Chatear por WhatsApp Directo
                      </div>
                      <div
                        style={{
                          background: 'rgba(0, 210, 255, 0.1)',
                          border: '1px solid rgba(0, 210, 255, 0.2)',
                          padding: '0.55rem',
                          borderRadius: '8px',
                          fontSize: '0.725rem',
                          color: '#38bdf8',
                          fontWeight: 600,
                        }}
                      >
                        🌐 Visitar Sitio Web Oficial
                      </div>
                    </div>
                  </div>
                ) : (
                  /* QR Fallback Screen */
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '1.25rem',
                      background: '#090f1e',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        background: '#ffffff',
                        padding: '1rem',
                        borderRadius: '16px',
                        marginBottom: '1rem',
                        boxShadow: '0 0 25px rgba(0, 210, 255, 0.4)',
                      }}
                    >
                      <QrCode size={110} color="#070d1e" />
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#ffffff', marginBottom: '4px' }}>
                      Escanea con tu cámara
                    </div>
                    <p style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                      Si el cliente tiene un modelo antiguo sin NFC, el QR dinámico abre exactamente la misma experiencia digital.
                    </p>
                  </div>
                )}

                {/* Reset or Re-tap Button */}
                {hasTapped && (
                  <div
                    style={{
                      padding: '0.5rem',
                      background: 'rgba(5, 9, 20, 0.95)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <button
                      onClick={handleResetPhone}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        fontSize: '0.7rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <RefreshCw size={11} />
                      <span>Volver a pantalla de espera</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Floating Tap Card (Visual representation of physical product) */}
              <div
                onClick={handleSimulateTap}
                className="animate-float"
                style={{
                  position: 'absolute',
                  bottom: '-25px',
                  left: '-45px',
                  width: '210px',
                  height: '130px',
                  background: 'linear-gradient(135deg, #09172f 0%, #030815 100%)',
                  borderRadius: '14px',
                  border: '1.5px solid #00d2ff',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 210, 255, 0.3)',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  zIndex: 35,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)';
                  e.currentTarget.style.borderColor = '#70e2ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                  e.currentTarget.style.borderColor = '#00d2ff';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#00d2ff' }}>
                    Tap<span style={{ color: '#ffffff' }}>Solutions</span>
                  </span>
                  <Wifi size={17} color="#00d2ff" />
                </div>

                <div>
                  <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Tarjeta Inteligente NFC
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ffffff' }}>
                    ¡Toca para probar! 👆
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-metrics {
            text-align: left;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
