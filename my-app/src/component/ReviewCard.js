import React from 'react';

const ReviewCard = ({ review, rating, name }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i}>&#9733;</span>);
  }
  return (
    <div>
        <div>{stars}</div>
        <p>{review}</p>
        <p>{name}</p>
    </div>
  );
};

export default ReviewCard;
