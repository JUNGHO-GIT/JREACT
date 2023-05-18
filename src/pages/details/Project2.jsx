import React, {useEffect} from "react";
import Swiper from "swiper";
import Image1 from "../../assets/images/project/project1/portfolio-details-1.jpg";
import Image2 from "../../assets/images/project/project1/portfolio-details-2.jpg";
import Image3 from "../../assets/images/project/project1/portfolio-details-3.jpg";
import "../../core/App.css";
import {Icons} from "../../components/common/Icons";

// ------------------------------------------------------------------------------------------------>
const Project2 = () => {

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
  const itemsArray1 = {
    items1: {
      mainTitle: [{
        title : "정보",
        icon : ["FcSearch"]
      }],
      value1: [{
        title: "프로젝트명",
        icon1: ["FcExpand"],
        text: ["JLINT",],
        icon2: ["RxDash"],
      }],
      value2: [{
        title: "주제",
        icon1: ["FcExpand"],
        text: ["NODEJS 및 TS를 활용한 VSCODE 언어 린팅 확장프로그램"],
        icon2: ["RxDash"],
      }],
      value3: [{
        title: "기간",
        icon1: ["FcExpand"],
        text: ["2023.05.01 ~ 2023.05.15"],
        icon2: ["RxDash"],
      }],
      value4: [{
        title: "참여인원",
        icon1: ["FcExpand"],
        text: ["총 1명(개인)"],
        icon2: ["RxDash"],
      }],
      value5: [{
        title: "프로젝트 주소 ",
        icon1: ["FcExpand"],
        text: ["www.junghomun.com/JLINT"],
        icon2: ["RxDash"],
      }],
    },
    items2: {
      mainTitle: [{
        title : "특징",
        icon : ["FcSearch"]
      }],
      value1: [{
        title: "특징1",
        icon1: ["FcExpand"],
        text: ["blabla"],
        icon2: ["RxDash"],
      }],
      value2: [{
        title: "특징2",
        icon1: ["FcExpand"],
        text: ["blabla"],
        icon2: ["RxDash"],
      }],
      value3: [{
        title: "특징3",
        icon1: ["FcExpand"],
        text: ["blabla"],
        icon2: ["RxDash"],
      }],
      value4: [{
        title: "특징4",
        icon1: ["FcExpand"],
        text: ["blabla"],
        icon2: ["RxDash"],
      }],
      value5: [{
        title: "특징5",
        icon1: ["FcExpand"],
        text: ["blabla"],
        icon2: ["RxDash"],
      }],
    },
  }

  // ---------------------------------------------------------------------------------------------->
  const itemsArray2 = {
    items1: {
      mainTitle: [{
        title : "프론트엔드",
        icon : ["FcSettings"]
      }],
      value1: [{
        title: "언어",
        icon1: ["FcCursor"],
        text: ["HTML 5", "MARKDOWN"],
        icon2: ["SiHtml5", "SiMarkdown"]
      }]
    },
    items2: {
      mainTitle: [{
        title : "백엔드",
        icon : ["FcSettings"]
      }],
      value1: [{
        title: "언어",
        icon1: ["FcCursor"],
        text: ["NODEJS 16", "JS ES6", "TS ES6"],
        icon2: ["FaNodeJs", "SiJavascript", "SiTypescript"],
      }],
      value2: [{
        title: "패키지관리, 빌드",
        icon1: ["FcCursor"],
        text: ["NPM", "GITHUB", "JSON"],
        icon2: ["FaNpm", "SiGithub","SiJson"],
      }],
    },
    items3: {
      mainTitle: [{
        title : "서버",
        icon : ["FcSettings"]
      }],
      value1: [{
        title: "플랫폼",
        icon1: ["FcCursor"],
        text: ["APACHE", "NGINX"],
        icon2: ["SiApache", "SiNginx"],
      }],
    },
    items4: {
      mainTitle: [{
        title : "API",
        icon : ["FcSettings"]
      }],
      value1: [{
        title: "플랫폼",
        icon1: ["FcCursor"],
        text: ["VSCODE-API 1.78"],
        icon2: ["TbBrandVscode"],
      }],
    },
  };

  // ---------------------------------------------------------------------------------------------->
  return (
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">

        {/** main image **/}
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

        {/** main info **/}
        <div class="row">

          {/** left side **/}
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 jungho-col-left">
            <div className="portfolio-info">
              {Object.entries(itemsArray1).map(([key, index]) => (
                <div key={key}>
                  {index.mainTitle.map((titleObj, titleIdx) => (
                    <h3 key={titleIdx}>
                      {titleObj.icon.map((icon, i) => (
                        <span key={i}>
                          <Icons icon={icon} />&nbsp;
                        </span>
                      ))}
                      {titleObj.title}
                    </h3>
                  ))}
                  {Object.entries(index).filter(([key2]) => key2.startsWith("value")).map(([key2, valueArray]) => (
                    valueArray.map((item, itemIdx) => (
                      <div key={`${key2}-${itemIdx}`} style={{ marginBottom: "20px" }}>
                        <h6 className="fw-8 titleWrapper2">
                          {item.icon1.map((icon, i) => (
                            <span key={i}>
                              <Icons icon={icon} />&nbsp;
                            </span>
                          ))}
                          {item.title}&nbsp;
                        </h6>
                        {item.icon2.map((icon, i) => (
                          <span key={i}>
                            <Icons icon={icon}/>&nbsp;
                            {item.text[i]}&nbsp;
                          </span>
                        ))}
                      </div>
                    ))
                  ))}
                  <br />
                </div>
              ))}
            </div>
          </div>

          {/** right side **/}
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 jungho-col-right">
            <div className="portfolio-info">
              {Object.entries(itemsArray2).map(([key, index]) => (
                <div key={key}>
                  {index.mainTitle.map((titleObj, titleIdx) => (
                    <h3 key={titleIdx}>
                      {titleObj.icon.map((icon, i) => (
                        <span key={i}>
                          <Icons icon={icon} />&nbsp;
                        </span>
                      ))}
                      {titleObj.title}
                    </h3>
                  ))}
                  {Object.entries(index).filter(([key2]) => key2.startsWith("value")).map(([key2, valueArray]) => (
                    valueArray.map((item, itemIdx) => (
                      <div key={`${key2}-${itemIdx}`} style={{ marginBottom: "20px" }}>
                        <h6 className="fw-8 titleWrapper2">
                          {item.icon1.map((icon, i) => (
                            <span key={i}>
                              <Icons icon={icon} />&nbsp;
                            </span>
                          ))}
                          {item.title}&nbsp;
                        </h6>
                        {item.icon2.map((icon, i) => (
                          <span key={i}>
                            <Icons icon={icon} />&nbsp;
                            {item.text[i]}&nbsp;
                          </span>
                        ))}
                      </div>
                    ))
                  ))}
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
export default Project2;
