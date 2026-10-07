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

export default function ChapterFour() {
  return (
    <section className="story-section">
      <div className="section-container">
        <RevealBlock delay={0}>
          <span className="chapter-label">Chapter 04</span>
          <h2 className="chapter-heading">What I Never Stop Feeling</h2>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            No matter how many fights we've had, no matter how many times things got complicated, no matter how many moments where either of us pulled away or said the wrong thing — I always loved you. That's not something I say lightly. And it's not something that came and went with the easy moments. It was there in the hard ones too. It was there even when I was bad at showing it.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            There's something I've come to understand about love over these two years — it's not actually something that only shows up on the good days. Anybody can feel love when everything is easy and nothing hurts and the two of you are laughing and the world feels fine. That's the easy version. But love also shows up when things are difficult. When you're frustrated and confused and the last thing you want to do is be patient, but you choose it anyway. When you've had a bad conversation and you're still thinking about the other person, still caring about how they're doing, still wanting things to be okay between you. That's where love is most visible.
          </p>
        </RevealBlock>

        <RevealBlock delay={150}>
          <div className="quote-highlight">
            And I think that's what I know for certain about us — that my feelings for you never really depended on whether things were easy. They were there either way.
          </div>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            After two years, you're not just someone I met anymore. You became someone whose presence became part of how I experience my days. I notice when you seem off. I think about things I want to tell you. When something happens — something funny, something frustrating, something strange — I think about what you'd say about it. That kind of thing doesn't happen with most people. It happens with the ones who actually matter.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            I think about your voice — the way you explain things you care about, the way you get animated when something is exciting, the way you go quiet sometimes in a way that says more than words would. I think about conversations we've had that stayed with me long after they ended. Small moments that probably felt ordinary at the time but that I still remember clearly. The way your mood can shift from one thing to another and I've somehow learned, over time, to read which version of it I'm seeing.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            You are deeply important to me. Not because things have always been easy between us — they haven't. But because when I really, honestly think about what the last two years have meant to me, you're at the center of it. Your presence in my life isn't a small thing. It's one of the significant ones. And no amount of fights or complications or difficult phases changed that. Not once.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            I also want to say this: I'm not perfect at loving someone. I know that. I get it wrong sometimes. I get in my own head, I handle things badly, I say things that come out differently than I meant them. But the feeling itself — the actual caring, the actual love — that was always there. Even when I was bad at showing it. Even when I let things get complicated. Even when I should have done better and didn't.
          </p>
        </RevealBlock>

        <RevealBlock delay={150}>
          <div className="quote-highlight">
            I didn't stop loving you through any of it. That's the most honest thing I can say.
          </div>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            And I'm writing this today, on your birthday, because I wanted you to know that. Not in a passing way. In a real, considered, I-sat-down-and-thought-about-this way. You deserve to know that the person you've spent two years with — through the good days and the hard ones, through the laughter and the fights, through everything — that person never stopped caring about you. Not for a second.
          </p>
        </RevealBlock>

        <Divider />
      </div>
    </section>
  );
}
