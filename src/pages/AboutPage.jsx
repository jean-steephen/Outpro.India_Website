import { FadeInUp, AnimatedCounter } from '../components/ui/Animations';
import { team, stats } from '../data/team';
import CTAStrip from '../components/sections/CTAStrip';
import { Heart, Eye, Users, Award, Globe2, MessageSquare, Target, Lightbulb, Shield } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Results-First',
    desc: 'Every decision is driven by impact. We measure success by your growth, not just deliverables.',
    color: '#4F6EF7',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'We stay at the cutting edge, constantly exploring new technologies to give you a competitive advantage.',
    color: '#00D4FF',
  },
  {
    icon: Shield,
    title: 'Transparency',
    desc: 'Honest communication, realistic timelines, and no hidden costs. You always know where your project stands.',
    color: '#10B981',
  },
  {
    icon: Heart,
    title: 'Partnership',
    desc: "We don't just deliver projects — we build long-term relationships rooted in trust and shared success.",
    color: '#7C3AED',
  },
];

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 'var(--navbar-height)' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 0 100px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-bg)',
      }}>
        <div className="orb orb-primary" style={{ width: 500, height: 500, top: '-20%', right: '-10%', opacity: 0.15 }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(79,110,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(79,110,247,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeInUp>
            <div style={{ maxWidth: '760px' }}>
              <div className="section-label">About Outpro.India</div>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '24px',
              }}>
                We Are <span className="text-gradient">Digital Builders</span><br />
                Driven by Purpose
              </h1>
              <p style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--color-text-muted)',
                lineHeight: 1.75,
                maxWidth: '620px',
              }}>
                Founded in 2016, Outpro.India has been at the forefront of India's digital transformation — helping businesses of all sizes build powerful, scalable digital products that drive real results.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: 'var(--color-bg-2)', borderTop: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }} className="story-grid">
            <FadeInUp>
              <div>
                <div className="section-label">Our Story</div>
                <h2 className="section-title">From a Small Team to <span className="text-gradient">India's Premier Digital Agency</span></h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
                  What started as a 3-person startup in a co-working space in Bangalore has grown into a 50+ strong team of designers, engineers, strategists, and marketers — all united by one mission: helping businesses win online.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '32px' }}>
                  Over 8 years, we've delivered 150+ projects across industries — from early-stage startups to established enterprises — consistently delivering on time, on budget, and beyond expectations.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {stats.map((stat, i) => (
                    <div key={stat.label} style={{
                      background: 'var(--gradient-card)',
                      border: '1px solid var(--color-border-light)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '20px',
                    }}>
                      <div style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.2rem',
                        fontWeight: 800,
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}>
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </div>
                      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginTop: '4px' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={150}>
              <div style={{
                background: 'var(--gradient-primary)',
                borderRadius: 'var(--radius-2xl)',
                padding: '3px',
              }}>
                <div style={{
                  background: 'var(--color-surface)',
                  borderRadius: 'calc(var(--radius-2xl) - 3px)',
                  padding: '40px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(79,110,247,0.08) 0%, transparent 60%)',
                  }} />
                  {/* Timeline */}
                  {[
                    { year: '2016', event: 'Founded in Bangalore with a team of 3' },
                    { year: '2018', event: 'Expanded to Mobile App Development' },
                    { year: '2020', event: 'Launched AI & Automation services' },
                    { year: '2022', event: 'Crossed 100 projects delivered' },
                    { year: '2024', event: '50+ team members, 5 service verticals' },
                  ].map((item, i, arr) => (
                    <div key={item.year} style={{ display: 'flex', gap: '20px', marginBottom: i < arr.length - 1 ? '28px' : 0 }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          background: 'var(--gradient-primary)',
                          flexShrink: 0,
                          marginTop: '4px',
                          boxShadow: '0 0 8px rgba(79,110,247,0.5)',
                        }} />
                        {i < arr.length - 1 && (
                          <div style={{ width: 1, flex: 1, background: 'var(--color-border)', marginTop: '6px' }} />
                        )}
                      </div>
                      <div style={{ paddingBottom: '8px' }}>
                        <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: 'var(--text-sm)', marginBottom: '4px' }}>
                          {item.year}
                        </div>
                        <div style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                          {item.event}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) { .story-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        `}</style>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <FadeInUp>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="section-label">What Drives Us</div>
              <h2 className="section-title">Mission, Vision & <span className="text-gradient">Values</span></h2>
            </div>
          </FadeInUp>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '48px' }} className="mv-grid">
            {[
              {
                icon: Target,
                label: 'Our Mission',
                title: 'Empowering businesses through digital excellence',
                desc: 'To deliver world-class digital solutions that are accessible, impactful, and built to last — helping every client we work with grow faster and compete stronger.',
                gradient: 'var(--gradient-primary)',
              },
              {
                icon: Eye,
                label: 'Our Vision',
                title: "India's most trusted digital solutions partner",
                desc: 'To become the go-to digital partner for ambitious businesses across India and beyond — known for delivering measurable outcomes, not just beautiful products.',
                gradient: 'var(--gradient-accent)',
              },
            ].map(({ icon: Icon, label, title, desc, gradient }) => (
              <FadeInUp key={label}>
                <div className="glass-card" style={{ padding: '40px' }}>
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: 'var(--radius-lg)',
                    background: gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}>
                    <Icon size={22} color="#fff" />
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '10px' }}>
                    {label}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: '16px' }}>{title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{desc}</p>
                </div>
              </FadeInUp>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }} className="values-grid">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <FadeInUp key={val.title} delay={i * 80}>
                  <div className="glass-card" style={{ padding: '28px 24px', textAlign: 'center' }}>
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: 'var(--radius-lg)',
                      background: val.color + '22',
                      border: `1px solid ${val.color}33`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}>
                      <Icon size={20} color={val.color} />
                    </div>
                    <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>{val.title}</h4>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{val.desc}</p>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) { .mv-grid { grid-template-columns: 1fr !important; } .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 480px) { .values-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Leadership */}
      <section className="section" style={{ background: 'var(--color-bg-2)', borderTop: '1px solid var(--color-border-light)' }} id="team">
        <div className="container">
          <FadeInUp>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="section-label">The Team</div>
              <h2 className="section-title">Meet Our <span className="text-gradient">Leadership</span></h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                A team of passionate problem-solvers, creative thinkers, and experienced builders.
              </p>
            </div>
          </FadeInUp>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }} className="team-grid">
            {team.map((member, i) => (
              <FadeInUp key={member.id} delay={i * 80}>
                <div className="glass-card" style={{ padding: '32px 24px', textAlign: 'center' }}>
                  {/* Avatar */}
                  <div style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${member.color}, ${member.color}88)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    color: '#fff',
                    margin: '0 auto 20px',
                    boxShadow: `0 8px 24px ${member.color}40`,
                  }}>
                    {member.avatar}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 'var(--text-lg)', marginBottom: '4px' }}>{member.name}</h3>
                  <div style={{ fontSize: 'var(--text-sm)', color: member.color, fontWeight: 600, marginBottom: '16px' }}>{member.role}</div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>{member.bio}</p>
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    {[Globe2, MessageSquare].map((Icon, j) => (
                      <a
                        key={j}
                        href={j === 0 ? member.linkedin : member.twitter}
                        style={{
                          width: 34,
                          height: 34,
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
                        onMouseEnter={e => { e.currentTarget.style.background = member.color + '22'; e.currentTarget.style.color = member.color; e.currentTarget.style.borderColor = member.color + '44'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.borderColor = 'var(--color-border-light)'; }}
                      >
                        <Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) { .team-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 500px) { .team-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <CTAStrip />
    </main>
  );
}
