export default function Card(props) {
  const { coverImg, stats, location, title, price, openSpots } = props

  let badgeText
  if (openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      <div className="img-container">
        <img src={`/public/assets/${coverImg}`} className="card-img" />
        {badgeText && <span className="badge">{badgeText}</span>}
      </div>
      <div className="reviews">
        <img src={"/public/assets/star.png"} alt="star" className="star-img" />
        <span>
          {stats.rating}{" "}
          <span className="review-count">
            ({stats.reviewCount}) • {location}
          </span>
        </span>
      </div>
      <p>{title}</p>
      <div className="price-div">
        <span className="price">From ${price}</span> / person
      </div>
    </div>
  )
}
