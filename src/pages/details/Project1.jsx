import React, {useEffect} from "react";
import Swiper from "swiper";
import "../../core/App.css";
import {Icons} from "../../components/common/Icons";
import Image1 from "../../assets/images/project/project1/1.png";
import Image2 from "../../assets/images/project/project1/2.png";
import Image3 from "../../assets/images/project/project1/3.png";
import Image4 from "../../assets/images/project/project1/4.png";
import Image5 from "../../assets/images/project/project1/5.png";

// ------------------------------------------------------------------------------------------------>
const Project1 = () => {

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
        icon1 : ["FcSearch"]
      }],
      value1: [{
        title: "프로젝트명",
        icon1: ["FcExpand"],
        text:  ["JREACT",],
        icon2: ["RxDash"],
      }],
      value2: [{
        title: "주제",
        icon1: ["FcExpand"],
        text:  ["React를 활용한 개인 포트폴리오 웹사이트"],
        icon2: ["RxDash"],
      }],
      value3: [{
        title: "기간",
        icon1: ["FcExpand"],
        text:  ["2023.01.05 ~ 2023.02.05"],
        icon2: ["RxDash"],
      }],
      value4: [{
        title: "참여인원",
        icon1: ["FcExpand"],
        text:  ["총 1명(개인)"],
        icon2: ["RxDash"],
      }],
      value5: [{
        title: "프로젝트 주소 ",
        icon1: ["FcExpand"],
        text:  ["www.junghomun.com/JREACT"],
        icon2: ["RxDash"],
        isLink : [true],
      }],
    },
    items2: {
      mainTitle: [{
        title : "특징",
        icon1 : ["FcSearch"]
      }],
      value1: [{
        title: "리액트 프레임워크",
        icon1: ["FcExpand"],
        text:  ["React Framework(v18) 를 활용, SPA방식의 종합 포트폴리오 웹사이트 제작"],
        icon2: ["RxDash"],
      }],
      value2: [{
        title: "리액트 훅 & 라우터",
        icon1: ["FcExpand"],
        text:  ["React Hooks와 React Router를 활용하여 효율적 상태 관리와 동적 라우팅을 구현"],
        icon2: ["RxDash"],
      }],
      value3: [{
        title: "컴포넌트 기반 설계",
        icon1: ["FcExpand"],
        text:  ["컴포넌트 기반의 구조 설계를 통한 효율적인 상태 관리 및 코드 재사용성 확보"],
        icon2: ["RxDash"],
      }],
      value4: [{
        title: "반응형 웹",
        icon1: ["FcExpand"],
        text:  ["React Bootstrap(v5)를 활용, 모바일 환경에서도 최적화된 UI/UX를 제공하는 유저 친화적 반응형 웹페이지 설계"],
        icon2: ["RxDash"],
      }],
      value5: [{
        title: "서버 배포 및 도메인 연결",
        icon1: ["FcExpand"],
        text:  ["Google Cloud Platform(GCP)의 Instance 에 Apache2, Nginx를 설치하여 서버 배포, 개인 도메인 주소에 연결"],
        icon2: ["RxDash"],
      }],
    },
  }

  // ---------------------------------------------------------------------------------------------->
  const itemsArray2 = {
    items1: {
      mainTitle: [{
        title : "프론트엔드",
        icon1 : ["FcSettings"]
      }],
      value1: [{
        title: "언어",
        icon1: ["FcCursor"],
        text:  ["HTML", "CSS", "JS", "TS"],
        icon2: ["SiHtml5", "SiCss3", "SiJavascript", "SiTypescript"],
      }],
      value2: [{
        title: "프레임워크",
        icon1: ["FcCursor"],
        text:  ["REACT", "BOOTSTRAP"],
        icon2: ["SiReact", "SiBootstrap"],
      }],
    },
    items2: {
      mainTitle: [{
        title : "백엔드",
        icon1 : ["FcSettings"]
      }],
      value1: [{
        title: "언어",
        icon1: ["FcCursor"],
        text:  ["NODEJS"],
        icon2: ["FaNodeJs"],
      }],
      value2: [{
        title: "패키지관리, 빌드",
        icon1: ["FcCursor"],
        text:  ["NPM", "GITHUB", "JSON"],
        icon2: ["FaNpm", "SiGithub","SiJson"],
      }],
    },
    items3: {
      mainTitle: [{
        title : "서버",
        icon1: ["FcSettings"]
      }],
      value1: [{
        title: "플랫폼",
        icon1: ["FcCursor"],
        text:  ["APACHE", "NGINX"],
        icon2: ["SiApache", "SiNginx"],
      }],
    },
  };

  // ---------------------------------------------------------------------------------------------->
  const images = [Image1, Image2, Image3, Image4, Image5];

  // ---------------------------------------------------------------------------------------------->
  return (
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">

        {/** main image **/}
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">
                {images.map((image, index) => (
                  <div className="swiper-slide" key={index}>
                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                  </div>
                ))}
                <div className="swiper-pagination" key="pagination"></div>
                </div>
            </div>
          </div>
        </div>

        {/** main info **/}
        <div className="row">
          {/** left side **/}
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 jungho-col-left">
            <div className="portfolio-info">
              {Object.entries(itemsArray1).map(([key, index]) => (
                <div key={key} className="jungho-border-top">
                  {index.mainTitle.map((titleObj, titleIdx) => (
                    <h3 key={titleIdx}>
                      {titleObj.icon1.map((icon, i) => (
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
                        <h6 className="fw-8" style={{ marginTop: "30px" }}>
                          {item.icon1 && item.icon1.map((icon, i) => (
                            <span key={i}>
                              <Icons icon={icon} />&nbsp;
                            </span>
                          ))}
                          {item.title}&nbsp;
                        </h6>
                        {item.icon2.map((icon, i) => (
                          <span key={i}>
                            <Icons icon={icon}/>&nbsp;
                            {item.isLink && item.isLink[i]
                              ? <a href={`http://${item.text[i]}`} className="text-hover">
                                  {item.text[i]}
                                </a>
                              : <span>
                                  {item.text[i]}
                                </span>
                            }
                          </span>
                        ))}
                      </div>
                    ))
                  ))}<br />
                </div>
              ))}
            </div>
          </div>

          {/** right side **/}
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 jungho-col-right">
            <div className="portfolio-info">
              {Object.entries(itemsArray2).map(([key, index]) => (
                <div key={key} className="jungho-border-top">
                  {index.mainTitle.map((titleObj, titleIdx) => (
                    <h3 key={titleIdx}>
                      {titleObj.icon1.map((icon, i) => (
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
                        <h6 className="fw-8" style={{ marginTop: "30px" }}>
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
                  ))}<br />
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
