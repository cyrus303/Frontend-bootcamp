import React from 'react';
import ReactDOM from 'react-dom/client';
import Meme from './components/meme';
import Navbar from './components/navbar';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="main-container">
      <Navbar />
      <Meme />
    </div>
  </React.StrictMode>
);
