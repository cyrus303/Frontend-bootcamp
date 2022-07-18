import React from 'react';

import person from './person.jpg';
import '../index.css';

function Card() {
  return (
    <div className="main-card">
      <img src={person} alt="person" className="person" />
      <h1>Smith Wasson</h1>
      <p>Frontend Developer</p>
      <small>smithwasson.website</small>
      <div className="btn-container">
        <button className="btn">Email</button>
        <button className="btn link">LinkedIn</button>
      </div>
    </div>
  );
}

export default Card;
