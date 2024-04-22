// react ------------------------------------------------------------------------------------------>
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// plugins ---------------------------------------------------------------------------------------->
import AOS from "aos";
import PureCounter from "@srexi/purecounterjs";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// css -------------------------------------------------------------------------------------------->
import "./App.css";
import "../assets/styles/Jungho.css";
import "../assets/styles/Media.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "boxicons/css/boxicons.min.css";
import "swiper/swiper-bundle.min.css";

// components1 ------------------------------------------------------------------------------------>
import Resize from "../components/Resize";
import Scroll from "../components/Scroll";
import Loader from "../components/Loader";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Toggle from "../components/Toggle";
import Hover from "../components/Hover";

// components2 ------------------------------------------------------------------------------------>
import Hero from "../pages/main/Hero";
import About from "../pages/main/About";
import Skills from "../pages/main/Skills";
import Portfolio from "../pages/main/Portfolio";
import Project1 from "../pages/details/Project1";
import Project2 from "../pages/details/Project2";
import Project3 from "../pages/details/Project3";
import Project4 from "../pages/details/Project4";

// ------------------------------------------------------------------------------------------------>
const Aos = () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
};

// ------------------------------------------------------------------------------------------------>
const PureCount = () => {
  const pure = new PureCounter();
  return pure;
};
Hover();

// ------------------------------------------------------------------------------------------------>
class MainPages extends React.Component {
  componentDidMount() {
    Aos();
    PureCount();
    Hover();
  }
  render() {
    return (
      <div className="App">
        <Toggle />
        <Loader />
        <Resize />
        <Header />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Portfolio />
        </main>
        <Footer />
      </div>
    );
  }
}

// ------------------------------------------------------------------------------------------------>
class DetailPages extends React.Component {
  componentDidMount() {
    Aos();
    PureCount();
    Hover();
  }
  render() {
    const {project} = this.props;
    return (
      <div className="App">
        <Toggle />
        <Loader />
        <Resize />
        <Header />
        <main id="main">
          {project === "project1" && <Project1 />}
          {project === "project2" && <Project2 />}
          {project === "project3" && <Project3 />}
          {project === "project4" && <Project4 />}
        </main>
        <Footer />
      </div>
    );
  }
}

// ------------------------------------------------------------------------------------------------>
const App = () => {

  return (
    <Router>
      <Scroll/>
      <Routes>
        <Route path="/" element={<MainPages />} />
        <Route path="/details/project1" element={<DetailPages project="project1" />} />
        <Route path="/details/project2" element={<DetailPages project="project2" />} />
        <Route path="/details/project3" element={<DetailPages project="project3" />} />
        <Route path="/details/project4" element={<DetailPages project="project4" />} />
      </Routes>
    </Router>
  );
};
export default App;