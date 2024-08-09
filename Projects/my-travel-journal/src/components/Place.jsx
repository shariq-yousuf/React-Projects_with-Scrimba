import "../styles/Place.css"

export default function Place(props) {
  return (
    <section className="place-section">
      <img className="place-photo" src={props.imageUrl} alt={props.title} />
      <div className="place-info">
        <div className="place-location">
          <img src="/location.svg" alt="" />
          <span>{props.location.toUpperCase()}</span>
          <a className="gps-link" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className="title">{props.title}</h1>
        <h3 className="date">
          {props.startDate} - {props.endDate}
        </h3>
        <p className="descripion">{props.description}</p>
      </div>
    </section>
  )
}
