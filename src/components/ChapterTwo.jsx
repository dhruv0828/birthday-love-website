import useScrollReveal from '../hooks/useScrollReveal';

function RevealBlock({ children, delay = 0, className = '' }) {
  const ref = useScrollReveal(0.1);
  return (
    <div ref={ref} className={`fade-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
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

export default function ChapterTwo() {
  return (
    <section className="story-section">
      <div className="section-container">
        <RevealBlock delay={0}>
          <span className="chapter-label">Chapter 02</span>
          <h2 className="chapter-heading">Two Years of Us</h2>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            Two years sounds like a lot until you actually try to put it into words — and then it feels like you need a hundred more pages just to scratch the surface. Because it's not just about the time that passed. It's about everything that happened inside that time. The conversations that stretched past midnight. The moments that made you laugh so hard nothing came out. The quiet evenings when neither of us was saying much but somehow it still felt comfortable, like silence between us was never awkward.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            In the beginning, there was this excitement that comes with getting to know someone new. You're learning everything — how they think, what makes them light up, what they're like when they're tired or frustrated or in a really good mood. And with you, that process was something I genuinely enjoyed. Not just the good stuff, but all of it. Getting to understand you was never something that felt like work.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            I remember how we started spending more and more time talking. There were conversations about everything and nothing — big things like life and what we wanted from it, and small things that somehow felt just as important in the moment. I remember the way you'd say something and I'd find myself thinking <em>yeah, exactly like that</em>. That feeling when someone gets it without you having to over-explain yourself. That's a rare thing, and we had a lot of it.
          </p>
        </RevealBlock>

        <RevealBlock delay={150}>
          <div className="quote-highlight">
            There's a version of getting close to someone where it happens slowly, steadily, almost without you noticing. That's how it was with us.
          </div>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            There are small things I remember that you might not even realize stayed with me. The way you'd talk about things you cared about — there was this energy to it that was hard to ignore. The way something small could make you genuinely happy. The way you'd get quiet when something was bothering you, and how I slowly got better at reading when that was happening. You became someone I could tell things to, and that mattered more than I ever said out loud.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            Over time, we got used to each other. And I mean "used to" in the way that's actually a good thing — where you stop trying to impress and start just being honest. Where you can say something dumb and it's fine. Where you can have a bad day and the other person doesn't need a detailed explanation, they just sort of know. That kind of closeness isn't something you can force. It just builds, quietly, day by day.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            We laughed a lot. I want to say that clearly because sometimes when you write about relationships, it ends up sounding all serious and heavy. But there was so much laughter. Stupid things, random conversations that went somewhere neither of us expected, moments where something caught us off guard and we couldn't stop. Those moments matter. They're the ones that make everything feel light, even when other parts of life aren't.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            And then there were the times when things weren't light. When one of us was going through something difficult. When the world felt heavy and you just needed someone to be there. I hope I was there for you in those moments. I hope that even when I didn't say exactly the right thing, you knew that I was trying to. Because that's one of the things that changed with time — I started caring a lot about how you were doing. Not just in passing, but genuinely. Your hard days felt heavy to me too.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            We also missed each other. That might sound obvious, but I think it's worth saying — because the fact that someone's absence is noticeable means their presence actually meant something. There were days where something would happen and the first thing I wanted to do was tell you. That's how people become part of your life. They stop being someone you talk to and start being someone you think of automatically, out of habit, out of want.
          </p>
        </RevealBlock>

        <RevealBlock delay={150}>
          <div className="quote-highlight">
            You became someone I thought of automatically. Not because I forced myself to — just because that's where my mind went.
          </div>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            But two years also means two years of reality. Two years of being human beings with our own moods, our own bad days, our own moments of being difficult or unfair or just plain stubborn. And our story had those too. It would be dishonest to pretend otherwise. We weren't always perfectly in sync. We weren't always easy on each other. Sometimes things got complicated — not because either of us wanted them to be, but because that's just what happens when two people are genuinely, messy, humanly close.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            There were fights. Arguments that started over things that seemed small but grew into something bigger. Moments of frustration where we said things we didn't really mean. Times where we were both right and both wrong at the same time, which is the most annoying combination. Moments where we went quiet and the silence felt very different from the comfortable kind.
          </p>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            I'm not writing this to pretend those moments didn't happen, or to make them sound romantic in some way. They weren't romantic. They were hard. They were the kind of moments where you wonder if you're handling things right, if you said too much or not enough, if the other person actually understood what you meant. And sometimes, I definitely didn't handle things the way I should have.
          </p>
        </RevealBlock>

        <RevealBlock delay={150}>
          <div className="quote-highlight">
            Maybe that's what makes our story ours. It wasn't perfect. We weren't perfect. Sometimes we understood each other without saying anything. And sometimes we couldn't understand each other even after saying everything.
          </div>
        </RevealBlock>

        <RevealBlock delay={100}>
          <p className="story-text">
            But even through all of it, even through the hard parts and the complicated parts — I kept coming back. And so did you. And that, I think, says something. That's two years in the most honest way I can describe them: messy and beautiful and real, all at the same time.
          </p>
        </RevealBlock>

        <Divider />
      </div>
    </section>
  );
}
