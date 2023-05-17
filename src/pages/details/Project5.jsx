import React, {useEffect} from "react";
import "../../core/App.css";
import Swiper from "swiper";
import Image1 from "../../assets/images/project/project1/portfolio-details-1.jpg";
import Image2 from "../../assets/images/project/project1/portfolio-details-2.jpg";
import Image3 from "../../assets/images/project/project1/portfolio-details-3.jpg";
import {Icons} from "../../components/common/Icons";

// ------------------------------------------------------------------------------------------------>
const Project5 = () => {

  // ---------------------------------------------------------------------------------------------->
  useEffect(() => {
    new Swiper(".swiper", {
      speed: 400,
      loop: true,
      centeredSlides: true,
      touchRatio: 0.5,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: false,
      },
    });
  }, []);

  // ---------------------------------------------------------------------------------------------->
  const infoArray = {
    infoTitle: ["PROJECT INFO"],
    infoItems: [
      {
        title: "프로젝트명",
        content: "MeatStore",
      },
      {
        title: "주제",
        content: "MVC 모델1 방식을 활용한 종합 육류 판매 웹사이트",
      },
      {
        title: "기간",
        content: "2023.02.01 ~ 2023.02.30",
      },
      {
        title: "참여인원",
        content: "총 4명(팀)",
      },
      {
        title: "프로젝트 주소 ",
        content: "www.junghomun.com/MEATSTORE"
      },
    ],
  };

  // ---------------------------------------------------------------------------------------------->
  const descArray1 = {
    destContent1: {
      descTitle: ["1. 프론트엔드"],
      value1: [
        {
          title: "- 언어",
          icon: [
            "SiHtml5", "SiCss3", "SiJavascript"
          ],
          text: [
            "HTML 5", "CSS 3", "JS ES6"
          ]
        },
      ],
      value2 : [
        {
          title: "- 프레임워크",
          icon: [
            "SiBootstrap"
          ],
          text: [
            "BOOTSTRAP 4"
          ]
        },
      ],
      value3: [
        {
          title: "- 템플릿",
          icon: [
            "BsFiletypeJava"
          ],
          text: [
            "JSP 2.3"
          ]
        },
      ],
    },
    destContent2: {
      descTitle: ["2. 백엔드"],
      value1: [
        {
          title: "- 언어",
          icon: [
            "FaJava"
          ],
          text: [
            "JAVA 1.8"
          ]
        },
      ],
      value2: [
        {
          title: "- 패키지관리, 빌드",
          icon: [
            "BsFiletypeXml"
          ],
          text: [
            "XML"
          ]
        },
      ],
    },
    destContent3: {
      descTitle: ["3. 데이터베이스"],
      value1: [
        {
          title: "- DBMS",
          icon: [
            "TbBrandMysql"
          ],
          text: [
            "MYSQL 5.5"
          ]
        },
      ],
      value2: [
        {
          title: "- 관리도구",
          icon: [
            "GiBeaver"
          ],
          text: [
            "DBEAVER 22.3"
          ]
        },
      ],
    },
    destContent4: {
      descTitle: ["4. 서버"],
      value1: [
        {
          title: "- 플랫폼",
          icon: [
            "SiApachetomcat"
          ],
          text: [
            "TOMCAT 8.0"
          ]
        },
      ],
      value2: [
        {
          title: "- 클라우드",
          icon: [
            "FcGoogle", "FcGoogle", "FcGoogle"
          ],
          text: [
            "GCP-INSTANCE", "GCP-SQL", "GCP-BUCKET"
          ]
        }
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
    },
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
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="portfolio-info">
              <h3>{infoArray.infoTitle}</h3>
              <ul>
                {infoArray.infoItems.map((item, index) => (
                  <li key={index}>
                    <div className="titleWrapper1">
                      <strong>{item.title}</strong>
                    </div>
                      :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.content}
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
                    if (key.startsWith("value")) {
                      return Object.entries(obj).map(([subKey, value]) => (
                        <div key={subKey}>
                          <p className="titleWrapper2">
                            {value.title}&nbsp;&nbsp;
                          </p>
                          {value.icon.map((icon, i) => (
                            <React.Fragment key={i}>
                              <span>
                                <Icons icon={icon} />&nbsp;&nbsp;
                                {value.text[i]}&nbsp;&nbsp;&nbsp;&nbsp;
                              </span>
                            </React.Fragment>
                          ))}
                        </div>
                      ));
                    }
                  })}
                  <br />
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
                    if (key.startsWith("value")) {
                      return Object.entries(obj).map(([subKey, value]) => (
                        <p key={subKey}>
                          <div className="titleWrapper2">
                            {value.title}&nbsp;&nbsp;
                          </div>
                          <span>{
                            value.text}&nbsp;&nbsp;
                          </span>
                        </p>
                      ));
                    }
                  })}
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project5;
