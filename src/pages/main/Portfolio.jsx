import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Isotope from "isotope-layout";
import {Tooltip} from "react-tooltip";
import Image1 from "../../assets/images/portfolio/portfolio-1.jpg";
import Image2 from "../../assets/images/portfolio/portfolio-2.jpg";
import Image3 from "../../assets/images/portfolio/portfolio-3.jpg";
import "../../core/App.css";

import {FaJava, FaNodeJs, FaNpm} from "react-icons/fa";
import {FcGoogle, FcLinux} from "react-icons/fc";
import {BsFiletypeXml, BsFiletypeJava} from "react-icons/bs";
import {SiSpring, SiSpringboot, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiMysql, SiOracle, SiJson, SiGradle, SiJquery, SiApache, SiGithub, SiReact, SiApachemaven, SiThymeleaf, SiApachetomcat, SiBower, SiWindows, SiMariadb} from "react-icons/si";

// ------------------------------------------------------------------------------------------------>
const Portfolio = () => {
  const itemsArray = {
    title: ["Portfolios"],
    items: [
      {
        id: "1",
        filter: "filter-app",
        imgSrc: Image1,
        title: "JREACT",
        desc: "Portfolio React",
        icon: SiReact,
        color: "#61dbfb",
      },
      {
        id: "2",
        filter: "filter-card",
        imgSrc: Image2,
        title: "JLINT",
        desc: "Vscode Language Formatter Extension",
        icon: FaNodeJs,
        color: "#2ecc71",
      },
      {
        id: "3",
        filter: "filter-web",
        imgSrc: Image3,
        title: "JUNGHQLO",
        desc: "Online Clothing Shopping Store",
        icon: SiSpringboot,
        color: "#6db33f",
      },
      {
        id: "4",
        filter: "filter-app",
        imgSrc: Image1,
        title: "Good Neighbor",
        desc: "Charity and Donation Website",
        icon: SiSpring,
        color: "#6db33f",
      },
      {
        id: "5",
        filter: "filter-card",
        imgSrc: Image2,
        title: "Meat Store",
        desc: "Online Meat Shopping Store",
        icon: FaJava,
        color: "#e51f24",
      },
    ],
  };

  // ---------------------------------------------------------------------------------------------->
  useEffect(() => {
    const portfolioContainer = document.querySelector(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });
      let portfolioFilters = document.querySelectorAll("#portfolio-filters li");
      let allFilter = document.querySelector("#portfolio-filters li[data-filter=" * "]");
      portfolioFilters.forEach(function  (el, index)  {
        el.addEventListener("click", function  (e)  {
          e.preventDefault();
          portfolioFilters.forEach(function  (el)  {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");
          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
        });
        if (index === 0) {
          el.classList.add("filter-active");
          portfolioIsotope.arrange({
            filter: el.getAttribute("data-filter"),
          });
        }
        if (allFilter) {
          allFilter.classList.add("filter-active");
          portfolioIsotope.arrange({
            filter: allFilter.getAttribute("data-filter"),
          });
        }
      });
    }
  }, []);

  // ---------------------------------------------------------------------------------------------->
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>{itemsArray.title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              <li data-filter="*">All</li>
              <li data-filter=".filter-app">1</li>
              <li data-filter=".filter-card">2</li>
              <li data-filter=".filter-web">3</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          {itemsArray.items.map((item) => (
            <div key={item.id} className={`col-lg-4 col-md-4 col-sm-4 col-xs-12 col-12 portfolio-item ${item.filter}`}>
              <div className="portfolio-wrap">
                <div className="image-container">
                  <img src={item.imgSrc} className="img-fluid" alt={item.title} />
                  <span className="overlay-icon">
                    <item.icon color={item.color} />
                  </span>
                </div>
                <div className="portfolio-links" data-tooltip-id={item.id}>
                  <Tooltip id={item.id} place="top" effect="float">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </Tooltip>
                  <Link to={`/details/project${item.id}`} title="More Details">
                    <i className="bx bx-search-alt-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
