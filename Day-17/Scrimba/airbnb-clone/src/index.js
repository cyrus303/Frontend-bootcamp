import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './components/navbar';
import Card from './components/card';
import data from './data';

const data2 = data.map((card) => {
  return <Card card={card} />;
});

// console.log(data2);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />
    {data2}
  </>
);

// <Card
// img={1}
// rating={5.0}
// reviewCount={6}
// country="Ireland"
// title="Life Lessons with Katie Zaferes"
// price={136}
// />
// <Card
// img={2}
// rating={3.0}
// reviewCount={12}
// country="India"
// title="what the Hell!!!"
// price={126.99}
// />
// <Card
// img={3}
// rating={3.0}
// reviewCount={12}
// country="India"
// title="what the Hell!!!"
// price={126.99}
// />
