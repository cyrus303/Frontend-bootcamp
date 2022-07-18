import React from 'react';

import logo from './logo.svg';
import './nav.css';
function NavBar() {
  return (
    <nav className="Nav-Container">
      <div className="left">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ReactFacts</p>
      </div>
      <div className="right">
        <p>React Course - Project 1</p>
      </div>
    </nav>
  );
}

export default NavBar;
