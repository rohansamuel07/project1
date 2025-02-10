import React from 'react';

const LoveLetter = ({ onShowGallery }) => {
  return (
    <div id="loveLetter">
      <h2>To My Dearest Chakaramuthe</h2>
      <p>Here are just a few reasons why I love you:</p>
      <ul>
        <li>Your smile makes me feel warm and fuzzy</li>
        <li>You make me a better person, which is exhausting, but worth it.</li>
        <li>You have a better mustache than I do</li>
        <li>You don't smell like feet</li>
        <li>Funniest and quirkiest person I've met</li>
        <li>Your eyes are like plot twists—unexpected, breathtaking, and now I can’t stop thinking about them.</li>
        <li>You're my honeybunch, sugar plum, pumpy-umpy-umpkin</li>
      </ul>
      <button onClick={onShowGallery}>See Our Memories</button>
    </div>
  );
};

export default LoveLetter;