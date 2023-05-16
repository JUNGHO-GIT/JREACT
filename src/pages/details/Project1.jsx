import React, {useEffect} from "react";
import Swiper from "swiper";
import Image1 from "../../assets/images/portfolio/portfolio-details-1.jpg";
import Image2 from "../../assets/images/portfolio/portfolio-details-2.jpg";
import Image3 from "../../assets/images/portfolio/portfolio-details-3.jpg";
import "../../core/App.css";

// ------------------------------------------------------------------------------------------------>
const Project1 = () => {
  const project = {
    infoTitle: ["Project Information 1"],

    infoItems: [
      {
        infoTitle: "Category",
        infoValue: "Web design",
      },
      {
        infoTitle: "Client",
        infoValue: "ASU Company",
      },
      {
        infoTitle: "Project date",
        infoValue: "01 March, 2020",
      },
      {
        infoTitle: "Project URL",
        infoValue: "www.example.com",
      },
      {
        infoTitle: "Project URL",
        infoValue: "www.example.com",
      },
    ],

    descriptionTitle1: ["Project Description"],

    descriptionValue1: ["Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius."],

    descriptionTitle2: ["Project Description"],

    descriptionValue2: ["Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius."],

    descriptionTitle3: ["Project Description"],

    descriptionValue3: ["Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius."],

    descriptionTitle4: ["Project Description"],

    descriptionValue4: ["Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius."],
  };

  // ---------------------------------------------------------------------------------------------->
  useEffect(() => {
    new Swiper(".portfolio-details-slider", {
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

  // ---------------------------------------------------------------------------------------------->
  return (
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
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
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
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
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="portfolio-description">
              <h2>{project.descriptionTitle1}</h2>
              <p>{project.descriptionValue1}</p>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="portfolio-description">
              <h2>{project.descriptionTitle2}</h2>
              <p>{project.descriptionValue2}</p>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="portfolio-description">
              <h2>{project.descriptionTitle3}</h2>
              <p>{project.descriptionValue3}</p>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="portfolio-description">
              <h2>{project.descriptionTitle4}</h2>
              <p>{project.descriptionValue4}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project1;
