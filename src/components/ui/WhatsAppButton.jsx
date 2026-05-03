import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '2250506774913';
const WHATSAPP_MESSAGE = "Bonjour ! J'ai visité le site Outpro.India et je voudrais en savoir plus sur vos services. 😊";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      {/* Tooltip bubble */}
      {showTooltip && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '24px',
          zIndex: 9998,
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border-light)',
          borderRadius: 'var(--radius-xl)',
          padding: '12px 16px',
          maxWidth: '220px',
          boxShadow: 'var(--shadow-lg)',
          animation: 'fadeInUp 0.4s ease both',
        }}>
          <button
            onClick={() => setShowTooltip(false)}
            style={{
              position: 'absolute',
              top: '6px',
              right: '8px',
              background: 'none',
              border: 'none',
              color: 'var(--color-text-muted)',
              cursor: 'pointer',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={12} />
          </button>
          <p style={{
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.5,
            marginRight: '12px',
          }}>
            💬 Une question ? Chattez avec nous sur <strong style={{ color: '#25D366' }}>WhatsApp</strong> !
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          width: 58,
          height: 58,
          borderRadius: '50%',
          background: hovered
            ? 'linear-gradient(135deg, #1DA851, #128C7E)'
            : '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: hovered
            ? '0 8px 32px rgba(37,211,102,0.5)'
            : '0 4px 20px rgba(37,211,102,0.35)',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: hovered ? 'scale(1.12) translateY(-2px)' : 'scale(1)',
          textDecoration: 'none',
        }}
      >
        <MessageCircle
          size={28}
          color="#fff"
          style={{ fill: '#fff' }}
        />

        {/* Ping animation */}
        <span style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid #25D366',
          animation: 'wa-ping 2s ease-in-out infinite',
          opacity: 0,
        }} />
      </a>

      <style>{`
        @keyframes wa-ping {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </>
  );
}
