import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { portfolio, categories } from '../data/portfolio';
import { FadeInUp } from '../components/ui/Animations';
import CTAStrip from '../components/sections/CTAStrip';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? portfolio
    : portfolio.filter(p => p.category === activeCategory);

  return (
    <main style={{ paddingTop: 'var(--navbar-height)' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 0 100px',
        background: 'var(--color-bg)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div className="orb orb-accent" style={{ width: 500, height: 500, top: '-20%', left: '50%', transform: 'translateX(-50%)', opacity: 0.1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeInUp>
            <div className="section-label">Our Work</div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}>
              Projects That <span className="text-gradient">Deliver Results</span>
            </h1>
            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--color-text-muted)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.75,
            }}>
              Real case studies with real outcomes. Explore how we've helped businesses grow, transform, and lead.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section" style={{ background: 'var(--color-bg-2)', borderTop: '1px solid var(--color-border-light)' }}>
        <div className="container">
          {/* Category filters */}
          <FadeInUp>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
              marginBottom: '56px',
            }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all var(--transition-base)',
                    background: activeCategory === cat ? 'var(--gradient-primary)' : 'rgba(255,255,255,0.04)',
                    color: activeCategory === cat ? '#fff' : 'var(--color-text-muted)',
                    border: activeCategory === cat ? 'none' : '1px solid var(--color-border-light)',
                    boxShadow: activeCategory === cat ? '0 4px 16px rgba(79,110,247,0.35)' : 'none',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeInUp>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }} className="portfolio-grid">
            {filtered.map((item, i) => (
              <FadeInUp key={item.id} delay={i * 60}>
                <Link to={`/portfolio/${item.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{
                    borderRadius: 'var(--radius-2xl)',
                    overflow: 'hidden',
                    border: '1px solid var(--color-border-light)',
                    background: 'var(--color-surface)',
                    transition: 'transform var(--transition-base), box-shadow var(--transition-base)',
                    cursor: 'pointer',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    {/* Visual */}
                    <div style={{
                      height: '200px',
                      background: item.gradient,
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)',
                      }} />
                      <div style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        width: 36,
                        height: 36,
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(255,255,255,0.15)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(8px)',
                      }}>
                        <ExternalLink size={14} color="#fff" />
                      </div>
                      <div style={{
                        position: 'absolute',
                        bottom: '16px',
                        left: '16px',
                      }}>
                        <span className="tag">{item.category}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '24px' }}>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginBottom: '8px' }}>
                        {item.client} · {item.year}
                      </div>
                      <h3 style={{ fontWeight: 700, fontSize: 'var(--text-lg)', marginBottom: '12px', lineHeight: 1.3 }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: '20px', lineHeight: 1.65 }}>
                        {item.shortDesc}
                      </p>

                      {/* KPIs */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '20px' }}>
                        {item.kpis.slice(0, 2).map(kpi => (
                          <div key={kpi.label} style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid var(--color-border-light)',
                            borderRadius: 'var(--radius-md)',
                            padding: '10px 14px',
                          }}>
                            <div style={{ fontWeight: 800, fontSize: 'var(--text-base)', color: 'var(--color-text)' }}>{kpi.value}</div>
                            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{kpi.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {item.tags.map(tag => (
                          <span key={tag} style={{
                            padding: '2px 10px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid var(--color-border-light)',
                            borderRadius: 'var(--radius-full)',
                            fontSize: 'var(--text-xs)',
                            color: 'var(--color-text-dim)',
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px', color: 'var(--color-text-muted)' }}>
              No projects found in this category.
            </div>
          )}
        </div>

        <style>{`
          @media (max-width: 1024px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 640px) { .portfolio-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <CTAStrip />
    </main>
  );
}
