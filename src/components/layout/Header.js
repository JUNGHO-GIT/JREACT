// import ----------------------------------------------------------------------------------------->
import React, {useEffect, useRef} from "react";
import Image from "../../assets/images/main/profile2.jpg";
import "../../core/App.css";

// state ------------------------------------------------------------------------------------------>
const Header = () => {

  // variables ------------------------------------------------------------------------------------>
	const navToggleRef = useRef(null);
	const sideNavRef = useRef(null);

  // arrays --------------------------------------------------------------------------------------->
  const Items = {

    socialLink : [
      { id: 1, name: "Twitter",   url: "https://twitter.com"    },
      { id: 2, name: "Facebook",  url: "https://facebook.com"   },
      { id: 3, name: "Instagram", url: "https://instagram.com"  },
      { id: 4, name: "Linkedin",  url: "https://linkedin.com"   },
    ],

    navLink : [
      { id: 1, name: "Home",      url: "#home",      icon: "bx bx-home" },
      { id: 2, name: "About",     url: "#about",     icon: "bx bx-user" },
      { id: 3, name: "Resume",    url: "#resume",    icon: "bx bx-file-blank" },
      { id: 4, name: "Skills",    url: "#skills",    icon: "bx bx-book-heart" },
      { id: 5, name: "Facts",     url: "#facts",     icon: "bx bx-receipt" },
      { id: 6, name: "Portfolio", url: "#portfolio", icon: "bx bx-book-content" },
    ],

  };

  // onMobileNavToggleClick() --------------------------------------------------------------------->
	const onMobileNavToggleClick = (e) => {
		document.body.classList.toggle("mobile-nav-active");
		e.currentTarget.classList.toggle("bi-list");
		e.currentTarget.classList.toggle("bi-x");
	};

  // handleClickOutside() ------------------------------------------------------------------------->
	const handleClickOutside = (e) => {
		if (navToggleRef.current && !navToggleRef.current.contains(e.target) && !sideNavRef.current.contains(e.target) && document.body.classList.contains("mobile-nav-active")) {
			document.body.classList.remove("mobile-nav-active");
			navToggleRef.current.classList.toggle("bi-list");
			navToggleRef.current.classList.toggle("bi-x");
		}
	};

  // select() ------------------------------------------------------------------------------------->
	const select = (el, all = false) => {
		el = el.trim();
		if (all) {
			return [...document.querySelectorAll(el)];
		}
    else {
			return document.querySelector(el);
		}
	};

  // onNavItemClick() ---------------------------------------------------------------------------->
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

  // scrollTo() ----------------------------------------------------------------------------------->
	const scrollTo = (hash) => {
		let elementPos = select(hash).offsetTop;
		window.scrollTo({
			top: elementPos,
			behavior: "smooth",
		});
	};

  // useEffect() ---------------------------------------------------------------------------------->
	useEffect(() => {

    // navbarlinksActive() ------------------------------------------------------------------------>
		const navbarlinksActive = () => {
			let position = window.scrollY + 200;
			let navbarlinks = select("#navbar .scrollTo", true);
			navbarlinks.forEach((navbarlink) => {
				if (!navbarlink.hash) return;
				let section = select(navbarlink.hash);
				if (!section) return;
				if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
					navbarlink.classList.add("active");
				}
        else {
					navbarlink.classList.remove("active");
				}
			});
		};

    // toggleBacktotop() -------------------------------------------------------------------------->
		const toggleBacktotop = () => {
			let backtotop = select(".back-to-top");
			if (backtotop) {
				if (window.scrollY > 100) {
					backtotop.classList.add("active");
				}
        else {
					backtotop.classList.remove("active");
				}
			}
		};

    // window.addEventListener() ------------------------------------------------------------------>
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

  // return --------------------------------------------------------------------------------------->
	return (
    <>
      <i
        ref={navToggleRef}
        className="bi bi-list mobile-nav-toggle d-xl-none"
        onClick={onMobileNavToggleClick}
      ></i>
      <header id="header" ref={sideNavRef}>
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={Image} className="img-fluid rounded-circle" alt="Profile" />
            <h1 className="text-light">
              <a href="/">JUNGHO MUN</a>
            </h1>
            <div className="social-links mt-3 text-center">
              {Items.socialLink.map((link) => (
                <a key={link.id} href={link.url} className={link.name.toLowerCase()}>
                  <i className={`bx bxl-${link.name.toLowerCase()}`}></i>
                </a>
              ))}
            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              {Items.navLink.map((navItem) => (
                <li key={navItem.id}>
                  <a
                    href={navItem.url}
                    className={`nav-link scrollTo ${
                      navItem.name === "Home" ? "active" : ""
                    }`}
                  >
                    <i className={navItem.icon}></i>
                    <span>{navItem.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
