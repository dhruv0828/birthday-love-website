import useScrollReveal from '../hooks/useScrollReveal';

function RevealBlock({ children, delay = 0 }) {
  const ref = useScrollReveal(0.08);
  return (
    <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function FinalLetter({ onReaction }) {
  return (
    <section style={{ padding: 'var(--section-padding) clamp(20px, 6vw, 40px)' }}>
      <div className="section-container">
        <RevealBlock delay={0}>
          <div className="letter-card">
            <h2 className="letter-heading">One Last Thing...</h2>

            <p className="letter-text">
              We met on an auto. I've said that a few times now, and I'll probably keep coming back to it because it genuinely still surprises me. I never knew that one completely ordinary moment would lead me to all of this — to two years of knowing you, of caring about you, of everything that's happened between us.
            </p>

            <p className="letter-text">
              Two years later, we've experienced happiness and fights and misunderstandings and laughter and silence and closeness and distance and so many emotions in between — things I don't even have single words for. The full, complicated, human experience of actually knowing someone and letting them matter to you.
            </p>

            <p className="letter-text">
              Maybe our story isn't perfect. But it's ours. And it's real in a way that matters more to me than a perfect story would.
            </p>

            <p className="letter-text">
              And no matter how many ups and downs we've had — and there have been both — I never stopped loving you. Not once. Not through any of it. That's the thing I most wanted you to know today, on your birthday, when I had the chance to actually say it properly.
            </p>

            <div style={{ height: '20px' }} />

            <p className="letter-text" style={{ color: 'var(--soft-pink)', fontStyle: 'italic' }}>
              <strong style={{ color: 'var(--warm-white)', fontStyle: 'normal' }}>Happy Birthday. ❤️</strong>
            </p>

            <p className="letter-text">
              Thank you for being a part of my life. Thank you for every memory — the beautiful ones and the difficult ones, because both of them made our story what it is. Thank you for every laugh. Thank you for every conversation that went too long and every moment that I still think about. Thank you even for the hard times, because they became part of something real.
            </p>

            <p className="letter-text">
              Two years down...
            </p>

            <p className="letter-text">
              And I'll always be grateful that our story started with something as simple as an auto ride.
            </p>

            <span className="letter-closing">I love you. ❤️</span>
          </div>
        </RevealBlock>

        {/* Reaction */}
        <RevealBlock delay={200}>
          <div className="reaction-section" style={{ padding: 'clamp(40px, 8vw, 72px) 0 0' }}>
            <p className="reaction-question">Did you like your little birthday surprise? ❤️</p>
            <div className="reaction-buttons">
              <button className="btn btn-primary" onClick={() => onReaction('yes')}>
                YES ❤️
              </button>
              <button className="btn btn-ghost" onClick={() => onReaction('crying')}>
                YES, BUT I'M CRYING 😭
              </button>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
