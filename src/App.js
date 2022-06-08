import Header from "./components/header/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Experience />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
