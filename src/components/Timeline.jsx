import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { launchFloatingHearts } from '../utils/animations';

const TIMELINE_ITEMS = [
  {
    icon: '👥',
    label: 'Strangers',
    message: (
      <>
        <strong>Two strangers. Nothing more.</strong><br /><br />
        At this point, we were just two people who had no idea the other person existed. Living our separate lives, going through our separate days. No story yet. Just... potential.
      </>
    ),
  },
  {
    icon: '🛺',
    label: 'That Auto Ride',
    message: (
      <>
        <strong>One ordinary ride. One extraordinary beginning.</strong><br /><br />
        An auto. The most unexpectedly significant auto ride of my life. I didn't know it then, but this was the moment everything started. Small beginnings have a way of turning into something much bigger.
      </>
    ),
  },
  {
    icon: '💬',
    label: 'Getting Close',
    message: (
      <>
        <strong>The conversations that never seemed to end.</strong><br /><br />
        We started talking more. Then more after that. Every conversation made me want the next one. You became someone I was genuinely curious about, and that doesn't happen with most people.
      </>
    ),
  },
  {
    icon: '💕',
    label: 'Falling in Love',
    message: (
      <>
        <strong>It happened without any announcement.</strong><br /><br />
        There was no single moment I can point to. It was a hundred small moments that quietly added up to something I hadn't planned for. I just realized one day that you mattered a lot more than I had expected.
      </>
    ),
  },
  {
    icon: '🌟',
    label: 'Beautiful Memories',
    message: (
      <>
        <strong>The moments I still carry with me.</strong><br /><br />
        Laughter that went on too long. Conversations at odd hours. Small things that meant a lot. Two years of memories that I wouldn't trade for anything, even when things got hard.
      </>
    ),
  },
  {
    icon: '⚡',
    label: 'Fights',
    message: (
      <>
        <strong>We weren't always easy on each other.</strong><br /><br />
        There were arguments. There were moments where emotions ran hotter than they should have. Where we both said things we didn't fully mean. The hard moments were real — and they're part of our story too.
      </>
    ),
  },
  {
    icon: '🌧️',
    label: 'Misunderstandings',
    message: (
      <>
        <strong>When we couldn't quite reach each other.</strong><br /><br />
        Sometimes we were talking but not hearing each other. Sometimes the same words meant different things to both of us. It's frustrating when you care about someone and still can't make yourself understood.
      </>
    ),
  },
  {
    icon: '🎢',
    label: 'Ups & Downs',
    message: (
      <>
        <strong>The full, honest, complicated picture.</strong><br /><br />
        Good days and bad days. Weeks where everything was easy and weeks where nothing was. The kind of real-life story that doesn't look like a movie — it looks like two actual human beings figuring things out together.
      </>
    ),
  },
  {
    icon: '❤️',
    label: 'Still Us',
    message: (
      <>
        <strong>And after everything... we're still here.</strong><br /><br />
        Through every fight, every misunderstanding, every difficult stretch — we're still here. That means something. It means a lot, actually. Some things survive everything, and I'm glad we're one of them.
      </>
    ),
  },
];

export default function Timeline() {
  const [active, setActive] = useState(null);
  const titleRef = useScrollReveal(0.1);
  const trackRef = useScrollReveal(0.05);

  const handleClick = (idx) => {
    setActive(prev => prev === idx ? null : idx);
    if (idx === TIMELINE_ITEMS.length - 1) {
      launchFloatingHearts(10);
    }
  };

  return (
    <section className="timeline-section">
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div ref={titleRef} className="fade-up" style={{ textAlign: 'center' }}>
          <h2 className="timeline-title">Two Years.</h2>
          <p className="timeline-subtitle">One Story.</p>
        </div>

        <div ref={trackRef} className="fade-up timeline-scroll" style={{ transitionDelay: '200ms' }}>
          <div className="timeline-track">
            {TIMELINE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`timeline-node ${active === idx ? 'active' : ''}`}
                onClick={() => handleClick(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && handleClick(idx)}
                aria-pressed={active === idx}
              >
                <div className="timeline-dot">{item.icon}</div>
                {idx < TIMELINE_ITEMS.length - 1 && <div className="timeline-connector" />}
                <p className="timeline-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {active !== null && (
          <div
            className="timeline-popup"
            style={{ marginLeft: 'clamp(20px, 6vw, 40px)', marginRight: 'clamp(20px, 6vw, 40px)' }}
          >
            <p className="timeline-popup-text">{TIMELINE_ITEMS[active].message}</p>
          </div>
        )}

        {active === null && (
          <p style={{
            textAlign: 'center',
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(14px, 3.5vw, 16px)',
            color: 'var(--text-muted)',
            marginTop: 28,
          }}>
            ↑ Tap any moment to read about it
          </p>
        )}
      </div>
    </section>
  );
}
