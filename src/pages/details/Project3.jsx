import React, { useEffect } from "react";
import Swiper from "swiper";
import Image1 from "../../assets/images/portfolio/portfolio-details-1.jpg";
import Image2 from "../../assets/images/portfolio/portfolio-details-2.jpg";
import Image3 from "../../assets/images/portfolio/portfolio-details-3.jpg";
import "../../core/App.css";

// ------------------------------------------------------------------------------------------------>
const Project1 = () => {

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
  const project = {
    infoTitle: ["PROJECT INFO"],
    infoItems: [
      {
        title: "프로젝트명",
        content: "Meat Store",
      },
      {
        title: "주제",
        content: "육류판매 온라인전문점",
      },
      {
        title: "기간",
        content: "2023.01.05 ~ 2023.02.05",
      },
      {
        title: "참여인원",
        content: "총 4명",
      },
      {
        title: "프로젝트 주소 ",
        content: "www.example.com",
      },
    ],

    descriptionTitle1: ["1. 프론트엔드"],
    descriptionValue1: [
      {
        title: "(1) 프레임워크",
        content:
          "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque",
      },
      {
        title: "(2) 언어",
        content:
          "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque",
      },
    ],

    descriptionTitle2: ["2. 백엔드"],
    descriptionValue2: [
      {
        title: "(1) 프레임워크",
        content:
          "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque",
      },
      {
        title: "(2) 언어",
        content:
          "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque",
      },
    ],

    descriptionTitle3: ["3. 데이터베이스"],
    descriptionValue3: [
      {
        title: "(1) 프레임워크",
        content:
          "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque",
      },
      {
        title: "(2) DBMS",
        content:
          "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque",
      },
    ],

    descriptionTitle4: ["4. 서버"],
    descriptionValue4: [
      {
        title: "(1) 플랫폼",
        content: "Autem ipsum nam porro corporis rerum. Quis eos dolorem.",
      },
      {
        title: "(2) 서비스",
        content:
          "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque",
      },
    ],

    descriptionTitle5: ["5. 특징"],
    descriptionValue5: [
      {
        content:
          "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque",
      },
    ],
  };

  // ---------------------------------------------------------------------------------------------->
  return (
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
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
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="portfolio-info">
              <h3>{project.infoTitle}</h3>
              <ul>
                {project.infoItems.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}</strong> : {item.content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="portfolio-description">
              {Array.from({ length: 5 }, (value, index) => index + 1).map(
                (num) => (
                  <React.Fragment key={num}>
                    <h2>{project[`descriptionTitle${num}`]}</h2>
                    {project[`descriptionValue${num}`].map(
                      (item, itemIndex) => (
                        <div key={itemIndex}>
                          <h6 className="p">{item.title}</h6>
                          <p>{item.content}</p>
                        </div>
                      )
                    )}
                    <br />
                  </React.Fragment>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project1;