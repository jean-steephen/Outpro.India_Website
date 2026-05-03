import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { FadeInUp } from '../components/ui/Animations';
import CTAStrip from '../components/sections/CTAStrip';
import { clientLogos } from '../data/team';

export default function TestimonialsPage() {
  const [active, setActive] = useState(0);

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
        <div className="orb orb-primary" style={{ width: 400, height: 400, top: '-10%', left: '50%', transform: 'translateX(-50%)', opacity: 0.12 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeInUp>
            <div className="section-label">Client Stories</div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}>
              What Our Clients <span className="text-gradient">Say About Us</span>
            </h1>
            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--color-text-muted)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.75,
            }}>
              Real results from real businesses. See how Outpro.India has helped companies grow, transform, and lead.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section style={{ background: 'var(--color-bg-2)', borderTop: '1px solid var(--color-border-light)', padding: '80px 0' }}>
        <div className="container">
          <FadeInUp>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
            }}>
              <div style={{
                background: 'var(--gradient-card)',
                border: `1px solid ${testimonials[active].color}33`,
                borderRadius: 'var(--radius-2xl)',
                padding: 'clamp(40px, 6vw, 64px)',
                position: 'relative',
                boxShadow: `0 8px 48px rgba(0,0,0,0.4), 0 0 40px ${testimonials[active].color}15`,
                transition: 'border-color 0.4s, box-shadow 0.4s',
              }}>
                <Quote size={48} style={{ color: testimonials[active].color, opacity: 0.3, margin: '0 auto 20px' }} />
                <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginBottom: '24px' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} style={{ fill: '#F59E0B', color: '#F59E0B' }} />
                  ))}
                </div>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.85,
                  fontStyle: 'italic',
                  marginBottom: '36px',
                }}>
                  "{testimonials[active].text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: testimonials[active].color + '22',
                    border: `2px solid ${testimonials[active].color}55`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: 'var(--text-base)',
                    color: testimonials[active].color,
                  }}>
                    {testimonials[active].avatar}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-lg)' }}>{testimonials[active].name}</div>
                    <div style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
                      {testimonials[active].role} · {testimonials[active].company}
                    </div>
                  </div>
                  <span className="tag" style={{ marginLeft: 'auto' }}>{testimonials[active].service}</span>
                </div>
              </div>

              {/* Controls */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
                <button onClick={() => setActive(i => (i - 1 + testimonials.length) % testimonials.length)}
                  style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)', cursor: 'pointer' }}>
                  <ChevronLeft size={18} />
                </button>
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    borderRadius: '4px',
                    background: i === active ? 'var(--gradient-primary)' : 'var(--color-surface-2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }} />
                ))}
                <button onClick={() => setActive(i => (i + 1) % testimonials.length)}
                  style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)', cursor: 'pointer' }}>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <FadeInUp>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="section-label">All Reviews</div>
              <h2 className="section-title">Every <span className="text-gradient">Client, Every Story</span></h2>
            </div>
          </FadeInUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="all-testimonials-grid">
            {testimonials.map((t, i) => (
              <FadeInUp key={t.id} delay={i * 60}>
                <div className="glass-card" style={{ padding: '28px', borderColor: t.color + '22', cursor: 'pointer' }}
                  onClick={() => { setActive(i); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                >
                  <Quote size={24} style={{ color: t.color, opacity: 0.4, marginBottom: '12px' }} />
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '12px' }}>
                    {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={12} style={{ fill: '#F59E0B', color: '#F59E0B' }} />)}
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>
                    "{t.text.slice(0, 160)}..."
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: t.color + '22',
                      border: `1px solid ${t.color}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: 'var(--text-xs)',
                      color: t.color,
                      flexShrink: 0,
                    }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>{t.name}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .all-testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px) { .all-testimonials-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Client logos */}
      <section style={{
        padding: '64px 0',
        background: 'var(--color-bg-2)',
        borderTop: '1px solid var(--color-border-light)',
        borderBottom: '1px solid var(--color-border-light)',
      }}>
        <div className="container">
          <FadeInUp>
            <p style={{ textAlign: 'center', fontSize: 'var(--text-sm)', color: 'var(--color-text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '40px' }}>
              Trusted by industry leaders
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              {clientLogos.map(logo => (
                <div key={logo} style={{
                  padding: '14px 28px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 700,
                  color: 'var(--color-text-dim)',
                  letterSpacing: '0.05em',
                  transition: 'all var(--transition-base)',
                  cursor: 'default',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.borderColor = 'rgba(79,110,247,0.3)'; e.currentTarget.style.background = 'rgba(79,110,247,0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-dim)'; e.currentTarget.style.borderColor = 'var(--color-border-light)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                >
                  {logo}
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      <CTAStrip />
    </main>
  );
}
