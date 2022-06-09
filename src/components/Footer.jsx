import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Footer = () => {
  return (
    <div data-aos="fade-up"  data-aos-duration="1000">
    <footer>
      <a href="#" className="footer_logo">
        Martin
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
          <a href="https://github.com/Krane96" target="_blank"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/martin-lian-krane-b2bb19210/" target="_blank"><BsLinkedin/></a>
      </div>
      <div className="footer_copyright">
          <small>&copy; Martin Lian Krane. All rights reserved.</small>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
