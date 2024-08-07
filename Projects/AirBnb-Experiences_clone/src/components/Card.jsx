export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      <div className="img-container">
        <img src={`/public/assets/${props.img}`} className="card-img" />
        {badgeText && <span className="badge">{badgeText}</span>}
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
      <div className="price-div">
        <span className="price">From ${props.price}</span> / person
      </div>
    </div>
  )
}
