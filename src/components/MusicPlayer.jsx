import { useEffect, useRef, useState } from 'react';
import config from '../config';

const BASE = import.meta.env.BASE_URL;

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hasFile, setHasFile] = useState(false);

  useEffect(() => {
    if (!config.MUSIC_FILE) return; // no music configured — show nothing

    const src = `${BASE}${config.MUSIC_FILE.replace(/^\//, '')}`;
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;
    setHasFile(true);

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  if (!hasFile) return null;

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play()
        .then(() => setPlaying(true))
        .catch(() => {
          // Browser blocked autoplay — user must interact first; just ignore
        });
    }
  };

  return (
    <button
      className={`music-btn ${playing ? 'playing' : ''}`}
      onClick={toggle}
      aria-label={playing ? 'Pause music' : 'Play music'}
      title={playing ? 'Pause music' : 'Play our song ♪'}
    >
      {playing ? '♪' : '♩'}
    </button>
  );
}
