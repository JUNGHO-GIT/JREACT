// Project2.jsx

import { useEffect, useState } from "@importReacts";
import { useResponsive, useStoreLoading } from "@importHooks";
import { Swiper, SwiperSlide, Navigation, Pagination } from "@importLibs";
import { Div, Img, Hr } from "@importComponents";
import { Grid, Paper } from "@importMuis";

// -------------------------------------------------------------------------------------------------
export const Project2 = () => {

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
          value: "JLINT",
        },
        {
          title: "Detail",
          value: "NodeJs & TypeScript를 활용한 Vscode 린팅 확장프로그램",
        },
        {
          title: "Period",
          value: "2023.05.05 - 2023.06.05",
        },
        {
          title: "Role",
          value: "총 1명 (개인)",
        },
        {
          title: "Git",
          value: "github.com/JUNGHO-GIT/JLINT.git",
        },
        {
          title: "Url",
          value: "marketplace.visualstudio.com/items?itemName=JUNGHO.JLINT"
        }
      ],
    },
    {
      title: "Features",
      section: [
        {
          title: "NodeJs & TypeScript",
          value: "NodeJs(v16)를 통한 프로젝트 생성 및 빌드, 주 언어로 Typescript 사용",
        },
        {
          title: "Npm Package",
          value: "Npm을 이용해 'prettier, lodash, cheerio, mocha, ts-node' 등의 패키지를 활용하여  개발 확장성 및 효율성 확보",
        },
        {
          title: "Linting",
          value: "10가지 이상의 다양한 언어를 지원하며, 각 언어별로 린팅, 코딩 스타일 설정, Indent 최적화, 코드 자동 정렬 등의 기능을 제공하여 코드의 일관성 유지 및 코드 품질 향상",
        },
        {
          title: "Vscode Api",
          value: "Vscode Api를 통해 제작 및 빌드한 확장 프로그램을 Marketplace에 배포하여 제공함으로써 실제 프로젝트에 적용 가능한 실용적인 프로그램 제작",
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
          ],
        }
      ],
    },
    {
      title: "Backend",
      section: [
        {
          title: "Language",
          value: [
            { icon: "nodejs", value: "Nodejs" },
            { icon: "ts", value: "Ts" },
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
      title: "Server & Api",
      section: [
        {
          title: "Cloud",
          value: [
            { icon: "gcp", value: "Gcp" },
            { icon: "centos", value: "Centos7" },
          ],
        },
        {
          title: "Api",
          value: [
            { icon: "vscode", value: "Vscode" },
          ],
        },
      ],
    },
  ]);
  const [images, _setImages] = useState<string[]>([
    "project2_1",
    "project2_2",
    "project2_3",
    "project2_4",
    "project2_5",
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