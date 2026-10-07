import { useEffect, useRef, useState } from 'react';
import config from '../config';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hasFile, setHasFile] = useState(false);

  useEffect(() => {
    if (config.MUSIC_FILE) {
      setHasFile(true);
      const audio = new Audio(config.MUSIC_FILE);
      audio.loop = true;
      audio.volume = 0.35;
      audioRef.current = audio;
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  if (!hasFile) return null;

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
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
