import "../styles/About.css";
import Photo2 from "../assets/kumi_2.jpg";
import { FaLinkedin, FaInstagram, FaPinterest } from "react-icons/fa";

function About() {
  return (
    <div id="about">
      <div className="about-container">
        <div className="box">
          <img src={Photo2} alt="Foto Kumi About Me" className="about-photo" />
          <div className="about-text">
            <h1>A bit about me</h1>
            <p>
              Hi! I'm Kumala, a software engineering enthusiast who loves diving into code and creating efficient solutions. My journey started with data science, but now I'm more focused on building software that solves real problems. In
              my free time, I enjoy exploring Linux (yes, the penguin 🐧 has me hooked), experimenting with new tech, and always pushing myself to learn more. I believe in continuous growth, and I'm always excited to tackle new challenges!
            </p>
            <div className="social-media-icon">
              <a href="https://www.linkedin.com/in/kumaladewichandraasih/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/kumaladewi20/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px" }}>
                <FaInstagram />
              </a>
              <a href="https://id.pinterest.com/kincikinci186/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px" }}>
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
