// Project1.jsx

import { React, useState } from "@importReacts";
import { Swiper, SwiperSlide, Navigation, Pagination } from "@importLibs";
import { Icons } from "@importComponents";
import { project1_1, project1_2 } from "@importImages";

// -------------------------------------------------------------------------------------------------
export const Project1 = () => {

  const [images, setImages] = useState([
    project1_1,
    project1_2
  ]);

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
        text:  ["2023.04.26 ~ 2023.05.23"],
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
        text: ["www.junghomun.com", "www.github.com/JUNGHO-GIT/JREACT.git"],
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
        title: "Apache2 서버 구성 및 관리",
        icon1: ["FcExpand"],
        text:  ["Apache2 서버의 가상호스트 설정을 통해 여러 도메인을 단일 서버에서 운영하여 자원의 효율적 사용, Mod_rewrite 등의 Apache 모듈을 활용하여 웹사이트의 URL 리다이렉션을 구현"],
        icon2: ["RxDash"],
      }],
      value5: [{
        title: "서버 배포 및 도메인 연결",
        icon1: ["FcExpand"],
        text:  ["GCP 인스턴스의 CentOS7 환경에서 서버 구축 작업을 진행하고, 도메인 취득 및 DNS 설정을 통해 도메인과 서버를 연결"],
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
      value2: [{
        title: "클라우드",
        icon1: ["FcCursor"],
        text:  ["GCP", "CentOS 7"],
        icon2: ["FcGoogle", "FaCentos"],
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
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 jungho-col-left">
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
            </div>
          </div>

          {/** right side **/}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 jungho-col-right">
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
              <div className="empty-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};