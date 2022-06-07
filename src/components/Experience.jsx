import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What can I do?</h5>
      <h2>My experience</h2>

      <div className="container experience_container">
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
                <h4>CSS</h4>
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
          </div>
        </div>
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
                <small className="text-light">Basics</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
