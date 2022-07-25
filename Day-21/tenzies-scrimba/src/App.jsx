import React, { useState } from 'react';
import './App.css';
import Die from './components/die';
import { nanoid } from 'nanoid';

function App() {
  const [dice, setDice] = useState(allNewDice());

  const diceElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        id={die.id}
        holdDice={holdDice}
      />
    );
  });

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : { ...die };
      })
    );
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
