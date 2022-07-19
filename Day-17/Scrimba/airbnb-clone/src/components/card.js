import React from 'react';

import './card.css';

function Card(props) {
  const country = props.card.location;
  const price = props.card.price;
  const rating = props.card.stats.rating;
  const reviewCount = props.card.stats.reviewCount;
  const title = props.card.title;
  const img = props.card.id;
  const openSpots = props.card.openSpots;

  console.log(props.card);
  return (
    <div className="card">
      {openSpots === 0 && <div className="badge">SOLD OUT</div>}
      <img src={require(`./img${img}.png`)} className="card--image" alt="" />
      <div className="card--stats">
        <i class="fa-solid fa-star"></i>
        <span>{rating}</span>
        <span className="grey">({reviewCount}) • </span>
        <span className="grey">{country}</span>
      </div>
      <p>{title}</p>
      <p>
        {' '}
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}

export default Card;
