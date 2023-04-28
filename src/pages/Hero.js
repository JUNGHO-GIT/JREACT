import React, {useEffect, useRef} from "react";
import Typed from "typed.js";
import "../App.css";

function Hero() {
	const typedRef = useRef(null);
	const typedInstance = useRef(null);

	useEffect(() => {
		const typed = typedRef.current;
		if (typed) {
			let typedStrings = typed.getAttribute("data-typed-items");
			typedStrings = typedStrings.split(",");

			// 기존에 생성된 Typed 객체가 있는 경우 제거
			if (typedInstance.current) {
				typedInstance.current.destroy();
			}

			// 새 Typed 객체 생성
			typedInstance.current = new Typed(typed, {
				strings: typedStrings,
				loop: true,
				typeSpeed: 100,
				backSpeed: 50,
				backDelay: 2000,
				cursorChar: "|",
			});
		}

		// Cleanup: 컴포넌트 unmount 시 실행됩니다.
		return () => {
			if (typedInstance.current) {
				typedInstance.current.destroy();
			}
		};
	}, []);

	return (

		<section id="hero" className="d-flex flex-column justify-content-center align-items-left">
			<div className="hero-container" data-aos="fade-in">
				<h1>JUNGHO MUN</h1>
				<p>
					<span ref={typedRef} className="typed" data-typed-items="Designer,Developer,Freelancer,Photographer"></span>
				</p>
			</div>
		</section>

	);
}

export default Hero;
