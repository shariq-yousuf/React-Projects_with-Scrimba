export default function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={`/public/assets/${props.img}`} className="card-img" />
        <span className="flag-tag">SOLD OUT</span>
      </div>
      <div className="reviews">
        <img src={"/public/assets/star.png"} alt="star" className="star-img" />
        <span>
          {props.rating}{" "}
          <span className="review-count">
            ({props.reviewCount}) • {props.location}
          </span>
        </span>
      </div>
      <p>{props.title}</p>
      <div>
        <span className="price">From ${props.price}</span> / person
      </div>
    </div>
  )
}
