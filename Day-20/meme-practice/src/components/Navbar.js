import React from 'react';
import '../index.css';

function Navbar() {
  return (
    <section className="navbar-container">
      <div className="left">
        <img src={require('../images/TrollFace.png')} alt="Trollface" />
        <p className="title">Meme-Generator</p>
      </div>

      <div className="right">
        <p>React Course - Project 3</p>
      </div>
    </section>
  );
}

export default Navbar;
