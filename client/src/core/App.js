// react ------------------------------------------------------------------------------------------>
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// plugins ---------------------------------------------------------------------------------------->
import AOS from "aos";
import PureCounter from "@srexi/purecounterjs";

// css -------------------------------------------------------------------------------------------->
import "./App.css";
import "../assets/styles/Jungho.css";
import "../assets/styles/Media.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "boxicons/css/boxicons.min.css";
import "swiper/swiper-bundle.min.css";

// components ------------------------------------------------------------------------------------->
import Resize from "../components/Resize";
import Scroll from "../components/Scroll";
import Loader from "../components/Loader";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Toggle from "../components/Toggle";
import Hover from "../components/Hover";
import Hero from "../pages/main/Hero";
import About from "../pages/main/About";
import Skills from "../pages/main/Skills";
import Portfolio from "../pages/main/Portfolio";
import Contact from "../pages/main/Contact";
import Login from "../pages/extra/Login";
import Project1 from "../pages/details/Project1";
import Project2 from "../pages/details/Project2";
import Project3 from "../pages/details/Project3";
import Project4 from "../pages/details/Project4";
import Project5 from "../pages/details/Project5";

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
        <Loader />
        <Resize />
        <Header />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
}

// ------------------------------------------------------------------------------------------------>
class ProjectDetails extends React.Component {
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
          {project === "project5" && <Project5 />}
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
        <Route path="/" element={<Main />} />
        <Route path="/loginForm" element={<Login />} />
        <Route path="/details/project1" element={<ProjectDetails project="project1" />} />
        <Route path="/details/project2" element={<ProjectDetails project="project2" />} />
        <Route path="/details/project3" element={<ProjectDetails project="project3" />} />
        <Route path="/details/project4" element={<ProjectDetails project="project4" />} />
        <Route path="/details/project5" element={<ProjectDetails project="project5" />} />
      </Routes>
    </Router>
  );
};
export default App;