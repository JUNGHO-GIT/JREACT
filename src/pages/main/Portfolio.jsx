import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Isotope from "isotope-layout";
import Image1 from "../../assets/images/portfolio/portfolio-1.jpg";
import Image2 from "../../assets/images/portfolio/portfolio-2.jpg";
import Image3 from "../../assets/images/portfolio/portfolio-3.jpg";
import "../../core/App.css";

// ------------------------------------------------------------------------------------------------>
const Portfolio = () => {
  const itemsArray = {
    title: ["Portfolios"],
    items: [
      {
        id: "1",
        filter: "filter-app",
        imgSrc: Image1,
        title: "App 1",
        icon: "bx bxl-nodejs",
        color: "#2ecc71",
      },
      {
        id: "2",
        filter: "filter-card",
        imgSrc: Image2,
        title: "App 2",
        icon: "bx bxl-react",
        color: "#61dbfb",
      },
      {
        id: "3",
        filter: "filter-web",
        imgSrc: Image3,
        title: "App 3",
        icon: "bx bxl-javascript",
        color: "#f0db4f",
      },
      {
        id: "4",
        filter: "filter-app",
        imgSrc: Image1,
        title: "App 1",
        icon: "bx bxl-bootstrap",
        color: "#7952b3",
      },
      {
        id: "5",
        filter: "filter-card",
        imgSrc: Image2,
        title: "App 2",
        icon: "bx bxl-css3",
        color: "#1572b6",
      },
      {
        id: "6",
        filter: "filter-web",
        imgSrc: Image3,
        title: "App 3",
        icon: "bx bxl-html5",
        color: "#e34f26",
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
    <section id="portfolio" className="portfolio section-bg">
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
                    <i className={item.icon} style={{color: item.color}}></i>
                  </span>
                </div>
                <div className="portfolio-links">
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
