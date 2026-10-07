import useScrollReveal from '../hooks/useScrollReveal';
import config from '../config';

function RevealBlock({ children, delay = 0 }) {
  const ref = useScrollReveal(0.08);
  return (
    <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div className="divider">
      <div className="divider-line" />
      <span className="divider-heart">❤</span>
      <div className="divider-line" />
    </div>
  );
}

export default function BirthdaySection() {
  const name = config.GIRLFRIEND_NAME ? `, ${config.GIRLFRIEND_NAME}` : '';

  return (
    <section className="birthday-section">
      <div className="section-container" style={{ textAlign: 'left' }}>
        <RevealBlock delay={0}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 52px)' }}>
            <p className="opening-small-text">Today is your day</p>
            <h2 className="birthday-heading">Happy Birthday{name} ❤️</h2>
            <p className="birthday-script">This one's for you.</p>
          </div>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="birthday-text">
            I want to start this birthday message by saying something that I think a lot of people forget to say — today isn't just about the fact that it's your birthday. It's about celebrating you. The actual person you are. Not just the occasion, but the human being who has been part of my life in a way that I genuinely wouldn't trade.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="birthday-text">
            It still gets me a little when I think about it — that of all the ways a story could begin, ours began on a completely ordinary auto ride. No plan, no dramatic moment, no sign pointing at it saying <em>this is important, pay attention.</em> Just two people going somewhere, and something starting that would go on to mean more than either of us probably could have predicted at the time.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="birthday-text">
            Two years. <strong>Two full years of us.</strong> And when I sit down and actually think about everything those two years contained — the conversations, the laughter, the fights, the hard stretches, the easy ones, the moments where everything felt simple and the moments where nothing did — it's a lot. It's genuinely a lot. And it's a lot that I'm grateful for, even the complicated parts.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="birthday-text">
            On your birthday, I hope you feel happy. Not just on-the-surface happy, but the real kind — the kind that comes from genuinely knowing that you are cared for and important and seen. Because you are. Whatever has happened between us, whatever difficult moments we've had, whatever has been complicated or unresolved — none of that changes the fact that you are someone who matters deeply to me.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="birthday-text">
            I hope this year brings you things that actually make your life better — not just things that look good from the outside, but real things. Peace. The kind where your mind isn't constantly running in twenty directions. Success that comes from things you're actually working toward and care about. Moments that make you feel like yourself. People who show up for you. Days where things just feel okay, which honestly is underrated and genuinely valuable.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="birthday-text">
            I hope you have more days this year where you feel good about yourself. Where you feel capable and clear and like things are moving in a direction that makes sense. I hope you have things to look forward to. I hope the hard things get a little easier, and the good things get a little more frequent.
          </p>
        </RevealBlock>

        <RevealBlock delay={150}>
          <div className="quote-highlight">
            And I hope you know — no matter how our story looks, no matter what the days between us are like — you will always hold a very specific, very real place in my heart. That's not going anywhere.
          </div>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="birthday-text">
            You deserve to be celebrated today. Not just with words, but genuinely, properly. So — happy birthday. From the person who met you on an auto, who would still choose to cross paths with you if given the choice a hundred more times.
          </p>
        </RevealBlock>

        <Divider />
      </div>
    </section>
  );
}
