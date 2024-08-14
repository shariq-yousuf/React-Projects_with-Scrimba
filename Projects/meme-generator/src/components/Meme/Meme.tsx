import "./Meme.css"

export default function Meme() {
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
        <button className="new-img-btn">Get a new meme image 🖼</button>
      </div>
    </main>
  )
}
