import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superpower, setSuperpower] = useState('');
  const [display, setDisplay] = useState(false);

  function displayHero() {
    setDisplay((prevValue) => !prevValue);
  }

  return (
    <div className="App">
      <h1>Build A Hero</h1>
      <div className="input-container">
        <label>Name: </label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age: </label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Height: </label>
        <input
          type="text"
          onChange={(event) => {
            setHeight(event.target.value);
          }}
        />
        <label>Superpower: </label>
        <input
          type="text"
          onChange={(event) => {
            setSuperpower(event.target.value);
          }}
        />
      </div>
      <button onClick={displayHero}>Build My Hero</button>

      {display && (
        <div>
          <h1>Hero Info</h1>
          <p>{name}</p>
          <p>{age}</p>
          <p>{height}</p>
          <p>{superpower}</p>
        </div>
      )}
    </div>
  );
}

export default App;
