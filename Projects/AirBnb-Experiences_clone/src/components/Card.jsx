import katie from "../assets/katie-zaferes.png"
import star from "../assets/star.png"

export default function Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img src={katie} alt="katie's photo" className="card-img" />
        <span className="flag-tag">SOLD OUT</span>
      </div>
      <div className="reviews">
        <img src={star} alt="star" className="star-img" />
        <span>
          5.0 <span className="review-count">(6) • USA</span>
        </span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <div>
        <span className="price">From $136</span> / person
      </div>
    </div>
  )
}
