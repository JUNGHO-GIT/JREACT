import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

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
import Resume from "../pages/main/Resume";
import Skills from "../pages/main/Skills";
import Facts from "../pages/main/Facts";

import AOS from "aos";
import PureCounter from "@srexi/purecounterjs";


// Main
class Main extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
    new PureCounter();
  }
  render() {
    return (
      <Router>
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
      </Router>
    );
  }
}

// Details

// Portfolio

// Return
const App = () => {
  return <Main />;
}

export default App;
