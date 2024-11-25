// Project1.jsx

import { useEffect, useState } from "@importReacts";
import { useResponsive, useStoreLoading } from "@importHooks";
import { Swiper, SwiperSlide, Navigation, Pagination } from "@importLibs";
import { Div, Img, Hr, Br, Grid, Paper } from "@importComponents";

// -------------------------------------------------------------------------------------------------
export const Project1 = () => {

  // 0. common -------------------------------------------------------------------------------------
  const { setLOADING } = useStoreLoading();
  const { xxs, xs, sm, md, lg, xl, xxl, paperClass } = useResponsive();

  // 2-1. useState ---------------------------------------------------------------------------------
  const [OBJECT, _setOBJECT] = useState<any>([
    {
      title: "Information",
      section: [
        {
          title: "Name",
          value: "MeatStore",
        },
        {
          title: "Detail",
          value: "Mvc 모델2 방식을 활용한 종합 육류 판매 사이트",
        },
        {
          title: "Period",
          value: "2023.01.18 ~ 2023.02.03",
        },
        {
          title: "Role",
          value: "총 4명 (팀원)",
        },
        {
          title: "Git",
          value: "www.github.com/JUNGHO-GIT/MEATSTORE.git",
        },
        {
          title: "Url",
          value: "www.junghomun.com/MEATSTORE",
        },
      ],
    },
    {
      title: "Features",
      section: [
        {
          title: "Java & Mvc",
          value: "Java와 Mvc2 패턴을 기반으로, Controller, Model 및 View를 분리하여 개발",
        },
        {
          title: "Jsp",
          value: "EL(Expression Language)와 JSTL(JSP Standard Tag Library)를 사용하여 코드의 가독성 및 확장성 증대",
        },
        {
          title: "MySql",
          value: "MySQL을 활용하여 데이터베이스의 무결성을 유지하고, 정규화를 진행하여 데이터의 중복을 최소화",
        },
        {
          title: "Servlet Container",
          value: "GCP 인스턴스의 CentOS7 환경에서 서버를 구축하고, Tomcat을 사용하여 웹 애플리케이션을 배포",
        },
      ],
    },
    {
      title: "Frontend",
      section: [
        {
          title: "Language",
          value: [
            { icon: "html", value: "Html" },
            { icon: "css", value: "Css" },
            { icon: "js", value: "Js" },
          ],
        },
        {
          title: "Framework",
          value: [
            { icon: "bootstrap", value: "Bootstrap" },
          ],
        },
        {
          title: "Template Engine",
          value: [
            { icon: "jsp", value: "Jsp" },
          ],
        },
      ],
    },
    {
      title: "Backend",
      section: [
        {
          title: "Language",
          value: [
            { icon: "java", value: "Java" },
          ],
        },
        {
          title: "Framework",
          value: [
            { icon: "spring", value: "Spring" },
          ],
        },
        {
          title: "Package, Build, Scm",
          value: [
            { icon: "maven", value: "Maven" },
            { icon: "xml", value: "Xml" },
            { icon: "json", value: "Json" },
            { icon: "github", value: "Git" },
          ],
        },
      ],
    },
    {
      title: "Database",
      section: [
        {
          title: "DBMS",
          value: [
            { icon: "mysql", value: "Mysql8" },
          ],
        },
        {
          title: "framework",
          value: [
            { icon: "mybatis", value: "Mybatis" },
          ],
        },
      ],
    },
    {
      title: "Server",
      section: [
        {
          title: "Server",
          value: [
            { icon: "tomcat", value: "Tomcat" },
          ],
        },
        {
          title: "Cloud",
          value: [
            { icon: "gcp", value: "Gcp" },
            { icon: "centos", value: "Centos7" },
          ],
        },
      ],
    },
  ]);
  const [images, _setImages] = useState<string[]>([
    "project1_1",
    "project1_2",
    "project1_3",
    "project1_4",
  ]);

  // 2-3. useEffect --------------------------------------------------------------------------------
  useEffect(() => {
    setLOADING(true);
    setTimeout(() => {
      setLOADING(false);
    }, 500);
  }, []);

  // 7. project ------------------------------------------------------------------------------------
  const projectNode = () => (
    <Paper className={`detail-wrapper ${paperClass} border-0 radius-0 shadow-0 px-10px`}>
      {/** images **/}
      <Grid container={true} spacing={0} className={"w-100p d-center"}>
        <Grid size={12} className={"d-col-center"}>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            navigation={{
              enabled: true,
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              enabled: true,
              clickable: true,
              el: ".image-pagination",
            }}
            modules={[
              Pagination, Navigation,
            ]}
          >
            {images.map((image: string, i: number) => (
              <SwiperSlide className={"w-100p p-relative"} key={i}>
                <Div className={"p-5px"}>
                  <Img
                    max={1000}
                    hover={false}
                    shadow={true}
                    radius={true}
                    border={true}
                    src={`${image}.webp`}
                    group={"projects"}
                  />
                </Div>
              </SwiperSlide>
            ))}
            <Div className={"swiper-button-prev"} />
            <Div className={"swiper-button-next"} />
          </Swiper>
        </Grid>
        <Grid size={12} className={"d-row-center"}>
          <Div className={"image-pagination transform-none"} />
        </Grid>
      </Grid>
      <Br m={40} />
      <Grid container={true} spacing={2} columnSpacing={10}
      className={"h-100p d-top border-1 radius-2 shadow-1 px-4vw py-4vh"}>
        {/** info, features **/}
        <Grid size={(xxs || xs || sm) ? 12 : (md || lg || xl || xxl) ? 6 : 6}>
          <Grid container={true} spacing={2}>
            {OBJECT.filter((_: any, f: number) => f < 2).map((item: any, i: number) => (
              <Grid size={12} className={"d-col-left"} key={i}>
                <Div className={"fs-1-6rem fw-700 dark-navy mb-20px"}>
                  {item.title}
                  <Hr className={"w-100px bg-primary h-3px"} />
                </Div>
                {item.section.map((section: any, j: number) => (
                  <Div className={"w-100p d-col-left mb-30px"} key={j}>
                    <Div className={"d-row-center mb-10px"}>
                      <Div className={"fs-0-4rem fw-300 dark-navy mr-5px"}>
                        {'●'}
                      </Div>
                      <Div className={"fs-1-1rem fw-600 dark-navy"}>
                        {section.title}
                      </Div>
                    </Div>
                    <Div className={"d-row-center ml-10px"}>
                      {["Git", "Url"].includes(section.title) ? (
                        <Div className={"d-row-left mr-0px"}>
                          <Div
                            className={"fs-1-0rem fw-400 blue hover lh-2-0"}
                            onClick={() => {
                              window.open(`https://${section.value}`, "_blank");
                            }}
                          >
                            {`- ${section.value}`}
                          </Div>
                        </Div>
                      ) : (
                        <Div className={"d-row-left mr-0px"}>
                          <Div
                            className={"fs-1-0rem fw-400 light-black lh-2-0"}
                            onClick={() => {
                            }}
                          >
                            {`- ${section.value}`}
                          </Div>
                        </Div>
                      )}
                    </Div>
                  </Div>
                ))}
                {i !== 1 && <Hr className={"bg-light h-3px"} />}
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/** frontend, backend, server **/}
        <Grid size={(xxs || xs || sm) ? 12 : (md || lg || xl || xxl) ? 6 : 6}>
          <Grid container={true} spacing={2}>
            {OBJECT.filter((_: any, f: number) => f >= 2).map((item: any, i: number) => (
              <Grid size={12} className={"d-col-left"} key={i}>
                <Div className={"fs-1-6rem fw-700 dark-navy mb-20px"}>
                  {item.title}
                  <Hr className={"w-100px bg-primary h-3px"} />
                </Div>
                {item.section.map((section: any, j: number) => (
                  <Div className={"w-100p d-col-left mb-30px"} key={j}>
                    <Div className={"d-row-center mb-10px"}>
                      <Div className={"fs-0-4rem fw-300 dark-navy mr-5px"}>
                        {'●'}
                      </Div>
                      <Div className={"fs-1-1rem fw-600 dark-navy"}>
                        {section.title}
                      </Div>
                    </Div>
                    <Div className={"d-row-center ml-10px"}>
                      {section.value.map((value: any, k: number) => (
                        <Div className={`d-row-center mr-20px`} key={k}>
                          <Img
                            max={20}
                            hover={true}
                            shadow={false}
                            border={false}
                            radius={false}
                            group={"icons"}
                            src={`${value.icon}.webp`}
                            className={"mr-5px"}
                          />
                          <Div className={"fs-1-0rem fw-400 light-black lh-2-0"}>
                            {value.value}
                          </Div>
                        </Div>
                      ))}
                    </Div>
                  </Div>
                ))}
                {i !== 3 && <Hr className={"bg-light h-3px"} />}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );

  // 10. return ------------------------------------------------------------------------------------
  return (
    <>
      {projectNode()}
    </>
  );
};