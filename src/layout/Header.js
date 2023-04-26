import React, {useEffect} from "react";
import "../App.css";

const Header = () => {

	useEffect(() => {
		const select = (el, all = false) => {
			el = el.trim();
			if (all) {
				return [...document.querySelectorAll(el)];
			}
      else {
				return document.querySelector(el);
			}
		};

		const on = (type, el, listener, all = false) => {
			let selectEl = select(el, all);
			if (selectEl) {
				if (all) {
					selectEl.forEach((e) => e.addEventListener(type, listener));
				}
        else {
					selectEl.addEventListener(type, listener);
				}
			}
		};

		const onscroll = (el, listener) => {
			el.addEventListener("scroll", listener);
		};

		let navbarlinks = select("#navbar .scrollTo", true);
		const navbarlinksActive = () => {
			let position = window.scrollY + 200;
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
		window.addEventListener("load", navbarlinksActive);
		onscroll(document, navbarlinksActive);

		const scrollTo = (el) => {
			let elementPos = select(el).offsetTop;
			window.scrollTo({
				top: elementPos,
				behavior: "smooth",
			});
		};

		let backtotop = select(".back-to-top");
		if (backtotop) {
			const toggleBacktotop = () => {
				if (window.scrollY > 100) {
					backtotop.classList.add("active");
				}
        else {
					backtotop.classList.remove("active");
				}
			};
			window.addEventListener("load", toggleBacktotop);
			onscroll(document, toggleBacktotop);
		}

		on (
      "click", ".mobile-nav-toggle", function (e) {
        select("body").classList.toggle("mobile-nav-active");
        this.classList.toggle("bi-list");
        this.classList.toggle("bi-x");
		  }
    );

		on (
      "click", ".scrollTo", function (e) {
				if (select(this.hash)) {
					e.preventDefault();

					let body = select("body");
					if (body.classList.contains("mobile-nav-active")) {
						body.classList.remove("mobile-nav-active");
						let navbarToggle = select(".mobile-nav-toggle");
						navbarToggle.classList.toggle("bi-list");
						navbarToggle.classList.toggle("bi-x");
					}
					scrollTo(this.hash);
				}
			},
			true,
		);

		window.addEventListener("load", () => {
			if (window.location.hash) {
				if (select(window.location.hash)) {
					scrollTo(window.location.hash);
				}
			}
		});
	}, []);

	return (
		<header id="header">
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
			<div className="d-flex flex-column">
				<div className="profile">
					<img src={process.env.PUBLIC_URL + "/images/profile-img.jpg"} className="img-fluid rounded-circle" alt="Profile" />
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
							<a href="#portfolio" className="nav-link scrollTo">
								<i className="bx bx-book-content"></i>
								<span>Portfolio</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
