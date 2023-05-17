import React, {useEffect} from "react";
import Swiper from "swiper";
import Image1 from "../../assets/images/portfolio/portfolio-details-1.jpg";
import Image2 from "../../assets/images/portfolio/portfolio-details-2.jpg";
import Image3 from "../../assets/images/portfolio/portfolio-details-3.jpg";
import "../../core/App.css";
import {Icons} from "../../components/common/Icons";

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
  const infoArray = {
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
  };
  const descArray1 = {
    destContent1: {
      descTitle: ["1. 프론트엔드"],
      value1: [
        {
          title: "- 프레임워크",
          icon: "SiReact",
          text: "React",
        },
      ],
      value2: [
        {
          title: "- 언어",
          icon: "SiHtml5",
          text: "HTML5",
        },
      ],
    },
    destContent2: {
      descTitle: ["2. 백엔드"],
      value1: [
        {
          title: "- 프레임워크",
          icon: "SiHtml5",
          text: "HTML5",
        },
      ],
      value2: [
        {
          title: "- 언어",
          icon: "SiHtml5",
          text: "HTML5",
        },
      ],
    },
    destContent3: {
      descTitle: ["3. 데이터베이스"],
      value1: [
        {
          title: "- 프레임워크",
          icon: "SiHtml5",
          text: "HTML5",
        },
      ],
      value2: [
        {
          title: "- 언어",
          icon: "SiHtml5",
          text: "HTML5",
        },
      ],
    },
    destContent4: {
      descTitle: ["4. 서버"],
      value1: [
        {
          title: "- 프레임워크",
          icon: "SiHtml5",
          text: "HTML5",
        },
      ],
      value2: [
        {
          title: "- 언어",
          icon: "SiHtml5",
          text: "HTML5",
        },
      ],
    },
  };

  const descArray2 = {
    destContent5: {
      descTitle: ["5. 특징"],
      value1: [
        {
          title: "- 특징1",
          text: "blabla",
        },
      ],
      value2: [
        {
          title: "- 특징2",
          text: "blabla",
        },
      ],
      value3: [
        {
          title: "- 특징3",
          text: "blabla",
        },
      ],
      value4: [
        {
          title: "- 특징4",
          text: "blabla",
        },
      ],
      value5: [
        {
          title: "- 특징5",
          text: "blabla",
        },
      ],
      value6: [
        {
          title: "- 특징6",
          text: "blabla",
        },
      ],
    }
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
              <h3>{infoArray.infoTitle}</h3>
              <ul>
                {infoArray.infoItems.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}</strong> : {item.content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="portfolio-description">
              {Object.entries(descArray1).map(([key, value]) => (
                <div key={key}>
                  <h3>{value.descTitle}</h3>
                  {Object.entries(value).map(([key, obj]) => {
                    if (key.startsWith('value')) {
                      return Object.entries(obj).map(([subKey, value]) => (
                        <p key={subKey}>
                          {value.title}&nbsp;&nbsp;
                          <span>
                            <Icons icon={value.icon}/>
                          </span>
                          <span>
                            {value.text}&nbsp;&nbsp;
                          </span>
                        </p>
                      ));
                    }
                  })}
                  <br/>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="portfolio-description">
              {Object.entries(descArray2).map(([key, value]) => (
                <div key={key}>
                  <h3>{value.descTitle}</h3>
                  {Object.entries(value).map(([key, obj]) => {
                    if (key.startsWith('value')) {
                      return Object.entries(obj).map(([subKey, value]) => (
                        <p key={subKey}>
                          {value.title}&nbsp;&nbsp;
                          <span>
                            {value.text}&nbsp;&nbsp;
                          </span>
                        </p>
                      ));
                    }
                  })}
                  <br/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project1;
