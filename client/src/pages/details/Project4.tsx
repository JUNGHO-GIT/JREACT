// Project4.jsx

import { React, useState } from "@importReacts";
import { Swiper, SwiperSlide, Navigation, Pagination } from "@importLibs";
import { Icons } from "@importComponents";

// -------------------------------------------------------------------------------------------------
export const Project4 = () => {

  // 스와이프 이미지 -------------------------------------------------------------------------------
  const ImageComponent = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`${index + 1}`} className="img-fluid" />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  // -----------------------------------------------------------------------------------------------
  const itemsArray1 = {
    items1: {
      mainTitle: [{
        title : "정보",
        icon1 : ["FcSearch"]
      }],
      value1: [{
        title: "프로젝트명",
        icon1: ["FcExpand"],
        text:  ["GoodNeighbor"],
        icon2: ["RxDash"],
      }],
      value2: [{
        title: "주제",
        icon1: ["FcExpand"],
        text:  ["SPRING FRAMEWORK를 활용한 자선단체 웹사이트"],
        icon2: ["RxDash"],
      }],
      value3: [{
        title: "기간",
        icon1: ["FcExpand"],
        text:  ["2023.02.20 ~ 2023.03.08"],
        icon2: ["RxDash"],
      }],
      value4: [{
        title: "참여인원",
        icon1: ["FcExpand"],
        text:  ["총 4명(팀)"],
        icon2: ["RxDash"],
      }],
      value5: [{
        title: "프로젝트 주소 ",
        icon1: ["FcExpand"],
        text:  ["www.junghomun.com/GOODNEIGHBOR", "www.github.com/JUNGHO-GIT/GOODNEIGHBOR"],
        icon2: ["RxDash", "RxDash"],
        isLink : [true, true],
      }],
    },
    items2: {
      mainTitle: [{
        title : "특징",
        icon1 : ["FcSearch"]
      }],
      value1: [{
        title: "Spring Framework",
        icon1: ["FcExpand"],
        text:  ["Spring Framework(v4.3)를 활용한 MVC model2 방식의 웹개발로 인한 서버사이드 개발의 효율성 확장과 프로젝트 관리의 유연성 확보"],
        icon2: ["RxDash"],
      }],
      value2: [{
        title: "오라클 DBMS",
        icon1: ["FcExpand"],
        text:  ["Azure 인스턴스(Ubuntu 20.04 LTS)에 오라클 DBMS (11g xe) 설치 및 연동하여 효율적으로 데이터 관리"],
        icon2: ["RxDash"],
      }],
      value3: [{
        title: "Mybatis 프레임워크 연동",
        icon1: ["FcExpand"],
        text:  ["Mybatis 프레임워크를 활용하여 SQL문을 자바코드에서 분리하여 관리하고, DB 데이터를 객체지향적으로 관리"],
        icon2: ["RxDash"],
      }],
      value4: [{
        title: "반응형 웹",
        icon1: ["FcExpand"],
        text:  ["React Bootstrap(v4)를 활용, 모바일 환경에서도 최적화된 UI/UX를 제공하는 유저 친화적 반응형 웹페이지 설계"],
        icon2: ["RxDash"],
      }],
      value5: [{
        title: "클라우드 서버 구축 및 배포",
        icon1: ["FcExpand"],
        text:  ["Microsoft Azure를 활용한 클라우드 서버 구축 및 배포로 물리적 공간의 제약없이 접속 가능한 환경 제공"],
        icon2: ["RxDash"],
      }],
    },
  }

  // -----------------------------------------------------------------------------------------------
  const itemsArray2 = {
    items1: {
      mainTitle: [{
        title : "프론트엔드",
        icon1 : ["FcSettings"]
      }],
      value1: [{
        title: "언어",
        icon1: ["FcCursor"],
        text:  ["HTML", "CSS", "JS"],
        icon2: ["SiHtml5", "SiCss3", "SiJavascript"],
      }],
      value2: [{
        title: "프레임워크",
        icon1: ["FcCursor"],
        text:  ["BOOTSTRAP"],
        icon2: ["SiBootstrap"],
      }],
      value3: [{
        title: "템플릿",
        icon1: ["FcCursor"],
        text:  ["JSP"],
        icon2: ["BsFiletypeJava"],
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
        text:  ["JAVA 11"],
        icon2: ["FaJava"],
      }],
      value2: [{
        title: "프레임워크",
        icon1: ["FcCursor"],
        text:  ["SPRING 4.3"],
        icon2: ["SiSpring"],
      }],
      value3: [{
        title: "패키지관리, 빌드",
        icon1: ["FcCursor"],
        text:  ["MAVEN", "XML", "JSON"],
        icon2: ["SiApachemaven", "BsFiletypeXml", "SiJson"],
      }],
    },
    items3: {
      mainTitle: [{
        title : "데이터베이스",
        icon1 : ["FcSettings"]
      }],
      value1: [{
        title: "DBMS",
        icon1: ["FcCursor"],
        text:  ["ORACLE 11XE"],
        icon2: ["SiOracle"],
      }],
      value2: [{
        title: "프레임워크, 관리",
        icon1: ["FcCursor"],
        text:  ["MYBATIS", "DBEAVER"],
        icon2: ["SiBower", "GiBeaver"],
      }],
    },
    items4: {
      mainTitle: [{
        title : "서버",
        icon1 : ["FcSettings"]
      }],
      value1: [{
        title: "플랫폼",
        icon1: ["FcCursor"],
        text:  ["TOMCAT 9.0", "APACHE"],
        icon2: ["SiApachetomcat", "SiApache"],
      }],
      value2: [{
        title: "클라우드",
        icon1: ["FcCursor"],
        text:  ["Microsoft Azure", "Ubuntu 20.04 LTS"],
        icon2: ["SiMicrosoftazure", "FaUbuntu"],
      }],
    },
  };

  // -----------------------------------------------------------------------------------------------
  return (
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">

        {/** main image **/}
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <ImageComponent />
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
                    <>
                    <h3 key={titleIdx}>
                      {titleObj.icon1.map((icon: any, i: number) => (
                        <span key={i}>
                          <Icons icon={icon} />&nbsp;
                        </span>
                      ))}
                      {titleObj.title}
                    </h3>
                    <div className="project-line"></div>
                    </>
                  ))}
                  {Object.entries(index).filter(([key2]) => key2.startsWith("value")).map(([key2, valueArray]) => (
                    valueArray.map((item: any, itemIdx: number) => (
                      <div key={`${key2}-${itemIdx}`} style={{ marginBottom: "20px" }}>
                        <h6 className="fw-8" style={{ marginTop: "30px" }}>
                          {item.icon1 && item.icon1.map((icon: any, i: number) => (
                            <span key={i}>
                              <Icons icon={icon} />&nbsp;
                            </span>
                          ))}
                          {item.title}&nbsp;
                        </h6>
                        {item.icon2.map((icon: any, i: number) => (
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
              <div className="empty-80"></div>
            </div>
          </div>

          {/** right side **/}
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 jungho-col-right">
            <div className="portfolio-info">
              {Object.entries(itemsArray2).map(([key, index]) => (
                <div key={key} className="jungho-border-top">
                  {index.mainTitle.map((titleObj, titleIdx) => (
                    <>
                    <h3 key={titleIdx}>
                      {titleObj.icon1.map((icon: any, i: number) => (
                        <span key={i}>
                          <Icons icon={icon} />&nbsp;
                        </span>
                      ))}
                      {titleObj.title}
                    </h3>
                    <div className="project-line"></div>
                    </>
                  ))}
                  {Object.entries(index).filter(([key2]) => key2.startsWith("value")).map(([key2, valueArray]) => (
                    valueArray.map((item: any, itemIdx: number) => (
                      <div key={`${key2}-${itemIdx}`} style={{ marginBottom: "20px" }}>
                        <h6 className="fw-8" style={{ marginTop: "30px" }}>
                          {item.icon1.map((icon: any, i: number) => (
                            <span key={i}>
                              <Icons icon={icon} />&nbsp;
                            </span>
                          ))}
                          {item.title}&nbsp;
                        </h6>
                        {item.icon2.map((icon: any, i: number) => (
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