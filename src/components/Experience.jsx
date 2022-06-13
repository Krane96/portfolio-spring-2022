import { BsPatchCheckFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Experience = () => {
  return (
    <section id="experience">
      <h5>What can I do?</h5>
      <h2>My experience</h2>
      <div className="container experience_container">
        <div data-aos="fade-right" data-aos-duration="1000">
          <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <div>
                  <BsPatchCheckFill className="experience_details_icon" />
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <div>
                  <BsPatchCheckFill className="experience_details_icon" />
                  <h4>CSS & Sass</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <div>
                  <BsPatchCheckFill className="experience_details_icon" />
                  <h4>REACT</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <div>
                  <BsPatchCheckFill className="experience_details_icon" />
                  <h4>Next JS</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article className="experience_details">
                <div>
                  <BsPatchCheckFill className="experience_details_icon" />
                  <h4>Bootstrap</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article className="experience_details">
                <div>
                  <BsPatchCheckFill className="experience_details_icon" />
                  <h4>Node JS</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000">
          <div className="experience_ux">
            <h3>UI and UX</h3>
            <div className="experience_content">
              <article className="experience_details">
                <div>
                  <BsPatchCheckFill className="experience_details_icon" />
                  <h4>Figma</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <div>
                  <BsPatchCheckFill className="experience_details_icon" />
                  <h4>Adobe XD</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <div>
                  <BsPatchCheckFill className="experience_details_icon" />
                  <h4>Elementor and Wordpress</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
