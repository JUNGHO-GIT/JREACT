// import ----------------------------------------------------------------------------------------->
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "../assets/styles/Jungho.css";
import "../assets/styles/Media.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "boxicons/css/boxicons.min.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/swiper-bundle.min.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Toggle from "../components/common/Toggle";
import Hero from "../pages/main/Hero";
import About from "../pages/main/About";
import Portfolio from "../pages/main/Portfolio";
import Project1 from "../pages/details/Project1";
import Project2 from "../pages/details/Project2";
import Project3 from "../pages/details/Project3";
import Resume from "../pages/main/Resume";
import Skills from "../pages/main/Skills";
import Facts from "../pages/main/Facts";

import AOS from "aos";
import PureCounter from "@srexi/purecounterjs";
import Hover from "../assets/scripts/Hover";

// state ------------------------------------------------------------------------------------------>

// AOS
const Aos = () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
};

// PureCounter
const PureCount = () => {
  const pure = new PureCounter();
  return pure;
};

// Hover
Hover();

// Main
class Main extends React.Component {
  componentDidMount() {
    Aos();
    PureCount();
    Hover();
  }
  render() {
    return (
      <div className="App">
        <Toggle />
        <Header />
        <main id="main">
          <Hero />
          <About />
          <Resume />
          <Skills />
          <Facts />
          <Portfolio />
        </main>
        <Footer />
      </div>
    );
  }
}

// Details
class ProjectDetails extends React.Component {
  componentDidMount() {
    Aos();
    PureCount();
    Hover();
  }
  render() {
    const { project } = this.props;
    return (
      <div className="App">
        <Toggle />
        <Header />
        <main id="main">
          {project === "project1" && <Project1 />}
          {project === "project2" && <Project2 />}
          {project === "project3" && <Project3 />}
        </main>
        <Footer />
      </div>
    );
  }
}

// render ----------------------------------------------------------------------------------------->
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/project1" element={<ProjectDetails project="project1" />} />
        <Route path="/details/project2" element={<ProjectDetails project="project2" />} />
        <Route path="/details/project3" element={<ProjectDetails project="project3" />} />
      </Routes>
    </Router>
  );
};

export default App;