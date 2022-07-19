import React from 'react';
import '../index.css';

function Navbar() {
  return (
    <>
      <section className="nav-container">
        <div className="left">
          <img src={require('../images/TrollFace.png')} alt="" />
          <p>Meme Generator</p>
        </div>
        <div className="right">
          <p>React Course - Project 3</p>
        </div>
      </section>
    </>
  );
}

export default Navbar;
