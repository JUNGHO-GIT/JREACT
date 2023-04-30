// import ----------------------------------------------------------------------------------------->
import React,{useEffect} from "react";
import Swiper from "swiper";
import Image1 from "../../assets/images/portfolio/portfolio-details-1.jpg";
import Image2 from "../../assets/images/portfolio/portfolio-details-2.jpg";
import Image3 from "../../assets/images/portfolio/portfolio-details-3.jpg";
import "../../core/App.css";

// state ------------------------------------------------------------------------------------------>
const Project1 = () => {

  // array ---------------------------------------------------------------------------------------->
  const project = {

    infoTitle : [
      "Project Information 1"
    ],

    infoItems : [
      {
        infoTitle: "Category",
        infoValue: "Web design"
      },
      {
        infoTitle: "Client",
        infoValue: "ASU Company"
      },
      {
        infoTitle: "Project date",
        infoValue: "01 March, 2020"
      },
      {
        infoTitle: "Project URL",
        infoValue: "www.example.com"
      }
    ],

    descriptionTitle : [
      "Project Description"
    ],

    descriptionValue : [
      "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius."
    ]

  };

  // useEffect ------------------------------------------------------------------------------------>
  useEffect(() => {
    const swiperInstance = new Swiper(".portfolio-details-slider", {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  });

  // render --------------------------------------------------------------------------------------->
  return (

    <section id="portfolio-details" className="portfolio-details">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-8">
            <div className="portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img src={Image1} alt="Details1" />
                </div>
                <div className="swiper-slide">
                  <img src={Image2} alt="Details2" />
                </div>
                <div className="swiper-slide">
                  <img src={Image3} alt="Details3" />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="portfolio-info">
              <h3>{project.infoTitle}</h3>
              <ul>
                {project.infoItems.map((infoItem, index) => {
                  return (
                    <li key={index}>
                      <strong>{infoItem.infoTitle}</strong> : {infoItem.infoValue}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="portfolio-description">
              <h2>{project.descriptionTitle}</h2>
              <p>
                {project.descriptionValue}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Project1;
