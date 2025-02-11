// src/components/Memories.js
import React, { useEffect } from 'react';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Memories = () => {
  const mediaFiles = [
    { src: 'memory1.jpg', type: 'image', caption: 'Goofy, crazy, and totally in love! 🤪❤️' },
    { src: 'memory2.jpg', type: 'image', caption: 'Selfie game strong, love even stronger! 📸💕' },
    { src: 'memory3.jpg', type: 'image', caption: 'Smiling because life’s better together! 😍' },
    { src: 'memory4.jpg', type: 'image', caption: 'Cuteness level: Off the charts! 🐶💖' },
    { src: 'memory5.jpg', type: 'image', caption: 'Looking at her like she’s my whole world… because she is! 😍' },
    { src: 'memory6.jpg', type: 'image', caption: 'Every second with you is a picture-perfect moment! 💕' },
    { src: 'memory7.jpg', type: 'image', caption: 'Another selfie, another memory to cherish! 📸✨' },
    { src: 'memory8.jpg', type: 'image', caption: 'Smiles, love, and a whole lot of happiness! 💖' },
    { src: 'memory9.jpg', type: 'image', caption: 'Too cute to be real… but she’s mine! 🥺❤️' },
    { src: 'memory10.jpg', type: 'image', caption: 'Mirror selfies with my forever favorite! ✨📷' },
    { src: 'memory11.jpg', type: 'image', caption: 'A single click, a thousand feelings! 💑' },
    { src: 'memory12.jpg', type: 'image', caption: 'Lost in your eyes... 💕' },
    { src: 'memory13.jpg', type: 'image', caption: 'Holding a flower, holding my heart 🌸' },
    { src: 'memory14.jpg', type: 'image', caption: 'Goofy mode: ON 🌼😆' },
    { src: 'memory15.jpg', type: 'image', caption: 'Holding onto each other forever ❤️' },
    { src: 'memory16.jpg', type: 'image', caption: 'A moment that melts my heart 💞' },
    { src: 'memory17.jpg', type: 'image', caption: 'Silly selfies = Best selfies 🤪' },
    { src: 'memory18.jpg', type: 'image', caption: 'Our perfect theatre date 🎭' },
    { src: 'memory19.jpg', type: 'image', caption: 'First-ever bus ride together 🚌' },
    { src: 'memory20.jpg', type: 'image', caption: 'Sleepy head on my shoulder 😴❤️' },
    { src: 'video1.mp4', type: 'video', caption: 'That wink? Instant heart attack! 🔥🥵' },
    { src: 'video2.mp4', type: 'video', caption: 'Saree on, slay mode activated! 💃❤️' },
    { src: 'video3.mp4', type: 'video', caption: 'Goofy yet irresistible—best combo ever! 😏🤣' },
    { src: 'video4.mp4', type: 'video', caption: 'A kiss to remember forever! 😘💕' },
    { src: 'video5.mp4', type: 'video', caption: 'Her cuteness should be illegal! 🥺💖' },
    { src: 'video6.mp4', type: 'video', caption: 'Radiating goddess energy with every move! ✨👑' },
    { src: 'video7.mp4', type: 'video', caption: 'One kiss, and my heart is hers forever! 😘💞' },
    { src: 'video8.mp4', type: 'video', caption: 'Even after a long day, she’s still breathtaking! 😍' },
    { src: 'video9.mp4', type: 'video', caption: 'My one and only princess, no crown needed! 👑💖' },
    { src: 'video10.mp4', type: 'video', caption: 'Dog lover certified, heart stealer confirmed! 🐶💕' }
  ];

  const shuffledMedia = shuffleArray([...mediaFiles]);

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
        {shuffledMedia.map((file, index) => (
          <div key={index} className="polaroid">
            {file.type === 'image' ? (
              <img src={`/assets/${file.src}`} alt={`Memory ${index + 1}`} />
            ) : (
              <video src={`/assets/${file.src}`} muted autoPlay loop playsInline />
            )}
            <p className="caption">{file.caption}</p>
          </div>
        ))}
      </div>
      <audio id="backgroundMusic" loop>
        <source src="/assets/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Memories;
