import { useState } from "react"
import "./Meme.css"
import memesData from "./data.json"

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  })
  const [allMemeImages, setAllMemeImage] = useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)

    setMeme((prev) => ({
      ...prev,
      randomImage: memesArray[randomNumber].url,
    }))
  }

  return (
    <main>
      <div className="form-container">
        <div className="input-fields-container">
          <label htmlFor="top-text">
            Top Text
            <input
              id="top-text"
              type="text"
              placeholder="Shut up"
              autoFocus
              required
            />
          </label>
          <label htmlFor="bottom-text">
            Bottom Text
            <input
              id="bottom-text"
              type="text"
              placeholder="and take my money"
            />
          </label>
        </div>
        <button className="new-img-btn" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <img className="meme-img" src={meme.randomImage} alt="meme img" />
    </main>
  )
}
