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

  function handleChange(event) {
    const { name, value } = event.target;
    setMemeImage((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  console.log(memeImage);
  return (
    <div className="form-container">
      <div className="input-tags">
        <input
          type="text"
          className="sen1"
          placeholder="First Sentence"
          name="topText"
          value={memeImage.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="sen2"
          placeholder="Second Sentence"
          name="bottomText"
          value={memeImage.bottomText}
          onChange={handleChange}
        />
      </div>
      <div className="btn">
        <button onClick={getMemeImage}>
          Get a new meme image <i class="fa-solid fa-image"></i>
        </button>
      </div>

      <div className="meme">
        <img src={memeImage.randomImage} className="meme--image" alt="" />
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
      </div>
    </div>
  );
}

export default Meme;
