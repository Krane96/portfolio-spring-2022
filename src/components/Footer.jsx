import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
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
  );
};

export default Footer;
