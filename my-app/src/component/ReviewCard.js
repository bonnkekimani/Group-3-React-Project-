import React from 'react';

const ReviewCard = ({ review, rating, name }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i}>&#9733;</span>);
  }
  return (
    <div>
        <div>{stars}</div><br></br>
        <br></br>
        <p>{review}</p><br></br>
        <br></br>
        <p>{name}</p>
    </div>
  );
};

export default ReviewCard;
