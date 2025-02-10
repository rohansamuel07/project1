import React, { useEffect, useRef } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.play();
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/assets/music.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;