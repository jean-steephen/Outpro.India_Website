import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { Monitor, Smartphone, Palette, TrendingUp, Cloud, Bot, Target, BarChart3, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { FadeInUp } from '../components/ui/Animations';
import CTAStrip from '../components/sections/CTAStrip';

const iconMap = { Monitor, Smartphone, Palette, TrendingUp, Cloud, Bot, Target, BarChart3 };

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = iconMap[service.icon] || Monitor;
  const others = services.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <main style={{ paddingTop: 'var(--navbar-height)' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 0 100px',
        background: 'var(--color-bg)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: service.gradient,
          opacity: 0.05,
        }} />
        <div className="orb" style={{
          width: 500,
          height: 500,
          top: '-20%',
          right: '-10%',
          background: service.color + '44',
          opacity: 0.15,
          filter: 'blur(80px)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeInUp>
            <Link to="/services" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--color-text-muted)',
              fontSize: 'var(--text-sm)',
              fontWeight: 500,
              marginBottom: '32px',
              textDecoration: 'none',
              transition: 'color var(--transition-fast)',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              <ArrowLeft size={16} /> Back to Services
            </Link>

            <div style={{ maxWidth: '800px' }}>
              <div style={{
                width: 72,
                height: 72,
                borderRadius: 'var(--radius-xl)',
                background: service.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                boxShadow: `0 8px 32px ${service.color}50`,
              }}>
                <Icon size={32} color="#fff" />
              </div>
              <div className="section-label" style={{ marginBottom: '16px' }}>Service</div>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '24px',
              }}>
                {service.title}
              </h1>
              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
              }}>
                {service.description}
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Features + Process */}
      <section className="section" style={{ background: 'var(--color-bg-2)', borderTop: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }} className="detail-grid">
            <FadeInUp>
              <div>
                <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)', marginBottom: '32px' }}>
                  What's <span style={{ background: service.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Included</span>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {service.features.map((feat, i) => (
                    <div key={feat} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '16px 20px',
                      background: 'var(--gradient-card)',
                      border: '1px solid var(--color-border-light)',
                      borderRadius: 'var(--radius-lg)',
                      transition: 'border-color var(--transition-base)',
                    }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = service.color + '44'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border-light)'}
                    >
                      <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background: service.color + '20',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <CheckCircle size={16} color={service.color} />
                      </div>
                      <span style={{ fontWeight: 500 }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={100}>
              <div>
                <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)', marginBottom: '32px' }}>
                  Our <span style={{ background: service.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Process</span>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {service.process.map((step, i) => (
                    <div key={step.step} style={{ display: 'flex', gap: '20px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{
                          width: 48,
                          height: 48,
                          borderRadius: 'var(--radius-lg)',
                          background: service.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-display)',
                          fontWeight: 800,
                          fontSize: 'var(--text-sm)',
                          color: '#fff',
                          flexShrink: 0,
                          boxShadow: `0 4px 16px ${service.color}40`,
                        }}>
                          {step.step}
                        </div>
                        {i < service.process.length - 1 && (
                          <div style={{ width: 1, flex: 1, background: service.color + '30', margin: '8px 0' }} />
                        )}
                      </div>
                      <div style={{ paddingBottom: i < service.process.length - 1 ? '24px' : 0 }}>
                        <h3 style={{ fontWeight: 700, fontSize: 'var(--text-lg)', marginBottom: '8px', paddingTop: '10px' }}>
                          {step.title}
                        </h3>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: 'var(--text-sm)' }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) { .detail-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        `}</style>
      </section>

      {/* Other services */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <FadeInUp>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)' }}>
                Explore Other <span className="text-gradient">Services</span>
              </h2>
            </div>
          </FadeInUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="other-services-grid">
            {others.map((s, i) => {
              const OtherIcon = iconMap[s.icon] || Monitor;
              return (
                <FadeInUp key={s.id} delay={i * 80}>
                  <Link to={`/services/${s.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="glass-card" style={{ padding: '28px' }}>
                      <div style={{
                        width: 44,
                        height: 44,
                        borderRadius: 'var(--radius-lg)',
                        background: s.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                      }}>
                        <OtherIcon size={20} color="#fff" />
                      </div>
                      <h3 style={{ fontWeight: 700, marginBottom: '8px' }}>{s.title}</h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: '16px' }}>{s.shortDesc}</p>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: s.color, fontSize: 'var(--text-sm)', fontWeight: 600 }}>
                        Learn more <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                </FadeInUp>
              );
            })}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .other-services-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <CTAStrip />
    </main>
  );
}
