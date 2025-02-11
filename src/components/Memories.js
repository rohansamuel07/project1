// src/components/Memories.js
import React, { useEffect } from 'react';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Memories = ({ onMediaClick }) => {
  const memories = [
    'memory1.jpg', 'memory2.jpg', 'memory3.jpg', 'memory4.jpg',
    'memory5.jpg', 'memory6.jpg', 'memory7.jpg', 'memory8.jpg',
    'memory9.jpg', 'memory10.jpg', 'memory11.jpg', 'memory12.jpg',
    'memory13.jpg', 'memory14.jpg', 'memory15.jpg', 'memory16.jpg',
    'memory17.jpg', 'memory18.jpg', 'memory19.jpg', 'memory20.jpg',
  ];

  const videos = [
    'video1.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4',
    'video5.mp4', 'video6.mp4', 'video7.mp4', 'video8.mp4',
    'video9.mp4', 'video10.mp4'
  ];

  const mediaFiles = shuffleArray([...memories, ...videos]);

  useEffect(() => {
    const audio = document.getElementById('backgroundMusic');
    const savedTime = parseFloat(sessionStorage.getItem('audioTime')) || 0;
    const isPlaying = sessionStorage.getItem('audioPlaying') === 'true';

    if (audio) {
      audio.currentTime = savedTime;
      if (isPlaying) {
        audio.play().catch((error) => {
          console.error('Audio playback failed:', error);
        });
      }
    }
  }, []);

  return (
    <div className="container">
      <h1>I Love You ❤️</h1>
      <div className="gallery">
        {mediaFiles.map((file, index) => {
          const isVideo = file.endsWith('.mp4');
          return isVideo ? (
            <video
              key={index}
              src={`/assets/${file}`}
              autoPlay
              muted // This line was added to mute all videos, preventing them from playing sound automatically.
              loop
              onClick={() => onMediaClick(`/assets/${file}`, 'video')}
            />
          ) : (
            <img
              key={index}
              src={`/assets/${file}`}
              alt={`Memory ${index + 1}`}
              onClick={() => onMediaClick(`/assets/${file}`, 'image')}
            />
          );
        })}
      </div>
      <audio id="backgroundMusic" loop>
        <source src="/assets/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Memories;
