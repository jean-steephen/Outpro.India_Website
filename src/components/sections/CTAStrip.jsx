import { Link } from 'react-router-dom';
import { ArrowRight, Rocket } from 'lucide-react';
import { FadeInUp } from '../ui/Animations';

export default function CTAStrip() {
  return (
    <section style={{
      padding: '100px 0',
      background: 'var(--color-bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="orb orb-primary" style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.12 }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(79,110,247,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <FadeInUp>
          <div style={{
            textAlign: 'center',
            background: 'var(--gradient-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(48px, 8vw, 80px) clamp(24px, 6vw, 80px)',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(20px)',
          }}>
            {/* Top accent line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '10%',
              right: '10%',
              height: '1px',
              background: 'var(--gradient-primary)',
            }} />

            <div style={{
              width: 64,
              height: 64,
              borderRadius: 'var(--radius-xl)',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              boxShadow: 'var(--shadow-glow)',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}>
              <Rocket size={28} color="#fff" />
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}>
              Ready to Transform Your<br />
              <span className="text-gradient">Digital Presence?</span>
            </h2>

            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-muted)',
              maxWidth: '560px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
            }}>
              Let's build something extraordinary together. Get a free consultation with our experts and see how we can grow your business.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn btn-ghost btn-lg">
                View Our Work
              </Link>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
