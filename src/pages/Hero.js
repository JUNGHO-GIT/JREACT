import React, {useEffect, useRef} from "react";
import Typed from "typed.js";
import "../App.css";

function Hero() {
	const typedRef = useRef(null);

	useEffect(() => {
		const typed = typedRef.current;
		if (typed) {
			let typedStrings = typed.getAttribute("data-typed-items");
			typedStrings = typedStrings.split(",");
			new Typed(typed, {
				strings: typedStrings,
				loop: true,
				typeSpeed: 100,
				backSpeed: 50,
				backDelay: 2000,
			});
		}
	}, []);

	return (
		<section id="hero" className="d-flex flex-column justify-content-center align-items-center">
			<div className="hero-container" data-aos="fade-in">
				<h1>JUNGHO MUN</h1>
				<p>
					<span ref={typedRef} className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span>
				</p>
			</div>
		</section>
	);
}

export default Hero;
