import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Header = () => {
  return (
    <div data-aos="fade-down"  data-aos-duration="1000">
    <header>
      <div className="container header_container">
        <h5  id="#home">Hello I'm</h5>
        <h1>Martin Lian Krane</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src="/images/bitmoji_bg.png" alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
    </div>
  );
};

export default Header;
