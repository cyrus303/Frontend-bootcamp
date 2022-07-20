import React, { useState } from 'react';
import meme from '../memeData';

function Meme() {
  const [memeImage, setMemeImage] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = useState(meme);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    const memeData = memesArray[randomNumber];
    const memeURL = memeData.url;

    setMemeImage((prevMemeImage) => {
      return {
        ...prevMemeImage,
        randomImage: memeURL,
      };
    });
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

      <img src={memeImage.randomImage} alt="" className="memeImage" />
    </div>
  );
}

export default Meme;
