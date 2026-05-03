import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 'var(--navbar-height)',
        display: 'flex',
        alignItems: 'center',
        transition: 'background var(--transition-slow), box-shadow var(--transition-slow), border-color var(--transition-slow)',
        background: scrolled
          ? 'rgba(7, 9, 26, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border-light)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.3)' : 'none',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
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
              flexShrink: 0,
              boxShadow: '0 0 20px rgba(79,110,247,0.4)',
            }}>O</div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.2rem',
              color: 'var(--color-text)',
              letterSpacing: '-0.01em',
            }}>
              Outpro<span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>.India</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
            {navLinks.map(link => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: active ? 600 : 500,
                    color: active ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    background: active ? 'rgba(79,110,247,0.1)' : 'transparent',
                    border: active ? '1px solid rgba(79,110,247,0.2)' : '1px solid transparent',
                    transition: 'all var(--transition-base)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    if (!active) {
                      e.currentTarget.style.color = 'var(--color-text)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      e.currentTarget.style.color = 'var(--color-text-muted)';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              to="/contact"
              className="btn btn-primary btn-sm"
              style={{ display: 'flex' }}
            >
              Get in Touch
            </Link>
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="hamburger-btn"
              aria-label="Toggle menu"
              style={{
                display: 'none',
                width: 40,
                height: 40,
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--color-border-light)',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text)',
                cursor: 'pointer',
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(7,9,26,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          animation: 'fadeIn 0.2s ease',
        }}>
          {navLinks.map(link => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-display)',
                  color: active ? 'var(--color-primary)' : 'var(--color-text)',
                  padding: '12px 32px',
                  borderRadius: 'var(--radius-lg)',
                  background: active ? 'rgba(79,110,247,0.1)' : 'transparent',
                  width: '280px',
                  textAlign: 'center',
                  transition: 'all var(--transition-base)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ marginTop: '24px', display: 'flex' }}
          >
            Get in Touch
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (max-width: 480px) {
          nav .btn-sm { display: none !important; }
        }
      `}</style>
    </>
  );
}
