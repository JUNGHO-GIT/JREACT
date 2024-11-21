// Project4.jsx

import { useEffect, useState } from "@importReacts";
import { useResponsive, useStoreLoading } from "@importHooks";
import { Swiper, SwiperSlide, Navigation, Pagination } from "@importLibs";
import { Div, Img, Hr } from "@importComponents";
import { Grid, Paper } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const Project4 = () => {

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
          value: "GoodNeighbor",
        },
        {
          title: "Detail",
          value: "Spring Framework를 활용한 자선단체 웹사이트",
        },
        {
          title: "Period",
          value: "2023.02.20 ~ 2023.03.08",
        },
        {
          title: "Role",
          value: "총 4명 (팀원)",
        },
        {
          title: "Git",
          value: "github.com/JUNGHO-GIT/GOODNEIGHBOR.git",
        },
        {
          title: "Url",
          value: "junghomun.com/GOODNEIGHBOR",
        },
      ],
    },
    {
      title: "Features",
      section: [
        {
          title: "Spring Framework",
          value: "Spring Framework(v4.3)를 활용한 MVC model2 방식의 웹 애플리케이션 구현",
        },
        {
          title: "MyBatis",
          value: "MyBatis를 활용한 데이터베이스 연동 및 SQL Mapping",
        },
        {
          title: "Responsive Design",
          value: "Bootstrap(v4)을 활용, 모바일 환경에서도 최적화된 UI/UX를 제공",
        },
        {
          title: "Cloud Instance",
          value: "GCP 인스턴스의 CentOS7 환경에서 서버를 구축하고, DNS 설정을 통해 도메인과 서버를 연결",
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
          title: "Package, Build, SCM",
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
    "project4_1",
    "project4_2",
    "project4_3",
    "project4_4",
  ]);
  const [componentWidth, setComponentWidth] = useState<string>("");

  // 2-3. useEffect --------------------------------------------------------------------------------
  useEffect(() => {
    setLOADING(true);
  }, []);

  // 2-3. useEffect --------------------------------------------------------------------------------
  useEffect(() => {
    if (xxs || xs) {
      setComponentWidth("w-30p");
    }
    else if (sm || md) {
      setComponentWidth("w-20p");
    }
    else if (lg || xl || xxl) {
      setComponentWidth("w-30p");
    }
  }, [xxs, xs, sm, md, lg, xl, xxl]);

  // 7. project ------------------------------------------------------------------------------------
  const projectNode = () => (
    <Paper className={`detail-wrapper ${paperClass}`}>
      {/** images **/}
      <Grid container={true} spacing={0}>
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
                <Img
                  max={800}
                  hover={false}
                  shadow={false}
                  radius={false}
                  group={"project"}
                  src={image}
                />
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
      <Hr className={"mt-20 mb-20 bg-light h-5"} />
      {/** description **/}
      <Grid container={true} spacing={2} className={"h-100p d-top"}>
        {/** info, features **/}
        <Grid size={(xxs || xs || sm) ? 12 : (md || lg || xl || xxl) ? 6 : 6}>
          <Grid container={true} spacing={2}>
            {OBJECT.filter((_: any, f: number) => f < 2).map((item: any, i: number) => (
              <Grid size={12} className={"d-col-left"} key={i}>
                <Div className={"fs-1-6rem fw-700 dark-navy"}>
                  {item.title}
                </Div>
                <Div className={"d-row-left mb-20"}>
                  <Hr className={"w-100 bg-primary h-3"} />
                </Div>
                {item.section.map((section: any, j: number) => (
                  <Div className={"d-col-left w-100p mb-30"} key={j}>
                    <Div className={"fs-1-0rem fw-600 dark-navy mb-10"}>
                      {`${section.title}`}
                    </Div>
                    {["Git", "Url"].includes(section.title) ? (
                      <Div className={"d-row-left"}>
                        <Div className={"fs-0-9rem fw-400 blue hover"}>
                          {`- ${section.value}`}
                        </Div>
                      </Div>
                    ) : (
                      <Div className={"d-row-left"}>
                        <Div className={"fs-0-9rem fw-400 light-black lh-2-0"}>
                          {`- ${section.value}`}
                        </Div>
                      </Div>
                    )}
                  </Div>
                ))}
                <Hr className={"bg-light h-5"} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/** frontend, backend, server **/}
        <Grid size={(xxs || xs || sm) ? 12 : (md || lg || xl || xxl) ? 6 : 6}>
          <Grid container={true} spacing={2}>
            {OBJECT.filter((_: any, f: number) => f >= 2).map((item: any, i: number) => (
              <Grid size={12} className={"d-col-left"} key={i}>
                <Div className={"fs-1-6rem fw-700 dark-navy"}>
                  {item.title}
                </Div>
                <Div className={"d-row-left mb-20"}>
                  <Hr className={"w-100 bg-primary h-3"} />
                </Div>
                {item.section.map((section: any, j: number) => (
                  <Div className={"d-col-left w-100p mb-30"} key={j}>
                    <Div className={"d-row w-100p"}>
                      <Div className={"fs-1-0rem fw-600 dark-navy mb-10"}>
                        {`${section.title}`}
                      </Div>
                    </Div>
                    <Div className={"d-row w-100p"}>
                      {section.value.map((value: any, k: number) => (
                        <Div className={`d-row-left ${componentWidth}`} key={k}>
                          <Img
                            max={25}
                            hover={true}
                            shadow={false}
                            border={false}
                            radius={false}
                            src={value.icon}
                            group={"icon"}
                            className={"me-5"}
                          />
                          <Div className={"fs-0-9rem fw-400 light-black lh-2-0"}>
                            {value.value}
                          </Div>
                        </Div>
                      ))}
                    </Div>
                  </Div>
                ))}
                <Hr className={"bg-light h-5"} />
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