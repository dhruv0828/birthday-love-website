import { useState, useEffect, useRef } from 'react';
import ParticleBackground from './components/ParticleBackground';
import MusicPlayer from './components/MusicPlayer';
import OpeningScreen from './components/OpeningScreen';
import ChapterOne from './components/ChapterOne';
import ChapterTwo from './components/ChapterTwo';
import ChapterThree from './components/ChapterThree';
import ChapterFour from './components/ChapterFour';
import Timeline from './components/Timeline';
import OneThing from './components/OneThing';
import BirthdaySection from './components/BirthdaySection';
import MemoryGallery from './components/MemoryGallery';
import FinalLetter from './components/FinalLetter';
import FinalScreen from './components/FinalScreen';

// App phases
// 'opening' | 'story' | 'final'

export default function App() {
  const [phase, setPhase] = useState('opening');
  const [reaction, setReaction] = useState(null);
  const [storyVisible, setStoryVisible] = useState(false);
  const storyRef = useRef(null);

  const handleOpeningComplete = () => {
    // Fade out opening, fade in story
    setPhase('transitioning');
    setTimeout(() => {
      setPhase('story');
      setStoryVisible(false);
      setTimeout(() => setStoryVisible(true), 50);
    }, 600);
  };

  const handleReaction = (r) => {
    setReaction(r);
    setPhase('final');
    // Scroll to top of final screen
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  return (
    <>
      {/* Fixed background elements */}
      <ParticleBackground />

      {/* Background color orbs */}
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      {/* Music player - always available */}
      <MusicPlayer />

      {/* Main content */}
      <main className="page-wrapper">

        {/* ---- OPENING PHASE ---- */}
        {(phase === 'opening' || phase === 'transitioning') && (
          <div style={{
            opacity: phase === 'transitioning' ? 0 : 1,
            transition: 'opacity 0.6s ease',
          }}>
            <OpeningScreen onYes={handleOpeningComplete} />
          </div>
        )}

        {/* ---- STORY PHASE ---- */}
        {phase === 'story' && (
          <div
            ref={storyRef}
            style={{
              opacity: storyVisible ? 1 : 0,
              transition: 'opacity 1s ease',
            }}
          >
            {/* Story intro banner */}
            <div style={{
              textAlign: 'center',
              padding: 'clamp(60px, 12vw, 100px) clamp(20px, 6vw, 40px) 20px',
            }}>
              <p style={{
                fontFamily: 'var(--font-script)',
                fontSize: 'clamp(18px, 4.5vw, 26px)',
                color: 'var(--gold)',
                opacity: 0.8,
                marginBottom: 12,
              }}>
                Our Story
              </p>
              <h1 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px, 8vw, 60px)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--warm-white)',
                lineHeight: 1.2,
                marginBottom: 16,
              }}>
                Two Years. One Story.
              </h1>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(15px, 3.8vw, 19px)',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                maxWidth: 520,
                margin: '0 auto',
              }}>
                It started with an auto ride. It became something much more.
              </p>
              {/* Scroll indicator */}
              <div style={{ marginTop: 'clamp(40px, 8vw, 60px)', display: 'flex', justifyContent: 'center' }}>
                <div className="scroll-indicator">
                  <span>scroll</span>
                  <div className="scroll-arrow" />
                </div>
              </div>
            </div>

            {/* All story chapters */}
            <ChapterOne />
            <ChapterTwo />
            <ChapterThree />
            <ChapterFour />

            {/* Interactive Timeline */}
            <Timeline />

            {/* Divider before one thing */}
            <div style={{ padding: '0 clamp(20px, 6vw, 40px)' }}>
              <div className="divider" style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
                <div className="divider-line" />
                <span className="divider-heart">❤</span>
                <div className="divider-line" />
              </div>
            </div>

            {/* One Thing section */}
            <OneThing />

            {/* Divider */}
            <div style={{ padding: '0 clamp(20px, 6vw, 40px)' }}>
              <div className="divider" style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
                <div className="divider-line" />
                <span className="divider-heart">❤</span>
                <div className="divider-line" />
              </div>
            </div>

            {/* Birthday message */}
            <BirthdaySection />

            {/* Optional photo gallery */}
            <MemoryGallery />

            {/* Final letter + reaction */}
            <FinalLetter onReaction={handleReaction} />

            {/* Bottom padding */}
            <div style={{ height: 'clamp(40px, 8vw, 80px)' }} />
          </div>
        )}

        {/* ---- FINAL PHASE ---- */}
        {phase === 'final' && (
          <FinalScreen reaction={reaction} />
        )}

      </main>
    </>
  );
}
