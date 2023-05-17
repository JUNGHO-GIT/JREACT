import React, {useEffect} from "react";
import "../../core/App.css";
import Swiper from "swiper";
import Image1 from "../../assets/images/project/project1/portfolio-details-1.jpg";
import Image2 from "../../assets/images/project/project1/portfolio-details-2.jpg";
import Image3 from "../../assets/images/project/project1/portfolio-details-3.jpg";
import {Icons} from "../../components/common/Icons";

// ------------------------------------------------------------------------------------------------>
const Project3 = () => {

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
        content: "JUNGHQLO",
      },
      {
        title: "주제",
        content: "BOOT를 활용한 남성의류 쇼핑몰 웹사이트",
      },
      {
        title: "기간",
        content: "2023.04.01 ~ 2023.04.30",
      },
      {
        title: "참여인원",
        content: "총 1명(개인)",
      },
      {
        title: "프로젝트 주소 ",
        content: "www.junghomun.com/JUNGHQLO"
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
            "SiThymeleaf", "BsFiletypeJava"
          ],
          text: [
            "THYMELEAF 2.5", "JSP 2.3"
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
            "JAVA 17"
          ]
        },
      ],
      value2: [
        {
          title: "- 프레임워크",
          icon: [
            "SiSpringboot"
          ],
          text: [
            "BOOT 2.7"
          ]
        },
      ],
      value3: [
        {
          title: "- 패키지관리, 빌드",
          icon: [
            "SiApachemaven", "BsFiletypeXml", "SiJson"
          ],
          text: [
            "MAVEN 4", "XML", "JSON"
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
            "MYSQL 8.0"
          ]
        },
      ],
      value2: [
        {
          title: "- 프레임워크, 관리",
          icon: [
            "SiBower", "GiBeaver"
          ],
          text: [
            "MYBATIS 3.5", "DBEAVER 22.3"
          ]
        }
      ],
    },
  };
  const descArray2 = {
    destContent1: {
      descTitle: ["4. 서버"],
      value1: [
        {
          title: "- 플랫폼",
          icon: [
            "SiApachetomcat", "SiApache"
          ],
          text: [
            "TOMCAT 9.0", "APACHE"
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
    destContent2: {
      descTitle: ["4. 특징"],
      value1: [
        {
          title: "- 특징1",
          icon: ["SiApache"],
          text: [
            "blabla"
          ],
        },
      ],
      value2: [
        {
          title: "- 특징2",
          icon: ["SiApache"],
          text: [
            "blabla"
          ],
        },
      ],
      value3: [
        {
          title: "- 특징3",
          icon: ["SiApache"],
          text: [
            "blabla"
          ],
        },
      ],
      value4: [
        {
          title: "- 특징4",
          icon: ["SiApache"],
          text: [
            "blabla"
          ],
        },
      ],
      value5: [
        {
          title: "- 특징5",
          icon: ["SiApache"],
          text: [
            "blabla"
          ],
        }
      ],
    },
  };

  // ---------------------------------------------------------------------------------------------->
  return (
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
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
        </div>
        <div class="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="portfolio-info">
              <h3>{infoArray.infoTitle}</h3>
                {infoArray.infoItems.map((item, index) => (
                  <div key={index}>
                    <h5 className="fw-8 titleWrapper1">
                      {item.title}&nbsp;&nbsp;
                    </h5>
                    <span>
                      =&nbsp;&nbsp;&nbsp;&nbsp;{item.content}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div class="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 jungho-col1">
            <div className="portfolio-info">
              {Object.entries(descArray1).map(([key, value]) => (
                <div key={key}>
                  <h3>{value.descTitle}</h3>
                  {Object.entries(value).map(([key, obj]) => {
                    if (key.startsWith("value")) {
                      return Object.entries(obj).map(([subKey, value]) => (
                        <div key={subKey} style={{ marginBottom: "20px" }}>
                          <h6 className="fw-8 titleWrapper2">
                            {value.title}&nbsp;&nbsp;
                          </h6>
                          {value.icon.map((icon, i) => (
                            <React.Fragment key={i}>
                              <span>
                                <Icons icon={icon} />&nbsp;&nbsp;
                                {value.text[i]}&nbsp;&nbsp;
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
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 jungho-col2">
            <div className="portfolio-info">
              {Object.entries(descArray2).map(([key, value]) => (
                <div key={key}>
                  <h3>{value.descTitle}</h3>
                  {Object.entries(value).map(([key, obj]) => {
                    if (key.startsWith("value")) {
                      return Object.entries(obj).map(([subKey, value]) => (
                        <div key={subKey} style={{ marginBottom: "20px" }}>
                          <h6 className="fw-8 titleWrapper2">
                            {value.title}&nbsp;&nbsp;
                          </h6>
                          {value.icon.map((icon, i) => (
                            <React.Fragment key={i}>
                              <span>
                                <Icons icon={icon} />&nbsp;&nbsp;
                                {value.text[i]}&nbsp;&nbsp;
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
        </div>
      </div>
    </section>
  );
};
export default Project3;
