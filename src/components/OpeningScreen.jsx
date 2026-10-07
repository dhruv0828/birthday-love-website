import { useState, useEffect } from 'react';
import { launchFloatingHearts } from '../utils/animations';

const NO_RESPONSES = [
  {
    icon: '🥺',
    heading: "Are you sure?",
    sub: "Because I didn't write this for just anyone... I wrote it for you. Specifically, only for you.",
    btn1: "Okay, I'll read it ❤️",
    btn2: "Still no 😭",
  },
  {
    icon: '😭',
    heading: "Okay... I'll pretend I'm not hurt.",
    sub: "I spent so much time on this. It's fine. I'm fine. Everything is totally fine.",
    btn1: "Okay okay, show me ❤️",
    btn2: "Still not ready 😅",
  },
  {
    icon: '😂❤️',
    heading: "You really clicked no again?",
    sub: "After everything we've been through... you're really going to do this to me right now?",
    btn1: "Okay I give in ❤️",
    btn2: "One more time 🙈",
  },
  {
    icon: '🤦',
    heading: "Fine. I'll just be waiting right here.",
    sub: "No pressure. Take your time. I'm just going to sit here and dramatically stare at the wall.",
    btn1: "Okay I'm sorry, let me read ❤️",
    btn2: "Nope 😭",
  },
  {
    icon: '💔',
    heading: "You know what? That's okay.",
    sub: "I'll just read it to myself. Out loud. Very dramatically. By myself.",
    btn1: "OKAY OKAY, I'll read it! ❤️",
    btn2: "...okay fine 🙈",
  },
];

export default function OpeningScreen({ onYes }) {
  const [phase, setPhase] = useState('intro'); // intro | no | confirm
  const [noCount, setNoCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleYes = () => {
    launchFloatingHearts(8);
    setPhase('confirm');
  };

  const handleNo = () => {
    setNoCount(prev => prev + 1);
    setPhase('no');
  };

  const handleConfirmYes = () => {
    launchFloatingHearts(12);
    onYes();
  };

  const handleScared = () => {
    setPhase('scared');
  };

  const noData = NO_RESPONSES[Math.min(noCount, NO_RESPONSES.length - 1)];

  if (phase === 'intro') {
    return (
      <div className="fullscreen-section" style={{ opacity: visible ? 1 : 0, transition: 'opacity 1.2s ease' }}>
        <div style={{ maxWidth: 620 }}>
          <p className="opening-small-text fade-up" style={{ animationDelay: '0.3s', opacity: visible ? 0.7 : 0, transition: 'opacity 1.2s ease 0.4s' }}>
            Before you see what's inside...
          </p>
          <h1 className="opening-heading" style={{ opacity: visible ? 1 : 0, transition: 'opacity 1.2s ease 0.8s', transform: visible ? 'translateY(0)' : 'translateY(20px)' }}>
            I wrote something<br />for you.
          </h1>
          <p className="opening-sub" style={{ opacity: visible ? 1 : 0, transition: 'opacity 1.2s ease 1.2s' }}>
            Not just a birthday wish. Not just a few lines. I wrote about <em style={{color:'var(--soft-pink)'}}>us</em>... about how two people who met in the most unexpected way somehow became such an important part of each other's lives.
          </p>
          <p className="opening-question" style={{ opacity: visible ? 1 : 0, transition: 'opacity 1.2s ease 1.6s' }}>
            Do you want to read what I've written for you?
          </p>
          <div className="opening-buttons" style={{ margin: '0 auto', opacity: visible ? 1 : 0, transition: 'opacity 1.2s ease 2s' }}>
            <button className="btn btn-primary" onClick={handleYes}>
              ❤️ YES, I WANT TO READ IT
            </button>
            <button className="btn btn-secondary" onClick={handleNo}>
              🤍 NO, I'M NOT READY
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'no') {
    return (
      <div className="fullscreen-section" style={{ animation: 'fadeInUp 0.7s ease forwards' }}>
        <style>{`@keyframes fadeInUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }`}</style>
        <div style={{ maxWidth: 560 }}>
          <div className="no-screen-icon">{noData.icon}</div>
          <h2 className="no-heading">{noData.heading}</h2>
          <p className="no-sub">{noData.sub}</p>
          <div className="opening-buttons" style={{ margin: '0 auto' }}>
            <button className="btn btn-primary" onClick={handleConfirmYes}>{noData.btn1}</button>
            <button className="btn btn-secondary" onClick={handleNo}>{noData.btn2}</button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'confirm') {
    return (
      <div className="fullscreen-section" style={{ animation: 'fadeInUp 0.7s ease forwards' }}>
        <style>{`@keyframes fadeInUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }`}</style>
        <div style={{ maxWidth: 580 }}>
          <p className="confirm-wait">Wait...</p>
          <h2 className="confirm-heading">Are you <em>really</em> sure<br />you want to see it?</h2>
          <p className="confirm-text">
            Because once you start reading, you're going to have to go through two years of our story... every memory, every moment, every feeling I never quite managed to say out loud.
          </p>
          <div className="opening-buttons" style={{ margin: '0 auto' }}>
            <button className="btn btn-primary" onClick={handleConfirmYes}>YES, SHOW ME ❤️</button>
            <button className="btn btn-secondary" onClick={handleScared}>I'M SCARED 😭</button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'scared') {
    return (
      <div className="fullscreen-section" style={{ animation: 'fadeInUp 0.7s ease forwards' }}>
        <style>{`@keyframes fadeInUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }`}</style>
        <div style={{ maxWidth: 560 }}>
          <div className="no-screen-icon" style={{ animation: 'none' }}>🤍</div>
          <h2 className="no-heading">That's okay...</h2>
          <p className="no-sub" style={{ marginBottom: 12 }}>Our story wasn't always perfect either.</p>
          <p className="no-sub" style={{ color: 'var(--soft-pink)', fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px, 4.5vw, 24px)' }}>
            But somehow, you still became my favorite part of it.
          </p>
          <div className="opening-buttons" style={{ margin: '32px auto 0' }}>
            <button className="btn btn-primary" onClick={handleConfirmYes}>Okay... show me ❤️</button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
