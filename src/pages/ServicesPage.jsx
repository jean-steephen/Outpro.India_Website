import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Smartphone, Palette, TrendingUp, Cloud, Bot, Target, BarChart3, CheckCircle } from 'lucide-react';
import { services } from '../data/services';
import { FadeInUp } from '../components/ui/Animations';
import CTAStrip from '../components/sections/CTAStrip';

const iconMap = { Monitor, Smartphone, Palette, TrendingUp, Cloud, Bot, Target, BarChart3 };

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: 'var(--navbar-height)' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 0 100px',
        background: 'var(--color-bg)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="orb orb-cyan" style={{ width: 500, height: 500, top: '-20%', left: '60%', opacity: 0.12 }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(79,110,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(79,110,247,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <FadeInUp>
            <div className="section-label">What We Offer</div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}>
              Services Designed for <span className="text-gradient">Digital Success</span>
            </h1>
            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--color-text-muted)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.75,
            }}>
              From strategy to execution, our full-spectrum digital services help you build, scale, and lead in the digital economy.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Services */}
      <section className="section" style={{ background: 'var(--color-bg-2)', borderTop: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Monitor;
              const isEven = i % 2 === 0;
              return (
                <FadeInUp key={service.id} delay={i * 50}>
                  <div className={`service-row glass-card ${!isEven ? 'reverse' : ''}`} style={{ padding: '0', overflow: 'hidden' }}>
                    {/* Visual */}
                    <div style={{
                      background: service.gradient,
                      padding: '56px 48px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      overflow: 'hidden',
                      order: isEven ? 0 : 1,
                      minHeight: '320px',
                    }}>
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.12) 0%, transparent 60%)',
                      }} />
                      <div>
                        <div style={{
                          width: 64,
                          height: 64,
                          borderRadius: 'var(--radius-xl)',
                          background: 'rgba(255,255,255,0.15)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '20px',
                          backdropFilter: 'blur(10px)',
                        }}>
                          <Icon size={28} color="#fff" />
                        </div>
                        <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
                          Service {String(i + 1).padStart(2, '0')}
                        </div>
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{
                      padding: '48px 40px',
                      order: isEven ? 1 : 0,
                      background: 'var(--color-surface)',
                    }}>
                      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '28px', fontSize: 'var(--text-base)' }}>
                        {service.description}
                      </p>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '10px',
                        marginBottom: '32px',
                      }}>
                        {service.features.map(f => (
                          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                            <CheckCircle size={14} color={service.color} style={{ flexShrink: 0 }} />
                            {f}
                          </div>
                        ))}
                      </div>
                      <Link
                        to={`/services/${service.slug}`}
                        className="btn btn-primary btn-sm"
                        style={{ display: 'inline-flex', background: service.gradient, boxShadow: `0 4px 16px ${service.color}40` }}
                      >
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>

        <style>{`
          .service-row { border-radius: var(--radius-xl); overflow: hidden; display: grid; grid-template-columns: 1fr 1fr; }
          @media (max-width: 768px) {
            .service-row { grid-template-columns: 1fr !important; }
            .service-row > div { order: unset !important; }
          }
        `}</style>
      </section>

      <CTAStrip />
    </main>
  );
}
