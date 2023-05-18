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
  const itemsArray1 = {
    items1: {
      mainTitle: [{
        title : "정보",
        icon : ["FcSearch"]
      }],
      value1: [{
        title: "프로젝트명",
        icon1: ["FcExpand"],
        text: ["GoodNeighbor"],
        icon2: ["RxDash"],
      }],
      value2: [{
        title: "주제",
        icon1: ["FcExpand"],
        text: ["MVC 모델1 방식을 활용한 종합 육류 판매 웹사이트"],
        icon2: ["RxDash"],
      }],
      value3: [{
        title: "기간",
        icon1: ["FcExpand"],
        text: ["2023.02.01 ~ 2023.02.30"],
        icon2: ["RxDash"],
      }],
      value4: [{
        title: "참여인원",
        icon1: ["FcExpand"],
        text: ["총 4명(팀)"],
        icon2: ["RxDash"],
      }],
      value5: [{
        title: "프로젝트 주소 ",
        icon1: ["FcExpand"],
        text: ["www.junghomun.com/MeatStore"],
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
        text: ["HTML 5", "CSS 3", "JS ES6"],
        icon2: ["SiHtml5", "SiCss3", "SiJavascript"],
      }],
      value2: [{
        title: "프레임워크",
        icon1: ["FcCursor"],
        text: ["BOOTSTRAP 4"],
        icon2: ["SiBootstrap"],
      }],
      value3: [{
        title: "템플릿",
        icon1: ["FcCursor"],
        text: ["JSP"],
        icon2: ["BsFiletypeJava"],
      }],
    },
    items2: {
      mainTitle: [{
        title : "백엔드",
        icon : ["FcSettings"]
      }],
      value1: [{
        title: "언어",
        icon1: ["FcCursor"],
        text: ["JAVA 1.8"],
        icon2: ["FaJava"],
      }],
      value2: [{
        title: "패키지관리, 빌드",
        icon1: ["FcCursor"],
        text: ["XML"],
        icon2: ["BsFiletypeXml"],
      }],
    },
    items3: {
      mainTitle: [{
        title : "데이터베이스",
        icon : ["FcSettings"]
      }],
      value1: [{
        title: "DBMS",
        icon1: ["FcCursor"],
        text: ["MYSQL 5.5"],
        icon2: ["TbBrandMysql"],
      }],
      value2: [{
        title: "프레임워크, 관리",
        icon1: ["FcCursor"],
        text: ["DBEAVER 22.3"],
        icon2: ["GiBeaver"],
      }],
    },
    items4: {
      mainTitle: [{
        title : "서버",
        icon : ["FcSettings"]
      }],
      value1: [{
        title: "플랫폼",
        icon1: ["FcCursor"],
        text: ["TOMCAT 8.0", "APACHE"],
        icon2: ["SiApachetomcat", "SiApache"],
      }],
      value2: [{
        title: "- 클라우드",
        icon1: ["FcCursor"],
        text: ["GCP-INSTANCE", "GCP-SQL", "GCP-BUCKET"],
        icon2: ["FcGoogle", "FcGoogle", "FcGoogle"],
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
export default Project5;
