// src/components/AudioPlayer.js
import React, { useRef, useEffect } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch((error) => {
        console.error('Audio playback failed:', error);
      });
    }
  }, []);

  return (
    <audio id="backgroundMusic" ref={audioRef} loop>
      <source src="/assets/music.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;