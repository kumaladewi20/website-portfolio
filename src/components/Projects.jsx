import "../styles/Projects.css";
import Projects_Satu from "../assets/Projects1.jpg";
import Projects_Dua from "../assets/Projects2.jpg";

function Projects() {
  const projects = [
    {
      title: "English Galaxy",
      imageurl: Projects_Satu,
      body: "English Galaxy is an online platform offering engaging English learning resources for elementary to high school students. It provides interactive modules, videos, blogs, and more to make language learning captivating and effective",
    },
    {
      title: "Sentiment Analysis of Spotify Review for Service Improvement Recommendations using Support Vector Machine and Naïve Bayes Method",
      imageurl: Projects_Dua,
      body: "This study compares SVM and Naive Bayes for sentiment analysis of Spotify reviews. As user numbers grow, reviews increase, offering insights to improve service quality.",
    },
  ];

  return (
    <div>
      <h2>Projects</h2>
      <div className="card-container-wrapper">
        {" "}
        {projects.map((project, index) => (
          <div className="card-container" key={index}>
            {" "}
            <div className="image-container">
              <img src={project.imageurl} alt={project.title} />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.body}</p>
              <div className="btn">
                <button>
                  <a href="#">View more</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
