import React from 'react';
import './navbar.css';

import img from './hero.png';

function Navbar() {
  return (
    <div className="main-component">
      <div className="nav-container">
        <i class="fa-brands fa-airbnb"></i>
        <p>airbnb</p>
      </div>
      <img src={img} alt="" />
      <div className="text">
        <h1>Online Experience</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
          voluptate.
        </p>
      </div>
    </div>
  );
}

export default Navbar;
