import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { FadeInUp } from '../ui/Animations';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive(i => (i - 1 + total) % total);
  const next = () => setActive(i => (i + 1) % total);

  const visibleIndices = [
    (active - 1 + total) % total,
    active,
    (active + 1) % total,
  ];

  return (
    <section className="section" style={{
      background: 'var(--color-bg-2)',
      borderTop: '1px solid var(--color-border-light)',
      borderBottom: '1px solid var(--color-border-light)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div className="orb orb-primary" style={{ width: 400, height: 400, top: '0', right: '0', opacity: 0.08 }} />

      <div className="container">
        <FadeInUp>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label">Client Stories</div>
            <h2 className="section-title">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Don't take our word for it. Here's what industry leaders say about working with Outpro.India.
            </p>
          </div>
        </FadeInUp>

        {/* Carousel */}
        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '40px',
          }} className="testimonials-grid">
            {visibleIndices.map((idx, pos) => {
              const t = testimonials[idx];
              const isCenter = pos === 1;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '32px',
                    opacity: isCenter ? 1 : 0.5,
                    transform: isCenter ? 'scale(1)' : 'scale(0.96)',
                    transition: 'all 0.4s ease',
                    borderColor: isCenter ? `${t.color}33` : 'var(--color-border-light)',
                    boxShadow: isCenter ? `0 8px 40px rgba(0,0,0,0.4), 0 0 30px ${t.color}20` : 'var(--shadow-sm)',
                  }}
                >
                  {/* Quote */}
                  <Quote size={32} style={{ color: t.color, opacity: 0.4, marginBottom: '16px' }} />

                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} style={{ fill: '#F59E0B', color: '#F59E0B' }} />
                    ))}
                  </div>

                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.75,
                    marginBottom: '24px',
                    fontStyle: 'italic',
                  }}>
                    "{t.text}"
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: t.color + '22',
                      border: `2px solid ${t.color}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: 'var(--text-sm)',
                      color: t.color,
                      flexShrink: 0,
                    }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>
                        {t.name}
                      </div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                        {t.role} · {t.company}
                      </div>
                    </div>
                    <span className="tag" style={{ marginLeft: 'auto' }}>{t.service}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={prev}
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--color-border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text)',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(79,110,247,0.15)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'var(--color-border-light)'; e.currentTarget.style.color = 'var(--color-text)'; }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    borderRadius: '4px',
                    background: i === active ? 'var(--gradient-primary)' : 'var(--color-surface-2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--color-border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text)',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(79,110,247,0.15)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'var(--color-border-light)'; e.currentTarget.style.color = 'var(--color-text)'; }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <FadeInUp delay={200}>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/testimonials" className="btn btn-outline">
              Read All Testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </FadeInUp>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid > *:not(:nth-child(2)) { display: none; }
        }
      `}</style>
    </section>
  );
}
