import { useEffect, useState } from "react"
import "./Meme.css"
// import memesData from "./data.json"

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/5v6gwj.jpg",
  })
  const [allMeme, setAllMeme]: [any, any] = useState([])

  useEffect(() => {
    const url = "https://api.imgflip.com/get_memes"
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes))
      .catch((err) => console.error("Fetch data error:", err))
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length)

    setMeme((prev) => ({
      ...prev,
      randomImage: allMeme[randomNumber].url,
    }))
  }

  function handleChange(e: { target: { name: string; value: string } }) {
    const { name, value } = e.target

    setMeme((prev) => ({
      ...prev,
      [name]: value,
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
              onChange={handleChange}
              name="topText"
              value={meme.topText}
            />
          </label>
          <label htmlFor="bottom-text">
            Bottom Text
            <input
              id="bottom-text"
              type="text"
              placeholder="and take my money"
              onChange={handleChange}
              name="bottomText"
              value={meme.bottomText}
            />
          </label>
        </div>
        <button className="new-img-btn" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>

      <div className="meme">
        <img className="meme-img" src={meme.randomImage} alt="meme img" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}
