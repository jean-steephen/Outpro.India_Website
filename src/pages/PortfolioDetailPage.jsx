import { useParams, Link, Navigate } from 'react-router-dom';
import { portfolio } from '../data/portfolio';
import { FadeInUp } from '../components/ui/Animations';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CTAStrip from '../components/sections/CTAStrip';

export default function PortfolioDetailPage() {
  const { slug } = useParams();
  const item = portfolio.find(p => p.slug === slug);

  if (!item) return <Navigate to="/portfolio" replace />;

  const others = portfolio.filter(p => p.slug !== slug).slice(0, 3);

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
          background: item.gradient,
          opacity: 0.06,
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeInUp>
            <Link to="/portfolio" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--color-text-muted)',
              fontSize: 'var(--text-sm)',
              fontWeight: 500,
              marginBottom: '32px',
              textDecoration: 'none',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span className="tag">{item.category}</span>
              <span className="tag">{item.year}</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}>
              {item.title}
            </h1>
            <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: 'var(--text-lg)', marginBottom: '24px' }}>
              {item.client}
            </p>
            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--color-text-muted)',
              maxWidth: '680px',
              lineHeight: 1.75,
            }}>
              {item.shortDesc}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Visual + KPIs */}
      <section style={{
        background: 'var(--color-bg-2)',
        borderTop: '1px solid var(--color-border-light)',
        padding: '80px 0',
      }}>
        <div className="container">
          {/* Visual banner */}
          <FadeInUp>
            <div style={{
              height: '360px',
              borderRadius: 'var(--radius-2xl)',
              background: item.gradient,
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '48px',
              border: '1px solid var(--color-border-light)',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.12) 0%, transparent 60%)',
              }} />
              {/* Abstract UI elements */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
              }}>
                {[80, 120, 160, 120, 80].map((h, i) => (
                  <div key={i} style={{
                    width: 40,
                    height: h,
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '20px',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }} />
                ))}
              </div>
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
              }}>
                {item.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '6px 14px',
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-xs)',
                    color: '#fff',
                    fontWeight: 600,
                    backdropFilter: 'blur(8px)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeInUp>

          {/* KPIs */}
          <FadeInUp delay={100}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              marginBottom: '64px',
            }} className="kpi-grid">
              {item.kpis.map(kpi => (
                <div key={kpi.label} style={{
                  textAlign: 'center',
                  padding: '32px 20px',
                  background: 'var(--gradient-card)',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: 'var(--radius-xl)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 800,
                    background: item.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '8px',
                    lineHeight: 1,
                  }}>
                    {kpi.value}
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{kpi.label}</div>
                </div>
              ))}
            </div>
          </FadeInUp>

          {/* Description */}
          <FadeInUp delay={150}>
            <div style={{ maxWidth: '760px' }}>
              <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)', marginBottom: '24px' }}>
                Project <span className="text-gradient">Overview</span>
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, fontSize: 'var(--text-lg)' }}>
                {item.description}
              </p>
            </div>
          </FadeInUp>
        </div>

        <style>{`
          @media (max-width: 768px) { .kpi-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 400px) { .kpi-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* More projects */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <FadeInUp>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
              <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)', marginBottom: 0 }}>
                More <span className="text-gradient">Case Studies</span>
              </h2>
              <Link to="/portfolio" className="btn btn-ghost">All Projects <ArrowRight size={16} /></Link>
            </div>
          </FadeInUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="more-grid">
            {others.map((p, i) => (
              <FadeInUp key={p.id} delay={i * 80}>
                <Link to={`/portfolio/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="glass-card" style={{ overflow: 'hidden' }}>
                    <div style={{ height: '140px', background: p.gradient, position: 'relative' }}>
                      <span className="tag" style={{ position: 'absolute', bottom: 12, left: 12 }}>{p.category}</span>
                    </div>
                    <div style={{ padding: '20px' }}>
                      <h3 style={{ fontWeight: 700, marginBottom: '6px', fontSize: 'var(--text-base)' }}>{p.title}</h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{p.client}</p>
                    </div>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .more-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <CTAStrip />
    </main>
  );
}
