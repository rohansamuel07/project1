// src/App.js
import React, { useState, useRef, lazy, Suspense } from 'react';
import HomePage from './components/HomePage';
import AudioPlayer from './components/AudioPlayer';
import bgImage from './assets/Background.jpg';
import './index.css';

const Message = lazy(() => import('./components/Message'));
const LoveLetter = lazy(() => import('./components/LoveLetter'));
const Confetti = lazy(() => import('./components/Confetti'));
const Memories = lazy(() => import('./components/Memories'));

const App = () => {
  const [page, setPage] = useState('home');
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef(null);

  const handleShowMessage = () => {
    setPage('message');
    audioRef.current?.play().catch((err) => console.error('Audio playback failed:', err));
  };

  const handleYes = () => {
    setPage('loveLetter');
    setShowConfetti(true);
  };

  const handleNoHover = () => {
    const noButton = document.getElementById('noButton');
    if (noButton) {
      noButton.style.position = 'absolute';
      noButton.style.left = `${Math.random() * (window.innerWidth - noButton.offsetWidth)}px`;
      noButton.style.top = `${Math.random() * (window.innerHeight - noButton.offsetHeight)}px`;
    }
  };

  const handleShowGallery = () => setPage('memories');

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
        }}
      />
      <div className="container enhanced-container">
        {page === 'home' && <HomePage onShowMessage={handleShowMessage} />}
        <Suspense fallback={<div className="romantic-loader">Thinking about you... ❤️</div>}>
          {page === 'message' && <Message onYes={handleYes} onNoHover={handleNoHover} />}
          {page === 'loveLetter' && (
            <>
              <LoveLetter onShowGallery={handleShowGallery} />
              {showConfetti && <Confetti />}
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
