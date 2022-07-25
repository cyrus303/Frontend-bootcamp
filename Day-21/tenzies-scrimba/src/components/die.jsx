import React from 'react';
import './die.css';

function Die(props) {
  const { value, isHeld, id, holdDice } = props;

  const styles = {
    backgroundColor: isHeld ? '#59E391' : 'white',
  };

  function displayId() {
    holdDice(id);
  }

  return (
    <div className="die-container" style={styles} onClick={displayId}>
      <p>{value}</p>
    </div>
  );
}

export default Die;
