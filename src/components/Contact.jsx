import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_epm4gih",
        "template_39iq28a",
        form.current,
        "esey9fTY1Md03PE-Q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <div data-aos="fade-right" data-aos-duration="1000">
            <article className="contact_option">
              <MdOutlineEmail className="contact_icon" />
              <h4>Email</h4>
              <h5>martinkrane96@gmail.com</h5>
              <a href="mailto:martinkrane96@gmail.com" target="_blank">
                Send a Message
              </a>
            </article>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000">
            <article className="contact_option">
              <MdOutlinePhone className="contact_icon" />
              <h4>Phone</h4>
              <h5>+47 90946552</h5>
              <a href="tel:+4790946552" target="_blank">
                Call Me
              </a>
            </article>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="7"
              required
            />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
