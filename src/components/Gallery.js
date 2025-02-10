import React from 'react';

const Gallery = () => {
  const memories = [
    'memory1.jpg', 'memory2.jpg', 'memory3.jpg', 'memory4.jpg',
    'memory5.jpg', 'memory6.jpg', 'memory7.jpg', 'memory8.jpg',
    'memory9.jpg', 'memory10.jpg', 'memory11.jpg', 'memory12.jpg',
    'memory13.jpg', 'memory14.jpg', 'memory15.jpg'
  ];

  return (
    <div id="gallery">
      <h1>I Love You ❤️</h1>
      <div className="gallery">
        {memories.map((memory, index) => (
          <img
            key={index}
            src={`/assets/${memory}`}
            alt={`Memory ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;