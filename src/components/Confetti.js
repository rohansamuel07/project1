import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Confetti = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div id="confetti">
      <h1>Yay! Can’t wait to celebrate with you! 🎉</h1>
    </div>
  );
};

export default Confetti;