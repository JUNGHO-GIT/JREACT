import React, {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import {Icons} from "../../components/common/Icons";

// 스와이프 이미지 -------------------------------------------------------------------------------->
const ImageComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      let loadedImages = [];
      for (let i = 1; i <= 4; i++) {
        const image = await import(`../../assets/images/project/project5/${i}.png`);
        loadedImages.push(image.default);
      }
      setImages(loadedImages);
    };
    loadImages();
  }, []);

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
          <img src={image} alt={`image-${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// ------------------------------------------------------------------------------------------------>
const Project5 = () => {

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
        text:  ["MeatStore"],
        icon2: ["RxDash"],
      }],
      value2: [{
        title: "주제",
        icon1: ["FcExpand"],
        text:  ["MVC 모델2 방식을 활용한 종합 육류 판매 웹사이트"],
        icon2: ["RxDash"],
      }],
      value3: [{
        title: "기간",
        icon1: ["FcExpand"],
        text:  ["2023.01.18 ~ 2023.02.03"],
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
        text:  ["www.junghomun.com/MEATSTORE"],
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
        title: "Java & MVC Model 2",
        icon1: ["FcExpand"],
        text:  ["Java 언어와 MVC Model 2 패턴을 기반으로, 비즈니스 로직을 처리하는 Controller, Model 구성 및 사용자 인터페이스를 담당하는 View 분리하여 유지보수성과 확장성을 높임"],
        icon2: ["RxDash"],
      }],
      value2: [{
        title: "Jsp",
        icon1: ["FcExpand"],
        text:  ["JSP(Java Server Pages)를 활용하여 동적인 웹페이지 구현. EL(Expression Language)와 JSTL(JSP Standard Tag Library)를 사용하여 코드의 가독성과 재사용성을 높임"],
        icon2: ["RxDash"],
      }],
      value3: [{
        title: "MySql",
        icon1: ["FcExpand"],
        text:  ["MySQL을 활용하여 DB 설계 및 구축. 데이터베이스의 무결성을 유지하고, 데이터의 효율적인 활용을 위해 정규화를 진행하여 데이터의 중복을 최소화"],
        icon2: ["RxDash"],
      }],
      value4: [{
        title: "반응형 웹",
        icon1: ["FcExpand"],
        text:  ["React Bootstrap(v3)를 활용, 모바일 환경에서도 최적화된 UI/UX를 제공하는 유저 친화적 반응형 웹페이지 설계"],
        icon2: ["RxDash"],
      }],
      value5: [{
        title: "클라우드 서버, 서블릿 컨테이너",
        icon1: ["FcExpand"],
        text:  ["Google Cloud Platform의 Compute Engine 서비스를 활용하여 프로젝트를 배포, 서블릿 컨테이너인 Apache Tomcat을 설치하여 웹앱을 구동"],
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
        text:  ["JAVA 1.8"],
        icon2: ["FaJava"],
      }],
      value2: [{
        title: "패키지관리, 빌드",
        icon1: ["FcCursor"],
        text:  ["XML"],
        icon2: ["BsFiletypeXml"],
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
        text: ["MYSQL 5.5"],
        icon2: ["TbBrandMysql"],
      }],
      value2: [{
        title: "프레임워크, 관리",
        icon1: ["FcCursor"],
        text:  ["DBEAVER"],
        icon2: ["GiBeaver"],
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
        text:  ["TOMCAT 8.0", "APACHE"],
        icon2: ["SiApachetomcat", "SiApache"],
      }],
      value2: [{
        title: "클라우드",
        icon1: ["FcCursor"],
        text:  ["GCP-INSTANCE", "GCP-SQL", "GCP-BUCKET"],
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
                      {titleObj.icon1.map((icon, i) => (
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
                    <>
                    <h3 key={titleIdx}>
                      {titleObj.icon1.map((icon, i) => (
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
              <div className="empty-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project5;
