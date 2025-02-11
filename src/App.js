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
  const [popupMedia, setPopupMedia] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.error('Audio playback failed:', err));
    }
  }, []);

  const handleShowMessage = () => {
    setPage('message');
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

  const handleMediaClick = (src, type) => {
    setPopupMedia({ src, type });
  };

  const closePopup = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      setPopupMedia(null);
    }
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
          {page === 'message' && <Message onYes={handleYes} onNoHover={handleNoHover} />}
          {page === 'loveLetter' && (
            <>
              <LoveLetter onShowGallery={handleShowGallery} />
              {showConfetti && <Confetti />}
            </>
          )}
          {page === 'memories' && <Memories onMediaClick={handleMediaClick} />}
        </Suspense>
      </div>
      <AudioPlayer ref={audioRef} />
      {popupMedia && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box">
            {popupMedia.type === 'image' ? (
              <img src={popupMedia.src} alt="Popup Media" />
            ) : (
              <video src={popupMedia.src} controls autoPlay />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
