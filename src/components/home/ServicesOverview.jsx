import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Smartphone, Palette, TrendingUp, Cloud, Bot, Target, BarChart3 } from 'lucide-react';
import { services } from '../../data/services';
import { FadeInUp } from '../ui/Animations';

const iconMap = { Monitor, Smartphone, Palette, TrendingUp, Cloud, Bot, Target, BarChart3 };

export default function ServicesOverview() {
  return (
    <section className="section" style={{ background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-primary" style={{ width: 400, height: 400, top: '10%', right: '-10%', opacity: 0.12 }} />

      <div className="container">
        <FadeInUp>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Services Built for <span className="text-gradient">Modern Businesses</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              From strategy to execution, we offer end-to-end digital services that transform how businesses compete online.
            </p>
          </div>
        </FadeInUp>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }} className="services-grid">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Monitor;
            return (
              <FadeInUp key={service.id} delay={i * 60}>
                <Link
                  to={`/services/${service.slug}`}
                  style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                >
                  <div
                    className="glass-card"
                    style={{
                      padding: '28px 24px',
                      height: '100%',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = service.color + '44';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--color-border-light)';
                    }}
                  >
                    {/* Icon */}
                    <div style={{
                      width: 52,
                      height: 52,
                      borderRadius: 'var(--radius-lg)',
                      background: service.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px',
                      boxShadow: `0 4px 20px ${service.color}40`,
                    }}>
                      <Icon size={22} color="#fff" />
                    </div>

                    <h3 style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      marginBottom: '10px',
                      lineHeight: 1.3,
                    }}>
                      {service.title}
                    </h3>

                    <p style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.65,
                      marginBottom: '18px',
                    }}>
                      {service.shortDesc}
                    </p>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: service.color,
                      fontSize: 'var(--text-sm)',
                      fontWeight: 600,
                    }}>
                      Learn more <ArrowRight size={14} />
                    </div>

                    {/* Hover gradient line */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: service.gradient,
                      opacity: 0,
                      transition: 'opacity var(--transition-base)',
                    }} className="card-line" />
                  </div>
                </Link>
              </FadeInUp>
            );
          })}
        </div>

        <FadeInUp delay={200}>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn btn-outline">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </FadeInUp>
      </div>

      <style>{`
        .services-grid { grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 1200px) { .services-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) { .services-grid { grid-template-columns: 1fr; } }
        .glass-card:hover .card-line { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
