import reactLogo from "../assets/react-icon.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={reactLogo} alt="react-logo" className="react-logo" />
      <h3 className="logo-text">ReactFacts</h3>
      <h4 className="project-title">React Course - Project 1</h4>
    </nav>
  );
}
