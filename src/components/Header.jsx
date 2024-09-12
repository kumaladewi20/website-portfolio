import profilePicture from "../assets/kumi_1.png";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <div className="text-content">
          <h2>Hi there!</h2>
          <p>I'm Kumala, a passionate Software Engineer</p>
          <a href="https://drive.google.com/file/d/1zUrOtgssKVedE5nfvS7rKQRxADDoUAEY/view?usp=sharing" className="cv-button">
            Download CV
          </a>
        </div>
        <img src={profilePicture} alt="Profile of Kumala Dewi Chandra Asih" />
      </div>
    </header>
  );
}

export default Header;
