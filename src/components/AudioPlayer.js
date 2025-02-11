// src/components/AudioPlayer.js
import React, { forwardRef, useEffect } from 'react';

const AudioPlayer = forwardRef((props, ref) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.play().catch((error) => console.error('Audio playback failed:', error));
    }
  }, [ref]);

  return (
    <audio ref={ref} loop>
      <source src="/assets/music.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
});

export default AudioPlayer;
