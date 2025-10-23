import React from 'react';

const Card = ({ title, imageUrl }) => {
  return (
    <div className="initiative-card">
      <img src={imageUrl} alt={title} />
      <div className="card-overlay">
        <h3>{title}</h3>
        <button className="card-button">KNOW MORE</button>
      </div>
    </div>
  );
};

export default Card;