import React from 'react';

const Image = ({ src, text, isActive }) => (
  <div className={`image ${isActive ? 'active' : ''}`}>
    <img src={src} alt={text} />
    <div className="text">{text}</div>
  </div>
);

export default Image;
