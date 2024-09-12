import "../styles/Skills.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";

function Skills() {
  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <div className="skills-grid">
        <div className="skill">
          <div className="skill-image-container">
            <FaHtml5 className="skill-icon" />
          </div>
          <p>HTML</p>
        </div>

        <div className="skill">
          <div className="skill-image-container">
            <FaCss3Alt className="skill-icon" />
          </div>
          <p>CSS</p>
        </div>

        <div className="skill">
          <div className="skill-image-container">
            <FaJsSquare className="skill-icon" />
          </div>
          <p>JavaScript</p>
        </div>

        <div className="skill">
          <div className="skill-image-container">
            <FaReact className="skill-icon" />
          </div>
          <p>React</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
