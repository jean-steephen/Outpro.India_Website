import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { FadeInUp } from '../components/ui/Animations';

const contactInfo = [
  { icon: Mail,  label: 'Email Us',      value: 'douajean47@gmail.com',    href: 'mailto:douajean47@gmail.com' },
  { icon: Phone, label: 'Call Us',       value: '+90 404 815 79',           href: 'tel:+9040481579' },
  { icon: MessageCircle, label: 'WhatsApp',  value: '+225 05 06 77 49 13', href: 'https://wa.me/2250506774913' },
  { icon: MapPin,label: 'Visit Us',      value: 'Koramangala, Bangalore — 560034', href: '#' },
  { icon: Clock, label: 'Working Hours', value: 'Mon–Fri, 9 AM – 7 PM IST', href: null },
];

const services = [
  'Web Development', 'Mobile App Development', 'Brand Identity', 'SEO & Marketing',
  'Cloud & DevOps', 'AI & Automation', 'Digital Strategy', 'Data Analytics', 'Other',
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.message.trim() || form.message.length < 20) e.message = 'Please write at least 20 characters';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('loading');
    // Simulate async submit
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', company: '', service: '', message: '' });
    }, 1500);
  };

  const handleChange = (field, val) => {
    setForm(prev => ({ ...prev, [field]: val }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  const inputStyle = (field) => ({
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field] ? 'var(--color-danger)' : 'var(--color-border-light)'}`,
    borderRadius: 'var(--radius-lg)',
    color: 'var(--color-text)',
    fontSize: 'var(--text-base)',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color var(--transition-base)',
  });

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
        <div className="orb orb-primary" style={{ width: 400, height: 400, top: '-15%', right: '5%', opacity: 0.12 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeInUp>
            <div className="section-label">Get In Touch</div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}>
              Let's Build Something <span className="text-gradient">Remarkable</span>
            </h1>
            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--color-text-muted)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.75,
            }}>
              Have a project in mind? We'd love to hear about it. Send us a message and we'll get back within 24 hours.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section" style={{ background: 'var(--color-bg-2)', borderTop: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.8fr',
            gap: '64px',
            alignItems: 'start',
          }} className="contact-grid">

            {/* Left — Info */}
            <FadeInUp>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: '16px' }}>
                  Contact <span className="text-gradient">Information</span>
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '40px' }}>
                  We're here to help. Reach out through any of these channels or fill out the form.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} style={{
                      display: 'flex',
                      gap: '16px',
                      padding: '20px',
                      background: 'var(--gradient-card)',
                      border: '1px solid var(--color-border-light)',
                      borderRadius: 'var(--radius-lg)',
                      transition: 'border-color var(--transition-base)',
                    }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border-light)'}
                    >
                      <div style={{
                        width: 44,
                        height: 44,
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(79,110,247,0.12)',
                        border: '1px solid rgba(79,110,247,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Icon size={18} color="var(--color-primary)" />
                      </div>
                      <div>
                        <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                          {label}
                        </div>
                        {href ? (
                          <a href={href} style={{ color: 'var(--color-text)', fontWeight: 600, fontSize: 'var(--text-sm)', textDecoration: 'none' }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text)'}
                          >
                            {value}
                          </a>
                        ) : (
                          <span style={{ color: 'var(--color-text)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Response promise */}
                <div style={{
                  padding: '20px',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: 'var(--radius-lg)',
                }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <CheckCircle size={18} color="var(--color-success)" />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--color-success)' }}>Response Guarantee</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: '2px' }}>We respond to all inquiries within 24 hours on business days.</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Right — Form */}
            <FadeInUp delay={100}>
              <div style={{
                background: 'var(--gradient-card)',
                border: '1px solid var(--color-border-light)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'clamp(28px, 5vw, 48px)',
              }}>
                {status === 'success' ? (
                  <div style={{ textAlign: 'center', padding: '48px 0' }}>
                    <div style={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: 'rgba(16,185,129,0.15)',
                      border: '2px solid rgba(16,185,129,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px',
                    }}>
                      <CheckCircle size={36} color="var(--color-success)" />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: '12px' }}>
                      Message Sent!
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '28px' }}>
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button onClick={() => setStatus(null)} className="btn btn-outline">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: '28px' }}>
                      Send a Message
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-grid">
                      <div>
                        <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: '8px', color: 'var(--color-text-muted)' }}>
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="Rahul Verma"
                          value={form.name}
                          onChange={e => handleChange('name', e.target.value)}
                          style={inputStyle('name')}
                          onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                          onBlur={e => e.target.style.borderColor = errors.name ? 'var(--color-danger)' : 'var(--color-border-light)'}
                        />
                        {errors.name && <p style={{ color: 'var(--color-danger)', fontSize: 'var(--text-xs)', marginTop: '4px' }}>{errors.name}</p>}
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: '8px', color: 'var(--color-text-muted)' }}>
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="rahul@company.com"
                          value={form.email}
                          onChange={e => handleChange('email', e.target.value)}
                          style={inputStyle('email')}
                          onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                          onBlur={e => e.target.style.borderColor = errors.email ? 'var(--color-danger)' : 'var(--color-border-light)'}
                        />
                        {errors.email && <p style={{ color: 'var(--color-danger)', fontSize: 'var(--text-xs)', marginTop: '4px' }}>{errors.email}</p>}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-grid">
                      <div>
                        <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: '8px', color: 'var(--color-text-muted)' }}>
                          Company
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          placeholder="Your Company"
                          value={form.company}
                          onChange={e => handleChange('company', e.target.value)}
                          style={inputStyle('company')}
                          onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                          onBlur={e => e.target.style.borderColor = 'var(--color-border-light)'}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: '8px', color: 'var(--color-text-muted)' }}>
                          Service Needed
                        </label>
                        <select
                          id="contact-service"
                          value={form.service}
                          onChange={e => handleChange('service', e.target.value)}
                          style={{ ...inputStyle('service'), cursor: 'pointer' }}
                          onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                          onBlur={e => e.target.style.borderColor = 'var(--color-border-light)'}
                        >
                          <option value="" style={{ background: '#111827' }}>Select a service</option>
                          {services.map(s => <option key={s} value={s} style={{ background: '#111827' }}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: '8px', color: 'var(--color-text-muted)' }}>
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        placeholder="Tell us about your project, goals, and timeline..."
                        value={form.message}
                        onChange={e => handleChange('message', e.target.value)}
                        style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '120px' }}
                        onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                        onBlur={e => e.target.style.borderColor = errors.message ? 'var(--color-danger)' : 'var(--color-border-light)'}
                      />
                      {errors.message && <p style={{ color: 'var(--color-danger)', fontSize: 'var(--text-xs)', marginTop: '4px' }}>{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={status === 'loading'}
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        fontSize: 'var(--text-base)',
                        padding: '16px 24px',
                        opacity: status === 'loading' ? 0.7 : 1,
                      }}
                    >
                      {status === 'loading' ? (
                        <>Sending...</>
                      ) : (
                        <><Send size={16} /> Send Message</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeInUp>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 600px) { .form-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </main>
  );
}
