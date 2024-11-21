// Project1.jsx

import { useEffect, useState } from "@importReacts";
import { useResponsive, useStoreLoading } from "@importHooks";
import { Swiper, SwiperSlide, Navigation, Pagination } from "@importLibs";
import { Div, Img, Hr } from "@importComponents";
import { Grid, Paper } from "@importMuis";

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
          value: "Jportfolio",
        },
        {
          title: "Detail",
          value: "React를 활용한 개인 포트폴리오 웹사이트",
        },
        {
          title: "Period",
          value: "2023.04.26 - 2023.05.23",
        },
        {
          title: "Role",
          value: "총 1명 (개인)",
        },
        {
          title: "Git",
          value: "github.com/JUNGHO-GIT/JREACT.git",
        },
        {
          title: "Url",
          value: "junghomun.com",
        },
      ],
    },
    {
      title: "Features",
      section: [
        {
          title: "React Framework",
          value: "React(v18)를 활용, SPA 방식의 종합 포트폴리오 웹사이트 제작",
        },
        {
          title: "Hooks & Router",
          value: "React Hooks와 React Router를 활용하여 효율적 상태 관리와 동적 라우팅을 구현",
        },
        {
          title: "Component",
          value: "컴포넌트 기반의 구조 설계를 통한 효율적인 상태 관리 및 코드 재사용성 확보",
        },
        {
          title: "Nginx Server",
          value: "Nginx 서버를 활용하여 정적 파일 서비스 제공 및 리버스 프록시 서버 구축",
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
            { icon: "ts", value: "Ts" },
          ],
        },
        {
          title: "Framework",
          value: [
            { icon: "react", value: "React" },
            { icon: "mui", value: "MaterialUI" },
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
            { icon: "nodejs", value: "Nodejs" },
          ],
        },
        {
          title: "Package, Build, SCM",
          value: [
            { icon: "npm", value: "Npm" },
            { icon: "json", value: "Json" },
            { icon: "github", value: "Git" },
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
            { icon: "nginx", value: "Nginx" },
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
                <Div className={"fs-1-6rem fw-700 dark-navy mb-20"}>
                  {item.title}
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