import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects_container">
        <article className="project_item">
          <div className="project_img">
            <img src="/images/boostcraft.jpg" alt="project" />
          </div>
          <h3>World of Boostcraft</h3>
          <div className="project_item_cta">
            <a
              href="https://github.com/Krane96/martin-lk-semester-project-2"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a href="" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_img">
            <img src="/images/boostcraft.jpg" alt="project" />
          </div>
          <h3>World of Boostcraft</h3>
          <div className="project_item_cta">
            <a
              href="https://github.com/Krane96/martin-lk-semester-project-2"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a href="" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_img">
            <img src="/images/boostcraft.jpg" alt="project" />
          </div>
          <h3>World of Boostcraft</h3>
          <div className="project_item_cta">
            <a
              href="https://github.com/Krane96/martin-lk-semester-project-2"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a href="" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
