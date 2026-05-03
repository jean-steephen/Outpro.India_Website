import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import { FadeInUp } from '../ui/Animations';

const featured = portfolio.filter(p => p.featured);

export default function FeaturedPortfolio() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="section" style={{ background: 'var(--color-bg)', position: 'relative' }}>
      <div className="orb orb-accent" style={{ width: 500, height: 500, bottom: '-10%', left: '-10%', opacity: 0.1 }} />

      <div className="container">
        <FadeInUp>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '56px',
            flexWrap: 'wrap',
            gap: '24px',
          }}>
            <div>
              <div className="section-label">Our Work</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                Featured <span className="text-gradient">Case Studies</span>
              </h2>
            </div>
            <Link to="/portfolio" className="btn btn-ghost" style={{ display: 'flex', flexShrink: 0 }}>
              All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </FadeInUp>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
        }} className="portfolio-featured-grid">
          {/* Large left card */}
          <FadeInUp delay={0}>
            <Link to={`/portfolio/${featured[0].slug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-2xl)',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '520px',
                  cursor: 'pointer',
                  border: '1px solid var(--color-border-light)',
                  transition: 'transform var(--transition-base), box-shadow var(--transition-base)',
                  transform: hovered === featured[0].id ? 'translateY(-4px)' : 'none',
                  boxShadow: hovered === featured[0].id ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                }}
                onMouseEnter={() => setHovered(featured[0].id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Visual */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: featured[0].gradient,
                  opacity: 0.85,
                }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 60%)',
                }} />
                {/* Mock UI pattern */}
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  right: '5%',
                  width: '55%',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '20px',
                  backdropFilter: 'blur(10px)',
                }}>
                  {[100, 75, 88, 60].map((w, i) => (
                    <div key={i} style={{
                      height: '8px',
                      background: `rgba(255,255,255,${0.15 + i * 0.05})`,
                      borderRadius: '4px',
                      marginBottom: '10px',
                      width: w + '%',
                    }} />
                  ))}
                  <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
                    {['#4F6EF7', '#00D4FF', '#7C3AED'].map(c => (
                      <div key={c} style={{ height: '28px', background: c, borderRadius: '6px', flex: 1, opacity: 0.7 }} />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '32px',
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)',
                }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <span className="tag">{featured[0].category}</span>
                    <span className="tag">{featured[0].year}</span>
                  </div>
                  <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: '8px' }}>{featured[0].title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--text-sm)', marginBottom: '16px' }}>{featured[0].client}</p>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {featured[0].kpis.slice(0, 2).map(kpi => (
                      <div key={kpi.label} style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: 'var(--radius-md)',
                        padding: '8px 14px',
                        backdropFilter: 'blur(8px)',
                      }}>
                        <div style={{ fontSize: 'var(--text-lg)', fontWeight: 800 }}>{kpi.value}</div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.6)' }}>{kpi.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </FadeInUp>

          {/* Right column — 2 stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {featured.slice(1).map((item, i) => (
              <FadeInUp key={item.id} delay={(i + 1) * 100}>
                <Link to={`/portfolio/${item.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div
                    style={{
                      borderRadius: 'var(--radius-2xl)',
                      overflow: 'hidden',
                      position: 'relative',
                      height: '240px',
                      cursor: 'pointer',
                      border: '1px solid var(--color-border-light)',
                      transition: 'transform var(--transition-base), box-shadow var(--transition-base)',
                      transform: hovered === item.id ? 'translateY(-4px)' : 'none',
                      boxShadow: hovered === item.id ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                    }}
                    onMouseEnter={() => setHovered(item.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: item.gradient,
                      opacity: 0.8,
                    }} />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)',
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '24px',
                      background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%)',
                    }}>
                      <span className="tag" style={{ marginBottom: '8px', display: 'inline-block' }}>{item.category}</span>
                      <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: '6px' }}>{item.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'var(--text-sm)' }}>{item.client}</p>
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      width: 36,
                      height: 36,
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(8px)',
                    }}>
                      <ExternalLink size={14} color="#fff" />
                    </div>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-featured-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
