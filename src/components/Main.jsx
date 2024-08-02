import "./Main.css"

const title = "React Info Site"
const description = "This is my very first react simple static app."
const imgSrc =
  "https://res.cloudinary.com/do0pop1de/image/upload/f_auto,q_auto/v1/react_projects-scrimba/projects-ss/info-site"
const liveLink = "./Projects/React-info-site/index.html"
const github =
  "https://github.com/shariq-yousuf/React-Projects_with-Scrimba/tree/main/Projects/React-info-site"

export default function Main() {
  return (
    <main>
      <div className="project-container">
        <img className="project-img" src={imgSrc} alt={`${title}-img`} />
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
    </main>
  )
}
