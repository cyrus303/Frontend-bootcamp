import React, { useState } from 'react';
import './App.css';
import Die from './components/die';

function App() {
  const [dice, setDice] = useState(allNewDice());

  const diceElements = dice.map((die) => {
    return <Die value={die} />;
  });

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  return (
    <main className="main-container">
      <div className="main-box">
        <div className="dies-container">{diceElements}</div>
        <button className="roll-dice" onClick={rollDice}>
          Roll
        </button>
      </div>
    </main>
  );
}

export default App;
