import React, {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "../../core/App.css";
import {Icons} from "../../components/common/Icons";

// 스와이프 이미지 -------------------------------------------------------------------------------->
const ImageComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      let loadedImages = [];
      for (let i = 1; i <= 5; i++) {
        const image = await import(`../../assets/images/project/project2/${i}.png`);
        loadedImages.push(image.default);
      }
      setImages(loadedImages);
    };
    loadImages();
  }, []);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoHeight={true}
      grabCursor={true}
      fadeEffect={{ crossFade: true }}
      loop={true}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`image-${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// ------------------------------------------------------------------------------------------------>
const Project2 = () => {

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
        text:  ["JLINT",],
        icon2: ["RxDash"],
      }],
      value2: [{
        title: "주제",
        icon1: ["FcExpand"],
        text:  ["NODEJS 및 TS를 활용한 VSCODE 언어 린팅 확장프로그램"],
        icon2: ["RxDash"],
      }],
      value3: [{
        title: "기간",
        icon1: ["FcExpand"],
        text:  ["2023.05.01 ~ 2023.05.15"],
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
        text:  ["www.junghomun.com/JLINT"],
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
        title: "NodeJs",
        icon1: ["FcExpand"],
        text:  ["NodeJs(v16)를 통한 프로젝트 생성 및 빌드, 주 언어로 Typescript 사용"],
        icon2: ["RxDash"],
      }],
      value2: [{
        title: "다양한 라이브러리 활용",
        icon1: ["FcExpand"],
        text:  ["NPM을 통한 'prettier, lodash, cheerio, mocha, ts-node' 등의 패키지 설치, 관리, 사용을 통한 개발 확장성 및 효율성 증대"],
        icon2: ["RxDash"],
      }],
      value3: [{
        title: "언어 다중지원 및 자동정렬",
        icon1: ["FcExpand"],
        text:  ["10가지 이상의 다양한 언어를 지원하며, 각 언어별로 린팅, 코딩 스타일 설정, Indent 최적화, 코드 자동 정렬 등의 기능을 제공하여 코드의 일관성 유지, 품질 향상 및 개발 생산성 증대"],
        icon2: ["RxDash"],
      }],
      value4: [{
        title: "주석 자동생성 기능",
        icon1: ["FcExpand"],
        text:  ["클래스, 함수, 변수, 배열 .. 등의 요소에 주석을 자동으로 생성하여 불필요한 주석 작성 시간을 단축하여 코드 생산성 증대에 기여. 각 요소별 주석으로 인한 코드 가독성 향상"],
        icon2: ["RxDash"],
      }],
      value5: [{
        title: "Vscode API",
        icon1: ["FcExpand"],
        text:  ["Vscode API를 통한 확장 프로그램 제작 및 빌드 후 실제 Marketplace에 배포하여 사용자에게 제공함으로써 실제 프로젝트에 적용 가능한 확장성 확보"],
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
        text:  ["HTML", "MARKDOWN"],
        icon2: ["SiHtml5", "SiMarkdown"]
      }]
    },
    items2: {
      mainTitle: [{
        title : "백엔드",
        icon1 : ["FcSettings"]
      }],
      value1: [{
        title: "언어",
        icon1: ["FcCursor"],
        text:  ["NODEJS", "JS", "TS"],
        icon2: ["FaNodeJs", "SiJavascript", "SiTypescript"],
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
        icon1 : ["FcSettings"]
      }],
      value1: [{
        title: "플랫폼",
        icon1: ["FcCursor"],
        text:  ["APACHE", "NGINX"],
        icon2: ["SiApache", "SiNginx"],
      }],
    },
    items4: {
      mainTitle: [{
        title : "API",
        icon1 : ["FcSettings"]
      }],
      value1: [{
        title: "플랫폼",
        icon1: ["FcCursor"],
        text:  ["VSCODE-API 1.78"],
        icon2: ["TbBrandVscode"],
      }],
    },
  };

  // ---------------------------------------------------------------------------------------------->

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
export default Project2;
