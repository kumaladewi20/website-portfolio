import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="menu">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Interests</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
