import { useEffect, useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const LINES = [
  { text: "I don't know what the future will look like.", isFinal: false },
  { text: "I don't know how many more arguments we'll have.", isFinal: false },
  { text: "I don't know how many more memories we'll create.", isFinal: false },
  { text: "But I know one thing...", isFinal: false, isBreak: true },
  { text: "I have loved you through the good days.", isFinal: false },
  { text: "I have loved you through the bad days.", isFinal: false },
  { text: "I have loved you when everything felt easy.", isFinal: false },
  { text: "And I have loved you when everything felt difficult.", isFinal: false },
  { text: "Through every misunderstanding.", isFinal: false },
  { text: "Through every fight.", isFinal: false },
  { text: "Through every up and down.", isFinal: false },
  { text: "I still love you.", isFinal: false, isBreak: true },
  { text: "I ALWAYS LOVED YOU. ❤️", isFinal: true },
];

function RevealLine({ text, isFinal, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <p
      ref={ref}
      className={`reveal-line ${visible ? 'visible' : ''} ${isFinal ? 'final-line' : ''}`}
    >
      {text}
    </p>
  );
}

export default function OneThing() {
  const headerRef = useScrollReveal(0.1);
  const heartRef = useScrollReveal(0.1);

  return (
    <section className="one-thing-section">
      <div ref={heartRef} className="fade-up">
        <span className="glowing-heart">❤️</span>
      </div>

      <div ref={headerRef} className="fade-up" style={{ transitionDelay: '100ms' }}>
        <h2 className="one-thing-heading">If I Could Tell You Only One Thing...</h2>
      </div>

      <div className="reveal-lines">
        {LINES.map((line, idx) => (
          <div key={idx} style={{ marginTop: line.isBreak ? '28px' : 0 }}>
            <RevealLine
              text={line.text}
              isFinal={line.isFinal}
              delay={idx * 80}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
