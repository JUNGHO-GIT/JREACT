import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'aos/dist/aos.css';
import "boxicons/css/boxicons.min.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/swiper-bundle.min.css";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Toggle from "./components/Toggle";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Facts from "./pages/Facts";

import AOS from 'aos';
import PureCounter from "@srexi/purecounterjs";

class App extends React.Component {
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

export default App;
