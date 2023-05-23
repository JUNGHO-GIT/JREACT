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
      for (let i = 1; i <= 5; i++) {
        const image = await import(`../../assets/images/project/project3/${i}.png`);
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
const Project3 = () => {

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
        text:  ["JUNGHQLO",],
        icon2: ["RxDash"],
      }],
      value2: [{
        title: "주제",
        icon1: ["FcExpand"],
        text:  ["BOOT를 활용한 남성의류 쇼핑몰 웹사이트"],
        icon2: ["RxDash"],
      }],
      value3: [{
        title: "기간",
        icon1: ["FcExpand"],
        text:  ["2023.04.01 ~ 2023.04.30"],
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
        text:  ["www.junghomun.com/JUNGHQLO"],
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
        title: "Spring Boot",
        icon1: ["FcExpand"],
        text:  ["Spring Boot(v2.7)를 활용한 MVC 아키텍쳐 위주의 웹개발을 통한 웹앱의 코드구조화 실현으로 유지보수성 향상 및 보안성 강화"],
        icon2: ["RxDash"],
      }],
      value2: [{
        title: "다양한 언어템플릿 활용",
        icon1: ["FcExpand"],
        text:  ["Thymeleaf, JSP 등 다양한 언어템플릿을 활용함으로써 동적 데이터 처리기능 향상과 동시에 프론트엔드와 백엔드의 연동을 통한 개발의 효율성 증대 및 유지보수의 유연성 확보"],
        icon2: ["RxDash"],
      }],
      value3: [{
        title: "Stripe 결제시스템",
        icon1: ["FcExpand"],
        text:  ["Stripe API를 적용하여 결제시스템을 구축, 실제 결제기능을 구현함으로써 사용자의 결제 편의성을 재고하고, 사용자의 결제정보를 안전하게 관리"],
        icon2: ["RxDash"],
      }],
      value4: [{
        title: "반응형 웹",
        icon1: ["FcExpand"],
        text:  ["React Bootstrap(v5)를 활용, 모바일 환경에서도 최적화된 UI/UX를 제공하는 유저 친화적 반응형 웹페이지 설계"],
        icon2: ["RxDash"],
      }],
      value5: [{
        title: "클라우드 서버 구축 및 배포",
        icon1: ["FcExpand"],
        text:  ["Google Cloud Platform의 Compute Engine 서비스를 활용하여 프로젝트를 배포, 서블릿 컨테이너인 Apache Tomcat을 설치하여 웹앱을 구동. 또한 Google Cloud Platform의 Cloud SQL 서비스를 활용하여 DB를 구축하고, 프로젝트와 연동하여 데이터 관리의 용이성 및 보안성을 확장"],
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
        text:  ["THYMELEAF", "JSP"],
        icon2: ["SiThymeleaf", "BsFiletypeJava"],
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
        text:  ["JAVA 17"],
        icon2: ["FaJava"],
      }],
      value2: [{
        title: "프레임워크",
        icon1: ["FcCursor"],
        text:  ["SPRING BOOT 2.7"],
        icon2: ["SiSpringboot"],
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
        text:  ["MYSQL 8.0"],
        icon2: ["TbBrandMysql"],
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
        text:  ["TOMCAT9.0", "APACHE"],
        icon2: ["SiApachetomcat", "SiApache"],
      }],
      value2: [{
        title: "- 클라우드",
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
export default Project3;
