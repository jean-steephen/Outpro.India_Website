import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ChevronDown, Sparkles, Zap, Shield, Globe } from 'lucide-react';

const words = ['Digital Excellence', 'Web Experiences', 'Mobile Apps', 'Brand Identities', 'AI Solutions'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const canvasRef = useRef(null);

  // Typewriter word rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex(i => (i + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 110, 247, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'var(--navbar-height)',
    }}>
      {/* Canvas particles */}
      <canvas ref={canvasRef} style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }} />

      {/* Orbs */}
      <div className="orb orb-primary" style={{ width: 500, height: 500, top: '-15%', left: '-10%', opacity: 0.4 }} />
      <div className="orb orb-cyan" style={{ width: 400, height: 400, bottom: '5%', right: '-10%', opacity: 0.3 }} />
      <div className="orb orb-accent" style={{ width: 300, height: 300, top: '50%', left: '60%', opacity: 0.2 }} />

      {/* Grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(79,110,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,110,247,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        paddingTop: '60px',
        paddingBottom: '80px',
        animation: 'fadeInUp 0.8s ease both',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(79,110,247,0.1)',
          border: '1px solid rgba(79,110,247,0.25)',
          borderRadius: '100px',
          padding: '6px 16px 6px 8px',
          marginBottom: '32px',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-primary)',
          fontWeight: 600,
        }}>
          <span style={{
            background: 'var(--gradient-primary)',
            borderRadius: '100px',
            padding: '2px 10px',
            color: '#fff',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
          }}>NEW</span>
          <Sparkles size={13} />
          AI-Powered Solutions Now Available
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '24px',
          color: 'var(--color-text)',
          letterSpacing: '-0.02em',
        }}>
          We Build<br />
          <span style={{
            display: 'inline-block',
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            minWidth: '400px',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
          }}>
            {words[wordIndex]}
          </span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'var(--color-text-muted)',
          maxWidth: '600px',
          margin: '0 auto 48px',
          lineHeight: 1.75,
        }}>
          Outpro.India is a premium digital solutions company helping businesses build, scale, and lead in the digital era. From strategy to execution — we deliver results.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '64px' }}>
          <Link to="/portfolio" className="btn btn-primary btn-lg">
            View Our Work <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn btn-ghost btn-lg">
            <Play size={16} style={{ fill: 'currentColor' }} />
            Start a Project
          </Link>
        </div>

        {/* Trust metrics */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '48px',
          flexWrap: 'wrap',
        }}>
          {[
            { icon: Shield, label: '8+ Years', sub: 'of Excellence' },
            { icon: Globe, label: '150+ Projects', sub: 'Delivered' },
            { icon: Zap, label: '99% Happy', sub: 'Clients' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '12px 20px',
              }}>
                <Icon size={16} color="var(--color-primary)" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-text)' }}>{label}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        color: 'var(--color-text-dim)',
        animation: 'float 2s ease-in-out infinite',
        zIndex: 1,
      }}>
        <span style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
