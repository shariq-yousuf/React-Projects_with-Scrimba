import "./Header.css"

export default function Header() {
  return (
    <header>
      <img
        className="header-image"
        src="/images/troll-face.svg"
        alt="troll face"
      />
      <h2 className="header-title">Meme Generator</h2>
    </header>
  )
}
