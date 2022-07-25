import React from 'react';
import './die.css';

function Die(props) {
  const { value } = props;
  return (
    <div className="die-container">
      <p>{value}</p>
    </div>
  );
}

export default Die;
