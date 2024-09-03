import profilePicture from "../assets/kumi_1.png";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <div className="text-content">
          <h2>Hey There!</h2>
          <p>I'm Kumala</p>
        </div>
        <img src={profilePicture} alt="Profile of Kumala Dewi Chandra Asih" />
      </div>
    </header>
  );
}

export default Header;
