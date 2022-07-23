import React, { useState, useEffect } from 'react';
import '../index.css';
// import data from '../memeData.js';

function Form() {
  const [memeData, setMemeData] = useState([]);
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    memeURL: 'https://i.imgflip.com/28j0te.jpg',
  });

  const apiURL = 'https://api.imgflip.com/get_memes';

  useEffect(() => {
    console.log('useEffect ran');
    fetch(apiURL)
      .then((res) => res.json())
      .then((result) => setMemeData(result.data.memes));
  }, []);

  //   console.log(memeData);

  function getRandomMeme() {
    let randomNumber = Math.floor(Math.random() * 100);
    let randomMeme = memeData[randomNumber];
    let randomMemeURL = randomMeme.url;
    setMeme((prevData) => {
      return {
        ...prevData,
        memeURL: randomMemeURL,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    // console.log(value, name);
  }

  return (
    <section className="form-container">
      <div className="form-top">
        <input
          type="text"
          className="sent-1"
          placeholder="Top Text"
          name="topText"
          onChange={handleChange}
        />

        <input
          type="text"
          className="sent-2"
          placeholder="Bottom Text"
          name="bottomText"
          onChange={handleChange}
        />

        <button className="btn" onClick={getRandomMeme}>
          Get a new meme image
        </button>
      </div>

      <div className="form-bottom">
        <img src={meme.memeURL} className="meme--image" alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </section>
  );
}

export default Form;
