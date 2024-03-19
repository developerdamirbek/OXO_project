import React, { useState } from 'react';

const ImageZoom = ({ smallImageSrc, largeImageSrc }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const percentageX = (x / width) * 100;
    const percentageY = (y / height) * 100;
    setCursorPosition({ x: percentageX, y: percentageY });
  };

  const handleMouseEnter = () => {
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  return (
      <div
        className="relative flex items-center justify-center h-auto "
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={smallImageSrc} alt="Small Image" className="object-contain w-full h-auto" />
        {showMagnifier && (
          <div
            className="absolute border rounded-full border-gray-400 shadow-md cursor-zoom-in pointer-events-none"
            style={{
              width: '330px',
              height: '330px',
              top: `${cursorPosition.y}%`,
              left: `${cursorPosition.x}%`,
              transform: 'translate(-50%, -50%)',
              backgroundImage: `url(${largeImageSrc})`,
              backgroundPosition: `${-cursorPosition.x}% ${-cursorPosition.y}%`,
              backgroundSize: '1000% 1000%',
            }}
          />
        )}
      </div>
  );
};

export default ImageZoom;
