import "../styles/About.css";
import Photo2 from "../assets/kumi_2.jpg"; // Ubah path sesuai dengan lokasi foto kamu

function About() {
  return (
    <div id="about">
      <div className="about-container">
        <div className="box">
          <img src={Photo2} alt="Foto Kumi About Me" className="about-photo" />
          <div className="about-text">
            <p>This is a brief description about me.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
