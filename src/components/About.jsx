import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const About = () => {
  return (
    <div data-aos="fade-right"  data-aos-duration="1000">
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
              Hello, My name is Martin Lian Krane. I currently reside in Bergen,
              Norway and have been studying Frontend development for 2 years. My
              program ends in June 2022.
              <br />
              <br /> Besides the love for technology, I enjoy doing physical
              activities, being active and exercising. I enjoy having
              intellectual conversations as well as spending my time gaming,
              enjoying tv shows and movies.
              <br />
            </p>
            <a href="#contact" className="btn btn-primary blue">
              Contact Me
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
