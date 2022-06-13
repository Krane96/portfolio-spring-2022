import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects_container">
        <div data-aos="fade-right" data-aos-duration="1000">
          <article className="project_item">
            <div className="project_img">
              <img src="/images/holidaze.png" alt="project" />
            </div>
            <h3>Holidaze</h3>

            <div className="project_description">
              <p>
                Hotel booking website made with React and Sass. This was my
                first big react project, it has a few missing features since the
                main goal was to meet the criteria for the brief. I used strapi
                to make my API data and deployed in on Heroku.
              </p>
            </div>
            <div className="project_item_cta">
              <a
                href="https://github.com/Noroff-FEU-Assignments/project-exam-2-Krane96"
                target="_blank"
                className="btn"
              >
                Github
              </a>
              <a
                href="https://project-exam-2-krane96.vercel.app/"
                target="_blank"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000">
          <article className="project_item">
            <div className="project_img">
              <img src="/images/boostcraft.jpg" alt="project" />
            </div>
            <h3>World of Boostcraft</h3>

            <div className="project_description">
              <p>
                E-commerce site made by with vanilla JavaScript, HTML and CSS.
                This was a school project and has some features missing that
                were not part of the tasks. Strapi was used as an API to get
                products/users and local storage to save it.
              </p>
            </div>
            <div className="project_item_cta">
              <a
                href="https://github.com/Krane96/martin-lk-semester-project-2"
                target="_blank"
                className="btn"
              >
                Github
              </a>
              <a
                href="https://jovial-colden-e5dcca.netlify.app/"
                target="_blank"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000">
          <article className="project_item">
            <div className="project_img">
              <img src="/images/ca-frameworks-project.png" alt="project" />
            </div>
            <h3>CA JS Frameworks</h3>
            <div className="project_description">
              <p>
                Made using NEXT js. I used a free api from fakestoreapi.com for
                a list of products and a Strapi deployed on Heroku for the use
                of login and JWT token. There is also a contact form with my
                first attempt of using the Yup module for validation.
              </p>
            </div>
            <div className="project_item_cta">
              <a
                href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Krane96"
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
      </div>
    </section>
  );
};

export default Projects;
