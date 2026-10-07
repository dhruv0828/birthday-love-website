import useScrollReveal from '../hooks/useScrollReveal';

function RevealBlock({ children, delay = 0 }) {
  const ref = useScrollReveal(0.1);
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

export default function ChapterThree() {
  return (
    <section className="story-section">
      <div className="section-container">
        <RevealBlock delay={0}>
          <span className="chapter-label">Chapter 03</span>
          <h2 className="chapter-heading">We Were Never Perfect</h2>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            I want to talk about the hard parts. Not to dwell on them, and not to make them sound like some beautiful, meaningful thing they weren't — because honestly, difficult moments in a relationship aren't poetic while you're inside them. They're just difficult. But I also don't want to skip over them, because they're part of our story too. Probably one of the most honest parts.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            We had fights. Some that started over things so small I couldn't even fully reconstruct them if I tried. You know the kind — where something minor gets said, or something gets misread, and suddenly you're both caught up in something that has nothing to do with the original thing anymore. Where the real issue isn't even what you're arguing about, it's something underneath it that neither of you is saying directly. Those ones are the tiring kind.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            There were misunderstandings. A lot of them, actually. Places where I said something and you heard it differently than I meant it. Places where you said something and I read it wrong. Moments where we were both trying to explain ourselves and somehow still ending up more confused. It's frustrating, and I think both of us felt that frustration — that feeling of <em>I'm right here, why does it feel so hard to reach you?</em>
          </p>
        </RevealBlock>

        <RevealBlock delay={150}>
          <div className="quote-highlight">
            There were moments where we both said things we didn't mean. Where emotions got louder than words. Where being right felt more important than being kind — and that's not something I'm proud of.
          </div>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            There were times when one of us needed space. When things felt too heavy and pulling away seemed easier than working through it. When the silence between us wasn't comfortable anymore — it was loaded, and both of us knew it but neither of us wanted to be the one to break it. Those stretches felt long, even when they weren't. Distance, even small distance, has a way of feeling bigger than it is when you care about someone.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            I also want to be honest about this: there were times I handled things badly. Times where I said something that came out harsher than I meant, or stayed quiet when I should have spoken up, or let things fester when I should have addressed them earlier. Nobody handles every moment in a relationship perfectly, and I was no exception. I think you know that. I think we both know that about each other.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            And there were times when things felt genuinely uncertain. When the weight of everything that had built up — the unsaid things, the unresolved things — made everything feel a little shaky. When you wonder if you're doing this right, if things can find their way back to good from wherever they've drifted to. Those moments are heavy. They're the kind that stay with you even after everything settles.
          </p>
        </RevealBlock>

        <RevealBlock delay={150}>
          <div className="quote-highlight">
            I don't want to remember our relationship only through the perfect moments. I want to remember all of it. The good, the bad, the stupid fights, the apologies that came after. The silence, the laughter that broke the silence. The moments where we hurt each other and then found our way back anyway.
          </div>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            Because here's the thing — the difficult moments are also where you learn things about someone. You learn how they handle being upset. You learn what they look like when they're really hurt, not just mildly annoyed. You learn what things matter most to them, because those are the things they fight for. You learn whether they come back. And you both did. Every time.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            None of the fights were the end of the story. None of the hard phases erased what came before them, or what came after. And I think that's what matters most — not that we never struggled, but that struggling didn't make us stop. It made things complicated sometimes. It made things hard. But it didn't make us done.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            I want you to know that I hold the difficult parts of our story with the same care as the good ones. Not because they were enjoyable — they weren't. But because they're real. And anything real deserves to be seen clearly, not just through the parts that are easy to look at.
          </p>
        </RevealBlock>

        <Divider />
      </div>
    </section>
  );
}
