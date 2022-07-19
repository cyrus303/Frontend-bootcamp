import React from 'react';
import '../index.css';

function Card(props) {
  console.log(props.item);

  const title = props.item.title;
  const location = props.item.location;
  const locationURL = props.item.googleMapsUrl;
  const startDate = props.item.startDate;
  const endDate = props.item.endDate;
  const description = props.item.description;
  const imageURL = props.item.imageUrl;

  return (
    <section className="card-container">
      <div className="left">
        <img
          src={imageURL}
          alt=""
          // width={'200px'}
        />
      </div>
      <div className="right">
        <div className="location">
          <i class="fa-solid fa-location-dot"></i>
          <p>{location}</p>
          <small>
            <a href={locationURL}>View on Google Maps</a>
          </small>
        </div>

        <h1 className="title">{title}</h1>
        <p className="dates">
          {startDate} - {endDate}
        </p>
        <p className="description">{description}</p>
      </div>
    </section>
  );
}

export default Card;
