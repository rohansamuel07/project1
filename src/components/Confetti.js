// src/components/Confetti.js
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Confetti = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Add floating hearts
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '❤️';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `${Math.random() * 100}vh`;
      document.body.appendChild(heart);
    }
  }, []);

  return (
    <div id="confetti">
      <h1>Yay! Can’t wait to celebrate with you! 🎉</h1>
    </div>
  );
};

export default Confetti;