// src/App.js
import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
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

  const handleShowMessage = () => setPage('message');
  const handleYes = () => {
    setPage('loveLetter');
    setShowConfetti(true);
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
