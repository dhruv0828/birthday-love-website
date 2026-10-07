import useScrollReveal from '../hooks/useScrollReveal';

function RevealBlock({ children, delay = 0, className = '' }) {
  const ref = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`fade-up ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
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

export default function ChapterOne() {
  return (
    <section className="story-section">
      <div className="section-container">
        <RevealBlock delay={0}>
          <span className="chapter-label">Chapter 01</span>
          <h2 className="chapter-heading">The Most Unexpected Beginning</h2>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            I've thought about this a lot, and I still find it a little crazy when I actually sit down and think about how it started. An auto ride. That's it. That's how our story begins. Not some grand meeting, not some dramatic moment — just two people in the same auto, going somewhere, probably not thinking much about anything beyond where they needed to be.
          </p>
        </RevealBlock>

        <RevealBlock delay={150}>
          <p className="story-text">
            And yet, that ordinary, completely unremarkable moment somehow turned into this. Into two years. Into late-night conversations that went on for hours. Into someone who started meaning more and more with every passing day. It's the kind of thing that, if you tried to explain it to someone, would sound almost too simple. <em>"We met on an auto."</em> But there's a whole story behind that sentence.
          </p>
        </RevealBlock>

        <RevealBlock delay={200}>
          <p className="story-text">
            At that point, we were strangers. Complete strangers. I mean, we didn't know each other at all — not what the other person was like, not what they cared about, not how they thought about things, nothing. There was no reason to think that this auto ride would be anything more than just that. Most of the time, that's exactly what it is — you share a ride with someone, you get to your destination, and that's it. Life moves on and you forget about it within the hour.
          </p>
        </RevealBlock>

        <RevealBlock delay={200}>
          <div className="quote-highlight">
            But this one didn't end there. And somehow, I'm really glad it didn't.
          </div>
        </RevealBlock>

        <RevealBlock delay={150}>
          <p className="story-text">
            I don't know exactly how things shifted from "people who happened to be in the same auto" to "people who started talking." But they did. Slowly, and then all at once, the way most things that matter seem to happen. There was something about the conversations we started having. They weren't forced. They weren't awkward in the usual way. It just felt... easy, in a way that's actually kind of rare with people you've just met.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            When two people start getting close, there's usually this period where you're still figuring out who the other person actually is. You hear them talk about things they care about. You notice small things — the way they phrase something, the things they laugh at, the things they get quiet about. And somewhere in the middle of all of that, without either of you really planning it, you start looking forward to talking to them. You start genuinely caring about what they have to say.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            That's what happened with us. We went from being strangers to being people who talked every day, people who started to become a consistent part of each other's lives. From one auto ride to something that would take up years of my life — and I mean that in the best possible way. Some things just quietly sneak up on you, and before you know it, they've become important in ways you didn't expect.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            Looking back, I think about how easy it would have been for that moment to just be nothing. For us to have gone our separate ways and never thought about it again. And it genuinely surprises me sometimes, that we didn't. That instead, something started there that turned into everything I'm writing about right now.
          </p>
        </RevealBlock>

        <Divider />
      </div>
    </section>
  );
}
