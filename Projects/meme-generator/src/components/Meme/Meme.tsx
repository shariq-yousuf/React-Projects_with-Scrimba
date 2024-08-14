import "./Meme.css"

export default function Meme() {
  return (
    <form action="">
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
          <input id="bottom-text" type="text" placeholder="and take my money" />
        </label>
      </div>
      <button className="new-img-btn" type="submit">
        Get a new meme image 🖼
      </button>
    </form>
  )
}
