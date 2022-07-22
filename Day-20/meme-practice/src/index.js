import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/Form';
import Navbar from './components/Navbar';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="main-container">
      <Navbar />
      <Form />
    </div>
  </React.StrictMode>
);
