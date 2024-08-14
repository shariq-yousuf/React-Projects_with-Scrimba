import "./Meme.css"

export default function Meme() {
  return (
    <form action="">
      <div className="input-fields-container">
        <label htmlFor="top-text">
          Top Text
          <input id="top-text" type="text" autoFocus required />
        </label>
        <label htmlFor="bottom-text">
          Bottom Text
          <input id="bottom-text" type="text" />
        </label>
      </div>
      <button className="new-img-btn" type="submit">
        Get a new meme image 🖼
      </button>
    </form>
  )
}
