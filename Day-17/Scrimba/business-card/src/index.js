import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Card from './components/MainCard';
import About from './components/about';
import Intrests from './components/intrests';
import Foot from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card />
    <About />
    <Intrests />
    <Foot />
  </React.StrictMode>
);
