import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/martin-lian-krane-b2bb19210/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Krane96" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
