import "./styles/Card.css"

export default function Card({ img, title, description, liveLink, github }) {
  return (
    <div className="project-container">
      <img className="project-img" src={img} alt={`${title}-img`} />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-icons">
        <a href={github} target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href={liveLink}>
          <i className="fa-regular fa-eye"></i>
        </a>
      </div>
    </div>
  )
}
