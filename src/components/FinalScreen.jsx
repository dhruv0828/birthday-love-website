import { useEffect, useState } from 'react';
import { launchConfetti } from '../utils/animations';

export default function FinalScreen({ reaction }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    launchConfetti();
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="final-screen"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 1.2s ease' }}
    >
      <span style={{
        fontSize: 'clamp(60px, 16vw, 100px)',
        marginBottom: '28px',
        display: 'block',
        filter: 'drop-shadow(0 0 30px rgba(196,99,122,0.9))',
        animation: 'heartbeat 2.4s ease-in-out infinite',
      }}>
        ❤️
      </span>

      <h1 className="final-main-text">
        {reaction === 'crying' ? 'Don\'t cry... ❤️' : 'Happy Birthday, my love.'}
      </h1>

      {reaction === 'crying' && (
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(18px, 4.5vw, 24px)',
          color: 'var(--soft-pink)',
          marginBottom: '16px',
        }}>
          (Okay, maybe cry a little. I don't mind. 🥺)
        </p>
      )}

      <p className="final-sub-text">
        From the person who still can't believe an auto ride brought us here. ❤️
      </p>

      <div style={{
        marginTop: '40px',
        padding: '20px 28px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        backdropFilter: 'blur(12px)',
        maxWidth: '440px',
      }}>
        <p style={{
          fontFamily: 'var(--font-script)',
          fontSize: 'clamp(18px, 4.5vw, 24px)',
          color: 'var(--gold)',
          lineHeight: 1.6,
        }}>
          Here's to you. Always. ✨
        </p>
      </div>
    </div>
  );
}
