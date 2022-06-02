const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_img">
            <img src="/images/bitmoji_bg.png" alt="me" />
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
            Hello My name is Martin Lian Krane, i'm a 25 year old boy living in
            Bergen, Norway. I am currently studying Frontend for two years and
            i'm done summer 2022.<br/><br/>  I am a very active and nerdy person, I love
            everything from technology, gaming, tv and working out.<br/><br/> I have
            learned a lot from my short time as a programmer and am eager to
            learn more. Got a good eye for details and I am a fast learner.
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
