import "../styles/Projects.css";
import Projects_Satu from "../assets/Projects1.jpg";

function Projects({ title, imageurl, body }) {
  // Use object destructuring instead of array
  return (
    <div>
      <h2>Projects</h2>
      <div className="card-container">
        <div className="image-container">
          <img src={imageurl || Projects_Satu} alt={title || "Project One"} className="Card" /> {/* Dynamic image and alt text */}
          <div className="card-title">
            <div className="card-content">
              <h3>{title || "APA YA"}</h3> {/* Use title prop */}
            </div>
          </div>
          <div className="card-body">
            <p>{body || "tralalalalala"}</p> {/* Use body prop */}
          </div>
          <div className="btn">
            <button>
              <a href="#">View more</a> {/* Use href if linking */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
