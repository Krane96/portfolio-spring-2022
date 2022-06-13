import CV from "../../files/CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn blue">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary blue">Let's talk</a>
    </div>
  );
};

export default CTA;
