import Header from "./components/header/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const App = () => {
  return (
    <>
      <div data-aos="fade-down">
        <Header />
      </div>
      <Nav />
      <div data-aos="fade-right">
        <Experience />
      </div>
      <div data-aos="fade-left">
      <Projects />
      </div>
      <div data-aos="fade-right">

      <About />
      </div>
      <div data-aos="fade-left">
      <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
