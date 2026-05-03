import { AnimatedCounter, FadeInUp } from '../ui/Animations';
import { stats } from '../../data/team';

export default function StatsSection() {
  return (
    <section style={{
      padding: '80px 0',
      background: 'var(--color-bg-2)',
      borderTop: '1px solid var(--color-border-light)',
      borderBottom: '1px solid var(--color-border-light)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glowing line */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '80%',
        height: '1px',
        background: 'var(--gradient-primary)',
        opacity: 0.1,
        pointerEvents: 'none',
      }} />

      <div className="container">
        <FadeInUp>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label">By the Numbers</div>
            <h2 className="section-title">
              Results That <span className="text-gradient">Speak for Themselves</span>
            </h2>
          </div>
        </FadeInUp>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2px',
          background: 'var(--color-border-light)',
          border: '1px solid var(--color-border-light)',
          borderRadius: 'var(--radius-2xl)',
          overflow: 'hidden',
        }} className="stats-grid">
          {stats.map((stat, i) => (
            <FadeInUp key={stat.label} delay={i * 100}>
              <div style={{
                padding: '48px 24px',
                textAlign: 'center',
                background: 'var(--color-bg-2)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at 50% 0%, rgba(79,110,247,0.06) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 800,
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>

                <div style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-text-muted)',
                  fontWeight: 500,
                }}>
                  {stat.label}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 400px) { .stats-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
