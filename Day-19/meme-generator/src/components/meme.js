import React from 'react';
import meme from '../memeData';

function Meme() {
  function getMemeImage() {
    const memesArray = meme.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    const memeData = memesArray[randomNumber];
    const memeURL = memeData.url;
    console.log(memeURL);
  }

  return (
    <div className="form-container">
      <div className="input-tags">
        <input type="text" className="sen1" placeholder="First Sentence" />
        <input type="text" className="sen2" placeholder="Second Sentence" />
      </div>
      <div className="btn">
        <button onClick={getMemeImage}>
          Get a new meme image <i class="fa-solid fa-image"></i>
        </button>
      </div>
    </div>
  );
}

export default Meme;
