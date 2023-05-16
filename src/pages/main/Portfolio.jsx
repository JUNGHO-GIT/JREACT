import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import Image1 from "../../assets/images/portfolio/portfolio-1.jpg";
import Image2 from "../../assets/images/portfolio/portfolio-2.jpg";
import Image3 from "../../assets/images/portfolio/portfolio-3.jpg";
import "../../core/App.css";

// ------------------------------------------------------------------------------------------------>
const Portfolio = () => {
  const Items = {
    title: ["Portfolios"],

    description: ["Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia."],

    items1: [
      {
        id: 1,
        filter: "filter-app",
        imgSrc: Image1,
        title: "App 1",
      },
    ],

    items2: [
      {
        id: 2,
        filter: "filter-card",
        imgSrc: Image2,
        title: "App 2",
      },
    ],

    items3: [
      {
        id: 3,
        filter: "filter-web",
        imgSrc: Image3,
        title: "App 3",
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
      let allFilter = document.querySelector("#portfolio-filters li[data-filter="*"]");
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

    const portfolioLightbox = GLightbox({
      selector: ".portfolio-lightbox",
    });
  }, []);

  // ---------------------------------------------------------------------------------------------->
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>{Items.title}</h2>
          <p>{Items.description}</p>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              <li data-filter="*" className="text-hover">
                All
              </li>
              <li data-filter=".filter-app" className="text-hover">
                1
              </li>
              <li data-filter=".filter-card" className="text-hover">
                2
              </li>
              <li data-filter=".filter-web" className="text-hover">
                3
              </li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          {[...Items.items1, ...Items.items2, ...Items.items3].map((item) => (
            <div key={item.id} className={`col-lg-4 col-md-4 col-sm-4 col-xs-12 col-12 portfolio-item ${item.filter}`}>
              <div className="portfolio-wrap">
                <img src={item.imgSrc} className="img-fluid" alt={item.title} />
                <div className="portfolio-links">
                  <a href={item.imgSrc} data-gallery="portfolioGallery" className="portfolio-lightbox" title={item.title}>
                    <i className="bx bx-plus"></i>
                  </a>
                  <Link to={`/details/project${item.id}`} title="More Details">
                    <i className="bx bx-link"></i>
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
