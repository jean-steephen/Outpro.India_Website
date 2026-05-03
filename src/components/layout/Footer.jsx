import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe2, MessageSquare, Code2, Image, ArrowRight } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Team', path: '/about#team' },
    { label: 'Careers', path: '#' },
    { label: 'Blog', path: '#' },
  ],
  Services: [
    { label: 'Web Development', path: '/services/web-development' },
    { label: 'Mobile Apps', path: '/services/mobile-development' },
    { label: 'Brand Identity', path: '/services/brand-identity' },
    { label: 'AI & Automation', path: '/services/ai-automation' },
  ],
  Legal: [
    { label: 'Privacy Policy', path: '#' },
    { label: 'Terms of Service', path: '#' },
    { label: 'Cookie Policy', path: '#' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--color-bg-2)',
      borderTop: '1px solid var(--color-border-light)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '1px',
        background: 'var(--gradient-primary)',
        boxShadow: '0 0 40px 10px rgba(79,110,247,0.2)',
      }} />

      <div className="container">
        {/* Newsletter bar */}
        <div style={{
          padding: '40px 0',
          borderBottom: '1px solid var(--color-border-light)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '4px' }}>
              Ready to start your project?
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
              Let's build something remarkable together.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ display: 'flex' }}>
            Get a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>

        {/* Main footer */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
          padding: '64px 0 48px',
        }}
        className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 18,
                color: '#fff',
              }}>O</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem' }}>
                Outpro<span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>.India</span>
              </span>
            </Link>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.8, marginBottom: 24 }}>
              We build digital experiences that drive growth. A premium digital solutions company delivering web, mobile, brand, and cloud services.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: Mail,  text: 'douajean47@gmail.com' },
                { icon: Phone, text: '+90 404 815 79' },
                { icon: MapPin,text: 'Bangalore, India' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
                  <Icon size={14} color="var(--color-primary)" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text)', marginBottom: 20 }}>
                {section}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', transition: 'color var(--transition-fast)', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--color-border-light)',
          padding: '24px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ color: 'var(--color-text-dim)', fontSize: 'var(--text-sm)' }}>
            © {year} Outpro.India. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {[
              { icon: Globe2, href: '#', label: 'LinkedIn' },
              { icon: MessageSquare, href: '#', label: 'Twitter' },
              { icon: Image, href: '#', label: 'Instagram' },
              { icon: Code2, href: '#', label: 'GitHub' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--color-border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-muted)',
                  transition: 'all var(--transition-base)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(79,110,247,0.15)';
                  e.currentTarget.style.color = 'var(--color-primary)';
                  e.currentTarget.style.borderColor = 'rgba(79,110,247,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.color = 'var(--color-text-muted)';
                  e.currentTarget.style.borderColor = 'var(--color-border-light)';
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
