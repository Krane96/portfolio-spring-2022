const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_img">
            <img src="/images/sexy_selfie.jpg" alt="me" />
          </div>
        </div>

        <div className="about_content">
          {/* <div className="about_cards">
            <article className="about_card">
              <h5>Experience</h5>
              <small>2 years education at Noroff</small>
            </article>
            <article className="about_card">
              <h5>Experience</h5>
              <small>2 years education at Noroff</small>
            </article>
            <article className="about_card">
              <h5>Experience</h5>
              <small>2 years education at Noroff</small>
            </article>
          </div> */}
          <p>
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
