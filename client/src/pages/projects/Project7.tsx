// Project7.jsx

import { useEffect, useState } from "@importReacts";
import { useResponsive, useStoreLoading } from "@importHooks";
import { Swiper, SwiperSlide, Navigation, Pagination } from "@importLibs";
import { Div, Img, Hr } from "@importComponents";
import { Grid, Paper } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const Project7 = () => {

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
          value: "LifeChange",
        },
        {
          title: "Detail",
          value: "ReactNative를 활용한 생활기록 및 관리 앱",
        },
        {
          title: "Period",
          value: "2024.05.05 - 2024.07.23",
        },
        {
          title: "Role",
          value: "총 1명 (개인)",
        },
        {
          title: "Git",
          value: "github.com/JUNGHO-GIT/LIFECHANGE.git",
        },
        {
          title: "Url",
          value: "play.google.com/store/search?q=lifechange&c=apps&hl=ko",
        },
      ],
    },
    {
      title: "Features",
      section: [
        {
          title: "React Native",
          value: "ReactNative(v0.74)를 활용하여 iOS 및 Android 플랫폼 지원 하이브리드 앱 구현",
        },
        {
          title: "Android Widget",
          value: "네이티브 모듈을 활용하여 Android 홈 화면 위젯 제작 및 실시간 데이터 연동",
        },
        {
          title: "Admob",
          value: "Admob를 연동하여 앱 내 광고 수익 창출 및 사용자 피드백 수집",
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
            { icon: "ts", value: "Ts" },
          ],
        },
        {
          title: "Framework",
          value: [
            { icon: "react", value: "React" },
            { icon: "rn", value: "ReactNative" },
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
            { icon: "ts", value: "Ts" },
            { icon: "nodejs", value: "Nodejs" },
            { icon: "express", value: "Express" },
            { icon: "webpack", value: "Webpack" },
          ],
        },
        {
          title: "Package, Build, Scm",
          value: [
            { icon: "npm", value: "Npm" },
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
            { icon: "mongodb", value: "MongoDB" },
          ],
        },
        {
          title: "ORM",
          value: [
            { icon: "mongoose", value: "Mongoose" },
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
    "project7_1",
    "project7_2",
    "project7_3",
    "project7_4",
    "project7_5",
  ]);

  // 2-3. useEffect --------------------------------------------------------------------------------
  useEffect(() => {
    setLOADING(true);
  }, []);

  // 7. project ------------------------------------------------------------------------------------
  const projectNode = () => (
    <Paper className={`detail-wrapper ${paperClass} border-0 radius-0 shadow-0`}>
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
                <Img
                  max={1000}
                  hover={false}
                  shadow={false}
                  radius={false}
                  border={true}
                  group={"projects"}
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
      <Hr m={40} className={"bg-light h-5"} />
      <Grid container={true} spacing={2} columnSpacing={10} className={"h-100p d-top"}>
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
                  <Div className={"w-100p d-col-left mb-30"} key={j}>
                    <Div className={"d-row-center mb-10"}>
                      <Div className={"fs-0-4rem fw-300 dark-navy me-5"}>
                        {'●'}
                      </Div>
                      <Div className={"fs-1-1rem fw-600 dark-navy"}>
                        {section.title}
                      </Div>
                    </Div>
                    <Div className={"d-row-center ms-10"}>
                      {["Git", "Url"].includes(section.title) ? (
                        <Div className={"d-row-left me-0"}>
                          <Div className={"fs-1-0rem fw-400 blue hover lh-2-0"}>
                            {`- ${section.value}`}
                          </Div>
                        </Div>
                      ) : (
                        <Div className={"d-row-left me-0"}>
                          <Div className={"fs-1-0rem fw-400 light-black lh-2-0"}>
                            {`- ${section.value}`}
                          </Div>
                        </Div>
                      )}
                    </Div>
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
                <Div className={"fs-1-6rem fw-700 dark-navy mb-20"}>
                  {item.title}
                  <Hr className={"w-100 bg-primary h-3"} />
                </Div>
                {item.section.map((section: any, j: number) => (
                  <Div className={"w-100p d-col-left mb-30"} key={j}>
                    <Div className={"d-row-center mb-10"}>
                      <Div className={"fs-0-4rem fw-300 dark-navy me-5"}>
                        {'●'}
                      </Div>
                      <Div className={"fs-1-1rem fw-600 dark-navy"}>
                        {section.title}
                      </Div>
                    </Div>
                    <Div className={"d-row-center ms-10"}>
                      {section.value.map((value: any, k: number) => (
                        <Div className={`d-row-center me-20`} key={k}>
                          <Img
                            max={20}
                            hover={true}
                            shadow={false}
                            border={false}
                            radius={false}
                            src={value.icon}
                            group={"icons"}
                            className={"me-5"}
                          />
                          <Div className={"fs-1-0rem fw-400 light-black lh-2-0"}>
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