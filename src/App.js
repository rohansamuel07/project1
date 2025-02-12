// src/App.js
import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import HomePage from './components/HomePage';
import AudioPlayer from './components/AudioPlayer';
import bgImage from './assets/Background.jpg';
import './index.css';
import confetti from 'canvas-confetti';

const Message = lazy(() => import('./components/Message'));
const LoveLetter = lazy(() => import('./components/LoveLetter'));
const Confetti = lazy(() => import('./components/Confetti'));
const Memories = lazy(() => import('./components/Memories'));

const App = () => {
  const [page, setPage] = useState('home');
  const [showConfetti, setShowConfetti] = useState(false);
  const [love, setLove] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => console.error('Audio playback failed:', err));
      }
      document.removeEventListener('click', enableAudio);
    };

    document.addEventListener('click', enableAudio);
    return () => document.removeEventListener('click', enableAudio);
  }, []);

  useEffect(() => {
    const createLoveSpark = (e) => {
      const heart = document.createElement('div');
      heart.classList.add('love-spark');
      heart.innerText = '💖';
      heart.style.left = `${e.clientX}px`;
      heart.style.top = `${e.clientY}px`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1000);
    };

    window.addEventListener('mousemove', createLoveSpark);
    return () => window.removeEventListener('mousemove', createLoveSpark);
  }, []);

  const handleShowMessage = () => setPage('message');
  const handleYes = () => {
    setPage('loveLetter');
    setShowConfetti(true);
    confetti({ particleCount: 200, spread: 90, origin: { y: 0.7 } });
  };
  const handleShowGallery = () => setPage('memories');
  const increaseLove = () => {
    setLove((prev) => (prev < 100 ? prev + 10 : 100));
  };

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          zIndex: -1,
          animation: 'fadeIn 1.5s ease-in-out',
        }}
      />
      <div className="container enhanced-container fade-in page-transition">
        {page === 'home' && <HomePage onShowMessage={handleShowMessage} />}
        <Suspense fallback={<div className="romantic-loader">Thinking about you... ❤️</div>}>
          {page === 'message' && <Message onYes={handleYes} />}
          {page === 'loveLetter' && (
            <>
              <LoveLetter onShowGallery={handleShowGallery} />
              {showConfetti && <Confetti />}
              <div className="love-meter-container">
                <div className="love-meter" style={{ width: `${love}%` }}></div>
              </div>
              <p className="love-text">{love === 100 ? 'Full of Love! ❤️' : `Love Level: ${love}%`}</p>
              <button onClick={increaseLove}>Send Love 💕</button>
            </>
          )}
          {page === 'memories' && <Memories />}
        </Suspense>
      </div>
      <AudioPlayer ref={audioRef} />
    </>
  );
};

export default App;
