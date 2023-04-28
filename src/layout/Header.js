import React, {useEffect, useRef} from "react";
import "../app/App.css";

function Header() {
	const navToggleRef = useRef(null);
	const sideNavRef = useRef(null);

	const onMobileNavToggleClick = (e) => {
		document.body.classList.toggle("mobile-nav-active");
		e.currentTarget.classList.toggle("bi-list");
		e.currentTarget.classList.toggle("bi-x");
	};

	const handleClickOutside = (e) => {
		if (navToggleRef.current && !navToggleRef.current.contains(e.target) && !sideNavRef.current.contains(e.target) && document.body.classList.contains("mobile-nav-active")) {
			document.body.classList.remove("mobile-nav-active");
			navToggleRef.current.classList.toggle("bi-list");
			navToggleRef.current.classList.toggle("bi-x");
		}
	};

	const select = (el, all = false) => {
		el = el.trim();
		if (all) {
			return [...document.querySelectorAll(el)];
		} else {
			return document.querySelector(el);
		}
	};

	const onNavItemClick = (e, hash) => {
		e.preventDefault();
		if (select(hash)) {
			let body = select("body");
			if (body.classList.contains("mobile-nav-active")) {
				body.classList.remove("mobile-nav-active");
				let navbarToggle = select(".mobile-nav-toggle");
				navbarToggle.classList.toggle("bi-list");
				navbarToggle.classList.toggle("bi-x");
			}
			const element = select(hash);
			if (element) {
				element.scrollIntoView({
					behavior: "smooth",
					block: "start",
					inline: "nearest",
				});
			}
		}
	};

	const scrollTo = (hash) => {
		let elementPos = select(hash).offsetTop;
		window.scrollTo({
			top: elementPos,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const navbarlinksActive = () => {
			let position = window.scrollY + 200;
			let navbarlinks = select("#navbar .scrollTo", true);
			navbarlinks.forEach((navbarlink) => {
				if (!navbarlink.hash) return;
				let section = select(navbarlink.hash);
				if (!section) return;
				if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
					navbarlink.classList.add("active");
				} else {
					navbarlink.classList.remove("active");
				}
			});
		};

		const toggleBacktotop = () => {
			let backtotop = select(".back-to-top");
			if (backtotop) {
				if (window.scrollY > 100) {
					backtotop.classList.add("active");
				} else {
					backtotop.classList.remove("active");
				}
			}
		};

		window.addEventListener("load", navbarlinksActive);
		window.addEventListener("load", toggleBacktotop);
		window.addEventListener("scroll", navbarlinksActive);
		window.addEventListener("scroll", toggleBacktotop);
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("load", navbarlinksActive);
			window.removeEventListener("load", toggleBacktotop);
			window.removeEventListener("scroll", navbarlinksActive);
			window.removeEventListener("scroll", toggleBacktotop);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (

		<>
			<i ref={navToggleRef} className="bi bi-list mobile-nav-toggle d-xl-none" onClick={onMobileNavToggleClick}></i>
			<header id="header" ref={sideNavRef}>
				<div className="d-flex flex-column">
					<div className="profile">
						<img src="/images/profile2.jpg" className="img-fluid rounded-circle" alt="Profile"/>
						<h1 className="text-light">
							<a href="/">JUNGHO MUN</a>
						</h1>
						<div className="social-links mt-3 text-center">
							<a href="/twitter" className="twitter">
								<i className="bx bxl-twitter"></i>
							</a>
							<a href="/facebook" className="facebook">
								<i className="bx bxl-facebook"></i>
							</a>
							<a href="/instagram" className="instagram">
								<i className="bx bxl-instagram"></i>
							</a>
							<a href="/google-plus" className="google-plus">
								<i className="bx bxl-skype"></i>
							</a>
							<a href="/linkedin" className="linkedin">
								<i className="bx bxl-linkedin"></i>
							</a>
						</div>
					</div>
					<nav id="navbar" className="nav-menu navbar">
						<ul>
							<li>
								<a href="#hero" className="nav-link scrollTo active">
									<i className="bx bx-home"></i>
									<span>Home</span>
								</a>
							</li>
							<li>
								<a href="#about" className="nav-link scrollTo">
									<i className="bx bx-user"></i>
									<span>About</span>
								</a>
							</li>
							<li>
								<a href="#resume" className="nav-link scrollTo">
									<i className="bx bx-file-blank"></i>
									<span>Resume</span>
								</a>
							</li>
              <li>
                <a href="#skills" className="nav-link scrollTo">
                  <i className="bx bx-book-content"></i>
                  <span>Skills</span>
                </a>
              </li>
              <li>
                <a href="#facts" className="nav-link scrollTo">
                  <i className="bx bx-book-content"></i>
                  <span>Facts</span>
                </a>
              </li>
							<li>
								<a href="#portfolio" className="nav-link scrollTo">
									<i className="bx bx-book-content"></i>
									<span>Portfolio</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>

	);
}
export default Header;
